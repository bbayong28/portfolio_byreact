import React from 'react'
import { skills } from '../data/data';

const Skill = () => {
  return (
    <div className='Skill' id='3'>
      <div className="container center">
        <h2>Skills</h2>
        <div className="outbox">
          <ul className="skills flex">
            {
              skills.map((skill) => { 
                return (
                  <li className="skill" key={skill.id}>
                    <img src={process.env.PUBLIC_URL + "img/skill" + skill.id + ".png"} alt="" />
                  </li>
                )
                
              })
            }
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skill