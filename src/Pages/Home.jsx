import Banner from "../Component/Banner";
import CookingTherapy from "../Component/CookingTherapy";
import ExploreBanner from "../Component/ExploreBanner";
import Features from "../Component/Features";
import AllRecipes from "./AllRecipes";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <CookingTherapy />
      <AllRecipes />
      <ExploreBanner />
    </div>
  );
};

export default Home;
