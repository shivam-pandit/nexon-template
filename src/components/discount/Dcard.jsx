import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
import "../newarrivals/style.css"

const Dcard = () => {
  
  return (
    <>
    <section >
<div className='container grid2'>
  {Ddata.map((value, index) => {
    return (
      <div className='box product' key={index}>
        <div className='img '>
        <img src={value.cover} alt='' width='100%' />
        </div>
      </div>
    )
  })}
</div>
</section>
    </>
  )
}

export default Dcard



