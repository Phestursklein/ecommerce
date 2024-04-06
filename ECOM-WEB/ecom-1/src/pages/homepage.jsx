import Comp1 from "../components/comp1";
import Comp2 from "../components/comp2";
import Comp3 from "../components/comp3";
import DailySales from "../components/DailySales";
import DailyStory from "../components/dailyStory";
const HomePage = ({ btm, product, sales, story, handleClick,handleLink }) => {
  return (
    <>
       <div className=" "> {/* mt-56 */}
        <Comp1  />

        <Comp2  data={btm} />

        <Comp3  data2={product} onClick={handleLink}/>

        <DailySales  data3={sales} handleClick={handleClick} />

        <DailyStory  data4={story} />
      </div>
    </>
  );
};

export default HomePage;
