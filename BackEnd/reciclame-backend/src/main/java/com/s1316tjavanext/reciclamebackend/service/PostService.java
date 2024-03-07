package com.s1316tjavanext.reciclamebackend.service;

import com.s1316tjavanext.reciclamebackend.dto.PostDto;
import com.s1316tjavanext.reciclamebackend.dto.PostRequestDto;
import com.s1316tjavanext.reciclamebackend.entity.Post;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * @author jdmon on 20/02/2024
 * @project reciclame-backend
 */

public interface PostService {
    List<PostDto> getPosts ();

    PostDto save (PostRequestDto postRequestDto, MultipartFile mpf);

    Optional<PostDto> getPost(UUID id);

    void delete(UUID id);

    PostDto update(UUID id, PostRequestDto postRequestDto, MultipartFile mpf);

    List<PostDto> findByTitle(String term);

    void updateProfilesLiked(UUID postId, UUID profileId);

    PostDto closePost(UUID id);
}
