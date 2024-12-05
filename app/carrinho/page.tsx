'use client'
import React from 'react'
import { GridCarrinho } from '../components/templates/gridCarrinho'
import Link from 'next/link'

const Pagamento = () => {
  return (
    <div className='pt-20 flex items-center flex-col border-2 border-black h-screen'>
        <h1 className='text-2xl text-black'>Confirme seus produtos e prossiga com o pagamento</h1>
        <GridCarrinho/>
        <div className='fixed bottom-0 border-t-2 p-4 h-36 w-full flex items-center justify-center border-black '>
            <div className='flex justify-between items-center h-full'>
                <div className='flex items-center'>
                    <h1 className='text-lg text-black'>Subtotal:</h1>
                    <h1 className='text-lg text-black ml-2'>R$ 100,00</h1>
                </div>
                <Link href={'/pagamento'}>Ir para o pagamento</Link>
            </div>
        </div>
    </div>
  )
}

export default Pagamento