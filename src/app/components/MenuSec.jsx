import Image from 'next/image'
import React from 'react'
import logo from '../../../public/assets/img/logo.svg'
import hamburger from '../../../public/assets/img/hamburger.svg'

const MenuSec = () => {
  return (
    <header className='bg-[#1B1F23] w-[795px] h-[100px] flex justify-between py-[30px] px-[25px] items-center'>
        <div><Image src={logo} className='h-[50px] w-auto' alt='' width={300} height={100}/></div>
        <div><Image src={hamburger} className='h-[30px]' alt='' width={80} height={80}/></div>
    </header>
  )
}

export default MenuSec