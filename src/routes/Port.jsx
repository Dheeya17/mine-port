import PortSlide from "./PortSlider";
const UI = [
  {
    id: 1,
    captions:
      "Minimalist Frostglass Theme UI with fresh gradient that spice up the tone",
    imageUrl: "/UI1.png",
  },
  {
    id: 2,
    captions:
      "Frost Glass Theme UI Website for marketplace with Yellow and Blue Color shape. Created with figma and implemented using PHP, Javascript, and Bootstrap Framework",
    imageUrl: "/UI2.png",
  },
  {
    id: 3,
    captions:
      "Matte and gradient theme using pastel based colour. Designed for product display and friendly user",
    imageUrl: "/UI3.png",
  },
];
const graphics = [
  {
    id: 1,
    captions: "Blue custom shape and text LED glow over concrete background",
    imageUrl:
      "https://raw.githubusercontent.com/Dheeya17/mine-port/main/src/mine/LED.png",
  },
  {
    id: 2,
    captions: "Neon style on preferred shape or text with dynamic light",
    imageUrl:
      "https://raw.githubusercontent.com/Dheeya17/mine-port/main/src/mine/Neon.png",
  },
  {
    id: 3,
    captions: "Orange mixed gradient with precise composition",
    imageUrl:
      "https://raw.githubusercontent.com/Dheeya17/mine-port/main/src/mine/Orange.png",
  },
];
const Port = () => {
  return (
    <>
      <div className="flex text-white p-4 text-center h-48 sm:h-72 md:h-96 lg:h-screen align-middle z-20 relative">
        <div className="mx-auto mt-16 lg:mt-36">
          <h1 className="font-bold text-3xl lg:text-7xl mb-1">
            Misky's Portfolio
          </h1>
          <h3>[Work In Progress]</h3>
        </div>
      </div>
      <div className="text-white px-7 lg:px-Mid pt-10 text-left m-4 content-center mt-20 lg:pt-20">
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
      </div>
    </>
  );
};

export default Port;
