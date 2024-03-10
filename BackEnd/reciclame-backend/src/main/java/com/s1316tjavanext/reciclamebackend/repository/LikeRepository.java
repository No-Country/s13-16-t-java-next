package com.s1316tjavanext.reciclamebackend.repository;

import com.s1316tjavanext.reciclamebackend.entity.Like;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

/**
 * @author jdmon on 4/03/2024
 * @project reciclame-backend
 */
public interface LikeRepository  extends JpaRepository<Like,UUID> {
    Optional<Like> findByPostIdAndProfileId(UUID postId, UUID profileId);
}
