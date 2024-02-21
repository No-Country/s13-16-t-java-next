package com.s1316tjavanext.reciclamebackend.mapper;

import com.s1316tjavanext.reciclamebackend.dto.PostDto;
import com.s1316tjavanext.reciclamebackend.entity.Post;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;

/**
 * @author jdmon on 21/02/2024
 * @project reciclame-backend
 */
@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface PostMapper {
    PostDto toPostDto (Post post);
    List<PostDto> toPostsDto(List<Post> posts);
    @InheritInverseConfiguration
    @Mapping(target = "comments", ignore = true)
    Post toPost (PostDto postDto);
}
