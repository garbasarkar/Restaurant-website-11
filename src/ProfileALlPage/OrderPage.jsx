import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../PrivateAuth/PrivateAuth";
import { AiFillDelete } from "react-icons/ai";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";
const OrderPage = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);
  console.log(order);

  useEffect(() => {
    fetch(
      `https://assignment-11-restaurent-server.vercel.app/order/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, [user?.email]);

  const handleFoodRemove = (id) => {
    console.log(id);
    fetch(
      `https://assignment-11-restaurent-server.vercel.app/deleteFood/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          swal("Parcaes Food is Successful!");
          const remaining = order.filter((food) => food._id !== id);
          setOrder(remaining);
        }
      });
  };

  const time = new Date();

  //   console.log(order);
  return (
    <div className="max-w-6xl mx-auto mt-10 mb-20 grid grid-cols-1 md:grid-cols-2 gap-5 ">
      <Helmet>
        <title>Restaurant | Order Food</title>
      </Helmet>
      {order.map((food) => (
        <div
          key={food._id}
          className="flex flex-col md:flex-row justify-between items-center p-4 bg-orange-300 rounded-md shadow-md "
        >
          <img
            className=" md:w-48 md:h-32 rounded-md hover:scale-110 transition-all"
            src={food.image}
            alt=""
          />
          <div>
            <div className=" text-lg">
              <h3>Name: {food.category}</h3>
              <h4>Price: ${food.price}</h4>
              <h3>Owner: {food.name}</h3>
              <h5>Added Time: {time.toDateString()}</h5>
            </div>
            <AiFillDelete
              onClick={() => handleFoodRemove(food._id)}
              className="text-2xl text-red-600 cursor-pointer"
            ></AiFillDelete>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
