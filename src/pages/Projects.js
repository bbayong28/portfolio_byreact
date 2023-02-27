import React, { useEffect, useState } from "react";
import { btns, projects } from '../data/data'
//import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {

  const [filterImages, setFilterImages] = useState(null);
  useEffect(() => {
    setFilterImages(projects);
  }, []);

  const handleClick = (e) => {
    let btnType = e.target.value;
    //console.log(btnType)
    const newFilterImages = projects.filter(
      (project) => project.value === btnType
    );
    btnType !== "All"
      ? setFilterImages(newFilterImages)
      : setFilterImages(projects);
  };
  //console.log(filterImages)

  return (
    <div className='Projects' id="3">
      <div className="container center">
          <h2>My Projects</h2>
          <div className='flex pmenu'>
            {
              btns.map((btn) => {
                return (
                  <button
                    key={btn.id}
                    value={btn.value}
                    onClick={handleClick}
                    className='tabmenu'
                  >
                    {btn.name}
                  </button>
                  );
                }
              )
            }
          </div>
            <div className='multiple'>
            {
              filterImages &&
                filterImages.map((filterImage) => {
                  return (
                    <div className="single" key={filterImage.id}>
                      <div className="simg">
                        <img src={process.env.PUBLIC_URL + "img/project" + filterImage.id + ".png"} alt={filterImage.id} />
                      </div>
                      <p>{filterImage.name}</p>
                    </div>
                  );
                }
              )
            }
        </div>
      </div>
    </div>
  )
  }

  export default Projects;