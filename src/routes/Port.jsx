import PortSlide from "./PortSlider";
import { UI, graphics } from "../data";

const Port = () => {
  return (
    <>
      <div className="flex text-white p-4 text-center h-48 sm:h-72 md:h-96 lg:h-screen align-middle z-20 relative">
        <div className="mx-auto mt-16 lg:mt-36">
          <h1 className="font-bold text-3xl lg:text-7xl mb-1">
            Dhiya's Portfolio
          </h1>
          <h3>[Work In Progress]</h3>
        </div>
      </div>
      {/* <div className="text-white px-7 lg:px-Mid pt-10 text-left m-4 content-center mt-20 lg:pt-20">
        <h2 className="sub glow text-cyan-300 text-2xl lg:text-3xl font-bold mb-4">
          Graphic Design
        </h2>
        <PortSlide container={graphics}></PortSlide>
      </div>
      <div className="text-white px-7 lg:px-Mid pt-10 text-left m-4 content-center mt-10 lg:pt-20">
        <h2 className="sub glow text-cyan-300 text-2xl lg:text-3xl font-bold mb-4">
          UI UX and Frontend
        </h2>
        <PortSlide container={UI}></PortSlide>
      </div> */}
      <div className="text-white px-7 lg:px-Mid text-left m-4 content-center mt-10 pt-10 lg:pt-20">
        <h2 className="sub glow text-cyan-300 text-2xl lg:text-3xl font-bold mb-4">
          Corrupted Angel
        </h2>
        <div class="sketchfab-embed-wrapper w-full">
          <iframe
            className="lg:h-screen md:h-96"
            title="Corrupted Angel"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            width="100%"
            src="https://sketchfab.com/models/539c122e1cf44c58aebddf3b16b12a4f/embed"
          ></iframe>
        </div>
      </div>
      <div className="text-white px-7 lg:px-Mid text-left m-4 content-center mt-10">
        <h2 className="sub glow text-cyan-300 text-2xl lg:text-3xl font-bold mb-4">
          Dark Lord
        </h2>
        <div class="sketchfab-embed-wrapper">
          <iframe
            className="lg:h-screen md:h-96"
            title="Dark Lord"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            width="100%"
            src="https://sketchfab.com/models/c8c205ff3f464b498ae1865dfa9b1db4/embed"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Port;
