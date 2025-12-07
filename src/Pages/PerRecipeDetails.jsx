import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  FaArrowRight,
  FaBookmark,
  FaRegBookmark,
  FaStar,
} from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { MdOutlineShare } from "react-icons/md";
import { useParams } from "react-router";
import RecipeCard from "../Component/RecipeCard";
import { addToLikedDB } from "../Utilities/AddToSave";
import { addToSaveRecipeDB } from "../Utilities/SaveRecipe";

const PerRecipeDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [eachRecipe, setEachRecipe] = useState([]);
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEachRecipe(data);
      });
  }, [id]);

  console.log(eachRecipe);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.recipes);
      });
  }, []);

  useEffect(() => {
    if (eachRecipe && allProducts.length > 0) {
      const similar = allProducts.filter(
        (item) =>
          item.cuisine === eachRecipe.cuisine && item.id !== eachRecipe.id
      );
      setSimilarRecipes(similar);
    }
  }, [eachRecipe, allProducts]);


  const handleLikeRecipe = (id) => {
        //  console.log("Like ", id)
         addToLikedDB(id);
  }

  const handleSavedRecipe = (id) => {
    //  console.log("Saved Recipe")
     addToSaveRecipeDB(id);
  }


  return (
    <div>
      <div className="flex justify-between items-start gap-6 pt-40 px-20 min-h-[70vh] bg-[#EEEEEE]">
        {/* left */}
        <div className="flex-1">
          <img
            className="rounded-xl shadow-2xl"
            src={eachRecipe?.image}
            alt=""
          />
        </div>

        {/* right */}
        <div className="flex-1 p-8">
          <h2 className="text-6xl font-bold text-[#3B1E54]">
            {eachRecipe?.name}
          </h2>

          <div className="flex justify-start gap-10  items-center py-6">
            <div className="flex flex-col justify-start items-center gap-1 border-r-2 px-4">
              <h2 className="text-4xl font-bold">
                {eachRecipe?.prepTimeMinutes}{" "}
              </h2>
              <p className="text-lg">mins</p>
            </div>
            <div className="flex flex-col items-center gap-1 border-r-2 px-4">
              <h2 className="text-4xl font-bold">
                {eachRecipe?.caloriesPerServing}
              </h2>
              <p className="text-lg">Calories</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-4xl font-bold">
                {eachRecipe?.ingredients?.length}
              </h2>
              <p className="text-lg">Ingredients</p>
            </div>
          </div>

          <div className="flex justfy-center gap-6 items-center cursor-pointer">
            <p onClick={() => handleLikeRecipe(id)} className="text-2xl">
              <AiOutlineHeart />
            </p>
            <p onClick={() => handleSavedRecipe(id)} className="text-2xl">
              <FaRegBookmark />
            </p>
            <p className="text-2xl">
              <MdOutlineShare />
            </p>
          </div>

          <div className="py-8">
            <h2 className="text-4xl font-bold py-4">Ingredients</h2>
            {eachRecipe?.ingredients?.map((item, index) => (
              <div item={item} key={index} className="">
                <p className="text-lg py-1">
                  <FaArrowRight className="inline mr-2 text-[#3B1E54]"></FaArrowRight>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="px-20 py-10 bg-[#3B1E54] text-[#EEEEEE] lg:w-[70%] rounded-2xl shadow-2xl mx-auto mb-20">
        <div className="flex items-center">
          <h2 className="text-4xl font-bold text-[#EEEEEE]">Cooking Steps</h2>
          <GiCook className=" text-5xl" />
        </div>
        <div className="py-4">
          {eachRecipe?.instructions?.map((item, index) => (
            <div item={item} key={index} className="">
              <p className="text-lg py-1">
                <FaArrowRight className="inline mr-2 text-[#EEEEEE]"></FaArrowRight>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-20">
        <h2 className="text-4xl text-center font-bold text-[#3B1E54]">
          Similar Recipes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-[100%] gap-10 mx-auto p-10 mb-4 bg-[#EEEEEE] ">

          {similarRecipes && similarRecipes.length > 0 ? (
            similarRecipes.map((item) => (
              <RecipeCard key={item?.id} item={item} />
            ))
          ) : (
             <div className="flex justify-center">
               <p className="text-center py-4 text-2xl text-slate-900">
              No Similar Recipe Found
            </p>
             </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PerRecipeDetails;
