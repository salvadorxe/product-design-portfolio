import React from 'react'
import projData from '../public/assets/projects/proj-details.json'
import { FaArrowRight } from "react-icons/fa6";

const ProjectCard = () => {
  const projs = projData["projects"];

  return(
    <div className='flex flex-wrap'>
      {projs.map((proj) => (
        <div key={proj.id} className='card_container'>
        <div>
          <img src={proj.img} />
          <div className='card_text border-t-2'>
            <h1 className='nav_text pt-2 pb-2'>{proj.title}</h1>
            <p className='desc pb-2'>{proj.desc}</p>
              <div className='flex cursor-pointer group items-center space-x-2'>
                <a className='text-main-black font-bold' href='#'>View </a>
                <FaArrowRight />
              </div>
        </div>
      </div>
      </div>
      ))}
    </div>
  )
}

export default ProjectCard