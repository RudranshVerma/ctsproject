package com.cts.project.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.entity.Anime;
import com.cts.project.exception.AnimeNotCreatedException;
import com.cts.project.exception.AnimeNotFoundException;
import com.cts.project.service.AnimeService;

@CrossOrigin("http://localhost:3000")
@RestController
public class AnimeController {

	public static final Logger logger = LoggerFactory.getLogger(AnimeController.class);

	@Autowired
	private AnimeService animeService;


	@PostMapping("/createAnime")
	public Anime createAnime(@RequestBody Anime Anime) throws AnimeNotCreatedException {
		logger.info("Creating Anime");
		Anime checkAnime = animeService.createAnime(Anime);
		if (checkAnime.getAnimeId() <= 0) {
			logger.error("Anime not created");
			throw new AnimeNotCreatedException("Entered Anime Couldn't be Created");
		}
		return checkAnime;
	}

	@GetMapping("/getAllAnimes")
	public ResponseEntity<List<Anime>> getAllAnime() {
		logger.info("Getting all Animes");
		List<Anime> AnimeList = animeService.getAllAnimes();
		return new ResponseEntity<List<Anime>>(AnimeList, HttpStatus.OK);
	}

	@GetMapping("/getAnimeById/{id}")
	public Anime getAnimeById(@PathVariable Long id) throws AnimeNotFoundException {
		logger.info("Getting Anime by id");
		Anime checkAnime = animeService.getAnimeById(id);
		if (checkAnime == null) {
			logger.error("Anime cannot be found");
			throw new AnimeNotFoundException("Entered Anime doesn't exist");
		}
		logger.info("Getting Anime by id");
		return checkAnime;
	}

	@PutMapping("/updateAnimeById/{id}")
	public Anime updateAnimeById(@RequestBody Anime Anime, @PathVariable Long id) {
		logger.info("Updating Anime");
		return animeService.updateAnimeById(Anime, id);
	}

	@DeleteMapping("/deleteAnimeById/{id}")
	public void deleteAnimeById(@PathVariable Long id) {
		logger.info("Deleting Anime");
		animeService.deleteAnimeById(id);
	}
}
