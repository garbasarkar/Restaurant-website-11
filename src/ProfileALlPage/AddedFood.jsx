import { useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const AddedFood = () => {
  const AddedAllFood = useLoaderData();
  console.log(AddedAllFood);
  return <div className="max-w-6xl mx-auto mt-10 mb-20 grid grid-cols-1 md:grid-cols-2 gap-5 ">
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
        <h3>Name: {addedFood.name}</h3>
        <h4>Price: ${addedFood.price}</h4>
        <h3>Owner: {addedFood.displayName}</h3>
        <h5>Added Time: </h5>
      </div>
      <AiFillDelete
        // onClick={() => handleFoodRemove(food._id)}
        className="text-2xl text-red-600 cursor-pointer"
      ></AiFillDelete>
    </div>
  ))}
</div>
};

export default AddedFood;
