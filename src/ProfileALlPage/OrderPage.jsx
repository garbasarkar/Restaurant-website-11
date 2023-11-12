import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../PrivateAuth/PrivateAuth";

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
  console.log(order);
  return (
    <div className="max-w-6xl mx-auto my-20">
      {order.map((food) => (
        <div key={food._id}>
          <img src={food.image} alt="" />
          <div></div>
          
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
