package com.s1316tjavanext.reciclamebackend.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import java.time.LocalDate;
import java.util.UUID;

/**
 * @author jdmon on 20/02/2024
 * @project reciclame-backend
 */
@Entity
@Table(name = "comments")
@Data
@SQLDelete(sql = "UPDATE comments SET  deleted = true WHERE id =?")
@Where(clause = "deleted=false")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private boolean deleted = Boolean.FALSE;

    //private Photo photo;
    //private Profile profile;

    @ManyToOne
    @JoinColumn(name = "post_id", referencedColumnName = "id", nullable = false)
    private Post post;

}
