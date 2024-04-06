
import { useState } from "react";
import { product } from "../data2";
import StarRatings from "react-star-ratings";
import { ArrowUp2 } from "iconsax-react";
import { ArrowDown2 } from "iconsax-react";
import { CloseSquare } from "iconsax-react";
import { ArrowSquareLeft } from "iconsax-react";
import { ArrowLeft } from "iconsax-react";
import { Link } from "react-router-dom";

const AddTocart = ({ myproduct=product }) => {
 
  const [quantity, setQuantity] = useState(1);
  

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  
  const totalPrice = myproduct[0].price * quantity;

  const nigerianCurrencyFormat = new Intl.NumberFormat("en-ng", {
    currency: "ngn",
    style: "currency",
  });

  return (
    <div className="m-5 font-jakata">
      <div className="flex gap-5 m-8 ">
        <p className=" cursor-pointer border-transparent active:border-green-500 border-b-2">
          CART
        </p>
        <p className="cursor-pointer border-transparent active:border-green-500 border-b-2">
          CHECKOUT
        </p>
      </div>
      <div>
        <div className="flex gap-4 m-6 ">
          <div className=" w-[80%] h-[full] bg-green-50 rounded-lg p-5">
            <h1 className=" text-[30px] mb-5">Shopping Cart</h1>
            <div className="flex mb-2 ">
              <p className=" ml-5 mr-[30rem] font-semibold">Product</p>
              <p className="mr-[15rem] font-semibold">Quantity</p>
              <p className=" font-bold">Total Price</p>
            </div>
            <div className="bg-green-400 w-[100%] h-[0.01vh] "></div>

            <div className="flex">
              <img
                src={myproduct[0].image}
                alt=""
                className="rounded-3xl w-[150px] h-[20vh] p-3"
              />
              <div className=" font-bold text-[15px] p-6">
                <h1>{myproduct[0].Name}</h1>
                <h1>{myproduct[0].itemName}</h1>
                <h1>{myproduct[0].itemNum}</h1>
                <h1>
                  {" "}
                  <StarRatings
                    className=""
                    rating={myproduct[0].ratings}
                    starRatedColor="orange"
                    numberOfStars={5}
                    starDimension="15"
                    name="rating"
                  />
                </h1>
              </div>

              <div className="">
                <button className=" flex px-2 mx-auto h-[5vh] text-left ml-[10rem] m-10 rounded-xl border-green-300 border-2">
                  <div className="text-[20px] ">{quantity}</div>
                  <div className=" ml-10 ">
                    <p onClick={increaseQuantity}>
                      <ArrowUp2 size="16" color="#37d67a" variant="Bold" />
                    </p>
                    <p onClick={decreaseQuantity}>
                      <ArrowDown2 size="16" color="#37d67a" variant="Bold" />
                    </p>
                  </div>
                </button>
              </div>

              <div className="ml-[11rem] mx-auto p-10">
                <p className=" font-medium">
                  {nigerianCurrencyFormat.format(totalPrice)}
                </p>
              </div>
              <div className="mr-5 my-11">
                <CloseSquare size="18" color="#37d67a" />
              </div>
            </div>

            <div className="bg-green-400 w-[100%] h-[0.01vh] "></div>

            <div className="flex">
              <img
                src={myproduct[0].image}
                alt="image"
                className="rounded-3xl w-[150px] h-[20vh] p-3"
              />
              <div className=" font-bold text-[15px] p-6">
                <h1>{myproduct[0].Name}</h1>
                <h1>{myproduct[0].itemName}</h1>
                <h1>{myproduct[0].itemNum}</h1>
                <h1>
                  {" "}
                  <StarRatings
                    className=""
                    rating={myproduct[0].ratings}
                    starRatedColor="orange"
                    numberOfStars={5}
                    starDimension="15"
                    name="rating"
                  />
                </h1>
              </div>

              <div className="">
                <button className=" flex px-2 mx-auto h-[5vh] text-left ml-[10rem] m-10 rounded-xl border-green-300 border-2">
                  <div className="text-[20px] ">{quantity}</div>
                  <div className=" ml-10 ">
                    <p onClick={increaseQuantity}>
                      <ArrowUp2 size="16" color="#37d67a" variant="Bold" />
                    </p>
                    <p onClick={decreaseQuantity}>
                      <ArrowDown2 size="16" color="#37d67a" variant="Bold" />
                    </p>
                  </div>
                </button>
              </div>

              <div className="ml-[11rem] mx-auto p-10">
                <p className=" font-medium">
                  {nigerianCurrencyFormat.format(totalPrice)}
                </p>
              </div>
              <div className="mr-5 my-11">
                <CloseSquare size="18" color="#37d67a" />
              </div>
            </div>

            <div className="bg-green-400 w-[100%] h-[0.01vh] "></div>

            <div className="flex">
              <img
                src={myproduct[0].image}
                alt="image"
                className="rounded-3xl w-[150px] h-[20vh] p-3"
              />
              <div className=" font-bold text-[15px] p-6">
                <h1>{myproduct[0].Name}</h1>
                <h1>{myproduct[0].itemName}</h1>
                <h1>{myproduct[0].itemNum}</h1>
                <h1>
                  {" "}
                  <StarRatings
                    className=""
                    rating={myproduct[0].ratings}
                    starRatedColor="orange"
                    numberOfStars={5}
                    starDimension="15"
                    name="rating"
                  />
                </h1>
              </div>

              <div className="">
                <button className=" flex px-2 mx-auto h-[5vh] text-left ml-[10rem] m-10 rounded-xl border-green-300 border-2">
                  <div className="text-[20px] ">{quantity}</div>
                  <div className=" ml-10 ">
                    <p onClick={increaseQuantity}>
                      <ArrowUp2 size="16" color="#37d67a" variant="Bold" />
                    </p>
                    <p onClick={decreaseQuantity}>
                      <ArrowDown2 size="16" color="#37d67a" variant="Bold" />
                    </p>
                  </div>
                </button>
              </div>

              <div className="ml-[11rem] mx-auto p-10">
                <p className=" font-medium">
                  {nigerianCurrencyFormat.format(totalPrice)}
                </p>
              </div>

              <div className="mr-5 my-11">
                <CloseSquare size="18" color="#37d67a" />
              </div>
            </div>

            <div className="bg-green-400 w-[100%] h-[0.01vh] "></div>

            <div className="flex">
              <div className="w-[500px]">
                <Link to={`/`} className="text-[15px] font-medium px-6 py-2 mt-20 text-white border-2 bg-green-500 rounded-md flex gap-1">
                  <ArrowSquareLeft
                    size="18"
                    color="white"
                    variant="Bold"
                    className="mt-0.5"
                  />
                  Continue Shopping
                </Link>
              </div>
              <div className="mt-6 w-[500px]">
                <span className="flex">
                  <p className="text-[15px] ml-10 font-extrabold">Subtotal</p>
                  <p className=" font-medium ml-[13rem] mx-auto ">
                    {nigerianCurrencyFormat.format(totalPrice)}
                  </p>
                </span>

                <span className="flex">
                  <p className="text-[15px] ml-10 font-extrabold">Shipping</p>
                  <p className=" font-medium ml-[13rem] mx-auto ">
                    {nigerianCurrencyFormat.format(totalPrice)}
                  </p>
                </span>
                <div className="bg-green-400 mx-auto w-[103%] h-[0.01vh] mt-2"></div>
                <span className="flex mt-4">
                  <p className="text-[17px] ml-12 font-extrabold">Total</p>
                  <p className=" font-medium ml-[14rem] text-[18px] mx-auto ">
                    {nigerianCurrencyFormat.format(totalPrice)}
                  </p>
                </span>
              </div>
            </div>
          </div>

          {/* CHECKOUT */}
          <div className="pl-10 text-white w-[25%] h-[full] mx-auto bg-green-600 rounded-lg p-5">
            <p className=" flex gap-2 font-medium">
              <ArrowLeft
                size="16"
                color="white"
                variant="Bold"
                className="mt-1 gap-2"
              />{" "}
              Checkout Step
            </p>

            <h6 className="text-[30px]  pt-4 font-bold">Payment Info</h6>
            <h5 className="pt-8 font-bold">Payment Method</h5>
            <div className=" flex gap-3 pt-10 ">
              <button className="bg-white rounded-lg text-black font-extrabold text-[14px]  w-[120px] h-[5vh]">
                Credit Card
              </button>
              <button className="bg-white  border-2 rounded-lg text-black font-extrabold text-[14px]  w-[120px] h-[5vh]">
                PayPal
              </button>
            </div>

            <div className="bg-white w-[100%] h-[0.4vh] mx-auto mt-4 "></div>
           
            <h5 className="py-5 font-bold">Cardholder Name</h5>
            <input type="text" name="" id="" className=" border-2 border-green-500 bg-transparent font-medium pl-2"/>
          
            
            <div className="bg-white w-[100%] h-[0.4vh] mx-auto mt-4 "></div>
            <h5 className="pt-5 font-bold">Card Number</h5>
            <input type="text" name="" id="" className=" border-2 border-green-500 bg-transparent font-medium pl-2"/>

            
            <div className="bg-white w-[100%] h-[0.4vh] mx-auto mt-4 "></div>
            <div className="flex gap-20 mt-4">
            <p className=" font-bold">Expiration Date</p>
            <p className=" font-bold">cvv</p>
            </div>
            
            <div className="flex gap-10">
            <h5 className="w-[70px] border-b-4 border-white pb-3 pt-3 font-medium flex">MM<ArrowDown2 size="18" color="white" variant="Bold" className="mt-1 ml-[1rem]" /></h5>
            <p className="w-[70px] border-b-4 border-white pb-3 pt-3 font-medium flex">YYYY<ArrowDown2 size="18" color="white" variant="Bold" className="mt-1 ml-[0.5rem]" /></p>
            <p className="w-[70px] border-b-4 border-white pb-3 pt-3 font-medium flex">XXX<ArrowDown2 size="18" color="white" variant="Bold" className="mt-1 ml-[1rem]" /></p>
            </div>
            <button className="bg-white mt-14 border-2 rounded-lg text-black font-extrabold text-[14px]  w-[295px] h-[5vh]">
                Confirm & Pay {nigerianCurrencyFormat.format(totalPrice)} 
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTocart;