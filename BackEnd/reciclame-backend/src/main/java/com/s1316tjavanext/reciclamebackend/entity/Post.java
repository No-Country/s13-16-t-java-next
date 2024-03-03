package com.s1316tjavanext.reciclamebackend.entity;

import com.s1316tjavanext.reciclamebackend.entity.enums.Category;
import com.s1316tjavanext.reciclamebackend.entity.enums.Status;
import jakarta.persistence.*;
import lombok.Data;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

/**
 * @author jdmon on 20/02/2024
 * @project reciclame-backend
 */
@Entity
@Table(name = "posts")
@Data
@SQLDelete(sql = "UPDATE posts SET  deleted = true WHERE id =?")
@Where(clause = "deleted=false")
public class Post implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(nullable = false)
    private int love;

    @Column(nullable = false)
    private boolean enableComments;

    @ManyToOne
    @JoinColumn(name = "profile_id")
    private Profile profile;

    @Enumerated (EnumType.STRING)
    @Column(nullable = false)
    private Category category;

    @Column (nullable = false)
    private LocalDateTime date;

    @Enumerated (EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    @OneToMany (mappedBy = "post")
    private List<Comment> comments;

    @Column(nullable = false)
    private boolean deleted;
}