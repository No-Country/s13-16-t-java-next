package com.s1316tjavanext.reciclamebackend.dto;

import com.s1316tjavanext.reciclamebackend.entity.enums.Category;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

import static com.s1316tjavanext.reciclamebackend.util.Constants.*;


/**
 * @author jdmon on 20/02/2024
 * @project reciclame-backend
 */
public record PostRequestDto(
        @NotBlank
        @Pattern(regexp = REGEX_TITLE,
                message = INVALID_CHARACTERS)
        String title,
        @NotBlank
        @Pattern(regexp = REGEX_DESCRIPTION,
                message = INVALID_CHARACTERS)
        String description,
        MultipartFile multipartFile,
        @NotNull
        Category category,
        @NotNull
        Boolean enableComments,
        @NotNull
        UUID profileId) {
}
