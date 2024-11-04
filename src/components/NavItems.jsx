import React from 'react'
import { navLinks } from '../data'

function NavItems() {
  return (
    <div>
      <ul className='nav-ul select-none'>
        {
          navLinks.map((item) => (
            <li key={item.id} className='nav-li relative group text-center'>
                <a href={item.href} className='nav-li_a' >
                  {item.name}
                <span className='absolute -left-1 bottom-[45%] w-0 transition-all duration-300 h-[0.145rem] bg-white-700 group-hover:w-[125%]'></span>
                </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default NavItems