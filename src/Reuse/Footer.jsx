import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="flex justify-center items-center min-h-[40vh] bg-[#3B1E54] text-[#EEEEEE] py-20">
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-40 items-start">
        
        
        <div>
          <h2 className="text-[10vh] font-[800]">YUM COOK</h2>
        </div>
        
        <div className="text-slate-200">
          <ul className="flex flex-col  ">
            <Link>
              <li className="text-lg py-2 hover:border-b-2  hover:border-b-[#3B1E54]">
                Home
              </li>
            </Link>
            <Link>
              <li className="text-lg py-2 hover:border-b-2  hover:border-b-[#3B1E54]">
                Recipes
              </li>
            </Link>
            <Link>
              <li className="text-lg py-2 hover:border-b-2  hover:border-b-[#3B1E54]">
                Blogs
              </li>
            </Link>
            <Link>
              <li className="text-lg py-2 hover:border-b-2  hover:border-b-[#3B1E54]">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col text-slate-200">
             <Link>
              <li className="text-lg py-2 hover:border-b-2  hover:border-b-[#3B1E54]">
                Dhanmondi, Dhaka - 1205
              </li>
            </Link>
             <Link>
              <li className="text-lg py-2 hover:border-b-2  hover:border-b-[#3B1E54]">
                yumcook@gmail.com
              </li>
            </Link>
             <Link>
              <li className="text-lg py-2 hover:border-b-2  hover:border-b-[#3B1E54]">
               +880 153 234 2345
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
