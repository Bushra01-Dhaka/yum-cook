import fishPlate from "../assets/fishPlate.png";
import leaf1 from "../assets/leaf.png";
import fruits from "../assets/21.png";
import leaf2 from "../assets/leafs.jpg";
import tomato from "../assets/tomato2.jpg";
import nuts from "../assets/nuts.png";
import teaLeaf from "../assets/teaLeaf1.jpg";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
      const t1 = gsap.timeline();

      t1.to(".main-title", {
        delay:1,
        duration:2,
        scale:1.1
      },'one')

      t1.to(".fishPlate", {
        right:"8%",
        delay:1,
        duration:2,
        scale:1.1
      },'one')

      t1.to(".teaLeaf", {
        duration:2,
        delay:1,
        right:"6%",
      },'one')

      t1.to(".tomato",{
        delay:1,
        duration:2,
        scale:1.2,
        
      },'one')

      t1.to(".leaf1",{
        delay:1,
        duration:2,
        left:"56%",
        rotate:"120deg"
      },'one')

      t1.to(".leaf2", {
        delay:1,
        duration:2,
        scale:1.2,
        rotate:"-90deg"
      },'one')

      t1.to(".nuts", {
        scale:1.3,
        delay:1,
        duration:2,
        top:"40%"
      },'one')

      t1.to(".fruits", {
        delay:1,
        duration:3,
        // rotate:"120deg",
        top:"65%",
      },'one')

  }, [])


  return (
    <div ref={bannerRef} className="banner">
      <div className="hero min-h-screen bg-white">
        <div className="relative z-5 hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="main-title mb-5 text-[10vh] lg:text-[20vh] lg:text-8xl  text-[#3B1E54] font-[900] uppercase">
              Yum Cook
            </h1>
            <p className="mb-5 text-lg text-[#18141b]">
              Cook Something Amazing Today
            </p>
            <Link to="/allRecipes">
              <button className="btn btn-primary bg-linear-to-r from-[#3B1E54] to-[#4f2079] hover:bg-linear-to-l order-0 hover:shadow-md hover:shadow-[#3B1E54]">
                Explore Recipes Now
              </button>
            </Link>
          </div>
        </div>

        <img
          className="fishPlate z-3 w-[70%] lg:w-[30%] absolute right-0 top-[55%]"
          src={fishPlate}
          alt=""
        />
        <img
          className="tomato w-[20%] absolute right-[5%] top-[15%]"
          src={tomato}
          alt=""
        />
        <img
          className="teaLeaf z-2 w-[10%] absolute right-[20%] top-[55%]"
          src={teaLeaf}
          alt=""
        />
        <img
          className="teaLeaf z-2 w-[10%] absolute rotate-[-90deg] right-[20%] top-[75%]"
          src={teaLeaf}
          alt=""
        />
        <img
          className="leaf1 absolute z-3 w-[10%] rotate-[-180deg] top-[25%] left-[55%]"
          src={leaf1}
          alt=""
        />
        <img
          className="leaf2 absolute z-3 w-[10%] rotate-[-80deg] top-[35%] left-[30%]"
          src={leaf2}
          alt=""
        />
        <img
          className="fruits z-3 w-[50%] lg:w-[25%] absolute left-[-5%] top-[0%]"
          src={fruits}
          alt=""
        />
        <img
          className="nuts z-2 w-[40%] lg:w-[20%] absolute left-[-5%] top-[50%]"
          src={nuts}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
