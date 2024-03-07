package com.s1316tjavanext.reciclamebackend.controller;

import com.s1316tjavanext.reciclamebackend.dto.PostDto;
import com.s1316tjavanext.reciclamebackend.dto.PostRequestDto;
import com.s1316tjavanext.reciclamebackend.dto.ProfileLikeRequestDto;
import com.s1316tjavanext.reciclamebackend.entity.enums.Category;
import com.s1316tjavanext.reciclamebackend.service.PostService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.util.List;
import java.util.UUID;

/**
 * @author jdmon on 20/02/2024
 * @project reciclame-backend
 */
@RestController
@RequestMapping("/posts")
@AllArgsConstructor
@Tag(name = "Post", description = "Post management")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PostController {
    private final PostService postService;

    @GetMapping("/all")
    @Operation(summary = "Get all Posts", description = "Get all posts existing in system")
    public ResponseEntity<List<PostDto>> getPosts (){
        return ResponseEntity.ok(postService.getPosts());
    }

    @GetMapping("{id}")
    @Operation(summary = "Get post by id", description = "Get post if it exists in the system")
    public ResponseEntity<PostDto> getPost (@PathVariable UUID id){
        return postService.getPost(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @GetMapping("/categories/all")
    @Operation(summary = "Get all post categories", description = "Get all post categories existing in system")
    public ResponseEntity<Category[]> getPostCategories (){
        return ResponseEntity.ok(Category.values());
    }

    @PostMapping("/save")
    @Operation(summary = "Create a new post", description = "Create a post from a system user")
    public ResponseEntity<PostDto> save(@RequestParam("image")MultipartFile mpf,
                                        PostRequestDto postRequestDto){
        return ResponseEntity.ok(postService.save(postRequestDto,mpf));
    }

    @DeleteMapping("/delete/{id}")
    @Operation(summary = "Delete a post", description = "Delete a post if it exists in the system")
    public ResponseEntity<Void> delete(@PathVariable UUID id){
        try{
            postService.delete(id);
            return ResponseEntity.noContent().build();
        }catch (RuntimeException ignore){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{id}")
    @Operation(summary = "Update a post", description = "Update a post if it exists in the system")
    public ResponseEntity<PostDto> delete(@PathVariable UUID id,
                                          @RequestParam("image") MultipartFile mpf,
                                          @Valid PostRequestDto postRequestDto){
        try{
            return ResponseEntity.ok(postService.update(id,postRequestDto,mpf));
        }catch (RuntimeException ignore){
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/findByTitle/{term}")
    @Operation(summary = "Get posts by title", description = "Get posts by title containing the specified term")
    public ResponseEntity<List<PostDto>> findByTitle(@PathVariable String term) {
        return ResponseEntity.ok(postService.findByTitle(term));
    }

    @PutMapping("/{postId}/likes")
    public ResponseEntity<Void> updateProfilesLiked(@PathVariable UUID postId,
                                                    @RequestBody ProfileLikeRequestDto profileLikeRequestDto){
        try {
            postService.updateProfilesLiked(postId,profileLikeRequestDto.profileId());
            return ResponseEntity.noContent().build();
        } catch (RuntimeException ignore){
            return ResponseEntity.notFound().build();
        }

    }

    @PutMapping("/{postId}/close-post")
    public ResponseEntity<PostDto> closePost(@PathVariable UUID postId){
        try {
            return ResponseEntity.ok(postService.closePost(postId));
        } catch (RuntimeException ignore){
            return ResponseEntity.notFound().build();
        }

    }

}
