import { ArrowUp, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className="bg-black text-zinc-200 p-12">
        <div className='flex gap-10'>
            <div className='flex flex-col gap-4 w-1/5'>
                <h1 className='text-2xl'>
                    <span className='text-blue-500 font-semibold'>T</span>
                    Fashion
                </h1>
                <p>Beatae quas obcaecati sapiente harum in venia epellendus nobis, ipsam cumque sed dignissimos qui sit incidunt veritatis.</p>
                <p>Interessado em trabalhar conosco ?</p>
                <Link href="mailto:example@example.com"  className='text-blue-300 font-semibold'>example@example.com.ru</Link>
                <div className='flex gap-4'> 
                    <Link href=""><Instagram/></Link>
                    <Link href=""><Twitter/></Link>
                    <Link href=""><Instagram/></Link>
                    <Link href=""><Youtube/></Link>
                    <Link href=""><Facebook/></Link>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-1/5'>
                <h1 className='text-xl'>Links Rapidos</h1>
                <ul className='flex flex-col gap-4'>
                    <li><Link href="/home">Home</Link></li>
                    <li><Link href="/men">Masculino</Link></li>
                    <li><Link href="/woman">Feminino</Link></li>
                    <li><Link href="/news">Novidades</Link></li>
                    <li><Link href="/kids">Infantil</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 w-1/5'>
                <h1 className='text-xl'>Minha Conta</h1>
                <ul className='flex flex-col gap-4'>
                    <li><Link href="/">Perfil</Link></li>
                    <li><Link href="/">Historico</Link></li>
                    <li><Link href="/">Lista</Link></li>
                    <li><Link href="/">Favorito</Link></li>
                    <li><Link href="/">Carrinho</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 w-1/5'>
                <div>
                    <p>Endereço</p>
                    <p>Rua 1, 123 Silicon Valey</p>
                </div>
                <div>
                    <p>Horario</p>
                    <p>9:30 am - 10:30 pm</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-1/5'>
                <h1>Construido por</h1>
                <Link href="https://thiagomotadeveloper.vercel.app/" className='text-blue-400 font-semibold'>Thiago G. Mota</Link>
                <div className='flex items-center justify-center p-10'>
                    <Link href="#home" className='border-2 rounded-full p-4 hover:bg-white hover:text-black'><ArrowUp/></Link>
                </div>
            </div>
            
        </div>
        <div className='flex flex-row gap-5 mt-8 justify-center items-baseline'>
            <p>Design inspirado por</p> 
            <Link 
                href="https://www.behance.net/gallery/206884049/Fassonx-Men-and-women-fashion-landing-page?tracking_source=search_projects|eccomerce&l=1#" 
                className="text-blue-400 hover:underline" 
                target="_blank"
            >
                <p>Raja</p>
            </Link> 
             no Behance.
        </div>
    </div>
  )
}
