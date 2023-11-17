import Review from "./Review";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mt-5 mb-8">
        <h1 className="">TEAM</h1>
        <h4 className="text-2xl md:text-4xl font-semibold">
          Our <span className="text-[#F97316]">Experts</span>
        </h4>
        <p className="text-lg">
          Mollis in arcu est et. Arcu nibh eget neque eget elementum vehicula
          tempus mattis neque. Mi, <br /> commodo eget amet, ante fringilla.
          Gravida elit integer faucibus.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="backImg2">
          <ul className="relative text-black  text-left  py-16 px-3 hover:bg-gradient-to-r from-purple-500/75 to-blue-500/80 transition-all">
            <h4 className="text-lg">CHEF</h4>
            <h3 className="text-2xl font-semibold">Jack White</h3>
            <p>
              Duis varius in interdum ut. Viverra tristique odio nunc Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Magni,
              aspernatur praesentium. <br /> dolor, sed suscipit diam massa
              lobortis.
            </p>
          </ul>
        </div>
        <div className="backImg1 ">
          <ul className="relative text-white  text-left  py-16  px-3 hover:bg-gradient-to-r from-purple-500/75 to-blue-500/80 transition-all">
            <h4 className="text-lg">CHEF</h4>
            <h3 className="text-2xl font-semibold">Jack White</h3>
            <p>
              Duis varius in interdum ut. Viverra tristique odio nunc Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Magni,
              aspernatur praesentium. <br /> dolor, sed suscipit diam massa
              lobortis.
            </p>
          </ul>
        </div>

        <div className="backImg3">
          <ul className="relative text-black  text-left  py-16  px-3 hover:bg-gradient-to-r from-purple-500/75 to-blue-500/80 transition-all">
            <h4 className="text-lg">CHEF</h4>
            <h3 className="text-2xl font-semibold">Jack White</h3>
            <p>
              Duis varius in interdum ut. Viverra tristique odio nunc Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Magni,
              aspernatur praesentium. <br /> dolor, sed suscipit diam massa
              lobortis.
            </p>
          </ul>
        </div>
      </div>
      <Review></Review>
    </div>
  );
};

export default Home;
