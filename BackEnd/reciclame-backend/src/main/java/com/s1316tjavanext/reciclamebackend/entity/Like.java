package com.s1316tjavanext.reciclamebackend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

/**
 * @author jdmon on 3/03/2024
 * @project reciclame-backend
 */
@Entity
@Table(name = "likes")
@Data
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "profile_id")
    private Profile profile;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;
}
