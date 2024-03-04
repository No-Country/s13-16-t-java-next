package com.s1316tjavanext.reciclamebackend.dto;

import jakarta.validation.constraints.NotNull;

import java.util.UUID;

/**
 * @author jdmon on 4/03/2024
 * @project reciclame-backend
 */
public record PostFavoriteRequestDto (
        @NotNull
        UUID postId
) {
}
