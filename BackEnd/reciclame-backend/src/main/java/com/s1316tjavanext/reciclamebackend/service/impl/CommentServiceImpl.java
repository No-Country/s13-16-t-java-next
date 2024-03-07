package com.s1316tjavanext.reciclamebackend.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.s1316tjavanext.reciclamebackend.service.NotificationService;
import org.springframework.stereotype.Service;

import com.s1316tjavanext.reciclamebackend.dto.CommentDto;
import com.s1316tjavanext.reciclamebackend.dto.CommentUpdateDto;
import com.s1316tjavanext.reciclamebackend.entity.Comment;
import com.s1316tjavanext.reciclamebackend.entity.Post;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import com.s1316tjavanext.reciclamebackend.mapper.CommentMapper;
import com.s1316tjavanext.reciclamebackend.repository.CommentRepository;
import com.s1316tjavanext.reciclamebackend.repository.PostRepository;
import com.s1316tjavanext.reciclamebackend.repository.ProfileRepository;
import com.s1316tjavanext.reciclamebackend.service.CommentService;
import com.s1316tjavanext.reciclamebackend.validator.ObjectsValidator;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {
    
    private final CommentRepository commentRepository;

    private final PostRepository postRepository;

    private final ProfileRepository profileRepository;

    private final CommentMapper commentMapper;

    private final ObjectsValidator<CommentDto> commentValidator;

    private final ObjectsValidator<CommentUpdateDto> commentUpdateValidator;

    private final NotificationService notificationService;

    @Override
    public List<CommentDto> getComments() {
        List<CommentDto> commentDtos = commentMapper.commentsToCommentsDto(commentRepository.findAll());
        return commentDtos;
    }

    @Override
    public List<CommentDto> getCommentsByPostId(UUID postId) {
        return commentMapper.commentsToCommentsDto(commentRepository.findAllByPostId(postId));
    }

    @Override
    public CommentDto getCommentById(UUID commentID) {
        CommentDto commentDto = commentMapper.commentToCommentDto(commentRepository.findById(commentID).orElse(null));
        if (commentDto != null) {
            return commentDto;
        }
        return null;
    }

    @Override
    public CommentDto createComment(CommentDto commentDto) {
        commentValidator.validate(commentDto);
        Comment comment = commentMapper.commentDtoToComment(commentDto);
        comment.setDate(LocalDateTime.now().withSecond(0).withNano(0));

        Profile profile = profileRepository.findById(comment.getProfile().getId()).orElse(null);

        if (profile != null) 
            comment.setProfile(profile);
        else 
            return null;

        Post post = postRepository.findById(comment.getPost().getId()).orElse(null);

        if (post != null) {
            comment.setPost(post);
            CommentDto commentResult = commentMapper.commentToCommentDto(commentRepository.save(comment));
            String contentNotification =  String.format("""
                        %s %s ha comentado tu publicación %s""",
                    profile.getUser().getName(),
                    profile.getUser().getLastName(),
                    post.getTitle());
            notificationService.createNotification(comment.getPost().getProfile(),contentNotification,post.getId());
            return commentResult;
        }
        return null;
    }

    @Override
    public CommentDto deleteComment(UUID commentId) {
        Comment commentToDelete = commentRepository.findById(commentId).orElse(null);
        
        if (commentToDelete != null) {
            Post post = postRepository.findById(commentToDelete.getPost().getId()).orElse(null);
            if (post != null) {
                commentRepository.deleteById(commentId);
                String contentNotification =  String.format("""
                        %s %s ha comentado tu publicación %s""",
                        commentToDelete.getProfile().getUser().getName(),
                        commentToDelete.getProfile().getUser().getLastName(),
                        post.getTitle());
                notificationService.deleteNotification(contentNotification);
                return commentMapper.commentToCommentDto(commentToDelete);
            }
        }
        return null;
    }

    @Override
    public CommentDto updateComment(UUID commentId, CommentUpdateDto commentDto) {
        commentUpdateValidator.validate(commentDto);
        Optional<Comment> comment = commentRepository.findById(commentId);

        if (comment.isPresent()) {
                comment.get().setDescription(commentDto.description());
                return commentMapper.commentToCommentDto(commentRepository.save(comment.get()));
        }
        return null;
    }  
}