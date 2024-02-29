package com.s1316tjavanext.reciclamebackend.repository;

import com.s1316tjavanext.reciclamebackend.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

/**
 * @author jdmon on 21/02/2024
 * @project reciclame-backend
 */
public interface PostRepository extends JpaRepository<Post, UUID> {

    @Query("select a from Post a where a.title like %?1%" )
    public List<Post> findByTitle(String term);

}
