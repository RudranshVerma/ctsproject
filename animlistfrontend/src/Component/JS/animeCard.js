import React, { useState } from "react";

function AnimeCard({ prop }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    console.log({ prop });
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="page-container">
      <div
        className={`card-container ${isFlipped ? "flipped" : ""}`}
        onMouseEnter={handleCardFlip}
        onMouseLeave={handleCardFlip}
      >
        <div className="front">
          <div className="image-container">
            <img className="card-image" src={prop.animeImage} alt=""></img>
            <h1 className="title">{prop.animeName}</h1>
          </div>
          <div className="main-area">
            <div className="blog-post">
              <p className="blog-content">{prop.animeStatus}</p>

              <p className="read-more">Hover to read more...</p>
            </div>
          </div>
        </div>
        <div className="back">
          <p>
            <span>
              <b>Watched:</b>
            </span>
            <input type="checkbox" checked={prop.watched} />
          </p>
          <p>
            <span>
              <b>Favourite:</b>
            </span>
            <input type="checkbox" checked={prop.favorite} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
