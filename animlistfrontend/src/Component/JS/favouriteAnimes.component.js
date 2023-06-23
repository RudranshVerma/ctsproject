import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AnimeCard from "./animeCard";

function FavCard({ fav, props }) {
  console.log(fav);
  if (fav) {
    return (
      <div>
        <AnimeCard key={props.animeId} prop={props}></AnimeCard>
      </div>
    );
  }
}

export default function FavoriteAnimes() {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    loadAnimes();
  }, []);

  const loadAnimes = async () => {
    const result = await axios.get("http://localhost:8080/getAllAnimes");
    console.log(result.data.favorite);
    setAnimes(result.data);
  };
  return (
    <Container
      style={{
        width: "100%",

        display: "flex",
        flexWrap: "wrap",
        gap: "14px",
        justifyContent: "center",
      }}
    >
      {animes.map((anime) => (
        <div>
          <FavCard key={anime.animeId} fav={anime.favorite} props={anime} />
        </div>
      ))}
    </Container>
  );
}
