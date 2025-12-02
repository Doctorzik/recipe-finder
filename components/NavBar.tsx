'use client'
import Image from 'next/image'

import logo from "@/public/assets/images/logo.svg"
import hamburger from "@/public/assets/images/icon-hamburger-menu.svg"

import ButtonLink from './Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navList =
  [{
    name: "Home",
    href: "/"
  },
  {
    name: "About",
    href: "/about",

  },
  {
    name: "Recipes",
    href: "/recipes",
  }
  ]
function NavBar() {

  const path = usePathname()
  const [open, setOpen] = useState("close")


  const showMobileNav = () => {
    if (open === "close") {
      setOpen("open")
    }
    else {
      setOpen("close")
    }
  }
  return (
    <div className='p-4   md:px-8 md:py-5   lg:px-15 py-5 relative'>
      <nav className='flex justify-between items-center'>
        <div className='w-61'>
          <Image src={logo} alt='Recipe Logo Image' className='w-50' />
        </div>
        <div className={'hidden lg:block absolute lg:static'}>

          <ul className='flex  gap-7 '>
            {
              navList.map(({ name, href, }) =>
              (<span key={name} className='relative '>
                <div className={path === href ? 'block absolute bg-orange-500 w-12 bottom-0 h-1' : 'hidden'}></div>
                <li  ><Link href={href}>{name}</Link> </li>
              </span>
              )
              )
            }
          </ul>
        </div>
        <div className='lg:hidden bg-neutral-200 w-6 h-6' onClick={() => showMobileNav()}>
          <Image src={hamburger} alt='Hamburger Button' className='w-full' />
        </div>
        <div className='hidden lg:block'>

          <ButtonLink linkTo='recipes' text='Browse Recipes' />

        </div>
      </nav>
      <div className={open === "open" ? 'bg-white   flex flex-col gap-2 w-[96%] m-auto md:w-full lg:hidden max-w-[704px]  absolute' : 'hidden'}>
        <ul className='flex flex-col gap-2'>
          {
            navList.map(({ name, href, }) =>
            (<span key={name} className='relative'>
              <div className={path === href ? 'block absolute bg-orange-500 w-12 bottom-0 h-1' : 'hidden'}></div>
              <li  className='bg-gray-100 '><Link href={href}>{name}</Link> </li>
            </span>
            )
            )
          }
        </ul>
        <div className=''>
          <ButtonLink linkTo='recipes' text='Browse Recipes' />

        </div>
      </div>
    </div>
  )
}

export default NavBar