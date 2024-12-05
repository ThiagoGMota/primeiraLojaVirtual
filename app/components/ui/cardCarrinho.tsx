'use client'

import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Item } from '@radix-ui/react-accordion'

interface CartItemProps {
  id:                   number
  src:                  string
  alt:                  string
  title:                string
  quantidade:           number
  initialQuantity:      number
  removerDoCarrinho:    (id: number) => void
 
}

export default function CartItem({ src, alt, title, removerDoCarrinho, id, quantidade }: CartItemProps) {
  const [quantity, setQuantity] = useState(quantidade)

  const addItem = () => setQuantity(prev => prev + 1)
  const removeItem = () => setQuantity(prev => Math.max(1, prev - 1))

  return (
    <Card className='flex flex-row items-center p-2 w-full'>
      <Image src={src} alt={alt} width={60} height={60} className="rounded-md" />
      <CardContent className='flex-grow px-3 py-1'>
        <h3 className="font-semibold text-sm">{title}</h3>
      </CardContent>
      <CardFooter className='flex flex-col items-center space-y-1 p-1'>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={removeItem}>
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button variant="outline" size="icon" onClick={addItem}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="text-destructive" onClick={() => removerDoCarrinho(id)}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

