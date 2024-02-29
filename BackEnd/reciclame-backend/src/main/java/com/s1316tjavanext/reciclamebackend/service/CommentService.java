package com.s1316tjavanext.reciclamebackend.service;

import java.util.List;
import java.util.UUID;

import com.s1316tjavanext.reciclamebackend.dto.CommentDto;

public interface CommentService {
 
    /**
     * Method to return all comments
     * @return list of comments
     */
    public List<CommentDto> getComments();

    /**
     * Method to get a comment by id
     * @return comment 
     */
    public CommentDto getCommentById(UUID commentId);

    /**
     * Create a new comment for a post
     * @param commentDto new comment to add a post
     * @return comment added in the post
     */
    public CommentDto createComment(CommentDto commentDto);

    /**
     * Method to delete a comment by id
     * @param commentId id of comment to delete
     * @return comment deleted
     */
    public CommentDto deleteComment(UUID commentId);

    /**
     * Method to update a comment
     * @param commentId id of comment to update
     * @param commentDto comment with updated fields
     * @return updated comment
     */
    public CommentDto updateComment(UUID commentId, CommentDto commentDto);

    List<CommentDto> getCommentsByPostId(UUID postId);
}
