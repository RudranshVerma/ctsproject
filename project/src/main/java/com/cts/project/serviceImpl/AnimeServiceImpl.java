package com.cts.project.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.project.entity.Anime;
import com.cts.project.repository.AnimeRepository;
import com.cts.project.service.AnimeService;

@Service
public class AnimeServiceImpl implements AnimeService {

	@Autowired
	private AnimeRepository animeRepository;

	@Override
	public List<Anime> getAllAnimes() {
		return animeRepository.findAll();
	}

	@Override
	public Anime getAnimeById(Long id) {
		return animeRepository.findById(id).get();
	}

	@Override
	public Anime createAnime(Anime anime) {
		return animeRepository.save(anime);
	}

	@Override
	public void deleteAnimeById(Long id) {
		animeRepository.deleteById(id);
	}

	@Override
	public Anime updateAnimeById(Anime anime, Long id) {
		Anime oldAnime = animeRepository.findById(id).get();
		if (oldAnime.getAnimeName() != anime.getAnimeName()) {
			oldAnime.setAnimeName(anime.getAnimeName());
		}

		return animeRepository.save(oldAnime);
	}
}
