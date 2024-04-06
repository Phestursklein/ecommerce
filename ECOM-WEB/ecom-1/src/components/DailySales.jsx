




import { BsCart3 } from "react-icons/bs";
import leaves from "../images/leaves.png";
import StarRatings from "react-star-ratings";
import pawpaw from "../images/pawpaw.jpg";
import tomatoes from "../images/tomatoes.jpg";
import pumpkin from "../images/pumpkin.jpg";
import apples from "../images/apples.jpg";

const DailySales = ({ data3, handleClick }) => {
  console.log("This is data", data3);

  const nigerianCurrencyFormat = new Intl.NumberFormat('en-ng', {
    currency: 'ngn',
    style: 'currency',
    
  })

  return (
    <div className=" font-jakata">
      <div className="py-3 px-6 ">
        <h1 className="text-[25px] font-bold">Daily Sales</h1>
      </div>
      <div className="flex mx-auto">
        <div className=" ">
          <div>
            <div className=" bg-emerald-100 w-[380px] h-[80vh] rounded-xl mt-6 mx-auto ml-6 ">
              <div>
                <p className="text-[25px] pl-5 pt-5 font-bold text-nowrap">
                  Bring nature <br />
                  into your home
                </p>
              </div>
              <div className="flex mx-auto">
                <div>
                  <button className="absolute text-nowrap bg-green-400 text-white rounded-lg p-1 px-5 ml-10 -mr-20 mt-48">
                    Shop Now
                  </button>
                </div>
                <div>
                  <img
                    src={leaves}
                    alt="leaves"
                    className="ml-[2.5rem] -mt-11 w-[340px] h-[73vh] rounded-br-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-6 px-3 mx-auxo grid grid-cols-4 gap-3">
          {data3.map((z) => {
            return (
              <div
                className=" bg-gray-200 rounded-2xl w-[full] h-[80vh] "
                key={z.id}
              >
                <div className="bg-white rounded-2xl mx-auto my-3 w-[14rem] h-[33vh]">
                  <img
                    src={z.image}
                    className="mx-auto py-7 h-[34vh]"
                    alt="items"
                  />
                </div>
                <div className="px-6 py-2">
                  <p className=" text-black pb-2">{z.Name}</p>
                  <p className=" text-black font-bold">{z.itemName}</p>
                  <p className=" text-black ">{z.itemNum}</p>

                  <div className="py-2">
                    <StarRatings
                      className="mx-10"
                      rating={z.ratings}
                      starRatedColor="orange"
                      // changeRating={this.changeRating}
                      numberOfStars={5}
                      starDimension="20"
                      name="rating"
                    />
                  </div>

                  <div className="flex gap-2 py-2">
                    <p>{z.copyright}</p>
                    <p className=" text-green-400">{z.manufacturer}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-green-600 font-semibold">{nigerianCurrencyFormat.format(z.price) }</p>
                    <p className="align-super text-[12px]">{nigerianCurrencyFormat.format(z.discount) }</p>
                  </div>
                  <div className="bg-green-500 w-[150px] my-2 h-[1vh] rounded "></div>
                  <h3>{z.itemLeft}</h3>
                </div>
                <div>
                  <button
                    onClick={() => handleClick(z)}
                    className="flex gap-6 mx-auto my-2 pl-3 bg-green-500 rounded-lg text-white w-[12rem] h-[2rem] items-center "
                  >
                    <BsCart3 size={22} />{" "}
                    <h1 className="text-[13px]">Add To Cart</h1>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DailySales;
