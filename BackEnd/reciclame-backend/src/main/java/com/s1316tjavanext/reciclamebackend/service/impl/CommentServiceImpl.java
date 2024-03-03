package com.s1316tjavanext.reciclamebackend.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.s1316tjavanext.reciclamebackend.dto.CommentDto;
import com.s1316tjavanext.reciclamebackend.entity.Comment;
import com.s1316tjavanext.reciclamebackend.entity.Post;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import com.s1316tjavanext.reciclamebackend.mapper.CommentMapper;
import com.s1316tjavanext.reciclamebackend.repository.CommentRepository;
import com.s1316tjavanext.reciclamebackend.repository.PostRepository;
import com.s1316tjavanext.reciclamebackend.repository.ProfileRepository;
import com.s1316tjavanext.reciclamebackend.service.CommentService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {
    
    private final CommentRepository commentRepository;

    private final PostRepository postRepository;

    private final ProfileRepository profileRepository;

    private final CommentMapper commentMapper;

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
                int indexOfComment = searchIndexOfComment(post.getComments(), commentToDelete);
                if (indexOfComment != -1) {
                    post.deleteComment(indexOfComment);
                    postRepository.save(post);
                    commentRepository.deleteById(commentId);
                    return commentMapper.commentToCommentDto(commentToDelete);
                }
            }
        }
        return null;
    }

    @Override
    public CommentDto updateComment(UUID commentId, CommentDto commentDto) {
        CommentDto commentToUpdate = this.getCommentById(commentId);

        if (commentToUpdate != null) {
            Post post = postRepository.findById(commentDto.postId()).orElse(null);
            if (post != null) {
                Comment comment = commentMapper.commentDtoToComment(commentToUpdate);
                comment.setDescription(commentDto.description());
                comment.setDate(LocalDateTime.now().withSecond(0).withNano(0));
                comment.setPost(post);
                
                int index = searchIndexOfComment(post.getComments(), comment);

                if (index != -1) {
                    post.setComment(index, comment);
                }

                commentRepository.save(comment);
                postRepository.save(post);
                return commentMapper.commentToCommentDto(comment);
            }
        }
        return null;
    }

    private int searchIndexOfComment(List<Comment> list, Comment comment) {
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getId().equals(comment.getId()))
                return i;
        }
        return -1;
    }

    
}
