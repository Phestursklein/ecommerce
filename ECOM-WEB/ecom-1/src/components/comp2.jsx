import onions from "../images/onions.png";
import strawberry from "../images/strawberry.png";
import beverage from "../images/beverage.png";

const Comp2 = ({ data }) => {
  console.log(data);

  return (
    <div className=" ">
      {/*FEATURES CATEGORIES */}

      <div>
        <div className="px-5 py-5 ml-6">
          <div className="flex gap-5 ">
            <h1 className="text-[25px] mr-28 font-bold">Features Categories</h1>
            <nav className="text-black text-[15px] font-semibold p-2">
              <ul className="flex gap-5">
                <li className="">Coffee & Tea</li>
                <li className="">Cake & Milk</li>
                <li className="">Pet Foods</li>
                <li className="">Vegetable</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div>
        <div className=" w-[full]  px-16 mx-auxo grid grid-cols-10 gap-2 items-center">
          {data.map((x) => {
            return (
              <div
                className=" bg-gray-200 rounded-lg h-[25vh] items-center "
                key={x.id}
              >
                <img src={x.image} className="p-2" alt="items" />
                <div className="text-center">
                  <p className="text-[15px] text-black font-bold">
                    {x.itemName}
                  </p>
                  <p className="text-[15px] text-black">{x.itemNum}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex mx-auto px-16 py-10 gap-2">
        <div className="flex bg-amber-100 w-full h-[40vh] rounded-xl">
          <div>
            <p className="text-[25px] pl-5 pt-5 font-bold text-nowrap">
              Everyday Fresh & <br />
              Clean with Our <br />
              Products
            </p>
            <button className=" bg-green-400 text-white rounded-md p-2 ml-4 mt-3">
              Shop Now
            </button>
          </div>
          <div>
            <img src={onions} alt="onions" className=" w-[250px] mt-[3rem]" />
          </div>
        </div>
        <div className="flex bg-orange-100 w-full h-[40vh] rounded-xl">
          <div className="">
            <p className="text-[25px] pl-5 pt-5 font-bold ">
              Make your Breakfast <br />
              Healthy and Easy</p>
            <button className=" bg-green-400 text-white rounded-md p-2 ml-4 mt-3">
              Shop Now
            </button>
          </div>
          <div>
            <img src={strawberry} alt="berry" className=" my-3" />
          </div>
        </div>
        <div className="flex bg-gray-200 w-full h-[40vh] rounded-xl ">
        <div>
            <p className="text-[25px] pl-5 pt-5 font-bold text-nowrap">
              The Best<br />
              Organic <br />
              Products Online
            </p>
            <button className=" bg-green-400 text-white rounded-md p-2 ml-4 mt-3">
              Shop Now
            </button>
          </div>
          <div>
            <img src={beverage} alt="bev" className=" w-[300px] mt-[7rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comp2;
