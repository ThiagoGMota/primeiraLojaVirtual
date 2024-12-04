import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
  return (
    <div className='flex justify-between px-12 py-4 items-center text-white bg-black bg-opacity-20 z-50'>
        <div className='w-3/12'>
            <h1 className='text-2xl'><span className='text-blue-600 font-bold'>T</span>Fashion</h1>
        </div>
       <div className='flex justify-between w-9/12'>
       <Link href={'/'}>Home</Link>
        <Link href={'/news'}>Novidades</Link>
        <Link href={'/man'}>Masculino</Link>
        <Link href={'/woman'}>Feminino</Link>
        <Link href={'/kids'}>Infantil</Link>
       </div>
      
    </div>
  )
}
