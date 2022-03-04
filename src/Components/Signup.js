import React from 'react'
// import home from "../assets/home.png"
import signup from "../assets/signup.png";

function Signup() {
  return (
    <div className='signup'>
      <div className="container">
        <div className="content">
          <p className="sub-title">lounching soon</p>
          <h1 className='title'>An nft like no other</h1>
          <p className="description">dont miss out on relase our nft sin up to updatr</p>
          <button className='button'>signup</button>

        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home" srcset="" />

          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup