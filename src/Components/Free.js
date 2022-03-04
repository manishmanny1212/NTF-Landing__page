import React from 'react'
import icon from "../assets/icon.png"
import Card from './Card';
import super1 from "../assets/super1.png"
function Free(){
  return (
    <div className="free">
      <div className="container">
        <div className="background">
        <div className="ellipse pink"></div>
        <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">free Nft for early birds</h2>
          <p className="description">signup today and you will get nft when we laonch</p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card 
          image={super1}
          series="Floop series"
          title="purple man"
          price={2.99}
          tag={156456}
          time={1}
          
          />
        </div>
        <div className="card2">
          <Card
          
          image={super1}
          series="Floop series"
          title="purple man"
          price={2.99}
          tag={156456}
          time={1}
          />
        </div>
      </div>
    </div>
    
  )
}

export default Free;