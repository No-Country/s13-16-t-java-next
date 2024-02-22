package com.s1316tjavanext.reciclamebackend.dto;

import java.time.LocalDate;
import java.util.UUID;

public record CommentDto(
    UUID id,
    UUID postId,
    String description,
    LocalDate date
) {
}
