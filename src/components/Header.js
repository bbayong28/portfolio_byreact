import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {

  const [on, setOn] = useState('')

  return (
    <div className='Header'>
      <div className="container flex">
        <div className="logo">
          <p>LOGO</p>
        </div>
        <nav>
          <ul className={ `gnb ${on ? 'on' : ''}` }>
            <li><a><i className='xi-home micons'></i>Home</a></li>
            <li><a><i className='xi-documents micons'></i>Projects</a></li>
            <li><a><i className='xi-mail micons'></i>Contact</a></li>
          </ul>
        </nav>  
        <BiMenuAltRight className='mopen' onClick={() => { setOn(!on) }}/>      
      </div>
    </div>
  )

}

export default Header