import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";

const AllFood = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/food`)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      });
  }, []);

  console.log(card); 
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {card.map((card) => (
          <div
            className=" border p-2 rounded-md shadow-md bg-white shadow-lg"
            key={card._id}
          >
            <div className="relative mb-3">
              <img
                className="h-[220px] w-full rounded-md hover:scale-105 transition-all"
                src={card.image}
                alt=""
              />
              <div className="absolute mt-[-70px] ml-[150px] ">
                <button className="px-8 py-2 mt-5 rounded-bl-full rounded-tr-full hover:bg-[#caface] bg-[#F97316] hover:text-black text-white font-semibold">
                  ${card.price}
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-lg">{card.name}</h1>
              <BiHeart className="text-[#F97316] text-[25px]"></BiHeart>
            </div>
            <div className="flex justify-between items-center mb-2">
              <h4>Categoty: {card.category}</h4>
              <h4>Quantity: {card.quantity}</h4>
            </div>
            <Link to={`/food/${card._id}`}>
              <button className="px-4 py-1 rounded-md hover:bg-[#F97316] hover:text-white  border border-[#F97316]">
                Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFood;
