package com.s1316tjavanext.reciclamebackend.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.s1316tjavanext.reciclamebackend.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, UUID> {

    List<Comment> findAllByPostId(UUID postId);
}