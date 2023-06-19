package com.cts.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.project.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	
}
