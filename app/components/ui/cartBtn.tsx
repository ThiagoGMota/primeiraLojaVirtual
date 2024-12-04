'use client'
import React from 'react'
import { ShoppingCartIcon as CartIcon, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { DialogTitle } from '@radix-ui/react-dialog'

export const ShoppingCart =() => {
  return (
    <div className="fixed bottom-4 right-4 z-50 px-8">
      <Sheet>
      <SheetTrigger asChild>
      <button
        className="bg-black text-white rounded-full  shadow-lg border-2 p-4 border-black hover:bg-white   transition-colors"
        aria-label="Shopping Cart"
      >
        <CartIcon size={24} className=' hover:text-black '/>
      </button>
      </SheetTrigger>
      <SheetContent>
        <DialogTitle>Carrinho</DialogTitle>
        <h1>Carrinho</h1>
      </SheetContent>
    </Sheet>
    </div>
    
  )
}
