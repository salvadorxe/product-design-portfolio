import Projects from '@/components/Projects'
import About from '@components/About'
import React from 'react'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      {/* Header */}
      <h1 className="head_text text-red-400 text-left">
        Salvador Antonio
        <br />
        <span className='text-main-black'>
          Product Designer, <br className='max-md:hidden'/> currently studying at <span className='text-grey'>Columbia University</span>
        </span>
      </h1>
      {/* Projects */}
      <Projects />
      <About />
    </section>
  )
}

export default Home