




const Slider = () => {
  return (
    <div>
      <div className="carousel w-full ">
          <div id="slide1" className="carousel-item relative w-full h-[500px]">
            
            <img src="https://i.ibb.co.com/RTqMkVN/Bangladesh-Jute-Crafts.webp" className="w-full rounded-lg" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a> 
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide2" className="carousel-item relative w-full h-[500px]">
            <img src="https://i.ibb.co.com/PZ82z3q/workshop-tools-wood-hd-wallpaper-preview.webp" className="w-full rounded-lg"  />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a> 
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full h-[500px]">
            <img src="https://i.ibb.co.com/YtpS4ky/wood-craft.webp" className="w-full rounded-lg" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a> 
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div> 
          
        </div>
    </div>
  );
};

export default Slider;