import PortSlide from "./PortSlider";
import { UI, graphics, BlockModels } from "../data";
import PortBlockModels from "./PortBlockModels";

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
      <div className="mt-16 sm:mt-24 md:mt-16 lg:mt-20 mt">
        {BlockModels.map((content, index) => {
          return (
            <PortBlockModels container={BlockModels[index]}></PortBlockModels>
          );
        })}
      </div>
    </>
  );
};

export default Port;
