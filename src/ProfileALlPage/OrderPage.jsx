import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../PrivateAuth/PrivateAuth";
import { AiFillDelete } from "react-icons/ai";

const OrderPage = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/order/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, [user?.email]);

  const handleFoodRemove = (id) => {
    fetch(`http://localhost:5000/food/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("delete is successful!!!");
          const remaining = order.filter((food) => food._id !== id);
          setOrder(remaining);
        }
      });
  };
  //   console.log(order);
  return (
    <div className="max-w-6xl mx-auto mt-10 mb-20 grid grid-cols-1 md:grid-cols-2 gap-5 ">
      {order.map((food) => (
        <div
          key={food._id}
          className="flex justify-between items-center p-4 bg-orange-300 rounded-md shadow-md "
        >
          <img
            className="w-48 h-32 rounded-md hover:scale-110 transition-all"
            src={food.image}
            alt=""
          />
          <div className=" text-lg">
            <h3>Name: {food.name}</h3>
            <h4>Price: ${food.price}</h4>
            <h3>Owner: {food.displayName}</h3>
            <h5>Added Time: </h5>
          </div>
          <AiFillDelete
            onClick={() => handleFoodRemove(food._id)}
            className="text-2xl text-red-600 cursor-pointer"
          ></AiFillDelete>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
