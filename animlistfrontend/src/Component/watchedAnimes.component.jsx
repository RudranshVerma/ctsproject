import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';

export default function WatchedAnimes() {
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
      alignItems:"center"
      
    }}>
      {animes.map((anime) => (
        <div>
          <div class="card" style={{ width: "18rem"}}>
            <img class="card-img-top" src={anime.animeImage} alt="Cardcap" />
            <div class="card-body">
              <h5 class="card-title">{anime.animeName}</h5>
              <p class="card-text">{anime.animeDescription}</p>
              <button class="btn btn-primary">Go somewhere</button>
            </div>
          </div>
        </div>
      ))}
    </Container>
  )
}
