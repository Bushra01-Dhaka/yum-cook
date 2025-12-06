import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllRecipes from "../Pages/AllRecipes";
import PerRecipeDetails from "../Pages/PerRecipeDetails";


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
        }
    ]
  },
]);

export default router