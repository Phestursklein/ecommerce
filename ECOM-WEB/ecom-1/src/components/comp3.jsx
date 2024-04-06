import { BsCart3 } from "react-icons/bs";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const Comp3 = ({ data2, handleLink }) => {
  console.log(data2);

  const nigerianCurrencyFormat = new Intl.NumberFormat('en-ng', {
    currency: 'ngn',
    style: 'currency',
    
  }) 

  return (
    <div className="">
      <div className="px-5 py-5 ml-6">
        <div className="flex gap-5 ">
          <h1 className="text-[25px] mr-28 font-bold">Popular Products</h1>
          <nav className="text-black text-[15px] font-semibold p-2">
            <ul className="flex gap-5">
              <li className="p text-green-500">All</li>
              <li className="">Coffee & Tea</li>
              <li className="">Cake & Milk</li>
              <li className="">Pet Foods</li>
              <li className="">Vegetable</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className=" py-6 px-10 mx-auxo grid grid-cols-5 gap-3 ">
        {data2.map((z) => {
          return (
            <div
              className=" bg-gray-200 rounded-2xl w-[full] h-[60vh]"
              key={z.id}
            >
              <div className="bg-white rounded-2xl mx-auto my-3 w-[14rem] h-[25vh]">
                <img
                  src={z.image}
                  className="size-36 mx-auto p-3 h-[23vh]"
                  alt="items"
                />
              </div>
              <div className="px-6 py-2">
                <p className="text-[15px] text-black pb-2">{z.Name}</p>
                <p className="text-[15px] text-black font-bold">{z.itemName}</p>
                <p className="text-[15px] text-black font-bold">{z.itemNum}</p>
              </div>
              <div className="">
                <p className="px-6 py-2 ">
                  <StarRatings
                    className="mx-10"
                    rating={z.ratings}
                    starRatedColor="orange"
                    // changeRating={this.changeRating}
                    numberOfStars={5}
                    starDimension="20"
                    name="rating"
                  />{" "}
                </p>
              </div>
              <div className="flex mx-6">
                <div>
                  <div className="flex gap-2 py-2">
                    <p>{z.copyright}</p>
                    <p className=" text-green-400">{z.manufacturer}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-green-600 font-semibold">
                      {nigerianCurrencyFormat.format(z.price)}
                    </p>
                    <p className="align-super text-[12px]">{nigerianCurrencyFormat.format(z.discount)}</p>
                  </div>
                </div>

                <Link
                  to={`/product/${z.id}`}
                  className="flex gap-2 mx-auto my-9 pl-3 bg-green-500 rounded-lg text-white w-[5rem] h-[2rem] items-center "
                >
                  <BsCart3 size={20} /> <h1 className="text-[13px]">Add</h1>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comp3;
