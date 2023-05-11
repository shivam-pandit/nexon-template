import React from "react"
import Dcard from "./Dcard"

const Discount = () => {
  return (
    <>
      <section className='Discount background NewArrivals' style={{"backgroundColor":"#a6a6a6"}}>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h2>Tata Nexon EV Prime colors: Discounts</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
