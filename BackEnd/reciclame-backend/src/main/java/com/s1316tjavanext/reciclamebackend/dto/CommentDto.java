package com.s1316tjavanext.reciclamebackend.dto;

import java.time.LocalDate;
import java.util.UUID;

import com.s1316tjavanext.reciclamebackend.entity.Post;

public record CommentDto(
    UUID id,
    UUID postId,
    String description,
    LocalDate date,
    Post post
) {
}
