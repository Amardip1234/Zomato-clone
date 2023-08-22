import Opttypes from "./Opttypes";
import OptNav from "../Components/OptNav";
import Opt1card from "./Opt1card";
import Ddata from "../Components/Ddata";
import { useState } from "react";
import DishesData from "./DishesData";
import Footer from "./Footer";
// import '../App.css'
const Delivery = () => {
  const [data, setdata] = useState(Ddata);
  const [search, setsearch] = useState("");

  return (
    <>
      <OptNav />
      <Opttypes />
      <div className="nav2">
        <button
          className="bt1"
          onClick={() => {
            setdata(Ddata.filter((task) => task.rating >= 3.3));
          }}
        >
          Filter
        </button>
        <button
          className="bt2"
          onClick={() => {
            setdata(Ddata.filter((task) => task.rating >= 4));
          }}
        >
          Rating 4.0+
        </button>
        <button
          className="bt3"
          onClick={() => {
            setdata(Ddata);
          }}
        >
          All
        </button>
        <div className="dropdown">
          <a
            className="btn  dropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Cuisines
          </a>
          <ul className="dropdown-menu" id="tb">
            <div id="header">
              <h3>Cuisine</h3>
              <input
                type="text"
                name=""
                id="inp"
                placeholder="Search here"
                onChange={(e) => setsearch(e.target.value)}
              />
            </div>
            <div id="inputs">
              {DishesData.filter((item) => {
                return search.toLowerCase() == ""
                  ? item
                  : String(item).includes(search);
                console.log(item);
              }).map((item) => {
                {
                  /* console.log(item.name); */
                }

                return (
                  <>
                    <label>
                      <input type="checkbox" name={item.name} id="" />
                      {item.name}
                    </label>
                  </>
                );
              })}
            </div>
            <section className="apl">
              <button>Apply</button>
            </section>
          </ul>
        </div>
      </div>
      <div className="container">
        <h2>Delivery Restaurants in Mumbai</h2>
      </div>

      <div className="container mt-5">
        <div className="row gy-4 ">
          {data.map((val, ind) => {
            return (
              <Opt1card
                key={ind}
                img={val.img}
                name={val.name}
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

export default Delivery;
