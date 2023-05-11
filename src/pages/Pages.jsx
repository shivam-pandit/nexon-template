import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/vehicleOverview/FlashDeals"
import TopCate from "../components/verdict/TopCate"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/Comparision/Shop"

const Pages = ({ productItems, shopItems }) => {
  return (
    <>
      <Home  />
      <FlashDeals productItems={productItems} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} />
    </>
  )
}

export default Pages
