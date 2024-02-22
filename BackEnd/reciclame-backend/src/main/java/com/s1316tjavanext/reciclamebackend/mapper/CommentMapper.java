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
    @Mapping(target = "postId", source = "comment.post.id")
    @Mapping(target = "post", ignore = true)
    /*@BeanMapping(ignoreByDefault = true)
    @Mappings({
        @Mapping(target = "id", source = "id"),
        @Mapping(target = "postId", source = "comment.post.id"),
        @Mapping(target = "description", source = "description"),
        @Mapping(target = "date", source = "date")
    })*/
    CommentDto commentToCommentDto(Comment comment);

    /*
     * Method to convert a list of comments to a list of dtos
     */
    List<CommentDto> commentsToCommentsDto(List<Comment> comments);

    /*
     * Method to convert a comment dto to comment object
     */
    @InheritConfiguration
    Comment commentDtoToComment(CommentDto commentDto);
}

