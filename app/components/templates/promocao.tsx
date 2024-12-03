import { playfair_display } from '@/app/fonts/fonts'
import Link from 'next/link'
import React, { useContext } from 'react'
import { Cronometro } from '../ui/cronometro'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ProdutoContext } from '@/app/providers/ProdutoProvider'

export const Promocao = () => {
   /*  const contextProduto =  useContext(ProdutoContext)
    const {  } = contextProduto */
  return (
    <div className='flex'>
        <div className='w-5/12  '>
            <div className=' pb-28'>
                <h1 className={`text-5xl text-zinc-800  ${playfair_display.className}`}>Limitado</h1>
                <p className='text-zinc-600 text-xl py-14'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni labore fugiat hic illum sit doloremque harum impedit beatae modi? Quaerat quia enim quasi. Minus doloremque placeat inventore numquam unde ipsa?
                </p>
                <Link 
                    href="/"
                    className='bg-black px-12 py-6  text-white rounded-xl hover:text-black hover:bg-white border-2 border-black'
                >
                        Compre Agora
                </Link>
            </div>
            <div className=''>
                <h1 className='text-3xl text-zinc-600 mb-6'>Contagem Regressiva.</h1>
                <Cronometro initialTime={12332}/>
            </div>
        </div>
        <div className='w-7/12 '>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className='flex  gap-x-7 justify-end'>
                        <Image src="/promo1.png" alt='2' width={410} height={500}/>
                        <div>
                            <Image src="/promo2.png" alt='2' width={400} height={200}/>
                        </div>
                    </CarouselItem>
                    <CarouselItem className='flex  gap-x-7 justify-end'>
                        <Image src="/promo1.png" alt='2' width={410} height={500}/>
                        <div>
                            <Image src="/promo2.png" alt='2' width={400} height={200}/>
                        </div>
                    </CarouselItem>
                    <CarouselItem className='flex  gap-x-7 justify-end'>
                        <Image src="/promo1.png" alt='2' width={410} height={500}/>
                        <div>
                            <Image src="/promo2.png" alt='2' width={400} height={200}/>
                        </div>
                    </CarouselItem>
                   
                   
                </CarouselContent>
                <div className=' absolute right-52 top-[550px]'>
                    <CarouselPrevious className='border-2 border-black'/>
                    <CarouselNext className='border-2 border-black'/>
                </div>
            </Carousel>

          
        </div>
    </div>
  )
}
