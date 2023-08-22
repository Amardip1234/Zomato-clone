import Opt from "./Opt";
import "../App.css";
import Collections from "./Collections";
import Footer from "./Footer";
import GetZomato from "./GetZomato";

const Landing = () => {
  return (
    <>
      <div id="nav">
        <div id="lbtn">
          <button>Get the app</button>
        </div>
        <div id="rbtn">
          <button>Investor Relation</button>
          <button>Add a Restauant</button>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
      <div id="main">
        <img
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
          alt=""
        />
        <div id="page">
          <h1>Zomato</h1>
          <h2>Discover the best food & drinks in Mumbai</h2>
          <input
            type="text"
            name=""
            id=""
            placeholder="Sarch for a restaurant"
          />
        </div>
      </div>

      <Opt />
      <Collections/>
      <GetZomato/>
      <Footer/>
      
    </>
  );
};

export default Landing;
