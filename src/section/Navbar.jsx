import React, { useState } from 'react'
import NavItems from '../components/NavItems';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed bg-black/90 top-0 left-0 right-0 z-50'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center mx-auto c-space'>
              <p className='relative group select-none'>
                <a href='#' className='text-neutral-400 font-bold text-xl transition-colors relative'>
                  <img className='h-[80px] inline' src='/assets/navlogo1.png'/>
                  <span className='absolute -bottom-2 -right-10 group'>radeep</span>
                  <span className='absolute left-5 bottom-[10%] w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-[135%]'></span>
                </a>
              </p>

                <button onClick={() => setIsOpen(!isOpen)} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle menu'>
                  <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} alt='toggle' className='h-6 w-6'/>
                </button>

                <nav className='sm:flex hidden'>
                  <NavItems/>
                </nav>
            </div>
        </div>

        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <nav className='p-5'>
              <NavItems/>
            </nav>
        </div>

    </div>
  )
}
