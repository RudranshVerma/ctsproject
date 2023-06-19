package com.cts.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.project.entity.Anime;

@Repository
public interface AnimeRepository extends JpaRepository<Anime, Long> {

}
