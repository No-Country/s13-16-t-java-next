package com.s1316tjavanext.reciclamebackend.dto;

import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_BIRTHDAY;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_CHARACTERS;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_DESCRIPTION;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_POST_ID;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_PROFILE_ID;
import static com.s1316tjavanext.reciclamebackend.util.Constants.REGEX_DESCRIPTION;

import java.time.LocalDateTime;
import java.util.UUID;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;

@Schema(name = "Comment", description = "Comment of a post")
public record CommentDto(
    
    @Schema(name = "id", description = "Unique identifier of the profile", example = "420f2794-2ff1-4f65-9a09-43e5ff817d18")
    UUID id,
    
    @NotNull(message = INVALID_POST_ID)
    @Schema(name = "post", description = "Post to which it belongs")
    UUID postId,

    @NotNull(message = INVALID_PROFILE_ID)
    @Schema(name = "profile", description = "Creator of comment")
    UUID profileId,
    
    @NotBlank(message = INVALID_DESCRIPTION)
    @Pattern(regexp = REGEX_DESCRIPTION,
            message = INVALID_CHARACTERS)
    @Schema(name = "description", description = "Message of comment", example = "Hola, cuantas latas tienes?")
    String description,

    @Schema(name = "date", description = "Creation date of comment", example = "2024-02-23")
    LocalDateTime date
) {
}
