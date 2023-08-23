import React from 'react'
import image from '../public/assets/me.png'

const About = () => {
  return (
    <section className='pt-12 pb-12'>
      <div className='block md:flex flex-row justify-center space-x-12'>
        <div className='hidden md:block basis-1/8'>
          <img className='w-60 h-full rounded-[50%]' src={'/assets/me.png'}/>
        </div>
        <div className='basis-1/8'>
          <h1 className='font-bold text-4xl pb-4'>About</h1>
          <span className='align-middle text-lg whitespace-pre-line'>Hello there!{'\n'}I'm Salvador Xe, a Latino Product Designer {'\n'}specializing in UI & UX design. I am currently {'\n'} a candidate for a Bachelor of Arts in Computer Science, {'\n'}graduating in May 2024.{'\n\n'}<p className='font-semibold'>Creative Designs, purposeful choices.</p></span>
          <p>Test</p>
        </div>
      </div>
    </section>
  )
}

export default About