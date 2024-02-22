package com.s1316tjavanext.reciclamebackend.service;

import java.util.List;

import com.s1316tjavanext.reciclamebackend.dto.CommentDto;

public interface CommentService {
 
    /**
     * Method to return a comment
     * @return a comment
     */
    public List<CommentDto> getComments();

    /**
     * Create a new comment for a post
     * @param commentDto 
     * @return
     */
    public CommentDto createComment(CommentDto commentDto);
}
