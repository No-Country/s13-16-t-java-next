package com.s1316tjavanext.reciclamebackend.mapper;

import com.s1316tjavanext.reciclamebackend.dto.CommentDto;
import com.s1316tjavanext.reciclamebackend.dto.PostDto;
import com.s1316tjavanext.reciclamebackend.dto.PostRequestDto;
import com.s1316tjavanext.reciclamebackend.entity.Comment;
import com.s1316tjavanext.reciclamebackend.entity.Post;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.MappingConstants;

import java.util.List;

/**
 * @author jdmon on 21/02/2024
 * @project reciclame-backend
 */
@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface PostMapper {
    @Mapping(target = "profileResponseDto" , source = "profile")
    @Mapping(target = "profileResponseDto.userResponseDTO",
            source = "profile.user")
    @Mapping(target = "profileResponseDto.userResponseDTO.location",
            source = "profile.user.location")
    @Mapping(target = "profileResponseDto.posts" , ignore = true)
    PostDto postToPostDto(Post post);

    @Mappings({
        @Mapping(target = "postId",source = "post.id"),
        @Mapping(target = "profileId", source = "profile.id")    
    })
    CommentDto commentToCommentDto(Comment comment);
    List<PostDto> postsToPostsDto(List<Post> posts);
    PostDto postRequestDtoToPostDto(PostRequestDto postRequestDto);
    @InheritInverseConfiguration
    @Mapping(target = "comments", ignore = true)
    @Mapping(target = "deleted", ignore = true)
    @Mapping(target = "profilesMarkedFavorite", ignore = true)
    Post postDtoToPost(PostDto postDto);
}
