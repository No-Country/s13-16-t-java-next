package com.s1316tjavanext.reciclamebackend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

/**
 * @author jdmon on 6/03/2024
 * @project reciclame-backend
 */

@Entity
@Table(name = "notifications")
@Data
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "recipient_profile_id", nullable = false)
    private Profile recipient;

    @Column(nullable = false)
    private LocalDateTime date;

    @Column(name = "is_read", nullable = false)
    private boolean isRead;

    @ManyToOne
    @JoinColumn(name = "affect_post_id", nullable = false)
    private Post affectedPost;
}
