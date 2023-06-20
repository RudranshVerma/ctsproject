import React, { useState } from "react";

const AnimeCard = (prop) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    console.log(prop);
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
            <img
              className="card-image"
              src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"
              alt=""
            ></img>
            <h1 className="title">{prop.animeName}</h1>
          </div>
          <div className="main-area">
            <div className="blog-post">
              <p className="date">{new Date().toLocaleDateString()}</p>
              <p className="blog-content">
                Some sample text to demonstrate how these cards will work,
                including how they truncate long sentences.
              </p>
              <p className="read-more">Hover to read more...</p>
            </div>
          </div>
        </div>
        <div className="back">
          <p>hiiiiiiiiiiiii</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
