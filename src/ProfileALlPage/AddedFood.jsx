import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../PrivateAuth/PrivateAuth";

const AddedFood = () => {
  const { user } = useContext(AuthContext);
  const [addedFood, setAddedFood] = useState([]);
  const email = user?.email;
  const time = new Date();

  const handleFoodCardRomove = (id) => {
    fetch(`http://localhost:5000/food/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("delete is successful!!!");
          const remaining = addedFood.filter((food) => food._id !== id);
          setAddedFood(remaining);
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/food-by-email?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setAddedFood(data);
      });
  }, [email]);
  console.log(addedFood.length);
  // console.log(email);
  return (
    <div className="max-w-6xl mx-auto mt-10 mb-20 grid grid-cols-1 md:grid-cols-2 gap-5 ">
      {addedFood.map((addedFood) => (
        <div
          key={addedFood._id}
          className="flex justify-between items-center p-4 bg-orange-300 rounded-md shadow-md "
        >
          <img
            className="w-48 h-32 rounded-md hover:scale-110 transition-all"
            src={addedFood.image}
            alt=""
          />
          <div className=" text-lg">
            <h3>Name: {addedFood.category}</h3>
            <h4>Price: ${addedFood.price}</h4>
            <h3>Owner: {addedFood.name}</h3>
            <h5>Added Time: {time.toDateString()}</h5>
          </div>
          <div className=" ">
            <AiFillDelete
              onClick={() => handleFoodCardRomove(addedFood._id)}
              className="text-2xl text-red-600 cursor-pointer"
            ></AiFillDelete>
            <Link
              //   onClick={() => handleUpdateFood(addedFood._id)}
              to={`/update/${addedFood._id}`}
              className="mt-4"
            >
              <GrUpdate className="text-2xl text-red-600 cursor-pointer mt-5"></GrUpdate>
            </Link>
          </div>
        </div>
      ))} 
      {/* <div>
          <img src="/src/assets/No-food/no_food.png" alt="" />

        </div> */}
    </div>
  );
};

export default AddedFood;
