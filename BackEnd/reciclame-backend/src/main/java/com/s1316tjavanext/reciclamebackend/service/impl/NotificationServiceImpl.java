package com.s1316tjavanext.reciclamebackend.service.impl;

import com.s1316tjavanext.reciclamebackend.dto.NotificationDto;
import com.s1316tjavanext.reciclamebackend.entity.Notification;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import com.s1316tjavanext.reciclamebackend.repository.NotificationRepository;
import com.s1316tjavanext.reciclamebackend.service.NotificationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;

/**
 * @author jdmon on 6/03/2024
 * @project reciclame-backend
 */
@Service
@AllArgsConstructor
public class NotificationServiceImpl implements NotificationService {
    private final NotificationRepository notificationRepository;
    @Override
    public List<NotificationDto> getNotificationsByProfileId(UUID profileId) {
        List<Notification> notifications = notificationRepository.findAllByRecipientId(profileId);
        return notifications.stream()
                .sorted(
                        Comparator.comparing(Notification::getDate).reversed())
                .map(notification -> new NotificationDto(notification.getId(),
                        notification.getContent(),
                        notification.getDate(),
                        notification.isRead(),
                        notification.getAffectedPostId())
                )
                .toList();
    }

    @Override
    public void createNotification(Profile recipient, String content, UUID postId) {
        Notification notification = new Notification();
        notification.setContent(content);
        notification.setRecipient(recipient);
        notification.setRead(false);
        notification.setDate(LocalDateTime.now().withNano(0));
        notification.setAffectedPostId(postId);
        notificationRepository.save(notification);
    }

    @Override
    public void updateNotificationRead(UUID profileId) {
        List<Notification> notifications = notificationRepository.findAllByRecipientId(profileId);
        notifications.forEach(notification -> {
            notification.setRead(true);
            notificationRepository.save(notification);
        });
    }

    @Override
    public void deleteNotification(String contentNotification) {
        notificationRepository.delete(notificationRepository.findByContent(contentNotification));
    }
}
