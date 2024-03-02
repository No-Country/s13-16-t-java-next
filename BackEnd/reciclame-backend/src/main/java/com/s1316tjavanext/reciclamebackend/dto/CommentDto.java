package com.s1316tjavanext.reciclamebackend.dto;

import java.time.LocalDateTime;
import java.util.UUID;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(name = "Comment", description = "Comment of a post")
public record CommentDto(
    
    @Schema(name = "id", description = "Unique identifier of the profile", example = "420f2794-2ff1-4f65-9a09-43e5ff817d18")
    UUID id,
    
    @Schema(name = "post", description = "Post to which it belongs")
    UUID postId,

    UUID profileId,
    
    @Schema(name = "description", description = "Message of comment", example = "Hola, cuantas latas tienes?")
    String description,

    @Schema(name = "date", description = "Creation date of comment", example = "2024-02-23")
    LocalDateTime date
) {
}
