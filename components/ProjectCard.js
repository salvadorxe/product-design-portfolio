import React from 'react'

const ProjectCard = () => {
  return (
    <div className='card_container'>
      <img src="https://picsum.photos/300/200" />
      <div className='card_text'>
        <h1 className='nav_text pb-2'>Project Name</h1>
        <p className='desc pb-2'>This is the project description. Describe the project.</p>
        <a className='text-main-black font-bold' href='#'>View</a>
      </div>
    </div>
  )
}

export default ProjectCard