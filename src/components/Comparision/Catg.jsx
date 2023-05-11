import React from "react"

const Catg = () => {
  const data = [
    {
      name: "Tata Nexon EV Prime colors",
    },
    {
      name: "Tata Nexon EV Prime colors",
    },
    {

      name: "Tata Nexon EV Prime colors",
    },
    {

      name: "Tata Nexon EV Prime colors",
    },
    {

      name: "Tata Nexon EV Prime colors",
    },{

      name: "Tata Nexon EV Prime colors",
    },
    {

      name: "Tata Nexon EV Prime colors",
    },
   
   
  ]
  return (
    <>

      <div className='category' style={{"backgroundColor":"#a6a6a6"}}>

        {data.map((value, index) => {
          return (
            <div className='f_flex' key={index}>
              <span>{value.name}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Catg
