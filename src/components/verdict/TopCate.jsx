import React from "react"
import "./style.css"
import TopCart from "./TopCart"

const TopCate = () => {
  return (
    <>
      <section className=' background' style={{"backgroundColor":"#a6a6a6"}}>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h2>Pros & Cons on nexon</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <TopCart />
         
        </div>
      </section>
    </>
  )
}

export default TopCate
