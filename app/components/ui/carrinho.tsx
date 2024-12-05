'use client'

import React, { useContext } from 'react'
import { ShoppingCartIcon as CartIcon } from 'lucide-react'
import Link from 'next/link'

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CarrinhoContext } from '@/app/context/carrinhoContext'
import { GridCarrinho } from '../templates/gridCarrinho'

export const ShoppingCart = () => {
  const carrinhoContexto = useContext(CarrinhoContext);

  if (!carrinhoContexto) {
    throw new Error("ShoppingCart deve ser usado dentro do CarrinhoProvider.");
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="bg-black text-white rounded-full shadow-lg border-2 p-4 border-black hover:bg-white hover:text-black transition-colors"
            aria-label="Shopping Cart"
          >
            <CartIcon size={24} />
          </button>
        </SheetTrigger>

        <SheetContent className="flex flex-col h-full">
          <SheetHeader className="bg-black text-white flex items-center py-2 rounded-lg mt-4">
            <SheetTitle className="text-white text-center text-2xl">Carrinho</SheetTitle>
          </SheetHeader>
          
          <div className="flex-grow overflow-auto">
            <GridCarrinho />
          </div>

          <SheetFooter className="border-t-2 border-black p-4 mt-auto">
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>R$ {}</span>
                </div>
              </div>
              <Link 
                href="/carrinho" 
                className="bg-black text-white text-xl py-2 w-full rounded-lg text-center block hover:bg-gray-800 transition-colors"
              >
                Finalizar Compra
              </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

