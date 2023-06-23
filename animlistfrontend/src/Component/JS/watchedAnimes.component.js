import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AnimeCard from "./animeCard";
function WatchedCard({ fav, props }) {
  if (fav) {
    return (
      <div>
        <AnimeCard key={props.animeId} prop={props}></AnimeCard>
      </div>
    );
  }
}

export default function WatchedAnimes() {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    loadAnimes();
  }, []);

  const loadAnimes = async () => {
    const result = await axios.get("http://localhost:8080/getAllAnimes");
    console.log(result.data);
    setAnimes(result.data);
  };
  return (
    <Container
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "14px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {animes.map((anime) => (
        <div>
          <WatchedCard key={anime.animeId} fav={anime.watched} props={anime} />
        </div>
      ))}
    </Container>
  );
}
