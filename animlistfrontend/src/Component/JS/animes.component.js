import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../CSS/anime.component.css";
import AnimeCard from "./animeCard";

export default function Animes() {
  const [animes, setAnimes] = useState([]);
  
  useEffect(() => {
    console.log("coding with rudransh");
    loadAnimes();
  }, []);

  const loadAnimes = async () => {
    const result = await axios.get("http://localhost:8080/getAllAnimes");
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
        <AnimeCard prop={anime} />
      ))}
    </Container>
  );
}
