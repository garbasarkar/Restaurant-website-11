import { BiHeart } from "react-icons/bi";
import { useEffect, useState } from "react";
const MenuItem = () => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    fetch("/Menuitem.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(setMenuData(data));
      });
  }, []);
  console.log(menuData);
  return (
    <div className="text-center max-w-6xl mx-auto mt-16">
      <h1 className="text-2xl font-semibold text-[#F97316]">Menu</h1>
      <h1 className="text-4xl font-semibold mb-2">Explore Our Best Menu</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        praesentium cum facilis minus harum! <br /> Doloribus maiores earum
        reiciendis labore dolore, sit dolorem nemo esse?
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  px-1 md:px-0">
        {menuData.map((menu) => (
          <div key={menu.id} className="border p-2 rounded-md ">
            <img className="h-44 w-full rounded" src={menu.image} alt="" />
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-semibold">{menu.name}</h1>
              <BiHeart className="text-[#F97316] text-[25px]"></BiHeart>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-left">Price: {menu.price}</p>
              <button className="flex justify-start mt-2 border px-4 py-1 rounded-md cursor-pointer border-[#F97316]">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
