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
import lights from "./assets/lights.png";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="text-sm lg:text-lg content-center text-center">
        <div className="nav flex flex-row m-1 lg:m-2 justify-center p-2 lg:p-4 w-100 top-0 inset-x-0 z-40 absolute">
          {/* <h2 className="w-64">Dhiya's Portfolio</h2> */}
          <Link to="/">Home</Link>
          <Link to="/port">Portfolio</Link>
          {/* <div className="nav flex"></div> */}
        </div>
        <div className="parallax">
          <img className="z-30" src={scrapfront} alt="" />
          <img className="z-10 lg:z-20" src={scrapback} alt="" />
          <img className="z-10" src={starry} alt="" />
          <img className="z-10" src={refl} alt="" />
          <img className="z-10" src={lights} alt="" />
          {/* <img className="z-10" src={light} alt="" />
          <img className="z-10 right-4" src={light2} alt="" /> */}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/port" element={<Port />} />
        </Routes>
      </div>
      <div className="flex flex-row text-md font-bold text-white justify-between py-4 px-2 lg:px-4 inset-x-0 bottom-0 backdrop-blur-md">
        <h3 className="my-auto px-3 scale-75 lg:scale-100">Misky-ism</h3>
        <div className="text-center pl-8">
          <h3 className="scale-75 lg:scale-100">Reach Me</h3>
          <div className="flex flex-row justify-between w-20 lg:w-40">
            <a href="mailto:ChloxIvy@gmail.com">
              <img
                className="transition ease-in-out lg:hover:scale-110 duration-300 scale-75 hover:scale-90 lg:scale-100"
                src="https://img.icons8.com/sf-regular/48/FFFFFF/new-post.png"
              />
            </a>
            <a href="http://wa.me/6282229293535" target="_blank">
              <img
                className="transition ease-in-out lg:hover:scale-110 duration-300 scale-75 hover:scale-90 lg:scale-100"
                src="https://img.icons8.com/sf-regular/48/FFFFFF/whatsapp.png"
              />
            </a>
            <a href="https://discord.com/users/Meth#6810" target="_blank">
              <img
                className="transition ease-in-out lg:hover:scale-110 duration-300 scale-75 hover:scale-90 lg:scale-100"
                src="https://img.icons8.com/sf-regular/48/FFFFFF/discord.png"
              />
            </a>
          </div>
        </div>
        <h3 className="my-auto scale-75 w-32 lg:w-40 text-end lg:scale-100">
          © All rights reserved
        </h3>
      </div>
    </div>
  );
}

export default App;
