import React, { useEffect, useState } from "react";
import { btns, projects } from '../data/data'
import { motion, AnimatePresence } from 'framer-motion'

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
    <div className='Projects'>
      <div className="container center">
          <h2>My Projects</h2>
          <div className='flex pmenu'>
            {
              btns.map((btn) => {
                return (
                  <button key={btn.id} value={btn.value} onClick={handleClick}>
                    {btn.name}
                  </button>
                  );
                }
              )
            }
          </div>
          <AnimatePresence>
            <motion.div className='pimg'>
              {
                filterImages &&
                  filterImages.map((filterImage) => {
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        key={filterImage.id}
                      >
                        <motion.img src={filterImage.image} alt="" />
                      </motion.div>
                    );
                  }
                )
              }
            </motion.div>
          </AnimatePresence>
      </div>
    </div>
  )
  }

  export default Projects;