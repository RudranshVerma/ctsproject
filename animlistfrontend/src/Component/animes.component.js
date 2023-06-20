import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AnimeCard from "./animeCard";
import "./anime.component.css";

export default function Animes() {
  const [animes, setAnimes] = useState([]);
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

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
        <AnimeCard prop={anime}/>
      ))}
    </Container>
  );
}
