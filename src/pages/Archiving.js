import React from 'react'
import { archiving } from '../data/data'
import { Link } from 'react-router-dom'


const Archiving = () => {
  return (
    <div className='Archiving' id='2'>
      <div className="container center">
        <h2>Archiving</h2>
        <div className="inbox">
          {
            archiving.map((archiving) => { 
              return (
                <div key={archiving.id}>
                  <h3>
                    <span className='icon'>
                      {archiving.icon}
                    </span>
                    {archiving.name}
                  </h3>
                  <Link to={archiving.add} target='_blank' className='add'>{archiving.add}</Link>
                  <p>{archiving.intro}</p>
                  <li>{archiving.des1}</li>
                  <li>{archiving.des2}</li>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Archiving