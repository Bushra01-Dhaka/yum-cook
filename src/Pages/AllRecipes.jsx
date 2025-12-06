import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { RiTimerFill } from "react-icons/ri";
import { Link } from "react-router";
import RecipeCard from "../Component/RecipeCard";

const AllRecipes = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.recipes);
      });
  }, []);

  console.log(allProducts);
  return (
    <div className="">
      <div className="flex justify-center flex-col text-center pt-40 pb-20 bg-[#EEEEEE] ">
        <p className="font-semibold text-lg">Fast Food Delivery, The Yum Way</p>
        <h2 className="text-4xl lg:text-7xl font-semibold text-[#3B1E54]">
          Discover Recipes
        </h2>

        <div className="lg:w-[60%] flex justify-center items-center gap-4 flex-wrap mx-auto mt-10">
          <p className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Breakfast
          </p>
          <p className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Appetizer
          </p>
          <p className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Lunch
          </p>
          <p className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Dinner
          </p>
          <p className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Dessert
          </p>
          <p className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Beverage
          </p>
          <p className="text-[#3B1E54] hover:bg-[#3B1E54] hover:text-[#EEEEEE] cursor-pointer border-2 border-[#3B1E54] bg-[#EEEEEE] p-2 rounded-[50px]">
            Snack
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-[80%] gap-6 mx-auto  mb-4 bg-[#EEEEEE] ">
        {allProducts.map((item) => (
          <RecipeCard key={item?.id} item={item}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
