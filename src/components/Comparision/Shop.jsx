import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background' style={{"backgroundColor":"#a6a6a6"}}>
        <div className='container d_flex'>
        <div className='contentWidth'>
            <div className='heading '>
              <div className='heading-left '>
                <h2>Tata nexon comparision with similar cars</h2>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart shopItems={shopItems} />
            </div>
          </div>
            
          <Catg />

          
        </div>
      </section>
    </>
  )
}

export default Shop

