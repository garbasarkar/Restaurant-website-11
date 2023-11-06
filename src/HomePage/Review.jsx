import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const [customar, setCustomar] = useState([]);
  useEffect(() => {
    fetch("/Review.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(setCustomar(data));
      });
  }, []);
  console.log(customar);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
    <div className="max-w-6xl mx-auto mt-20 mb-16">
      <h1 className="text-2xl md:text-4xl font-semibold text-center">
        Our Customer <span className="text-[#F97316]">Review</span>
      </h1>
      <Slider {...settings} className="mt-4">
        {customar.map((cus) => (
          <div
            key={cus.id}
            className="border m-4 p-4 shadow-md space-y-2 bg-white"
          >
            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full" src={cus.image} alt="" />
              <div>
                <h1 className="text-lg font-semibold">{cus.name}</h1>
                <p>{cus.food}</p>
              </div>
            </div>
            <p className="text-sm">{cus.customer_review}</p>
            <div className="flex gap-4 items-center">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p>({cus.rating})</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
