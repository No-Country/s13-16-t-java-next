package com.s1316tjavanext.reciclamebackend.controller;

import com.s1316tjavanext.reciclamebackend.dto.PostDto;
import com.s1316tjavanext.reciclamebackend.service.PostService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.UUID;

/**
 * @author jdmon on 20/02/2024
 * @project reciclame-backend
 */
@RestController
@RequestMapping("/posts")
@AllArgsConstructor
public class PostController {
    private final PostService postService;

    @GetMapping("/all")
    public ResponseEntity<List<PostDto>> getPosts (){
        return ResponseEntity.ok(postService.getPosts());
    }

    @GetMapping("{id}")
    public ResponseEntity<PostDto> getPost (@PathVariable UUID id){
        return postService.getPost(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/save")
    public ResponseEntity<PostDto> save(@RequestBody @Valid PostDto postDto){
        return ResponseEntity.ok(postService.save(postDto));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id){
        try{
            postService.delete(id);
            return ResponseEntity.noContent().build();
        }catch (RuntimeException ignore){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<PostDto> delete(@PathVariable UUID id,
                                          @RequestBody PostDto postDto){
        try{
            return ResponseEntity.ok(postService.update(id,postDto));
        }catch (RuntimeException ignore){
            return ResponseEntity.notFound().build();
        }
    }

}
