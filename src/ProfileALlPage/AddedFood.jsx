import { Link, useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { useContext, useState } from "react";
import { AuthContext } from "../PrivateAuth/PrivateAuth";

const AddedFood = () => {
  const { user } = useContext(AuthContext);
  const AddedAllFood = useLoaderData();
  const [foodData, setFoodData] = useState(AddedAllFood);
  // console.log(foodData);
  const time = new Date();

  const handleFoodCardRomove = (id) => {
    fetch(`http://localhost:5000/formFood/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("delete is successful!!!");
          const remaining = foodData.filter((food) => food._id !== id);
          setFoodData(remaining);
        }
      });
  };
  return (
    <div className="max-w-6xl mx-auto mt-10 mb-20 grid grid-cols-1 md:grid-cols-2 gap-5 ">
      {AddedAllFood.map((addedFood) => (
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
              to={`/formFood/${addedFood._id}`}
              className="mt-4"
            >
              <GrUpdate className="text-2xl text-red-600 cursor-pointer mt-5"></GrUpdate>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddedFood;
