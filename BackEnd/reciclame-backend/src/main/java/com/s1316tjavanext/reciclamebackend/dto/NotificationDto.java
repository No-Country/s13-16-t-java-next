package com.s1316tjavanext.reciclamebackend.dto;

import java.time.LocalDateTime;
import java.util.UUID;

/**
 * @author jdmon on 6/03/2024
 * @project reciclame-backend
 */
public record NotificationDto(
        UUID id,
        String content,
        LocalDateTime date,
        Boolean isRead,
        UUID postId,
        String actorProfileName,
        String actorProfileUrl
        ){
}