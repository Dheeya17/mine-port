const skills = ["Frontend", "3D Modelling", "Key Art"];
const software = [
  ["/vscode.svg", "Visual Studio Code"],
  ["/blender3d.svg", "Blender"],
  ["/photoshop.svg", "Adobe Photoshop"],
];
const Home = () => {
  return (
    <>
      <div className="flex text-white p-4 mb-24 pt-10 text-center h-72 md:h-80 lg:h-screen align-middle relative md:mb-72 lg:mb-36">
        <div id="title" className="mx-auto mt-7 lg:mt-36 relative">
          <div className="relative z-20">
            <h1 className="font-bold text-2xl md:text-5xl lg:text-7xl">
              Ghozi Dhiya Ulhaq
            </h1>
            <h2 className="text-md md:text-lg lg:text-2xl mb-2 lg:mb-4">
              Frontend Developer and Key Art Artist
            </h2>
          </div>
          <a
            className="transition ease-in-out border-2 p-1 lg:p-2 px-2 text-sm relative z-30 lg:text-lg lg:px-4 rounded-md lg:rounded-xl hover:bg-white hover:text-black duration-500"
            href="#content"
          >
            Go There
          </a>
        </div>
      </div>
      <div
        id="content"
        className="text-white px-7 lg:px-Mid pt-10 text-left m-4 content-center mt-20 lg:pt-20"
      >
        <h2 className="sub glow text-cyan-300 text-2xl lg:text-3xl font-bold mb-4">
          Summary
        </h2>
        <p>
          I've been working with some Frontend React projects for about a year
          since I became interested in Web Development, yet I still develop it
          for the best result. There are projects I finished, like Layouting
          Database Information for some requests. For some projects are still in
          progress. I've also been working as Key Art Artist for 4 years. There
          are many projects I've been working on, like posters for events, arts,
          and game assets.
        </p>
      </div>

      <div className="px-7 lg:px-Mid text-white text-left m-4 mt-20 lg:mt-20 content-center">
        <h2 className="text-cyan-300 glow text-2xl lg:text-3xl font-bold mb-4">
          Skills
        </h2>
        <div className="flex flex-row flex-wrap">
          {skills.map((e) => {
            return (
              <div className="transition ease-in-out w-32 lg:w-40 border-2 my-2 text-center mr-2 hover:scale-110 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400 hover:backdrop-blur-sm duration-300">
                {e}
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-7 lg:px-Mid text-white text-left m-4 mt-20 lg:mt-20 content-center h-64">
        <h2 className="text-cyan-300 glow text-2xl lg:text-3xl font-bold mb-4">
          Software Proficiency
        </h2>
        <div className="flex flex-row flex-wrap">
          {software.map((e) => {
            return (
              <div className="transition ease-in-out my-2 px-3 flex flex-row justify-items-center items-center text-center mx-2 rounded-xl hover:scale-110 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400 hover:backdrop-blur-sm duration-300">
                <img className="h-9" src={e[0]} alt={e[1]} />
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
