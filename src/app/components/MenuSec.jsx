import Image from 'next/image'
import React from 'react'
import logo from '../../../public/assets/img/logo.svg'
import hamburger from '../../../public/assets/img/hamburger.svg'

const MenuSec = () => {
  return (
    <header className='bg-[#1B1F23] w-[650px] xxxl:w-[795px] h-[85px] xxxl:h-[100px] flex justify-between py-[25px] px-[20px] xxxl:py-[30px] xxxl:px-[25px] items-center'>
        <div><Image src={logo} className='h-[45px] xxxl:h-[50px] w-auto' alt='' width={300} height={100}/></div>
        <div><Image src={hamburger} className='h-[25px] xxxl:h-[30px] w-auto' alt='' width={80} height={80}/></div>
    </header>
  )
}

export default MenuSec