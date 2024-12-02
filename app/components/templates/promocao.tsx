import { playfair_display } from '@/app/fonts/fonts'
import Link from 'next/link'
import React from 'react'

export const Promocao = () => {
  return (
    <div>
        <div>
            <div>
                <h1 className={`text-5xl text-zinc-800  ${playfair_display.className}`}>Limitado</h1>
                <p className='text-zinc-600 text-xl my-12'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni labore fugiat hic illum sit doloremque harum impedit beatae modi? Quaerat quia enim quasi. Minus doloremque placeat inventore numquam unde ipsa?
                </p>
                <Link 
                    href="/"
                    className='bg-black px-12 py-6 text-white rounded-xl hover:text-black hover:bg-white border-2 border-black'
                >
                        Compre Agora
                </Link>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}
