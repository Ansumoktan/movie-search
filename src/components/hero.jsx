import React from 'react'
import { useNavigate } from "react-router-dom";

const hero = () => {
    
  const navigate = useNavigate();
   const handleClick = () => {
      navigate("/movie");
   }
  return (
    <div className='container'>
        <div className="main-section">
        <img className='hero' src="/images/img.jpg" alt="" />

        <h1>Watch movies whenever you want</h1>
        <p>Just Download or Watch Online</p>
         
         <button onClick={handleClick}>Get Started</button>
        </div>
      
    </div>
  )
}

export default hero
