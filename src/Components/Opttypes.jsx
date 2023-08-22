import { Link } from "react-router-dom";

const Opttypes = () => {
  return (
    <>
      <div className="container">
        <div className="type2">
          <div className="btns">
            <button id="op2btn">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                alt=""
              />
              Delivery
              </button>
            <button >
            <Link to="/opt2"><img
                src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
                alt=""
              />
              Dining Out
              </Link></button>
            <button >
              <img
                src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
                alt=""
              />
              Nightlife
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Opttypes;
