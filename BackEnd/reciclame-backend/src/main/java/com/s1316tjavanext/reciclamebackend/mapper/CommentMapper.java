package com.s1316tjavanext.reciclamebackend.mapper;

import java.util.List;

import org.mapstruct.InheritConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import com.s1316tjavanext.reciclamebackend.dto.CommentDto;
import com.s1316tjavanext.reciclamebackend.entity.Comment;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface CommentMapper {
    
    /*
     * Method to convert comment object to comment dto
     */
    @Mapping(source = "post.id" , target = "postId")
    CommentDto commentToCommentDto(Comment comment);

    /*
     * Method to convert a list of comments to a list of dtos
     */
    List<CommentDto> commentsToCommentsDto(List<Comment> comments);

    /*
     * Method to convert a comment dto to comment object
     */
    @InheritConfiguration
    @Mapping(source = "postId", target = "post.id")
    @Mapping(target = "deleted", ignore = true)
    Comment commentDtoToComment(CommentDto commentDto);
}

