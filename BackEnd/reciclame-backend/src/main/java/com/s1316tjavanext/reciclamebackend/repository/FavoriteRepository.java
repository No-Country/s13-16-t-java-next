package com.s1316tjavanext.reciclamebackend.repository;

import com.s1316tjavanext.reciclamebackend.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * @author jdmon on 4/03/2024
 * @project reciclame-backend
 */
public interface FavoriteRepository extends JpaRepository<Favorite,UUID> {
    Optional<Favorite> findByPostIdAndProfileId(UUID postId, UUID profileId);

    List<Favorite> findAllByProfileId(UUID profileId);
}
