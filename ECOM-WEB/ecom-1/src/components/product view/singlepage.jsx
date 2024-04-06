import StarRatings from "react-star-ratings";
import singlebg from "../product view/singlebg.jpg";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { GiCheckMark } from "react-icons/gi";
import { BsToggle2Off } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";



const Singlepage = ({ pdv1data, myproduct }) => {
  console.log("tttt", myproduct);
  const [show, setShow] = useState(1);

  const [cart, setcart] = useState([]);

  const whatToshow = () => {
    if (show == 1) {
      return (
        <div>
          <p>{myproduct[0].specifications}</p>
        </div>
      );
    } else if (show == 2) {
      return (
        <div>
          <p>{myproduct[0].about}</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>{myproduct[0].reviews}</p>
        </div>
      );
    }
  };
  const [quantity, setQuantity] = useState(1);
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if(quantity > 1){
      setQuantity(quantity - 1);
    }
  };

  const addtocart = (product) => {
    
    setcart(product);
    console.log(product)
  
};

  const totalPrice = myproduct[0].price * quantity;

  const nigerianCurrencyFormat = new Intl.NumberFormat('en-ng', {
    currency: 'ngn',
    style: 'currency',
    
  })

  return (
    <div className=" font-jakata">
      <div className="">
        <div className=" ">
          <div className="relative">
            <img
              src={singlebg}
              alt="single"
              className="mx-auto w-[90%] h-[130vh] rounded-xl"
            />

            <div
              className="bg-white absolute top-10 bottom-0 ml-[8rem] mr-[rem] 
                  w-[85%] h-[120vh] "
            >
              <div className="flex justify-center">
                <div className="w-[600px]">
                  <img
                    src={myproduct[0].image}
                    alt="image"
                    className=" mx-8 mt-12 w-[full] h-[65vh] "
                  />
                </div>
                <div className="pl-6 w-[500px] h-[100vh]">
                  <div className="flex mt-12  pb-3 gap-4">
                    <div>
                      {" "}
                      <StarRatings
                        className=""
                        rating={myproduct[0].ratings}
                        starRatedColor="orange"
                        numberOfStars={5}
                        starDimension="15"
                        name="rating"
                      />
                    </div>
                    <div className="mt-1 ">
                      <p className=" text-[12px] font-semibold ">
                        {myproduct[0].review}
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <p className="text-[27px] font-bold ">
                      {myproduct[0].Name}
                    </p>
                    <p className=" text-[27px] font-bold  ">
                      {myproduct[0].itemName}
                    </p>
                    <p className=" text-green-600 pt-4 text-[16px] font-extrabold ">
                      {myproduct[0].itemNum}
                    </p>
                  </div>
                  <div className="">
                    <ul className=" pt-10 flex text-[13px] font-bold ">
                      <li
                        onClick={() => setShow(1)}
                        className="mr-[10rem] cursor-pointer pb-3  hover:border-orange-500 border-b border-transparent"
                      >
                        Specifications
                      </li>

                      <li
                        onClick={() => setShow(2)}
                        className="mr-[10rem] cursor-pointer hover:border-orange-500 border-b border-transparent "
                      >
                        About
                      </li>
                      <li
                        onClick={() => setShow(3)}
                        className=" cursor-pointer hover:border-orange-500 border-b border-transparent "
                      >
                        Reviews
                      </li>
                    </ul>

                    {whatToshow()}
                  </div>
                  <div className="flex gap-5 pt-10 ">
                    <p className="text-[25px] font-extrabold  ">
                      {myproduct[0].quantity}
                    </p>

                    <div>
                      <button onClick={decreaseQuantity}><GrFormPrevious fontSize={26} color="gray" /></button>
                      <span className="text-[27px] h- ">{quantity}</span>
                      <button onClick={increaseQuantity}><GrFormNext fontSize={26} /></button>
                    </div>

                    <p className=" text-amber-500 text-[30px] font-extrabold ">
                   
                      {nigerianCurrencyFormat.format(totalPrice) }
                    </p>
                  </div>
                  <div className=" flex gap-3 pt-10">
                    <button onClick={()=>addtocart(myproduct)} className="bg-black rounded-md text-white font-bold text-[14px]  w-[120px] h-[5vh]">
                      Add to cart
                    </button>
                    <Link
                  to={`/cart/${myproduct[0].id}`} className=" text-center py-1 border-2 border-black rounded-md text-black font-bold text-[14px]  w-[120px] h-[5vh]">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="ml-8 mt-6 text-[25px] font-bold">
                  <h1>Get instant recommendations</h1>
                </div>
                <div className="flex ml-9 mt-3">
                  <p className="flex text-green-500 text-[20px] mr-8 font-bold">
                    <GiCheckMark size={30} />
                    <span className="-ml-[0.5rem]">erified</span>
                  </p>
                  <p>
                    <BsToggle2Off size={30} color="gray" />
                  </p>
                  <div className="flex text-nowrap text-[15px] text-gray-400">
                    <button className="ml-20 px-2 rounded-md border-2  flex">
                      Review <RiArrowDropDownLine size={30} />
                    </button>
                    <button className="ml-4 px-2 rounded-md border-2  flex">
                      Price <RiArrowDropDownLine size={30} />
                    </button>
                    <button className="ml-4 px-2 rounded-md border-2  flex">
                      Light type <RiArrowDropDownLine size={30} />
                    </button>
                    <button className="ml-10 px-2 rounded-md border-2  flex">
                      Certification <RiArrowDropDownLine size={30} />
                    </button>
                    <button className="ml-4 px-2 rounded-md border-2  flex">
                      Lamp type <RiArrowDropDownLine size={30} />
                    </button>
                    <button className="ml-4 px-2 rounded-md border-2  flex">
                      Style <RiArrowDropDownLine size={30} />
                    </button>
                    <button className="ml-4 px-2 rounded-md border-2  flex">
                      Height <RiArrowDropDownLine size={30} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
