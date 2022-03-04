import React from 'react'
import {bsArrawRight, BsArrowRight} from "react-icons/bs"
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";

function Release() {
  return (
    <div className="releases">
      <div className="release orange ">
        <div className="content">
          <h2 className="title"> Offer Zone</h2>
          <p className="description">enim dolore dolorem ipsum praesentium quisquam eligendi dicta ullam saepe sapiente rerum possimus ratione commodi esse, totam laudantium earum ad nostrum necessitatibus sunt, minus quos? Enim laboriosam dolorum consequuntur nisi.</p>
          <p className="description"> offer is limited</p>
          <a href="#" className="link">
            check out <BsArrowRight className='svg'/>

          </a>
        </div>
        <div className="image">
          <img src={release1} alt="relese" />
          {/* <div className="elipse"></div> */}
          <div className="ellipse">   hello elips</div>
        </div>
        
        
      </div>
      
      
    </div>
  )
}

export default Release