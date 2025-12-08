import img from "../assets/breakfast.jpg"
import img1 from "../assets/cuttingVege.jpg"
import img2 from "../assets/cookingPartner.jpg"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from "aos";
gsap.registerPlugin(ScrollTrigger);

const CookingTherapy = () => {
   const cookingTherapyRef = useRef(null);
    Aos.init();

     useEffect(() => {
      const t3 = gsap.timeline({
         scrollTrigger: {
            trigger: ".cookingTherapyBanner",
            scrub: 2,
            start: "top 80%",
            end: "bottom 20%",
            // markers: true,
         }
      });

    
      t3.to(".title", {
        scale:1.1,
        delay:1,
        duration:2
      }, "three")

      t3.to(".pera1", {
        y:50,
        duration:2
      }, "three")
      t3.to(".pera2", {
        y:50,
        duration:2
      }, "three")


   }, []);



  
  return (
    <div ref={cookingTherapyRef} className="cookingTherapyBanner flex bg-linear-to-b from-[#EEEEEE] to-[#D4BEE4] justify-center items-center min-h-[100vh]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 p-10 lg:p-20">
        {/* left */}
        <div data-aos="zoom-in"  data-aos-duration="2000" className="img-div flex-1 grid grid-cols-2 gap-4 p-6">
            <img className="img1 rounded-2xl shadow-2xl" src={img1} alt="" />
            <img className="img2 rounded-2xl shadow-2xl" src={img} alt="" />
            <img className="img3 rounded-2xl col-span-2 shadow-2xl" src={img2} alt="" />
        </div>
        {/* right */}
        <div className="flex-1">
            <h2 className="title text-3xl lg:text-[10vh] font-bold text-[#3B1E54]">Love Tastes Better When You Cook It</h2>

            <p className="pera1 py-4">
                Cooking isn’t just about ingredients—it's a beautiful way to express care, warmth, and affection. A homemade meal tells your loved ones that you took the time to think of them, choose their favourite flavours, and create something special. Nothing shows love more than a dish made from the heart.
            </p>

            <p className="pera2 py-2">
                Food has a way of carrying emotion—every flavour, every aroma tells a story. When you cook for someone you love, you're not just serving a meal; you're offering a piece of your heart. It’s a gesture that speaks louder than words and creates memories around the table.
            </p>

        </div>
      </div>
    </div>
  );
};

export default CookingTherapy;
