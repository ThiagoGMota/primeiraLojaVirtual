import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
  return (
    <div className='flex justify-between px-12 py-4 items-center text-white bg-black bg-opacity-20 z-50'>
        <div className='w-2/12'>
            <h1 className='text-2xl'><span className='text-blue-600 font-bold'>T</span>Fashion</h1>
        </div>
       <div className='flex justify-evenly w-8/12'>
       <Link href={'/'}>Home</Link>
        <Link href={'/novidades'}>Novidades</Link>
        <Link href={'/masculino'}>Masculino</Link>
        <Link href={'/feminimo'}>Feminino</Link>
        <Link href={'/infantil'}>Infantil</Link>
       </div>
       <div className='w-2/12 flex gap-16  justify-end items-center '>
        <Link href={'login'} className='bg-black px-8 py-2 rounded-xl border-2 border-black hover:bg-white hover:text-black'>Login</Link>
        <Link href={'register'}>Sig in</Link>
       </div>
    </div>
  )
}
