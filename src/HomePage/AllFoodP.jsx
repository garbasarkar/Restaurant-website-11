import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

const AllFoodP = () => {
  const [card, setCard] = useState([]);
  const [counts, setCount] = useState([]);
  const { count } = counts;
  const [allPage, setAllPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPage = Math.ceil(count / allPage);

  useEffect(() => {
    fetch(`http://localhost:5000/food`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCard(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/food?page=${currentPage}&size=${allPage}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCard(data);
      });
  }, [currentPage, allPage]);

  useEffect(() => {
    fetch(`http://localhost:5000/foodCount`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data);
      });
  }, []);

  // const pages = [...Array(numberOfPage).keys()];
  const pages = [];
  for (let i = 0; i < numberOfPage; i++) {
    pages.push(i);
  }
  console.log(pages);

  const handleParPic = (e) => {
    const pagi = parseInt(e.target.value);
    setAllPage(pagi);
    setCurrentPage(0);
  };
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  // console.log(card);

  return (
    <div>
      <Helmet>
        <title>Restaurant | All Food</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 mb-10">
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
      <div className="text-center mb-16 pagination ">
        <button onClick={handlePrevPage}>Prev</button>
        {pages.map((page) => (
          <button
            className={currentPage === page ? "selected" : undefined}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage}>Next</button>
        <select value={allPage} onChange={handleParPic}>
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
};

export default AllFoodP;
