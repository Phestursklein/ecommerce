// import { FaCartArrowDown } from "react-icons/fa";
// import { FiSend } from "react-icons/fi";
// import { BsSend } from "react-icons/bs";

import { FaShoppingCart } from "react-icons/fa";

import { TfiSearch } from "react-icons/tfi";
import { LiaFireSolid } from "react-icons/lia";
import { GrLocation } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { RiContactsFill } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import img1 from "../images/icon.png";
import { Link } from "react-router-dom";
import { product } from "../data2";


const Header = ({ data, myproduct=product }) => {
  console.log(data);

  return (
    <div className="font-jakata w-[100%] bg-white top-0 left-0 h-[22vh">
      <div className="">
        <div className="">
          <div className="  flex mx-8 my-8">
            <img src={img1} className="h-[35px] mr-3" alt="icon" />
            <div className="">
              <h1 className=" font-black italic">Organic Market</h1>
              <p className="text-[12px] text-center">
                fresh fruits & vegetables
              </p>
            </div>
            <div className="border border-green-500 w-[32rem] h-[3rem] rounded
             text-center font-bold pl-10 py-3 text-nowrap flex mr-10 mx-6 gap-2">
              All Categories <RiArrowDropDownLine size={25} />
              <input
                className="pr-14 py-1"
                type="text"
                placeholder="    | Search for item"
              />
              <TfiSearch size={25} />
            </div>

            <div className="flex mr-16 ">
              <GrLocation size={30} />
              <span className=" text-green-500 font-semibold text-center pt-2  px-3">
                Your location
              </span>
              <RiArrowDropDownLine size={25} />
            </div>

            <div className="flex mr-16">
              <FiHeart size={30} />
              <p className="font-semibold flex pt-2 px-2"> Wishlist</p>
            </div>

            <div className="flex mr-16">
              <FaShoppingCart size={30} />
              <Link
                  to={`/cart/${myproduct[0].id}`} className="font-semibold flex pt-2 px-2"> Cart</Link>
            </div>

            <div className="flex">
              <RiContactsFill size={30} />
              <p className="font-semibold flex pt-2 px-2"> Account</p>
            </div>
          </div>

          <div className="flex mx-16 my-6 gap-44">
            <div>
              <button className="flex mx-auto gap-6 pl-3 bg-green-500 rounded-lg text-white w-[14rem] h-[2rem] items-center ">
                <h1 className="text-[13px] flex gap-4">
                  <HiMiniSquares2X2 size={18} /> Browse All Categories{" "}
                  <RiArrowDropDownLine size={18} />
                </h1>
              </button>
            </div>

            <nav className="text-black text-[15px] font-semibold p-2">
              <ul className="flex gap-10">
                <li className="flex text-nowrap"> 
                  <LiaFireSolid size={18} /> Hot Deals
                </li>
                <Link to={`/`} className="">Home</Link>
                <li className="">About</li>
                <li className="">Shop</li>
                <li className="">Vendors</li>
                <li className="">Contact</li>
              </ul>
            </nav>
            <div className="flex gap-4 items-center -mt-3">
              <TfiHeadphoneAlt size={50} />
              <div>
                <h1 className="text-[30px] font-bold text-green-500">2446</h1>
                <p className="font-semibold ">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-200 mx-auto w-[97%] top-0 h-[0.5vh] rounded "></div>

    </div>
  );
};

export default Header;
