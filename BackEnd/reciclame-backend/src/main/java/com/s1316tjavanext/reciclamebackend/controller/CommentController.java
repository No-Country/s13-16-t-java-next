package com.s1316tjavanext.reciclamebackend.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import com.s1316tjavanext.reciclamebackend.dto.CommentDto;
import com.s1316tjavanext.reciclamebackend.service.CommentService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/comments")
@AllArgsConstructor
@Tag(name = "Comment", description = "Comment managment")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CommentController {
    
    private CommentService commentService;

    @GetMapping("/all")
    @Operation(summary = "Get all comments", description = "Get all comments existing in system")
    public ResponseEntity<List<CommentDto>> getComments() {
        return ResponseEntity.ok(commentService.getComments());
    }

    @PostMapping("/save")
    @Operation(summary = "Create new comment for a post", description = "Add comment in a post, this comment contains message, creator, date of creation")
    public ResponseEntity<CommentDto> createComment(@RequestBody CommentDto commentRequest) {
        return new ResponseEntity<>(commentService.createComment(commentRequest), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{commentId}")
    @Operation(summary = "Delete a comment from a post", description = "Delete comment with id")
    public ResponseEntity<CommentDto> deleteComment(@PathVariable UUID commentId) {
        CommentDto commentDto = commentService.deleteComment(commentId);

        if (commentDto != null) {
            return new ResponseEntity<>(commentDto, HttpStatus.ACCEPTED);
        }

        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Comment not found");
    }

    @PutMapping("/update/{commentId}")
    @Operation(summary = "Update a comment", description = "This endpoint allow to update a comment")
    public ResponseEntity<CommentDto> updateComment(@PathVariable UUID commentId, @RequestBody CommentDto commentRequest) {
        CommentDto commentDto = commentService.updateComment(commentId, commentRequest);

        if (commentDto != null) {
            return new ResponseEntity<>(commentDto, HttpStatus.ACCEPTED);
        }

        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Comment not found");
    }

    @GetMapping("/{commentId}")
    @Operation(summary = "Get comment by id", description = "Given id, this endpoint returns correspond comment")
    public ResponseEntity<CommentDto> getCommentById(@PathVariable UUID commentId) {
        CommentDto commentDto = commentService.getCommentById(commentId);

        if (commentDto != null) {
            return ResponseEntity.ok(commentDto);
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Comment not found");
    }
}