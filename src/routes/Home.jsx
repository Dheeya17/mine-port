const skills = ["Frontend", "3D Modelling", "Key Art"];
import vscode from "../assets/vscode.svg";
import blender from "../assets/blender3d.svg";
import photoshop from "../assets/photoshop.svg";
import scrapfront from "../assets/scrapper-front.png";
import scrapback from "../assets/scrapper-back.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
import { Navigate } from "react-router-dom";
const software = [
  [vscode, "Visual Studio Code"],
  [blender, "Blender"],
  [photoshop, "Adobe Photoshop"],
];
const Home = () => {
  return (
    <>
      <div className="flex text-white p-4 text-center h-screen align-middle z-30 relative">
        <div id="title" className="mx-auto mt-36">
          <h1 className="font-bold text-7xl mb-1">Ghozi Dhiya Ulhaq</h1>
          <h2 className="text-2xl mb-4">
            Frontend Developer and Key Art Artist
          </h2>
          <a
            className="transition ease-in-out border-2 p-2 px-4 rounded-xl hover:bg-white hover:text-black duration-500"
            href="#content"
          >
            Go There
          </a>
        </div>
      </div>
      <div
        id="content"
        className="text-white px-Mid py-10 text-left m-4 content-center h-64 mt-20"
      >
        <h2 className="sub text-cyan-300 text-3xl font-bold mb-4">Summary</h2>
        <p>
          I've been working with some Frontend projects for about a year since I
          became interested in Web Development, yet I still develop it for the
          best result. There are projects I finished, like Layouting Database
          Information for some requests. For some projects are still in
          progress. I've also been working as Key Art Artist for 4 years. There
          are many projects I've been working on, like posters for events, arts,
          and game assets.
        </p>
      </div>

      <div className="px-Mid text-white text-left mt-10 mx-4 content-center h-56">
        <h2 className="text-cyan-300 text-3xl font-bold mb-4">Skills</h2>
        <div className="flex flex-row">
          {skills.map((e) => {
            return (
              <div className="transition ease-in-out w-40 border-2 text-center mx-2 hover:scale-110 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400 hover:backdrop-blur-sm duration-300">
                {e}
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-Mid text-white text-left m-4 content-center h-64">
        <h2 className="text-cyan-300 text-3xl font-bold mb-4">
          Software Proficiency
        </h2>
        <div className="flex flex-row"></div>
        <div className="flex flex-row">
          {software.map((e) => {
            return (
              <div className="transition ease-in-out px-3 flex flex-row justify-items-center items-center text-center mx-2 rounded-xl hover:scale-110 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400 hover:backdrop-blur-sm duration-300">
                <img src={e[0]} alt={e[1]} />
                <h6 className="flex-auto p-4">{e[1]}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
