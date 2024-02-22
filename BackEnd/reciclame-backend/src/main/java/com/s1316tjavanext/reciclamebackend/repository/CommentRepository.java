package com.s1316tjavanext.reciclamebackend.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.s1316tjavanext.reciclamebackend.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, UUID> {
    
}