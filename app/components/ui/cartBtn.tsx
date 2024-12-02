'use client'

import { useState } from 'react'
import { ShoppingCartIcon as CartIcon, X } from 'lucide-react'


export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleCart = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleCart}
        className="bg-black text-white rounded-full  shadow-lg border-2 p-3 border-black hover:bg-white   transition-colors"
        aria-label="Shopping Cart"
      >
        <CartIcon size={24} className=' hover:text-black '/>
       
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
           
          </div>
        </div>
      )}
    </div>
  )
}

