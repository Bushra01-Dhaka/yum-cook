import Banner from "../Component/Banner";
// import Comments from "../Component/Comments";
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
      {/* <Comments/> */}
    </div>
  );
};

export default Home;
