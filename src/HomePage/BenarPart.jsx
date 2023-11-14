import img1 from "/src/assets/images/sliderimg2-removebg-preview.png";
import img2 from "/src/assets/images/slider5-removebg-preview.png";
import img3 from "/src/assets/images/sliderimg3-removebg-preview.png";
import img4 from "/src/assets/images/sliderimg4-removebg-preview.png";
const BenarPart = () => {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative w-full h-[100vh] md:h-[75vh] bg-[#E4FFE6]"
      >
        <div className="absolute flex flex-col md:flex-row justify-between items-center w-full gap-5 px-1 md:px-20">
          <div className="space-y-3">
            <h1 className="text-2xl md:text-5xl font-semibold">
              Indulge Your Taste With Our <br></br>{" "}
              <span className="text-orange-500">Delicious Food</span>
            </h1>
            <p>
              Nick richardson described the translation like extreme mallarme,
              or a burroughsian <br /> cut-up, or a paragraph of finnegans wake.
              Bits of it have surprising power.
            </p>
          </div>
          <div className=" ">
            <img
              src={img1}
              className="mt-[-70px] md:mt-[0px] w-[500px] h-[500px]"
            />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full bg-[#E4FFE6]">
        <div className="absolute flex flex-col md:flex-row  justify-between items-center w-full gap-5 px-1 md:px-20">
          <div className="space-y-3">
            <h1 className="text-2xl mg:text-5xl font-semibold">
              Primium quality Food for Your <br></br>{" "}
              <span className="text-orange-500">healthy & Daily Life</span>
            </h1>
            <p>
              Food ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
              enim necessitatibus aut! <br /> cut-up, or a paragraph of
              finnegans wake. Bits of it have surprising power.
            </p>
          </div>
          <div className="">
            <img
              src={img2}
              className="mt-[-70px] md:mt-[-0px] w-[500px] h-[500px]"
            />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full bg-[#E4FFE6]">
        <div className="absolute flex flex-col md:flex-row  justify-between items-center w-full gap-5 px-1 md:px-20">
          <div className="space-y-3">
            <h1 className="text-2xl md:text-5xl font-semibold">
              Indulge Your Taste With Our <br></br>{" "}
              <span className="text-orange-500">Delicious Food</span>
            </h1>
            <p>
              Food richardson described the translation like extreme mallarme,
              or a burroughsian <br /> cut-up, or a paragraph of finnegans wake.
              Bits of it have surprising power.
            </p>
          </div>
          <div className="">
            <img
              src={img3}
              className="mt-[-70px] md:mt-[-0px] w-[500px] h-[500px]"
            />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full bg-[#E4FFE6]">
        <div className="absolute flex flex-col md:flex-row  justify-between items-center w-full gap-5 px-1 md:px-20">
          <div className="space-y-3">
            <h1 className="text-2xl md:text-5xl font-semibold">
              Super market <br></br>{" "}
              <span className="text-orange-500">Healthy living Food</span>
            </h1>
            <p>
              Super food described the translation like extreme mallarme, or a
              burroughsian <br /> First food dolor sit amet consectetur
              adipisicing elit. Nemo, ipsa..
            </p>
          </div>
          <div className=" ">
            <img
              src={img4}
              className="mt-[-70px] md:mt-[-0px] w-[500px] h-[500px]"
            />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default BenarPart;
