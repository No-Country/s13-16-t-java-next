package com.s1316tjavanext.reciclamebackend.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

import java.util.UUID;

import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_UUID;
import static com.s1316tjavanext.reciclamebackend.util.Constants.REGEX_UUID;

/**
 * @author jdmon on 4/03/2024
 * @project reciclame-backend
 */
public record ProfileLikeRequestDto (
        @NotNull
        @Pattern(regexp = REGEX_UUID,
                message = INVALID_UUID)
        UUID profileId) {
}
