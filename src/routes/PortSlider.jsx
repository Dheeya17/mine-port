import { useState } from "react";

function PortSlide(props) {
  const [pages, setPages] = useState(0);
  const { container } = props;
  const prev = () => {
    const move = pages === 0 ? container.length - 1 : pages - 1;
    setPages(move);
  };
  const next = () => {
    const move = pages === container.length - 1 ? 0 : pages + 1;
    setPages(move);
  };
  return (
    <>
      <div className="relative w-full">
        <div className="overflow-hidden">
          <div className="relative">
            <div className="mask">
              <div
                className="transition ease-in-out flex w-full duration-300"
                style={{ transform: `translateX(${-(100 * pages)}%)` }}
                id="slider"
              >
                {container.map((content, index) => {
                  return (
                    <img
                      className="imge"
                      src={content.imageUrl}
                      alt=""
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
            <button
              type="button"
              className="bg-cyan-500 px-4 py-2 rounded-full text-md lg:text-xl absolute bottom-2 right-2"
              onClick={next}
            >
              {">"}
            </button>
            <button
              type="button"
              className="bg-red-500 px-4 py-2 rounded-full text-md lg:text-xl absolute top-2 left-2"
              onClick={prev}
            >
              {"<"}
            </button>
          </div>
          <div className="w-full mt-2 lg:mt-4" id="dot">
            <div className="flex space-x-2 lg:space-x-4 justify-center">
              {container.map((circle, page) => {
                return (
                  <button
                    className={`cursor-pointer rounded-full scale-75 lg:scale-100 w-3 h-3 bg-white ${
                      pages == page ? "opacity-100" : "opacity-40"
                    }`}
                    key={page}
                    onClick={() => setPages(page)}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="mt-4">
            {container.map((content, index) => {
              return (
                <p
                  className={`transition ease-in-out text-center text-md lg:text-xl ${
                    index == pages ? "opacity-100" : "opacity-0"
                  } duration-500`}
                >
                  {index == pages ? content.captions : ""}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default PortSlide;
