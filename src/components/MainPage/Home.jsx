import React from "react"
import "./Home.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <div style={{
    }}>
      <section className='home' style={{"backgroundColor":"#a6a6a6"}}>
        <div >
          <SliderHome />
        </div>
      </section>
    </div >
  )
}

export default Home
