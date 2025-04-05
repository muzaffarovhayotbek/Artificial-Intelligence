import React from 'react'
import apply from '../../assets/apply.png'
import './Main.css'
import right from '../../assets/right.png'
function Main() {
  return (
    <div>
      <div className="main">
        <div className="container main__container">
          <div className="main-left">
            <img src={apply} alt="apply" width={725} />
          </div>
          <div className="main-right">
            <h2>Apply AI, Deep Learning and Data Sciece to solve</h2>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="second-main">
          <div className="container second-main__container">
           <div className="second-main-left">
           <h2>What our clients say about our awesome solutions</h2>
            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p>
            <p>Lorem ipsum is placeholder previewing layouts and visual mockups.</p>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
           </div>
           <div className="second-main-right">
            <img src={right} alt="" width={642} />
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
