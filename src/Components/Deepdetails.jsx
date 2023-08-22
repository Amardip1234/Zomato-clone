import OrderOnlinerList from "./OrderOnlinerList";

const Deepdetails = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="main-img">
          <div className="img1">
            <img
              src="https://b.zmtcdn.com/data/pictures/9/7029/5b386868d37d7af0a7fad7a26f07a363.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
              alt=""
            />
          </div>
          <div className="img2">
            <div className="img2-1">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/7029/31d12b3b5c9b578c97fa84897109b480.jpg?fit=around|300:273&crop=300:273;*,*"
                alt=""
              />
            </div>
            <div className="img2-2">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/7029/7d599428f2ccbfca68e36fc74c1e330c.jpg?fit=around|300:273&crop=300:273;*,*"
                alt=""
              />
            </div>
          </div>
          <div className="img3">
            <img
              src="https://b.zmtcdn.com/data/pictures/9/7029/21e8bb6ab3a24912c53ad83e203c95f2.jpg?fit=around|300:273&crop=300:273;*,*"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="sticky">
        <div className="container mt-4">
          <div className="Desc-hotel">
            <h2>Simply South</h2>
          </div>
          <div className="add">
            <p>South Indian</p>
            <p>Gamma 1 Greater Noida</p>
          </div>
        </div>
        <div className="container">
          <div className="btns">
            <button className="btn">Direction</button>
            <button className="btn">Bookmarks</button>
            <button className="btn">Share</button>
          </div>

          <nav id="order">
            <a href="">Overview</a>
            <a href="">Order Online</a>
            <a href="">Reviews</a>
            <a href="">Photos</a>
            <a href="">Menu</a>
          </nav>
        </div>
      </div>

      <div className="container">
       

        <OrderOnlinerList/>
      </div>
    </>
  );
};

export default Deepdetails;
