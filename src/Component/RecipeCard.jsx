import { AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const RecipeCard = ({ item }) => {
  const { image, name, rating, cookTimeMinutes, cuisine } = item;
  return (
    <>
      <Link to={`/recipeDetails/${item?.id}`}>
        <div className="lg:h-[400px] lg:w-[350px] bg-slate-100 text-slate-700 relative  p-6 rounded-lg shadow-2xl flex flex-col justify-end">
          <img
            className="lg:w-[400px] lg:h-[200px] object-cover mx-auto rounded-2xl"
            src={image}
            alt=""
          />
          <h3 className="text-2xl text-center text-slate-900 font-semibold p-6">
            {name}
          </h3>
          <div className="flex justify-evenly  items-center">
            <div className="flex items-center gap-1 border-r-2 pr-4">
              <FaStar className="text-2xl text-yellow-400"></FaStar>
              <p className="text-lg">{rating}</p>
            </div>
            <div className="flex items-center gap-1 border-r-2 pr-4">
              <p className="text-lg">{cookTimeMinutes} mins</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-lg">{cuisine} </p>
            </div>
          </div>
          {/* <p className="text-3xl font-bold text-red-500 absolute top-[10%] right-[10%]">
            <AiOutlineHeart></AiOutlineHeart>
          </p> */}
        </div>
      </Link>
    </>
  );
};

export default RecipeCard;
