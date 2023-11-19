import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../PrivateAuth/PrivateAuth";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";

const FormFoodAdd = () => {
  const { user } = useContext(AuthContext);
  const singleFood = useLoaderData();
  // const handleFormControl = (e) => {
  //   e.preventDefault();
  //   const from = e.target;
  //   const name = from.name.value;
  //   const image = from.photo.value;
  //   const category = from.category.value;
  //   const quantity = from.quantity.value;
  //   const price = from.price.value;
  //   const time = from.time.value;
  //   const email = user?.email;
  //   const userName = user?.displayName;
  //   const emails = from.email.value;

  //   const foodAdd = {
  //     email: email,
  //     userName: userName,
  //     name: name,
  //     image: image,
  //     category: category,
  //     quantity: quantity,
  //     price: price,
  //     time: time,
  //     emails: emails,
  //   };

  //   //   fetch(`https://assignment-11-restaurent-server.vercel.app/food`, {
  //   //     method: "POST",
  //   //     headers: {
  //   //       "content-type": "application/json",
  //   //     },
  //   //     body: JSON.stringify(foodAdd),
  //   //   })
  //   //     .then((res) => res.json())
  //   //     .then((data) => {
  //   //       console.log(data);
  //   //       swal("Parcaes Food is Successful!");
  //   //       from.reset();
  //   //     });
  // };
  const tim = new Date();

  const handleFormControl = (e) => {
    e.preventDefault();

    const store = {
      name: singleFood?.name,
      image: singleFood?.image,
      category: singleFood?.category,
      price: singleFood?.price,
      quantity: singleFood?.quantity,
      made_by: singleFood?.made_by,
      origin_country: singleFood?.origin_country,
      short_description: singleFood?.short_description,
      customer_review: singleFood?.customer_review,
      email: user?.email,
      displayName: user?.displayName,
      time: tim.toDateString(),
    };

    fetch(`https://assignment-11-restaurent-server.vercel.app/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(store),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal("Order is Successful!");
      });
  };

  // const handleFormFoodControl = (e) => {
  //   e.preventDefault();
  //   const from = e.target;
  //   const name = from.name.value;
  //   const image = from.photo.value;
  //   const category = from.category.value;
  //   const quantity = from.quantity.value;
  //   const price = from.price.value;
  //   const origin = from.origin.value;
  //   const areas = from.areas.value;
  //   const email = user?.email;
  //   const userName = user?.displayName;
  //   const review = from.review.value;
  //   const madeBy = from.madeBy.value;

  //   const formFood = {
  //     email: email,
  //     userName: userName,
  //     name: name,
  //     image: image,
  //     category: category,
  //     quantity: quantity,
  //     price: price,
  //     origin_country: origin,
  //     short_description: areas,
  //     customer_review: review,
  //     made_by: madeBy,
  //   };

  //   fetch(`https://assignment-11-restaurent-server.vercel.app/formFood`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(formFood),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       from.reset();
  //     });
  //   console.log(formFood);
  // };
  return (
    // <div>
    //   <div className="max-w-6xl mx-auto mb-20 flex flex-col  md:flex-row justify-between items-center gap-5 imgBg">
    //     <div className="flex-1 p-4 relative flex flex-col text-gray-700 w-full bg-white shadow-md rounded-xl bg-clip-border">
    //       <form onSubmit={handleFormFoodControl}>
    //         <div className="flex flex-col md:flex-row mb-3 justify-between gap-5">
    //           <input
    //             className="border py-2 rounded-md pl-2 w-full"
    //             type="text"
    //             name="name"
    //             id=""
    //             placeholder="Food Name"
    //           />
    //           <input
    //             className="border py-2 rounded-md pl-2 w-full"
    //             type="text"
    //             name="photo"
    //             id=""
    //             placeholder="PhotoURL"
    //           />
    //         </div>
    //         <div className="flex flex-col md:flex-row mb-3 justify-between gap-5">
    //           <input
    //             className="border py-2 rounded-md pl-2 w-full"
    //             type="text"
    //             name="category"
    //             id=""
    //             placeholder="Food Category"
    //           />
    //           <input
    //             className="border py-2 rounded-md pl-2 w-full"
    //             type="text"
    //             name="quantity"
    //             id=""
    //             placeholder="Quantity"
    //           />
    //         </div>
    //         <div className="flex flex-col md:flex-row mb-3 justify-between gap-5">
    //           <input
    //             className="border py-2 rounded-md pl-2 w-full"
    //             type="text"
    //             name="price"
    //             id=""
    //             placeholder="Price"
    //           />
    //           <input
    //             className="border py-2 rounded-md pl-2 w-full"
    //             type="text"
    //             name="origin"
    //             id=""
    //             placeholder="Food Origin "
    //           />
    //         </div>
    //         <div className="flex flex-col md:flex-row mb-3 justify-between gap-5">
    //           <input
    //             className="border py-2 rounded-md pl-2 w-full"
    //             type="text"
    //             name="madeBy"
    //             id=""
    //             placeholder="Made By"
    //           />
    //           <input
    //             className="border py-2 rounded-md pl-2 w-full"
    //             type="text"
    //             name="review"
    //             id=""
    //             placeholder="Review"
    //           />
    //         </div>

    //         <textarea
    //           className="h-16 w-full border py-2 rounded-md pl-2 mb-3"
    //           name="areas"
    //           placeholder="Message"
    //           id=""
    //           cols="5"
    //           rows="10"
    //         ></textarea>
    //         <input
    //           className=" py-2 mt-5 rounded-bl-full rounded-tr-full hover:bg-[#caface] bg-[#9316f9] hover:text-black text-white font-semibold w-full "
    //           type="submit"
    //           value="Add to Food"
    //         />
    //       </form>
    //     </div>
    //     <div className="flex-1 space-y-3">
    //       <h1 className="text-2xl md:text-4xl font-semibold">
    //         Book A <span className="text-[#F97316]"> Table</span>
    //       </h1>
    //       <p>
    //         Certainly! It would be helpful if you provide more details about the
    //         product, but here's a generic product ad short description that you
    //         can use as a starting point:
    //       </p>
    //       <p>
    //         Don't miss out on the opportunity to enhance your [daily routine /
    //         lifestyle / productivity]. Order [Product Name] today and experience
    //         [mention the positive outcomes or experiences]. Click "Add to Cart"
    //         now!
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-6xl mx-auto mt-20 mb-20 flex flex-col md:flex-row justify-between items-center gap-5">
      <Helmet>
        <title>Restaurant | Purchase</title>
      </Helmet>
      <div className="flex-1 space-y-3">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Purchase Book A <span className="text-[#F97316]"> Table</span>
        </h1>
        <p>
          Certainly! It would be helpful if you provide more details about the
          product, but here's a generic product ad short description that you
          can use as a starting point:
        </p>
        <p>
          Don't miss out on the opportunity to enhance your [daily routine /
          lifestyle / productivity]. Order [Product Name] today and experience
          [mention the positive outcomes or experiences]. Click "Add to Cart"
          now!
        </p>
      </div>
      <div className="flex-1 p-4 relative flex flex-col text-gray-700 w-full bg-white shadow-md rounded-xl bg-clip-border">
        <form onSubmit={handleFormControl}>
          <div className="flex flex-col md:flex-row mb-3 justify-between gap-5">
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="name"
              id=""
              placeholder="Name"
              defaultValue={singleFood.name}
            />
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="photo"
              id=""
              placeholder="PhotoURL"
              defaultValue={singleFood.image}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-3 justify-between gap-5">
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="category"
              id=""
              placeholder="Food Name"
              defaultValue={singleFood.category}
            />
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="quantity"
              id=""
              placeholder="Quantity"
              defaultValue={singleFood.quantity}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-3 justify-between gap-5">
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="price"
              id=""
              placeholder="Price"
              defaultValue={singleFood?.price}
            />
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="email"
              id=""
              placeholder="Email"
              defaultValue={user?.email}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-3 justify-between gap-5">
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="time"
              id=""
              placeholder="Buying Time"
              defaultValue={tim.toDateString()}
              required
            />
          </div>
          <input
            // onClick={() => hanldeFoodOrder(singleFood._id)}
            className=" py-2 mt-5 rounded-bl-full rounded-tr-full hover:bg-[#caface] bg-[#F97316] hover:text-black text-white font-semibold w-full "
            type="submit"
            value="Purchase"
          />
        </form>
      </div>
    </div>
  );
};

export default FormFoodAdd;
