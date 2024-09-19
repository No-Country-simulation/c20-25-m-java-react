package com.reforestart.backend.repository;

import com.reforestart.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User,Long> {
    boolean existsByUsername(String username);
    Optional<User> findByUsername(String username);
}
