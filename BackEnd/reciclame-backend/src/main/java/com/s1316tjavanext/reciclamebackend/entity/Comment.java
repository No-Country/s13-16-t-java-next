package com.s1316tjavanext.reciclamebackend.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

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
    //@GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String description;
    private LocalDate date;
    private boolean deleted = Boolean.FALSE;
    //private Profile profile;
    @ManyToOne
    private Post post;



}
