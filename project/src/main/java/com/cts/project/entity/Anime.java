package com.cts.project.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "manga")
public class Anime {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long animeId;

	@Column
	private String animeName;

	@Column
	private String animeDescription;

	@Column
	private String animeImage;

	@Column
	private String animeStatus;

	@Column
	private Boolean Watched=false;

	@Column
	private Boolean Favorite=false;

	public Long getAnimeId() {
		return animeId;
	}

	public void setAnimeId(Long animeId) {
		this.animeId = animeId;
	}

	public String getAnimeName() {
		return animeName;
	}

	public void setAnimeName(String animeName) {
		this.animeName = animeName;
	}

	public String getAnimeDescription() {
		return animeDescription;
	}

	public void setAnimeDescription(String animeDescription) {
		this.animeDescription = animeDescription;
	}

	public String getAnimeImage() {
		return animeImage;
	}

	public void setAnimeImage(String animeImage) {
		this.animeImage = animeImage;
	}

	public String getAnimeStatus() {
		return animeStatus;
	}

	public void setAnimeStatus(String animeStatus) {
		this.animeStatus = animeStatus;
	}

	public Boolean getWatched() {
		return Watched;
	}

	public void setWatched(Boolean watched) {
		this.Watched = watched;
	}

	public Boolean getFavorite() {
		return Favorite;
	}

	public void setFavorite(Boolean favourite) {
		this.Favorite = favourite;
	}


}
