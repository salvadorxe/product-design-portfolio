'use client'

import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [menu, setMenu] = useState(false)
  const handleNav = () => {
    setMenu(!menu)
  }
  return (
    <nav class="w-full mb-16 pt-6 pb-6">
      <div className='flex justify-between items-center h-full w-full'>
        <Link href='/'>
          <p className='nav_text'>Salvador Antonio</p>
        </Link>
        <div className='hidden sm:flex'>
          <ul className='flex space-x-10'>
              <Link href='/'>
                <li className='nav_link'>Work</li>
              </Link>
              <Link href='/'>
                <li className='nav_link'>About</li>
              </Link>
              <Link href='/'>
                <li className='nav_link'>Other</li>
              </Link>
            </ul>
        </div>
        <div className='md:hidden'>
          <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
            <AiOutlineMenu size={24} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav