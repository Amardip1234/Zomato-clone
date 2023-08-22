import OptNav from "../Components/OptNav";
import Collections from "./Collections";
import Opt1card from "./Opt1card";
import Ddata from "./Ddata";
import DiningData from "./DiningData";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Opt3 = () => {
  const [data, setdata] = useState(DiningData);
  return (
    <>
      <OptNav />
      <div className="container">
        <div className="type2">
          <div className="btns">
            <button >
              <Link to="/opt1"><img
                src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                alt=""
              />
             Delivery </Link>
            </button>
            <button id="op1btn">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
                alt=""
              />
              Dining Out
            </button>
            <button>
              <img
                src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
                alt=""
              />
              Nightlife
            </button>
          </div>
        </div>
      </div>
      <Collections/>
      <div className="container">
        <h2>Trending dining restaurants </h2>
      </div>
      <div className="container mt-5">
        <div className="row gy-4 ">
          {data.map((val, ind) => {
            return (
              <Opt1card
                key={ind}
                img={val.img}
                name={val.hotel}
                rating={val.rating}
              />
            );
          })}
        </div>
      </div>
      
      <Footer/>
    </>
  );
};

export default Opt3;
