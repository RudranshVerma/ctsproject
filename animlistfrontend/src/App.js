import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Animes from "./Component/JS/animes.component";
import FavoriteAnimes from "./Component/JS/favouriteAnimes.component";
import Login from "./Component/JS/login.component";
import MyProfile from "./Component/JS/myprofile.omponent";
import NavBar from "./Component/JS/navbar.component";
import SignUp from "./Component/JS/signup.component";
import UserForm from "./Component/JS/userform";
import UserUpdate from "./Component/JS/userupdate.component";
import WatchedAnimes from "./Component/JS/watchedAnimes.component";
import AddAnime from "./Component/JS/addAnime";

// const router = createBrowserRouter([{ path: "/", element: <Login /> }, {}]);

function App() {
  return (
    <div>
      <NavBar/>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/animes" element={<Animes />} />
          <Route path="/watchedAnimes" element={<WatchedAnimes/>} />
          <Route path="/favoriteAnimes" element={<FavoriteAnimes />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/userUpdate" element={<UserUpdate />} />
          <Route path="/userForm" element={<UserForm />} />
          <Route path="/addanime" element={<AddAnime />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
