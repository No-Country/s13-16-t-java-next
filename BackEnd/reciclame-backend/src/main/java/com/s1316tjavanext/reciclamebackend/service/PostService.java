package com.s1316tjavanext.reciclamebackend.service;

import com.s1316tjavanext.reciclamebackend.dto.PostDto;

import java.util.List;

/**
 * @author jdmon on 20/02/2024
 * @project reciclame-backend
 */

public interface PostService {
    List<PostDto> getPosts ();

    PostDto save (PostDto postDto);

}
