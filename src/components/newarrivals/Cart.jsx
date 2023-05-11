import React from "react"
import Ndata from "./Ndata"
import Slider from "react-slick"

const Cart = () => {
 
  return (
    <>


<section >
<div className='container grid2'>
  {Ndata.map((val, index) => {
    return (
      <div className='box product' key={index}>
        <div className='img '>
        <img src={val.cover} alt='' width='100%' />
        </div>
        <h4>{val.name}</h4>
        <span>{val.availability}</span>
      </div>
    )
  })}
</div>
</section>

    </>
  )
}

export default Cart


