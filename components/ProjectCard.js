import React from 'react'
import projData from '../public/assets/projects/proj-details.json'

const ProjectCard = () => {
  const projs = projData["projects"];

  return(
    <div className='flex'>
      {projs.map((proj) => (
        <div key={proj.id} className='card_container'>
        <div className='card_body'>
        <img className='card_cover' src={proj.img} />
        <div className='card_text border-t-2'>
          <h1 className='nav_text pt-2 pb-2'>{proj.title}</h1>
          <p className='desc pb-2'>{proj.desc}</p>
          <a className='text-main-black font-bold' href='#'>View</a>
       </div>
      </div>
      </div>
      ))}
    </div>
  )
}

export default ProjectCard