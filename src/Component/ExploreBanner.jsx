import { Link } from "react-router";
// import manyLeafs from "../../assets/vegeWater.png";
import beefPlate from "../assets/2.png";
// import { useGSAP } from "@gsap/react";


const ExploreBanner = () => {


  return (
    <div id="exploreBanner" className="bg-linear-to-br from-[#3B1E54] to-[#562285] text-[#EEEEE] h-[100vh] p-20 flex justify-center items-center relative">
      <div>
        <div className="text-[8vw]  lg:text-[6vw] text-xs mx-auto font-bold relative z-6 text-center">
          <h2 className="text-[#EEEEEE]">Fuel Your Day</h2>
          <h2 className="text-[#EEEEEE]">with Healthy Goodness</h2>
          <Link to="/allRecipes" className="relative z-6 btn my-6 lg:w-[200px] lg:h-[50px] bg-linear-to-r shadow-md from-[#3B1E54] to-[#8022d3] text-[#F5EBE1] border-0 rounded-[50px] hover:bg-linear-to-bl">Explore Recipes</Link>
        </div>
       <img id="round_image" className="absolute top-[15%] left-[10%] lg:left-[30%] w-[80%] lg:w-[35%] z-2" src={beefPlate} alt="" />
      </div>

    </div>
  );
};

export default ExploreBanner;
