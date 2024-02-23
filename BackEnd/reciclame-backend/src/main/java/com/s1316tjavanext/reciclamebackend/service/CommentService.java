package com.s1316tjavanext.reciclamebackend.service;

import java.util.List;
import java.util.UUID;

import com.s1316tjavanext.reciclamebackend.dto.CommentDto;

public interface CommentService {
 
    /**
     * Method to return a comment
     * @return a comment
     */
    public List<CommentDto> getComments();

    /**
     * Method to get a comment by id
     * @return comment 
     */
    public CommentDto getCommentById(UUID commentId);

    /**
     * Create a new comment for a post
     * @param commentDto 
     * @return
     */
    public CommentDto createComment(CommentDto commentDto);

    /**
     * Method to delete a comment by id
     * @param commentId 
     */
    public CommentDto deleteComment(UUID commentId);

    /**
     * Method to update a comment
     * @param commentId
     * @param commentDto
     * @return
     */
    public CommentDto updateComment(UUID commentId, CommentDto commentDto);
}
