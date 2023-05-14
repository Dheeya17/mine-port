function PortBlockModels(props) {
  const { container } = props;
  return (
    <>
      <div className="text-white px-7 lg:px-Mid text-left m-4 content-center mt-10">
        <h2 className="sub glow text-cyan-300 text-2xl lg:text-3xl font-bold mb-4">
          {container.title}
        </h2>
        <div className="sketchfab-embed-wrapper">
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
        </div>
      </div>
    </>
  );
}
export default PortBlockModels;
