import React, { useState } from 'react'
import { Link } from "react-scroll";
import { HomeMenu } from '../data/data';
import { useEffect } from 'react';

const Header = () => {

  const [on, setOn] = useState('')


  return (
    <div className='Header'>
      <div className="container flex">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="" />
          <p>hy's portfolio</p>
        </div>
        <nav>
          <ul className={`gnb ${on ? 'on' : ''}`}>
            {
              HomeMenu.map((menu, idx) => { 
                return (
                  <li key={menu.id}>
                    <Link to={menu.id} spy={true} smooth={true} onClick={() => { setOn(''); }}>
                      <i className={`${menu.icon} micons`}></i>
                      { menu.title }                      
                    </Link>
                  </li>
                )
                
              })
            }
          </ul>
        </nav>  
        <i className='xi-bars mopen' onClick={() => { setOn(!on) }}/>      
      </div>
    </div>
  )

}

export default Header