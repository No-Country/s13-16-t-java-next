package com.s1316tjavanext.reciclamebackend.repository;

import com.s1316tjavanext.reciclamebackend.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 * @author jdmon on 21/02/2024
 * @project reciclame-backend
 */
public interface PostRepository extends JpaRepository<Post, UUID> {
}
