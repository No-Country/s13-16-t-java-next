package com.s1316tjavanext.reciclamebackend.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.s1316tjavanext.reciclamebackend.dto.CommentDto;
import com.s1316tjavanext.reciclamebackend.entity.Comment;
import com.s1316tjavanext.reciclamebackend.entity.Post;
import com.s1316tjavanext.reciclamebackend.mapper.CommentMapper;
import com.s1316tjavanext.reciclamebackend.repository.CommentRepository;
import com.s1316tjavanext.reciclamebackend.repository.PostRepository;
import com.s1316tjavanext.reciclamebackend.service.CommentService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {
    
    private final CommentRepository commentRepository;

    private final PostRepository postRepository;

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
            commentRepository.deleteById(commentId);
            return commentMapper.commentToCommentDto(commentToDelete);
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
//                comment.setDate(LocalDateTime.now());
                comment.setPost(post);
                return commentMapper.commentToCommentDto(comment);
            }
        }
        return null;
    }

    
}
