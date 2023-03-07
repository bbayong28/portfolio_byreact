import React from 'react'
import { useEffect, useState } from 'react';

const Totop = () => {

  const [showButton, setShowButton] = useState(false)

  const totop = () => { 
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    })
  }

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 400) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    //console.log(window.scrollY)
    window.addEventListener("scroll", handleShowButton)
    return () => {
    window.removeEventListener("scroll", handleShowButton)
    }
  }, [])

  return (
    showButton && (
    <div className='Totop'onClick={totop}>
      <i className='xi-arrow-top'></i> 
    </div>
    )
  )
}

export default Totop