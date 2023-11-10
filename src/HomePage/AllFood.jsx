import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="max-w-6xl mx-auto">
      <h1>All Food!!!</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {card.map((card) => (
          <div className="" key={card._id}>
            <img className="h-[220px] w-full" src={card.image} alt="" />
            <h1 className="font-semibold">{card.name}</h1>
            <Link to={`/details/${card._id}`}>
              <button className="px-4 py-1 rounded-md border border-[#F97316]">
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
