package com.s1316tjavanext.reciclamebackend.service.impl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;

import com.s1316tjavanext.reciclamebackend.dto.CommentDto;
import com.s1316tjavanext.reciclamebackend.entity.Comment;
import com.s1316tjavanext.reciclamebackend.mapper.CommentMapper;
import com.s1316tjavanext.reciclamebackend.repository.CommentRepository;
import com.s1316tjavanext.reciclamebackend.service.CommentService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {
    
    private final CommentRepository commentRepository;

    private final CommentMapper commentMapper;

    @Override
    public List<CommentDto> getComments() {
        List<CommentDto> commentDtos = commentMapper.commentsToCommentsDto(commentRepository.findAll());
        return commentDtos;
    }

    @Override
    public CommentDto createComment(CommentDto commentDto) {
        Comment comment = commentMapper.commentDtoToComment(commentDto);
        comment.setDate(LocalDate.now());
        CommentDto commentResult = commentMapper.commentToCommentDto(commentRepository.save(comment));
        return commentResult;
    }
}
