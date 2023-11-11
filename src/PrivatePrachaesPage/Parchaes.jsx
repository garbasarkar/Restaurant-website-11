import { useContext } from "react";
import ParChaesBenar from "./ParChaesBenar";
import { AuthContext } from "../PrivateAuth/PrivateAuth";

const Parchaes = () => {
  const { user } = useContext(AuthContext);
  const handleFormControl = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const photo = from.photo.value;
    const category = from.category.value;
    const quantity = from.quantity.value;
    const price = from.price.value;
    const origin = from.origin.value;
    const areas = from.areas.value;
    const email = user?.email;
    const userName = user?.displayName;
    const order = {
        email,
        userName,
        name,
        photo,
        category, 
        quantity,
        price,
        origin,
        areas
    }
    
    console.log(order)
  };
  return (
    <div>
      <ParChaesBenar></ParChaesBenar>

      <div className="max-w-6xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex-1 space-y-3">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Book A <span className="text-[#F97316]"> Table</span>
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
                placeholder="Food Name"
              />
              <input
                className="border py-2 rounded-md pl-2 w-full"
                type="text"
                name="photo"
                id=""
                placeholder="PhotoURL"
              />
            </div>
            <div className="flex flex-col md:flex-row mb-3 justify-between gap-5">
              <input
                className="border py-2 rounded-md pl-2 w-full"
                type="text"
                name="category"
                id=""
                placeholder="Food Category"
              />
              <input
                className="border py-2 rounded-md pl-2 w-full"
                type="text"
                name="quantity"
                id=""
                placeholder="Quantity"
              />
            </div>
            <div className="flex flex-col md:flex-row mb-3 justify-between gap-5">
              <input
                className="border py-2 rounded-md pl-2 w-full"
                type="text"
                name="price"
                id=""
                placeholder="Price"
              />
              <input
                className="border py-2 rounded-md pl-2 w-full"
                type="text"
                name="origin"
                id=""
                placeholder="Food Origin "
              />
            </div>

            <textarea
              className="h-16 w-full border py-2 rounded-md pl-2 mb-3"
              name="areas"
              placeholder="Message"
              id=""
              cols="5"
              rows="10"
            ></textarea>
            <input
              className=" py-2 mt-5 rounded-bl-full rounded-tr-full hover:bg-[#caface] bg-[#F97316] hover:text-black text-white font-semibold w-full "
              type="submit"
              value="Add to Cart"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Parchaes;
