const Features = () => {
  return (
    <div className="relative">
      <div className="flex justify-center items-center h-[100vh] p-10 lg:p-20 bg-[#9B7EBD]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex flex-col bg-[#EEEEEE] justify-center items-center  shadow-2xl p-6 rounded-xl text-center text-slate-800">
            <h2 className="text-[8vh] text-[#3B1E54] font-[800]">1</h2>
            <p className="text-xl text-[#3B1E54]">Discover Recipes</p>
            <p className="p-4">
              Explore a wide variety of dishes from around the world. Find new
              flavors, fresh ideas, and easy-to-follow recipes perfect for any
              occasion.
            </p>
          </div>
          <div className="flex flex-col bg-[#EEEEEE] justify-center items-center  shadow-2xl p-6 rounded-xl text-center text-slate-800">
            <h2 className="text-[8vh] text-[#3B1E54] font-[800]">2</h2>
            <p className="text-xl text-[#3B1E54]">Save Recipes</p>
            <p className="p-4">
              Keep your favorite dishes in one place with a single tap. Build
              your own personal cookbook and revisit your saved recipes anytime.
            </p>
          </div>
          <div className="flex flex-col bg-[#EEEEEE] justify-center items-center  shadow-2xl p-6 rounded-xl text-center text-slate-800">
            <h2 className="text-[8vh] text-[#3B1E54] font-[800]">3</h2>
            <p className="text-xl text-[#3B1E54]">Share Recipes</p>
            <p className="p-4">
              Share your best dishes with friends and family instantly. Spread
              the joy of good food by sending recipes across your social
              platforms.
            </p>
          </div>
        </div>
      </div>

        {/* tilt */}
      <div class="tilt-feature ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>



    </div>
  );
};

export default Features;
