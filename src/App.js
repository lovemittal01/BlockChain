import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Merka from "./Merka.jsx";
import Home from "./Home.jsx";
import Coins from "./Coins.jsx";
import Exchange from "./Exchange.jsx";
import Blog from "./Blog.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/merka" Component={Merka} />
        <Route exact path="/coins" Component={Coins} />
        <Route exact path="/exchange" Component={Exchange} />
        <Route exact path="/blog" Component={Blog} />
        <Route path="*" to="/" />
      </Routes>
    </>
  );
};

export default App;
