import img2 from "../images/fruit.png";

const Comp1 = ({ data }) => {
  console.log(data);

  return (
    <div className="font-jakata ">
      <div className=" bg-green-500 rounded-xl my-5 mx-auto w-[1440px] flex justify-between">
        <div>
          <h1 className="text-black text-[40px] pt-5 pl-8 font-black">
            Eat Organic & <br /> Healthy Food
          </h1>
          <h4 className="text-[20px] pl-8 pt-5">
            Save up to 50% off on your first order
          </h4>

          <div className="text-[15px] pl-8 pt-20 ">
            <input
              className=" p-4 rounded-l-3xl"
              type="Email"
              placeholder="Your email address"
            />
            <button
              className=" bg-black   p-4 px-12 -mx-4 rounded-3xl text-white"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-[10rem] ">
          <img src={img2} className="w-[30rem]" alt="fruit" />
        </div>
      </div>
    </div>
  );
};

export default Comp1;
