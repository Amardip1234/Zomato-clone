import React from 'react'
import OptNav from '../Components/OptNav'
import Collections from './Collections'
const Opt3 = () => {
  return (
    <>
      <OptNav/>
      <div className="container">
        <div className="type2">
          <div className="btns">
            <button>
              <img
                src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                alt=""
              />
              Delivery
            </button>
            <button>
              <img
                src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
                alt=""
              />
              Dining Out
            </button>
            <button>
              <img
                src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
                alt=""
              />
              Nightlife
            </button>
          </div>
        </div>
      </div>
      <Collections/>
    </>
  )
}

export default Opt3
