import React,{useState} from 'react'
import {BsChevronUp} from "react-icons/bs"


function ScroolToTop() {
  const [visiable, setvisiable] = useState(false)
  window.addEventListener("scroll",()=>{
    window.pageYOffset>100? setvisiable(true):setvisiable(false)
  })
  return (
    <div className={`scrollTop  ${visiable ? "visiable" : ""}` }>
      <a href="#">
        <BsChevronUp/>
      </a>





    </div>
  )
}

export default ScroolToTop