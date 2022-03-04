import React from "react";
import { Link } from "react-router-dom";
// import Signup from "./Components/Signup";
import HomePage from "./page/HomePage";
import SignUpPage from "./page/SignUpPage";
// import { Route } from "react-router-dom";

function App() {
  return (
    <div>
     <HomePage/>
    </div>
  );
}

export default App;

// import React,{useState,useEffect} from 'react'
// import scrollreveal from 'scrollreveal'

// import Card from './Components/Card'
// // import Cardtest from './Components/Cardtest'
// import Clints from './Components/Clints'
// import Footer from './Components/Footer'
// import Free from './Components/Free'
// import Home from './Components/Home'
// import Like from './Components/Like'
// import Nav from './Components/Nav'
// import Release from './Components/Release'
// import ScroolToTop from './Components/ScroolToTop'
// import Signup from './Components/Signup'
// import SuperRare from './Components/SuperRare'
// import "./sass/index.scss"

// function App() {
//   const [theme, settheme] = useState("dark")
//   const changeTheme=()=>{
//     theme==="dark" ? settheme("light"):settheme("dark")
//   }

//   useEffect(()=>{
//     const registerAnimations=()=>{
//       const sr=scrollreveal({
//         origin:"bottom",
//         distance:"50px",
//         duration:2000,
//         reset: false,
//       });
//       sr.reveal(`
//         .nav,.home,.free,.clients,.super-rare,.releases,.like,.signup,.footer
//       `, {interval:200})

//     }
//     registerAnimations();
//   },[])
//   return (
//     <div className='app-container' data-theme={theme}>
//       <ScroolToTop/>
//       <Nav changeTheme={changeTheme} currentTheme={theme}/>
//       <Home/>
//       <Free/>
//       <Clints/>
//       <SuperRare/>
//       <Release/>
//       <Like/>
//       <Signup/>
//       <Footer/>

//     </div>
//   )
// }

// export default App
