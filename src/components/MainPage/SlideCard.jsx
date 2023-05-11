
import Sdata from "./Sdata"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SlideCard = () => {

  return (
    <>
        {Sdata.map((value, index) => {
          return (
            <>
              <div key={index}>
                <div >
                  <img src={value.cover} alt='nexon' width="100%" />
                </div>
              </div>
            </>
          )
        })}
    </>
  )
}

export default SlideCard
