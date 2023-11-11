import { useLoaderData } from "react-router-dom";

const DetailsCard = () => {
  const singleFood = useLoaderData();
  console.log(singleFood);
  return (
    <div className="max-w-4xl mx-auto mt-10 mb-28">
      <div className="relative">
        <img
          className="mb-4 rounded-md w-full h-[60vh]"
          src={singleFood.image}
          alt=""
        />
        <div className="absolute mt-[-60px] ml-[630px]">
          <button className="px-8 py-2  rounded-bl-full rounded-tr-full hover:bg-[#caface] bg-[#F97316] hover:text-black text-white font-semibold">
            Order Me
          </button>
        </div>
      </div>
      <p className="text-lg">
        <span className="font-semibold">Description</span>:{" "}
        {singleFood.short_description}
      </p>
      <h1 className="text-lg">
        <span className="font-semibold">Name</span>: {singleFood.name}
      </h1>
      <h1 className="text-lg">
        <span className="font-semibold">Food Origin</span>:{" "}
        {singleFood.origin_country}
      </h1>
      <h1 className="text-lg">
        <span className="font-semibold">Quantity</span>: {singleFood.quantity}
      </h1>
      <h1 className="text-lg">
        <span className="font-semibold">Made By</span>: {singleFood.made_by}
      </h1>
      <h1 className="text-lg">
        <span className="font-semibold">Food Category</span>:{" "}
        {singleFood.category}
      </h1>
      <h1 className="text-lg">
        <span className="font-semibold">Price</span>: ${singleFood.price}
      </h1>
    </div>
  );
};

export default DetailsCard;
