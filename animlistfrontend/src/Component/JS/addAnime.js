import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../CSS/addAnime.css";
import { useNavigate } from "react-router-dom";

export default function AddAnime() {
  const [animename, setAnimeName] = useState();
  const [animedescription, setAnimeDescription] = useState();
  const [animeimagelink, setImageLink] = useState();
  const [animestatus, setAnimeStatus] = useState();
  const [watched, setWatched] = useState();
  const [favorite, setFavorite] = useState();
  const navigate=useNavigate();

  const handlecancel=()=>{
    navigate("/myprofile")
  }
  const handleaddanime = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8080/createAnime", {
        animeName: animename,
        animeDescription: animedescription,
        animeImage: animeimagelink,
        animeStatus: animestatus,
        Watched:watched,
        Favorite:favorite
      })
      .then((res) => {
        toast.success("Anime added");
        console.log(res.data);
        navigate("/animes");
      });

  };

  return (
    <div>
      <div class="addanimecontainer">
        <div class="row">
          <div class="col">
            <div class="addanimecard">
              <div class="text-center">
                <h1>Anime</h1>
                <h6>Enter Details of Anime</h6>
              </div>

              <form onSubmit={handleaddanime}>
                <div class="mb-3">
                  <label class="form-label">Anime Name</label>
                  <input
                    type="text"
                    class="form-control"
                    value={animename}
                    onChange={(e) => {
                      setAnimeName(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Anime Description</label>
                  <input
                    type="text"
                    class="form-control"
                    value={animedescription}
                    onChange={(e) => {
                      setAnimeDescription(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Image Link</label>
                  <input
                    type="text"
                    class="form-control"
                    value={animeimagelink}
                    onChange={(e) => {
                      setImageLink(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Anime Status</label>
                  <input
                    type="text"
                    class="form-control"
                    value={animestatus}
                    onChange={(e) => {
                      setAnimeStatus(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Watched (true or false only)</label>
                  <input
                    type="text"
                    class="form-control"
                    value={watched}
                    onChange={(e) => {
                      setWatched(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Favourite (true or false only)</label>
                  <input
                    type="text"
                    class="form-control"
                    value={favorite}
                    onChange={(e) => {
                      setFavorite(e.target.value);
                    }}
                  />
                </div>
                
                <button  type="submit" class="btn btn-success">
                  Submit
                </button>
                <button onClick={handlecancel} class="btn btn-warning">
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
