import { Routes, Route} from "react-router-dom";
import Landing from "./Components/Landing";
import './App.css'
import Opt2 from "./Components/Opt2";
import Opt3 from "./Components/Opt3";
import Delivery from "./Components/Delivery";
import ProductDetails from "./Components/ProductDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Landing}/>
        <Route path="/opt1" Component={Delivery}/>
        <Route path="/opt2" Component={Opt2}/>
        <Route path="/opt3" Component={Opt3}/>
        <Route path="/1" Component={ProductDetails}/>
        
      </Routes>
    </>
  )
}

export default App
