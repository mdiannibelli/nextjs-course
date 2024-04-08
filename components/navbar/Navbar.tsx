import Link from 'next/link'
import React from 'react'
import HomeIcon from '../icons/HomeIcon'
import ActiveLink from '../active-link/ActiveLink'

const navLinks = [
    {
        path: '/about',
        text: 'About'
    },
    {
        path: '/pricing',
        text: 'Pricing'
    },
    {
        path:  '/contact',
        text: 'Contact'
    }
]

export default function Navbar() {
    console.log('Navbar Created in Server Side')
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <Link className='m-2 flex items-center' href='/'><HomeIcon className='mr-2'/><span>Home</span></Link>
       <div className='flex flex-1 justify-end [&>a]:m-2'>
        {navLinks.map((navItem, i) => (
            <ActiveLink key={i} path={navItem.path} text={navItem.text}/>
        ))}
       </div>
    </nav>
  )
}
