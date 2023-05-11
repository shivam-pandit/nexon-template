

import React, { useState } from "react"

const ShopCart = ({ shopItems }) => {


  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <img src={shopItems.cover} alt='' />
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='price'>
                  <h4>{shopItems.price} </h4>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
