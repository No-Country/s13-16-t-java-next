package com.s1316tjavanext.reciclamebackend.service.impl;

import com.s1316tjavanext.reciclamebackend.dto.PostDto;
import com.s1316tjavanext.reciclamebackend.dto.PostRequestDto;
import com.s1316tjavanext.reciclamebackend.entity.Post;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import com.s1316tjavanext.reciclamebackend.entity.enums.Status;
import com.s1316tjavanext.reciclamebackend.mapper.PostMapper;
import com.s1316tjavanext.reciclamebackend.repository.PostRepository;
import com.s1316tjavanext.reciclamebackend.repository.ProfileRepository;
import com.s1316tjavanext.reciclamebackend.service.CloudinaryService;
import com.s1316tjavanext.reciclamebackend.service.PostService;
import com.s1316tjavanext.reciclamebackend.validator.ObjectsValidator;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * @author jdmon on 21/02/2024
 * @project reciclame-backend
 */
@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final ProfileRepository profileRepository;
    private final PostMapper postMapper;
    private final CloudinaryService cloudinaryService;
    private final ObjectsValidator<PostRequestDto> postValidator;

    @Override
    public List<PostDto> getPosts() {
        return postMapper.postsToPostsDto(postRepository.findAll());
    }

    @Override
    public PostDto save(PostRequestDto postRequestDto, MultipartFile mpf) {
        postValidator.validate(postRequestDto);
        PostDto postDto = postMapper.postRequestDtoToPostDto(postRequestDto);
        Post post = postMapper.postDtoToPost(postDto);
        post.setDate(LocalDateTime.now().withNano(0));
        post.setStatus(Status.Abierto);
        post.setLove(0);
        post.setEnableComments(postRequestDto.enableComments());
        post.setDeleted(false);
        Optional<Profile> profile = profileRepository.findById(postRequestDto.profileId());
        profile.ifPresent(post::setProfile);
        setImageUrl(mpf, post);
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
    public PostDto update(UUID id, PostRequestDto postRequestDto, MultipartFile mpf) {
        Optional<PostDto> postDtoDB = getPost(id);
        if (postDtoDB.isPresent()){
            Post post = postMapper.postDtoToPost(postDtoDB.get());
            post.setTitle(postRequestDto.title());
            post.setDescription(postRequestDto.description());
            post.setCategory(postRequestDto.category());
            post.setEnableComments(postRequestDto.enableComments());
            if (isImageNotNullNotEmpty(mpf)){
                setImageUrl(mpf,post);
            }
            return postMapper.postToPostDto(postRepository.save(post));
        } else throw new RuntimeException();
    }

    @Override
    public List<PostDto> findByTitle(String term) {
        return postRepository.findByTitle(term)
                .stream()
                .map(postMapper::postToPostDto)
                .collect(Collectors.toList());
    }

    private boolean isImageNotNullNotEmpty(MultipartFile mpf) {
        return mpf != null &&
                !mpf.isEmpty();
    }
    private void setImageUrl(MultipartFile mpf, Post post) {
        if (isImageNotNullNotEmpty(mpf)){
            try {
                BufferedImage bi = ImageIO.read(mpf.getInputStream());
                Map result = cloudinaryService.upload(mpf);
                post.setImageUrl((String) result.get("url"));
            } catch (IOException e){
                throw new RuntimeException("Image not loaded");
            }
        }
    }
}
