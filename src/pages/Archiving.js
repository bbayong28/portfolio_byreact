import React from 'react'
import { archiving } from '../data/data'

const Archiving = () => {
  return (
    <div className='Archiving'>
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
                  <a className='add' href={archiving.add}>{archiving.add}</a>
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