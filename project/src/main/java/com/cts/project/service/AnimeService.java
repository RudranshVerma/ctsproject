package com.cts.project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cts.project.entity.Anime;

@Service
public interface AnimeService {
	List<Anime> getAllAnimes();

	Anime getAnimeById(Long animeId);

	Anime createAnime(Anime anime);

	void deleteAnimeById(Long animeId);

	Anime updateAnimeById(Anime anime, Long animeid);

}
