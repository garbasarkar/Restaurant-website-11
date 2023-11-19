import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../PrivateAuth/PrivateAuth";
import swal from "sweetalert";

const UpdatePage = () => {
  const { user } = useContext(AuthContext);
  const updateFood = useLoaderData();
  const { id } = useParams();
  console.log(id);
  console.log(updateFood);

  const handleUpdateFormControl = (e) => {
    e.preventDefault();

    const update = e.target;
    const store = {
      name: update?.name.value,
      image: update?.image.value,
      category: update?.category.value,
      quantity: update?.quantity.value,
      price: update?.price.value,
      origin_country: update?.origin.value,
      short_description: update?.areas.value,
      customer_review: update?.review.value,
      made_by: update?.madeBy.value,
    };

    fetch(`http://localhost:5000/food/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(store),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal("Parcaes Food is Successful!");
      });
  };
  return (
    <div className="max-w-6xl mx-auto mb-20 flex flex-col  md:flex-row justify-between items-center gap-5 imgBg">
      <div className="flex-1 p-4 relative flex flex-col text-gray-700 w-full bg-white shadow-md rounded-xl bg-clip-border">
        <form onSubmit={handleUpdateFormControl}>
          <div className="flex flex-col md:flex-row mb-3 justify-between gap-5">
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="name"
              id=""
              placeholder="Food Name"
              defaultValue={updateFood.name}
            />
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="image"
              id=""
              placeholder="PhotoURL"
              defaultValue={updateFood.image}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-3 justify-between gap-5">
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="category"
              id=""
              placeholder="Food Category"
              defaultValue={updateFood.category}
            />
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="quantity"
              id=""
              placeholder="Quantity"
              defaultValue={updateFood.quantity}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-3 justify-between gap-5">
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="price"
              id=""
              placeholder="Price"
              defaultValue={updateFood.price}
            />
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="origin"
              id=""
              placeholder="Food Origin "
              defaultValue={updateFood.origin_country}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-3 justify-between gap-5">
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="madeBy"
              id=""
              placeholder="Made By"
              defaultValue={updateFood.made_by}
            />
            <input
              className="border py-2 rounded-md pl-2 w-full"
              type="text"
              name="review"
              id=""
              placeholder="Review"
              defaultValue={updateFood.customer_review}
            />
          </div>

          <textarea
            className="h-16 w-full border py-2 rounded-md pl-2 mb-3"
            name="areas"
            placeholder="Message"
            id=""
            cols="5"
            rows="10"
            defaultValue={updateFood.short_description}
          ></textarea>
          <input
            className=" py-2 mt-5 rounded-bl-full rounded-tr-full hover:bg-[#caface] bg-[#9316f9] hover:text-black text-white font-semibold w-full "
            type="submit"
            value="Update Food"
          />
        </form>
      </div>
      <div className="flex-1 space-y-3">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Update <span className="text-[#F97316]"> Form</span>
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
    </div>
  );
};

export default UpdatePage;
