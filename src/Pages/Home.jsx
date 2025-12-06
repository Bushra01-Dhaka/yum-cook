import Banner from "../Component/Banner"
import ExploreBanner from "../Component/ExploreBanner"
import Features from "../Component/Features"
import AllRecipes from "./AllRecipes"


const Home = () => {
  return (
    <div>
        <Banner/>
         <Features/>
        <ExploreBanner/>
        <AllRecipes/>
    </div>
  )
}

export default Home