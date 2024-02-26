package com.s1316tjavanext.reciclamebackend.service;

import com.s1316tjavanext.reciclamebackend.dto.PostDto;
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

    PostDto save (PostDto postDto, MultipartFile mpf);

    Optional<PostDto> getPost(UUID id);

    void delete(UUID id);

    PostDto update(UUID id, PostDto postDto, MultipartFile mpf);
}
