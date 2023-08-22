import {  NavLink } from "react-router-dom";
import "../App.css";

const Opt1card = (props) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <NavLink to="/1">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body cb">
              <span className="card-text">{props.name}</span>
              <span id="rating">{props.rating}</span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Opt1card;
