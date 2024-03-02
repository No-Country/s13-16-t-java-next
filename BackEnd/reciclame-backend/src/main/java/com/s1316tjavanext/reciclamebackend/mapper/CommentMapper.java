package com.s1316tjavanext.reciclamebackend.mapper;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.Mappings;

import com.s1316tjavanext.reciclamebackend.dto.CommentDto;
import com.s1316tjavanext.reciclamebackend.entity.Comment;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface CommentMapper {
    
    /*
     * Method to convert comment object to comment dto
     */
    @Mappings({
        @Mapping(source = "post.id" , target = "postId"),
        @Mapping(source = "profile.id", target = "profileId")
    })
    CommentDto commentToCommentDto(Comment comment);

    /*
     * Method to convert a list of comments to a list of dtos
     */
    List<CommentDto> commentsToCommentsDto(List<Comment> comments);

    /*
     * Method to convert a comment dto to comment object
     */
    @InheritInverseConfiguration
    @Mapping(target = "deleted", ignore = true)
    Comment commentDtoToComment(CommentDto commentDto);
}