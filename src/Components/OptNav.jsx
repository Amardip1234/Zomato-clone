
import { Link } from 'react-router-dom';
import '../App.css'
const Navbars = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <Link to="/"><img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt=""
          /></Link>
        </div>
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          name=''
          onChange={(text => console.log(text.target.value))}
        />
        <div className="btn">
          <button>Login</button>
          <button>SignUp</button>
        </div>
      </div>
      
      
    </>
  );
};

export default Navbars;
