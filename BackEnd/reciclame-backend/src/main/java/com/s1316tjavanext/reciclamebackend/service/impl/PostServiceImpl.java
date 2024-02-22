package com.s1316tjavanext.reciclamebackend.service.impl;

import com.s1316tjavanext.reciclamebackend.dto.PostDto;
import com.s1316tjavanext.reciclamebackend.entity.Post;
import com.s1316tjavanext.reciclamebackend.entity.enums.Status;
import com.s1316tjavanext.reciclamebackend.mapper.PostMapper;
import com.s1316tjavanext.reciclamebackend.repository.PostRepository;
import com.s1316tjavanext.reciclamebackend.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * @author jdmon on 21/02/2024
 * @project reciclame-backend
 */
@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;

    private final PostMapper postMapper;

    @Override
    public List<PostDto> getPosts() {
        return postMapper.postsToPostsDto(postRepository.findAll());
    }

    @Override
    public PostDto save(PostDto postDto) {
        Post post = postMapper.postDtoToPost(postDto);
        post.setDate(LocalDate.now());
        post.setStatus(Status.Abierto);
        return postMapper.postToPostDto(postRepository.save(post));
    }

    @Override
    public Optional<PostDto> getPost(UUID id) {
        return postRepository.findById(id)
                .map(postMapper::postToPostDto);
    }

    @Override
    public void delete(UUID id) {
        if (postRepository.existsById(id)){
            postRepository.deleteById(id);
        }else throw new RuntimeException();

    }

    @Override
    public PostDto update(UUID id, PostDto postDto) {
        Optional<PostDto> postDtoDB = getPost(id);
        if (postDtoDB.isPresent()){
            Post post = postMapper.postDtoToPost(postDtoDB.get());
            post.setTitle(postDto.title());
            post.setDescription(postDto.description());
            post.setCategory(postDto.category());
            return postMapper.postToPostDto(postRepository.save(post));
        } else throw new RuntimeException();
    }
}
