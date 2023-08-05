import { skills, software } from "../data";
import PortSlide from "./PortSlider";
import { UI, graphics, BlockModels, Collection, KeyArt } from "../data";
import PortBlockModels from "./PortBlockModels";
const Home = () => {
  return (
    <>
      <div className="flex text-white p-4 mb-24 pt-10 text-center h-48 sm:h-72 md:h-80 lg:h-screen align-middle relative md:mb-72 lg:mb-36">
        <div id="title" className="mx-auto mt-7 lg:mt-36 relative">
          <div className="relative z-20">
            <h1 className="font-bold text-2xl md:text-5xl lg:text-7xl">
              Anesteva Miru
            </h1>
            <h3 className="text-sm md:text-md lg:text-xl ">
              (a.k.a Dhiya Ulhaq)
            </h3>
            <h2 className="text-md md:text-lg lg:text-2xl mb-2 lg:mb-4">
              <span className="text-cyan-300"> 3D Animator </span>
              and
              <span className=" text-pink-300"> 3D Artist</span>
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
          Highly passionate about 3D Arts and Design with estimate 2 years of
          experience in 3D Models, Texture, and Animation. Proficient in 3D and
          Design Software, fast-paced environment, in-team communication, and
          time management. Ongoing progress on some projects to work on and
          develop skills for the best results. Enthusiast about teamwork
          projects, advanced 3D Arts, and projects in the future. Looking
          forward on any 3D projects to work on.
        </p>
      </div>

      <div className="px-7 lg:px-Mid text-white text-left m-4 mt-20 lg:mt-20 content-center">
        <h2 className="text-cyan-300 glow text-2xl lg:text-3xl font-bold mb-4">
          Skills
        </h2>
        <div className="flex flex-row flex-wrap">
          {skills.map((e) => {
            return (
              <div className="expand group lg:hover:h-32 hover:h-24 overflow-hidden w-32 lg:w-40 border-2 h-6 lg:h-8 mr-2 mb-2">
                <h2 className="group-hover:text-cyan-300 group-hover:font-bold">
                  {e[0]}
                </h2>
                {e[1].map((f) => {
                  return (
                    <p className="transition opacity-0 group-hover:opacity-100  duration-500">
                      {f}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
        {/* <div className="flex flex-row flex-wrap">
              {skills.map((e) => {
                return (
                  <div className="transition ease-in-out w-32 lg:w-40 border-2 my-2 text-center mr-2 hover:scale-110 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400 hover:backdrop-blur-sm duration-300">
                    <p>{e}</p>
                  </div>
                );
              })}
            </div> */}
      </div>
      <div className="px-7 lg:px-Mid text-white text-left m-4 mt-20 lg:mt-20 content-center ">
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
      <div className="text-white px-7 lg:px-Mid text-left m-4 content-center mt-10">
        <div className="mt-16 sm:mt-24 md:mt-16 lg:mt-20 mt">
          <h2 className="text-cyan-300 glow text-2xl text-left lg:text-3xl font-bold mb-4">
            Models Showcase
          </h2>
          {Collection.map((content, index) => {
            return (
              <PortBlockModels container={Collection[index]}></PortBlockModels>
            );
          })}
        </div>
      </div>
      <div className="text-white px-7 lg:px-Mid pt-10 text-left m-4 content-center mt-20 lg:pt-20">
        <h2 className="sub glow text-cyan-300 text-2xl lg:text-3xl font-bold mb-4">
          Key Art Showcase
        </h2>
        <PortSlide container={KeyArt}></PortSlide>
      </div>
      <div className="text-white px-7 text-xl font-bold lg:px-Mid text-center m-4 content-center mt-10">
        <h2>For details, visit on</h2>
        <div className="w-1/2 mx-auto">
          <a target="_blank" href="https://sketchfab.com/anesteva_miru">
            <img
              className="mt-2"
              src="/sketchfab-white.png"
              alt="sketchfab-logo"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
