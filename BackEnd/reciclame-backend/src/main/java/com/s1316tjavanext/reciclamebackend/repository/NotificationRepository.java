package com.s1316tjavanext.reciclamebackend.repository;

import com.s1316tjavanext.reciclamebackend.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

/**
 * @author jdmon on 6/03/2024
 * @project reciclame-backend
 */
public interface NotificationRepository extends JpaRepository<Notification, UUID> {
    List<Notification> findAllByRecipientId(UUID profileId);

    Notification findByContent(String content);
}
