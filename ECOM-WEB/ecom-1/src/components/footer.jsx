import { FaPhone } from "react-icons/fa6";
import img1 from "../images/icon.png";
import { IoMdMail } from "react-icons/io";
import { GrLocation } from "react-icons/gr";

const Footer = ({ data }) => {
  console.log(data);

  return (
    <div className="flex mx-8 gap-72 font-jakata mt-36 my-20">
      <organic>
        <div className="flex mx-auto mb-6">
          <img src={img1} className="h-[35px] mr-3" alt="icon" />
          <div className="gap-2">
            <h1 className=" font-black italic">Organic Market</h1>
            <p className="text-[10px] text-center">fresh fruits & vegetables</p>
          </div>
        </div>
        <ul className=" text-[12px] mx-3 ">
          <li className="mt-3 flex gap-3">
            <FaPhone size={14} /> +442 01521193302
          </li>
          <li className="mt-3 flex gap-3">
            <IoMdMail size={14} /> johndoe2024@gmail.com
          </li>
          <li className="mt-3 flex gap-3">
            <GrLocation size={14} /> Warwick New York City 01, <br />
            United States of America{" "}
          </li>
        </ul>
      </organic>

      <div className=" ">
        <h1 className="font-bold ">Categories</h1>
        <ul className="text-[12px] ">
          <li className="mt-3">Ecommerce</li>
          <li className="mt-3">Shopify</li>
          <li className="mt-3">Shoe</li>
          <li className="mt-3">Heels</li>
          <li className="mt-3">Products</li>
          <li className="mt-3">Sales</li>
        </ul>
      </div>

      <div className=" ">
        <h1 className="font-bold">Information</h1>
        <ul className="text-[12px] ">
          <li className="mt-3">Ecommerce</li>
          <li className="mt-3">Shopify</li>
          <li className="mt-3">Shoe</li>
          <li className="mt-3">Heels</li>
          <li className="mt-3">Products</li>
          <li className="mt-3">Sales</li>
        </ul>
      </div>

      <div className=" ">
        <h1 className="font-bold">Quick Links</h1>
        <ul className="text-[12px] ">
          <li className="mt-3">Ecommerce</li>
          <li className="mt-3">Shopify</li>
          <li className="mt-3">Shoe</li>
          <li className="mt-3">Heels</li>
          <li className="mt-3">Products</li>
          <li className="mt-3">Sales</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
