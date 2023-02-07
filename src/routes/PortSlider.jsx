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
          <div className="relative ">
            <div className="mask rounded-3xl group">
              <div className="transition ease-in-out duration-500 opacity-0 bg-gradient-to-t from-black w-full h-full absolute z-10 group-hover:opacity-100">
                {container.map((content, index) => {
                  return index === pages ? (
                    <div className="transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 text-md md:text-lg lg:text-xl p-4 md:p-7 lg:p-10 w-3/4 bottom-0 absolute z-20">
                      {content.captions}
                    </div>
                  ) : (
                    ""
                  );
                })}
              </div>
              <div
                className="transition ease-in-out flex w-full duration-300"
                style={{ transform: `translateX(${-(100 * pages)}%)` }}
                id="slider"
              >
                {container.map((content, index) => {
                  return (
                    <img
                      className="transition ease-in-out duration-500 hover:blur-xl"
                      src={content.imageUrl}
                      alt=""
                      id="ime"
                      key={index}
                    />
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              className="transition ease-in-out scale-50 md:scale-75 lg:scale-100 hover:bg-white hover:bg-opacity-30 border-2 border-cyan-400 p-2 rounded-full text-md lg:text-xl absolute -bottom-3 -right-3 md:bottom-0 md:right-0 lg:bottom-2 lg:right-2 duration-300"
              onClick={next}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="cyan"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </button>
            <button
              type="button"
              className="transition scale-50 lg:scale-100 ease-in-out md:scale-75 hover:bg-white hover:bg-opacity-30 border-2 border-cyan-400 p-2 rounded-full text-md lg:text-xl absolute -top-3 -left-2 md:top-0 md:left-0 lg:top-2 lg:left-2 duration-300"
              onClick={prev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="cyan"
                class="bi bi-caret-left-fill"
                viewBox="0 0 16 16"
              >
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
            </button>
          </div>
          <div className="w-full mt-2 lg:mt-4" id="dot">
            <div className="flex space-x-2 lg:space-x-4 justify-center">
              {container.map((circle, page) => {
                return (
                  <button
                    className={`cursor-pointer rounded-full scale-75 lg:scale-100 w-3 h-3 bg-cyan-400 ${
                      pages == page ? "opacity-100" : "opacity-30"
                    }`}
                    key={page}
                    onClick={() => setPages(page)}
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PortSlide;
