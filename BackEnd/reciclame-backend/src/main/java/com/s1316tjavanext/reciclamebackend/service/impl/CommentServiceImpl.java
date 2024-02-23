package com.s1316tjavanext.reciclamebackend.service.impl;

import java.time.LocalDate;
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
        comment.setDate(LocalDate.now());

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
            CommentDto commentResult = commentMapper.commentToCommentDto(commentRepository.save(commentMapper.commentDtoToComment(commentDto)));
            return commentResult;
        }
        return null;
    }

    
}
