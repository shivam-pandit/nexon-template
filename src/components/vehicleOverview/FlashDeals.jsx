import React from "react"
import "./style.css"

const FlashDeals = () => {
  return (
    <>
      <section className='flash' style={{"backgroundColor":"#a6a6a6"}}>
        <div className='container'>
          <div className='heading f_flex'>
            <h1>Nexon Prime Overview</h1>
          </div>
          <p>
          <i className='fa fa-bolt'></i>
          &nbsp; Manual & Automatic &nbsp;
          <i className='fa fa-bolt'></i>
          &nbsp; Fuel Type: &nbsp;
          Petrol & Diesel
          </p>
          <p>
          <i className='fa fa-bolt'></i>
          &nbsp; Mileage: &nbsp;
          22.07 kmpl &nbsp;
          <i className='fa fa-bolt'></i>
          &nbsp; Engine: &nbsp;
          1199 to 1497 cc
          </p>
        </div>
      </section>
    </>
  )
}

export default FlashDeals
