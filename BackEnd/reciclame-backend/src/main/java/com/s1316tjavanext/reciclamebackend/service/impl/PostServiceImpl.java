package com.s1316tjavanext.reciclamebackend.service.impl;

import com.s1316tjavanext.reciclamebackend.dto.PostDto;
import com.s1316tjavanext.reciclamebackend.dto.PostRequestDto;
import com.s1316tjavanext.reciclamebackend.entity.Comment;
import com.s1316tjavanext.reciclamebackend.entity.Like;
import com.s1316tjavanext.reciclamebackend.entity.Post;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import com.s1316tjavanext.reciclamebackend.entity.enums.Status;
import com.s1316tjavanext.reciclamebackend.exception.IdNotFoundException;
import com.s1316tjavanext.reciclamebackend.mapper.PostMapper;
import com.s1316tjavanext.reciclamebackend.repository.LikeRepository;
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
import java.util.*;
import java.util.stream.Collectors;

import static com.s1316tjavanext.reciclamebackend.util.Constants.POST_IMAGE_DEFAULT;

/**
 * @author jdmon on 21/02/2024
 * @project reciclame-backend
 */
@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final ProfileRepository profileRepository;
    private final LikeRepository likeRepository;
    private final PostMapper postMapper;
    private final CloudinaryService cloudinaryService;
    private final ObjectsValidator<PostRequestDto> postValidator;

    @Override
    public List<PostDto> getPosts() {
        return postMapper.postsToPostsDto(postRepository.findAll()
                .stream()
                .filter(p -> p.getStatus().equals(Status.Abierto)).collect(Collectors.toList()));
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
        Optional<Post> post = postRepository.findById(id);
        post.ifPresent( post2 -> post2.getComments()
                .sort(Comparator.comparing(Comment::getDate).reversed()
                )
        );
        return post.map(postMapper::postToPostDto);
    }

    @Override
    public void delete(UUID id) {
        if (postRepository.existsById(id)){
            postRepository.deleteById(id);
        }else throw new IdNotFoundException("id no encontrado");

    }

    @Override
    public PostDto update(UUID id, PostRequestDto postRequestDto, MultipartFile mpf) {
        postValidator.validate(postRequestDto);
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
        } else throw new IdNotFoundException("id no encontrado");
    }

    @Override
    public List<PostDto> findByTitle(String term) {
        return postRepository.findByTitle(term)
                .stream()
                .map(postMapper::postToPostDto)
                .collect(Collectors.toList());
    }

    @Override
    public void updateProfilesLiked(UUID postId, UUID profileId) {
        Optional<Post> post = postRepository.findById(postId);
        Optional<Profile> profile = profileRepository.findById(profileId);
        if (post.isPresent() && profile.isPresent()){
            Optional<Like> likeDB = likeRepository.findByPostIdAndProfileId(postId,profileId);
            if (likeDB.isPresent()){
                likeRepository.delete(likeDB.get());
            }else {
                Like like = new Like();
                like.setPost(post.get());
                like.setProfile(profile.get());
                likeRepository.save(like);
            }
            post.get().setLove(post.get().getProfilesLiked().size());
            postRepository.save(post.get());
        }else{
            throw new IdNotFoundException("ids no encontrados");
        }

    }

    @Override
    public PostDto closePost(UUID id){
        Optional<Post> postDB = postRepository.findById(id);
        if (postDB.isPresent()){
            postDB.get().setStatus(Status.Cerrado);
            postRepository.save(postDB.get());
            return postMapper.postToPostDto(postDB.get());
        } else throw new IdNotFoundException("id no encontrado");
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
        }else {
            post.setImageUrl(POST_IMAGE_DEFAULT);
        }
    }
}
