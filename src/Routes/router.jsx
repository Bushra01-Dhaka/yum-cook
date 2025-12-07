import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllRecipes from "../Pages/AllRecipes";
import PerRecipeDetails from "../Pages/PerRecipeDetails";
import UserSavedRecipes from "../Pages/UserSavedRecipes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/allRecipes",
          element:<AllRecipes/>
        },
        {
          path:"/recipeDetails/:id",
          element:<PerRecipeDetails/>
        },
        {
          path:"/savedRecipes",
          element:<UserSavedRecipes/>,
          loader:() => fetch(`https://dummyjson.com/recipes`)
        }
    ]
  },
]);

export default router