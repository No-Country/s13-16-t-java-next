package com.s1316tjavanext.reciclamebackend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

import static com.s1316tjavanext.reciclamebackend.util.Constants.*;

public record CommentUpdateDto(
    @NotBlank(message = INVALID_DESCRIPTION)
    @Pattern(regexp = REGEX_DESCRIPTION,
            message = INVALID_CHARACTERS)
    String description
) {
}
