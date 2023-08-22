const GetZomato = () => {
  return (
    <>
      <div className="container">
        <section>
          <div id="contents">
            <div id="cont1">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
                alt=""
              />
            </div>
            <div id="cont2">
              <h1>Get the Zomato app</h1>
              <p>
                We will send you a link, open it on your phone to download the
                app
              </p>
              <div id="NameEmail">
                <span><input type="checkbox" name="" id="email" />
                 Email</span>
                <span><input type="checkbox" name="" id="name" />
                Phone</span>
              </div>
              <span className="sear">
                <input type="text" name="" id="searcb" placeholder="Email" />
                <button>Share App Link</button>
              </span>
              <p>Download app from</p>
              <span id="butn">
                <button><img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" /></button>
                <button><img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" /></button>
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GetZomato;
