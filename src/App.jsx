import { useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./routes/Home";
import Port from "./routes/Port";
import scrapfront from "./assets/scrapper-front.png";
import scrapback from "./assets/scrapper-back.png";
import starry from "./assets/starry-sky.png";
import refl from "./assets/scrapper-refl.png";
import light from "./assets/light.png";
import light2 from "./assets/light2.png";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="text-lg content-center text-center">
        <div className="nav flex flex-row m-2 justify-center p-4 w-100 top-0 inset-x-0 z-40 absolute">
          {/* <h2 className="w-64">Dhiya's Portfolio</h2> */}
          <Link to="/">Home</Link>
          <Link to="/port">Portfolio</Link>
          {/* <div className="nav flex"></div> */}
        </div>
        <div className="parallax">
          <img className="z-10" src={scrapfront} alt="" />
          <img className="z-20" src={scrapback} alt="" />
          <img className="z-10" src={starry} alt="" />
          <img className="z-10" src={refl} alt="" />
          <img className="z-10" src={light} alt="" />
          <img className="z-10 right-4" src={light2} alt="" />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/port" element={<Port />} />
        </Routes>
      </div>
      <div className="flex flex-row text-white py-4 px-8 justify-between inset-x-0 bottom-0 backdrop-blur-md">
        <h3 className="my-auto">Misky-ism</h3>
        <div className="text-center">
          <h3>Reach Me</h3>
          <div className="flex flex-row justify-between w-40">
            <a href="mailto:ChloxIvy@gmail.com">
              <img
                className="transition ease-in-out hover:scale-110 duration-300"
                src="https://img.icons8.com/sf-regular/48/FFFFFF/new-post.png"
              />
            </a>
            <a href="http://wa.me/6282229293535" target="_blank">
              <img
                className="transition ease-in-out hover:scale-110 duration-300"
                src="https://img.icons8.com/sf-regular/48/FFFFFF/whatsapp.png"
              />
            </a>
            <a href="https://discord.com/users/Meth#6810" target="_blank">
              <img
                className="transition ease-in-out hover:scale-110 duration-300"
                src="https://img.icons8.com/sf-regular/48/FFFFFF/discord.png"
              />
            </a>
          </div>
        </div>
        <h3 className="my-auto">© All rights reserved</h3>
      </div>
    </div>
  );
}

export default App;
