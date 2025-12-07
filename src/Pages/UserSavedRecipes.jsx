import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getSaveRecipes } from "../Utilities/SaveRecipe";
import { FaStar } from "react-icons/fa";
import { getLikeData } from "../Utilities/AddToSave";

const UserSavedRecipes = () => {
  const data = useLoaderData();
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [likedRecipes, setLikedRecipes] = useState([]);

  const allRecipes = data.recipes;
  console.log("All Recipes", allRecipes);

  useEffect(() => {
    const savedRecipesData = getSaveRecipes();
    const convertedSavedRecipesData = savedRecipesData.map((id) =>
      parseInt(id)
    );
    console.log(convertedSavedRecipesData);
    const mySavedRecipes = allRecipes.filter((recipe) =>
      convertedSavedRecipesData.includes(recipe.id)
    );
    // console.log("Filered Saved Recipe Data: ", mySavedRecipes)
    setSavedRecipes(mySavedRecipes);
  }, []);

  useEffect(() => {
    const savedLikedRecipesData = getLikeData();
    const convertedSavedLikedRecipesData = savedLikedRecipesData.map((id) => parseInt(id));

    console.log(convertedSavedLikedRecipesData);
    const myLikedRecipes = allRecipes.filter((likes) => convertedSavedLikedRecipesData.includes(likes.id))
    setLikedRecipes(myLikedRecipes);
  }, [])

  return (
    <div className="min-h-[100vh]  ">
      <div className="p-20">
        <Tabs>
          <TabList>
            <Tab>Liked Recipes</Tab>
            <Tab>Saved Recipes</Tab>
          </TabList>

          <TabPanel>
            <>
              <div className="flex justify-center items-center">
                <div>
                  <h2 className="py-6 text-center text-4xl font-semibold text-[#3B1E54]">
                    My Liked Recipes
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-20">
                    {likedRecipes.map((item) => (
                      <div
                        key={item?.id}
                        item={item}
                        className="py-10 flex justify-center items-center gap-6 border-2 rounded-2xl shadow-2xl border-[#3B1E54] p-4 hover:bg-[#D4BEE4]"
                      >
                        {/* left */}
                        <div>
                          <img
                            className="w-[200px] h-[200px] rounded-2xl shadow-2xl"
                            src={item?.image}
                            alt=""
                          />
                        </div>
                        {/* right */}
                        <div>
                          <Link
                            className="underline"
                            to={`/recipeDetails/${item?.id}`}
                          >
                            <h3 className="text-2xl text-center text-slate-900 font-semibold p-6">
                              {item?.name}
                            </h3>
                          </Link>
                          <div className="flex justify-evenly  items-center">
                            <div className="flex items-center gap-1 border-r-2 pr-4">
                              <FaStar className="text-2xl text-yellow-400"></FaStar>
                              <p className="text-lg">{item?.rating}</p>
                            </div>
                            <div className="flex items-center gap-1 border-r-2 pr-4">
                              <p className="text-lg">
                                {item?.cookTimeMinutes} mins
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <p className="text-lg">{item?.cuisine} </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>


                </div>
              </div>
            </>
          </TabPanel>



          <TabPanel>
            <>
              <div className="flex justify-center items-center">
                <div>
                  <h2 className="py-6 text-center text-4xl font-semibold text-[#3B1E54]">
                    My Saved Recipes
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-20">
                    {savedRecipes.map((item) => (
                      <div
                        key={item?.id}
                        item={item}
                        className="py-10 flex justify-center items-center gap-6 border-2 rounded-2xl shadow-2xl border-[#3B1E54] p-4 hover:bg-[#D4BEE4]"
                      >
                        {/* left */}
                        <div>
                          <img
                            className="w-[200px] h-[200px] rounded-2xl shadow-2xl"
                            src={item?.image}
                            alt=""
                          />
                        </div>
                        {/* right */}
                        <div>
                          <Link
                            className="underline"
                            to={`/recipeDetails/${item?.id}`}
                          >
                            <h3 className="text-2xl text-center text-slate-900 font-semibold p-6">
                              {item?.name}
                            </h3>
                          </Link>
                          <div className="flex justify-evenly  items-center">
                            <div className="flex items-center gap-1 border-r-2 pr-4">
                              <FaStar className="text-2xl text-yellow-400"></FaStar>
                              <p className="text-lg">{item?.rating}</p>
                            </div>
                            <div className="flex items-center gap-1 border-r-2 pr-4">
                              <p className="text-lg">
                                {item?.cookTimeMinutes} mins
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <p className="text-lg">{item?.cuisine} </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>


                </div>
              </div>
            </>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default UserSavedRecipes;
