import React from 'react'
import ProjHead from '@components/ProjHead'
import ProjCont from '@components/ProjCont'

const page = () => {
  return (
    <section>
      <ProjHead />
      <section className='mx-0 mb-16 sm:mx-16'>
        <ProjCont />
      </section>
    </section>
  )
}

export default page