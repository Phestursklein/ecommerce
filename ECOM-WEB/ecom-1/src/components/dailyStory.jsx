import { BsCart3 } from "react-icons/bs";
// import leaves from "../images/leaves.png";
import StarRatings from "react-star-ratings";
import pawpaw from "../images/pawpaw.jpg";
import tomatoes from "../images/tomatoes.jpg";
import pumpkin from "../images/pumpkin.jpg";
import apples from "../images/apples.jpg";

const DailyStory = ({ data4 }) => {
    console.log(data4);

    const nigerianCurrencyFormat = new Intl.NumberFormat('en-ng', {
        currency: 'ngn',
        style: 'currency',
        
      })

    return (
        <div className=" font-jakata mx-auto">
            <div className="py-3 px-6 ">
                <h1 className="text-[25px] font-bold">Daily Of The Story</h1>
            </div>
            <section className="image flex gap-2 mx-6 mt-6 w-[full]">
                <div>
                    <img
                        src={pawpaw}
                        className="rounded-2xl h-[39vh] w-[390px]"
                        alt="pawpaw"
                    />
                </div>
                <div>
                    <img
                        src={tomatoes}
                        className="rounded-2xl h-[39vh] w-[390px]"
                        alt="tomatoes"
                    />
                </div>

                <div>
                    <img
                        src={pumpkin}
                        className="rounded-2xl h-[39vh] w-[390px]"
                        alt="pumpkin"
                    />
                </div>

                <div>
                    <img
                        src={apples}
                        className="rounded-2xl h-[39vh] w-[390px]"
                        alt="apples"
                    />
                </div>
            </section>



            <div className=" mx-12 gap-6 grid grid-cols-4 ">
                {data4.map((b) => {
                    return (
                        <div
                            className=""
                            key={b.id}
                        >
                            <div className="mx-10 flex gap-3 items-center -mt-[10rem] mb-5">
                                <h1 className="bg-white w-[50px] h-[6vh] rounded-lg text-center font-bold text-green-500 text-[12px] py-1">
                                    365
                                    <br /> <span className="text-black">Days</span>
                                </h1>
                                <h1 className="bg-white w-[50px] h-[6vh] rounded-lg text-center font-bold text-green-500 text-[12px] py-1">
                                    03
                                    <br /> <span className="text-black">Hours</span>
                                </h1>
                                <h1 className="bg-white w-[50px] h-[6vh] rounded-lg text-center font-bold text-green-500 text-[12px] py-1">
                                    50
                                    <br /> <span className="text-black">Min</span>
                                </h1>
                                <h1 className="bg-white w-[50px] h-[6vh] rounded-lg text-center font-bold text-green-500 text-[12px] py-1">
                                    04
                                    <br /> <span className="text-black">Sec</span>
                                </h1>
                            </div>

                            <div className="mx-5 px-6 py-5  bg-white shadow-black shadow-sm rounded-3xl w-[300px] h-[35vh] ">
                                <p className=" text-black pb-2">{b.Name}</p>
                                <p className=" text-black font-bold">{b.itemName}</p>
                                <p className=" text-black ">{b.itemNum}</p>

                                <div className="py-2">
                                    <StarRatings
                                        className="mx-10"
                                        rating={b.ratings}
                                        starRatedColor="orange"
                                        // changeRating={this.changeRating}
                                        numberOfStars={5}
                                        starDimension="20"
                                        name="rating"
                                    />
                                </div>

                                <div className="flex">
                                    <div>
                                        <div className="flex gap-2 py-2">
                                        <p>{b.copyright}</p>
                                        <p className=" text-green-400">{b.manufacturer}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="text-green-600 font-semibold">{nigerianCurrencyFormat.format(b.price) }</p>
                                        <p className="align-super text-[12px]">{nigerianCurrencyFormat.format(b.discount) }</p>
                                    </div>
                                    </div>
                                    
                                    <button className="flex gap-2 mx-auto my-9 pl-3 bg-green-500 rounded-lg text-white w-[5rem] h-[2rem] items-center "
                                    >
                                        <BsCart3 size={20} />{" "}
                                        <h1 className="text-[13px]">Add</h1>
                                    </button>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DailyStory;
