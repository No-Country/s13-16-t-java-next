package com.s1316tjavanext.reciclamebackend.service;


import com.s1316tjavanext.reciclamebackend.dto.NotificationDto;
import com.s1316tjavanext.reciclamebackend.entity.Profile;

import java.util.List;
import java.util.UUID;

/**
 * @author jdmon on 6/03/2024
 * @project reciclame-backend
 */
public interface NotificationService {

    List<NotificationDto> getNotificationsByProfileId(UUID profileId);
    void createNotification(Profile recipient, String content, UUID id);
    void updateNotificationRead(UUID profileId);
    void deleteNotification(String contentNotification);
}
