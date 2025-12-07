import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { RiTimerFill } from "react-icons/ri";
import { Link } from "react-router";
import RecipeCard from "../Component/RecipeCard";

const AllRecipes = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.recipes);
         setFilteredProducts(data.recipes);  // default view
      });
  }, []);

  const filterByCuisine = (cuisine) => {
  const sorted = allProducts.filter(item => item.cuisine === cuisine);
  setFilteredProducts(sorted);
  setVisibleCount(6); // reset show more section
};

 


  // console.log(allProducts);
  return (
    <div className="">
      <div className="flex justify-center flex-col text-center pt-40 pb-20 bg-[#EEEEEE] ">
        <p className="font-semibold text-lg">Let’s Make Something Yummy!</p>
        <h2 className="text-4xl lg:text-7xl font-semibold text-[#3B1E54]">
          Discover Recipes
        </h2>

        <div className="lg:w-[60%] flex justify-center items-center gap-4 flex-wrap mx-auto mt-10">
          <p onClick={() => filterByCuisine("Italian")} className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Italian
          </p>
          <p onClick={() => filterByCuisine("Asian")} className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Asian
          </p>
          <p onClick={() => filterByCuisine("American")} className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            American
          </p>
          <p onClick={() => filterByCuisine("Mexican")} className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Mexican
          </p>
          <p onClick={() => filterByCuisine("Mediterranean")} className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Mediterranean
          </p>
          <p onClick={() => filterByCuisine("Pakistani")} className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Pakistani
          </p>
          <p onClick={() => filterByCuisine("Italian")} className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Japanese
          </p>
           <p onClick={() => filterByCuisine("Moroccan")} className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Moroccan
          </p>
           <p onClick={() => filterByCuisine("Korean")} className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Korean
          </p>
           <p  onClick={() => filterByCuisine("Greek")} className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Greek
          </p>
           <p onClick={() => filterByCuisine("Thai")} className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Thai
          </p>
             <p onClick={() => filterByCuisine("Indian")} className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Indian
          </p>
           <p onClick={() => filterByCuisine("Turkish")} className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Turkish
          </p>
           <p onClick={() => filterByCuisine("Brazilian")} className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Brazilian
          </p>
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-3 w-full lg:w-[80%] gap-6 lg:mx-auto  mb-4 bg-[#EEEEEE] ">
        {filteredProducts.slice(0, visibleCount).map((item) => (
          <RecipeCard key={item?.id} item={item}></RecipeCard>
        ))}
      </div>

      {/* show more or show less button */}
      <div className="text-center pt-10 pb-20">
        {visibleCount < filteredProducts.length ? (
          <button
            className="px-6 py-2 bg-linear-to-r from-[#3B1E54] to-[#4f2079] hover:bg-linear-to-l text-white rounded-lg"
            onClick={() => setVisibleCount(filteredProducts.length)}
          >
            Show More
          </button>
        ) : (
          <button
            className="px-6 py-2 bg-linear-to-r from-[#3B1E54] to-[#4f2079] hover:bg-linear-to-l text-white rounded-lg"
            onClick={() => setVisibleCount(6)}
          >
            Show Less
          </button>
        )}
      </div>
      
    </div>
  );
};

export default AllRecipes;
