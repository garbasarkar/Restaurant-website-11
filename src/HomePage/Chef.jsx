import { useEffect, useState } from "react";
import Slider from "react-slick";

const Chef = () => {
  const [allChef, setAllChef] = useState([]);
  useEffect(() => {
    fetch("/Chef.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(setAllChef(data));
      });
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-6xl mx-auto text-center mt-20 mb-16">
      <h1 className="text-3xl md:text-4xl font-semibold">
        Our <span className="text-[#F97316]">Chef's</span>
      </h1>
      <p>
        Popular chef's sit amet, consectetur adipisicing elit. Nihil cumque
        illum, perferendis est distinctio nostrum <br /> aspernatur, illo
        repellat reiciendis qui quod nesciunt similique laudantium?
      </p>
      <div>
        <Slider {...settings} className="mt-6">
          {allChef.map((chap) => (
            <div key={chap.id} className="border p-4 rounded-md">
              <img
                className="h-48 w-full rounded-md shadow-md"
                src={chap.image}
                alt=""
              />
              <h1 className="text-left mt-2 font-semibold">{chap.name}</h1>
              <p className="text-left">Restaurant Chaf's</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Chef;
