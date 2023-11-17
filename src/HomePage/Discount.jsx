import vegetable from "/src/assets/Thai-removebg-preview.png";
const Discount = () => {
  return (
    <div className="px-1 md:px-0 mb-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 max-w-6xl mx-auto rounded-md bg-white shadow-md p-7 mt-16">
        <div className="flex-1 flex justify-between items-center">
          <img className="w-1/2 md:w-2/3" src={vegetable} alt="" />
          <div>
            <h1 className="text-xl font-semibold">
              Only For <br />{" "}
              <span className="text-2xl md:text-3xl text-[#F97316]">
                Vegetables!
              </span>
              <p>
                Regular Price <br />{" "}
                <span className="text-[#F97316] font-semibold">$54</span>
              </p>
              <p>
                Offer Price <br />{" "}
                <span className="text-[#F97316] font-semibold">$27</span>
              </p>
            </h1>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-right text-2xl font-semibold">Special Offer</h4>
          <h1 className="text-[50px] md:text-[100px] font-bold text-[#F97316]">
            50% OFF
          </h1>
          <p>
            Combined with a handful of model sentence structures, to generate
            lorem ipsum whice looks reasomable. The generated lorem ipsum is
            thereforem always free from repetition, injected humor, or
            non-characteristic words there therefore.
          </p>
          <h2 className="text-right text-lg font-semibold text-[#F97316]">
            Use Coupon: W5DFTR54SX
          </h2>
          <div className="text-right mt-3">
            <button className="px-5 py-2 rounded-bl-full rounded-tr-full hover:bg-[#caface] bg-[#F97316] hover:text-black text-white font-semibold">
              ORDER NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
