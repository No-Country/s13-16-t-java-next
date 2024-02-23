package com.s1316tjavanext.reciclamebackend.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.s1316tjavanext.reciclamebackend.dto.CommentDto;
import com.s1316tjavanext.reciclamebackend.service.CommentService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/comments")
@AllArgsConstructor
public class CommentController {
    
    private CommentService commentService;

    @GetMapping("/all")
    public ResponseEntity<List<CommentDto>> getComments() {
        return ResponseEntity.ok(commentService.getComments());
    }

    @PostMapping("/save")
    public ResponseEntity<CommentDto> createComment(@RequestBody CommentDto commentRequest) {
        return new ResponseEntity<>(commentService.createComment(commentRequest), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{commentId}")
    public ResponseEntity<CommentDto> deleteComment(@PathVariable UUID commentId) {
        CommentDto commentDto = commentService.deleteComment(commentId);

        if (commentDto != null) {
            return new ResponseEntity<>(commentDto, HttpStatus.ACCEPTED);
        }

        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Comment not found");
    }

    @PutMapping("/update/{commentId}")
    public ResponseEntity<CommentDto> updateComment(@PathVariable UUID commentId, @RequestBody CommentDto commentRequest) {
        CommentDto commentDto = commentService.updateComment(commentId, commentRequest);

        if (commentDto != null) {
            return new ResponseEntity<>(commentDto, HttpStatus.ACCEPTED);
        }

        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Comment not found");
    }

    @GetMapping("/{commentId}")
    public ResponseEntity<CommentDto> getCommentById(@PathVariable UUID commentId) {
        CommentDto commentDto = commentService.getCommentById(commentId);

        if (commentDto != null) {
            return ResponseEntity.ok(commentDto);
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Comment not found");
    }
}