import restu from "/src/assets/menuItem/oeter.jpg";
const WelCome = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-5 max-w-6xl mx-auto mt-20 px-1 md:px-0">
      <div className="flex-1">
        <img
          className="rounded-md hover:scale-105 transition-all hover:shadow-md"
          src={restu}
          alt=""
        />
      </div>
      <div className="flex-1 space-y-3">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Welcome to Our <br />{" "}
          <span className="text-[#F97316]">Restaurant</span>
        </h1>
        <p className="text-sm">
          Combined with a handful of model sentence structures, to generate
          lorem ipsum whice looks reasonable. The generated lorem ipsum is
          thermfore always free from repetition injected humor, or non
          characteristic words therefore. Combined with a handful of model
          sentnce structures, to gencrate lorem ipsum whice looks reasonable.
          The generated lorem ipsum is therefore always free from repetition,
          injected humor, or non-characteristic words therefore. Combinene with
          a handful of model sentence structures, to generate lorem ipsum whice
          looks reasonable. The generated lorem psum is therefore always free
          from repetition injected humor, or non-characteristic words therefore.
        </p>
        <button className="px-5 py-2 rounded-bl-full rounded-tr-full hover:bg-[#caface] bg-[#F97316] hover:text-black text-white font-semibold">
          Make Reservation
        </button>
      </div>
    </div>
  );
};

export default WelCome;
