import Image from 'next/image'
import React from 'react'
import logo from '../../../public/assets/img/logo.svg'
import hamburger from '../../../public/assets/img/hamburger.svg'

const MenuSecThree = () => {
  return (
       
    <header className='bg-transparent w-full h-[85px] xxxl:h-[100px]  py-[25px] px-[20px] xxxl:py-[30px] xxxl:px-[25px] z-10 absolute'>
      <div className="container flex justify-between  items-center ">
        <div><Image src={logo} className='h-[45px] xxxl:h-[50px] w-auto' alt='' width={300} height={100}/></div>
        <div ><Image src={hamburger} className='h-[25px] xxxl:h-[32px] w-auto' alt='' width={80} height={80}/></div>
        
    </div>
    </header>
  )
}

export default MenuSecThree