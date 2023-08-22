const Collections = () => {
<button></button>
  return (
    <>
      <div className="container mt-5">
        <h1>Collections</h1>
        <p>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Pune, based on trends
        </p>
        <div className="row">
          <div className="col-md-3">
            <div class="card bg-transparent" id="cls">
              <img src="https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674839786.jpg?output-format=webp" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  16 Best Bars & Pubs
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card" id="cls2">
              <img src="https://b.zmtcdn.com/data/collections/fbe01413b99e6a071af5211d569e7ab6_1691566585.jpeg?output-format=webp" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                 11 best insta-worthy Places
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3" >
            <div class="card" id="cls3">
              <img src="https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674839413.jpg?output-format=webp" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                 13 places for freedom.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card" id="cls4">
              <img src="https://b.zmtcdn.com/data/collections/d040fb7cd432d7dd89293cad030d23ed_1691829353.png?output-format=webp" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  7 Newly opnened restaurants
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      
    </>
  )
}

export default Collections
