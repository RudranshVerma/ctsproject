import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Animes from "./Component/animes.component";
import Login from "./Component/login.component";
import NavBar from "./Component/navbar.component";
import WatchedAnimes from "./Component/watchedAnimes.component";

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
          {/* <Route path="/movies" element={<MovieList />} /> */}
          {/* <Route path="/users" element={<UserList />} /> */}
          {/* <Route path="/userUpdate" element={<UserUpdate />} /> */}
        </Routes>
      </div>

    </div>
  );
}

export default App;
