import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Footer from "./common/footer/Footer"
import Sdata from "./components/Comparision/Sdata"

function App() {

  const { shopItems } = Sdata
  const isBackgroundRed = true;

 

  return (
    // <div style={{
    //   backgroundColor: isBackgroundRed ? 'blue' : 'sa',
    // }}
    // >
     <div>
      <Router>
        {/* <Header  /> */}
        <Switch>
          <Route path='/' exact>  
            <Pages shopItems={shopItems} />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
