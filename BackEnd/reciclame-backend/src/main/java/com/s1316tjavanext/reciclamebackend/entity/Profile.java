package com.s1316tjavanext.reciclamebackend.entity;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.s1316tjavanext.reciclamebackend.entity.enums.Category;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "profiles")
@Schema(name = "Profile", description = "Profile of a user")
@SQLDelete(sql = "UPDATE profiles SET  deleted = true WHERE id =?")
@Where(clause = "deleted=false")
public class Profile implements Serializable {

    @Schema(name = "id", description = "Unique identifier of the profileResponseDto", example = "123e4567-e89b-12d3-a456-426614174000")
    @GeneratedValue(strategy = GenerationType.UUID)
    @Id
    private UUID id;

    @Schema(name = "photo_id", description = "Photo of the user", example = "1234567")
    @Column(name = "photo_id")
    @JsonAlias("photo_id")
    private String photoId;

    @Schema(name = "bio", description = "Biography of the user", example = "I'm a software engineer")
    private String bio;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false)
    private boolean deleted;

    @Schema(name = "categories", description = "Categories of the user", example = "{Madera, Vidrio, Plastico}")
    private List<Category> categories;

    @OneToMany(mappedBy = "profile")
    private List<Post> posts;

    @OneToMany(mappedBy = "profile")
    private List<Comment> comments;
}
