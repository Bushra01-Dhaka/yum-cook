import fishPlate from "../assets/fishPlate.png";
import leaf1 from "../assets/leaf.png";
import fruits from "../assets/21.png";
import leaf2 from "../assets/leafs.jpg";
import tomato from "../assets/tomato2.jpg";
import floatingStawberry from "../assets/floatingBerries.jpg";
import teaLeaf from "../assets/teaLeaf1.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="relative z-5 hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-[10vh] lg:text-[20vh] lg:text-8xl  text-[#3B1E54] font-[900] uppercase">
              Yum Cook
            </h1>
            <p className="mb-5 text-lg text-[#18141b]">
              Cook Something Amazing Today
            </p>
            <Link to="/allRecipes">
              <button className="btn btn-primary bg-[#3B1E54] border-0 hover:shadow-md hover:shadow-[#3B1E54]">
                Explore Recipes Now
              </button>
            </Link>
          </div>
        </div>

        <img
          className="z-3 w-[70%] lg:w-[30%] absolute right-0 top-[55%]"
          src={fishPlate}
          alt=""
        />
        <img
          className=" w-[20%] absolute right-0 top-[15%]"
          src={tomato}
          alt=""
        />
        <img
          className="z-2 w-[10%] absolute right-[20%] top-[55%]"
          src={teaLeaf}
          alt=""
        />
        <img
          className="z-2 w-[10%] absolute rotate-[-90deg] right-[20%] top-[75%]"
          src={teaLeaf}
          alt=""
        />
        <img
          className="absolute z-3 w-[10%] rotate-[-180deg] top-[25%] left-[55%]"
          src={leaf1}
          alt=""
        />
        <img
          className="absolute z-3 w-[10%] rotate-[-80deg] top-[35%] left-[30%]"
          src={leaf2}
          alt=""
        />
        <img
          className="w-[50%] lg:w-[25%] absolute left-[-5%] top-[0%]"
          src={fruits}
          alt=""
        />
        <img
          className="w-[40%] lg:w-[35%] absolute left-[-5%] top-[25%]"
          src={floatingStawberry}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
