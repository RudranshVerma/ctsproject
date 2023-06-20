import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

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
        <div>
          <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={anime.animeImage} alt="Cardcap" />
            <div class="card-body">
              <h5 class="card-title">{anime.animeName}</h5>
              <p class="card-text">{anime.animeDescription}</p>
              <p class="card-text">{anime.animeStatus}</p>
              Watched
              <input
                type="checkbox"
                value={checkedOne}
                checked={anime.watched}
                onChange={handleChangeOne}
              />
              <br></br>
              Favourite
              <input
                type="checkbox"
                value={checkedTwo}
                checked={checkedOne}
                onChange={handleChangeTwo}
              style={{alignContent:"flex-end"}}/>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}
