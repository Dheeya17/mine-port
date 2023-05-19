function PortBlockModels(props) {
  const { container } = props;
  return (
    <>
      <div className="sketchfab-embed-wrapper group mb-10">
        <iframe
          className="lg:h-screen md:h-96"
          title={container.title}
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
          src={container.url}
        ></iframe>
        <h2 className="sub glow2 text-pink-300 text-center text-2xl lg:text-3xl font-bold mt-2 mb-4 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 h-0 group-hover:h-4 duration-500">
          {container.title}
        </h2>
      </div>
    </>
  );
}
export default PortBlockModels;
