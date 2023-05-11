import React from "react"
import Cart from "./Cart"
import "./style.css"

const NewArrivals = () => {
  return (
    <>
      <section className='NewArrivals background' style={{"backgroundColor":"#a6a6a6"}}>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h2>Tata Nexon EV Prime colors: New Arrivals</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals


