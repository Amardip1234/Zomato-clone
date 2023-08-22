import { Link } from "react-router-dom";
import "../App.css";

const Opt = () => {
  return (
    <>
      <div className="opt">
        <Link to="/opt1">
          <div className="box1">
            <div className="cont1">
              <h5>Order Online</h5>
              <p>Stay home and order to your dooostep</p>
            </div>
          </div>
        </Link>
        <Link to="/opt2" >
          <div className="box2">
            <div className="cont2">
              <h5>Dining</h5>
              <p>View the city's favourite dining venues</p>
            </div>
          </div>
        </Link>
        <Link to="/opt3">
          <div className="box3">
            <div className="cont3">
              <h5>Nightlife and Clubs</h5>
              <p>Explore the city’s top nightlife outlets</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Opt;
