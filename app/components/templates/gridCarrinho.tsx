import React, { useContext } from 'react'
import CartItem from '../ui/cardCarrinho'
import { CarrinhoContext } from '@/app/context/carrinhoContext';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

export const GridCarrinho = () => {
  const carrinhoContexto = useContext(CarrinhoContext);

  if (!carrinhoContexto) {
    throw new Error("ShoppingCart deve ser usado dentro do CarrinhoProvider.");
  }
  const { estadoAtual, acoes } = carrinhoContexto;
  const removerDoCarrinho = (id:number) => acoes ({ type: 'REMOVER', id })
       if (estadoAtual.itens.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <CardTitle className="text-2xl font-bold text-muted-foreground mb-2">
                Carrinho vazio
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Adicione alguns produtos para começar
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-4">
          {estadoAtual.itens.map((item) => (
            <CartItem 
              key={item.id} 
              src={item.image} 
              alt={item.title}  
              title={item.title} 
              initialQuantity={1}
              id={item.id}
              quantidade={item.quantidade}
              removerDoCarrinho={() => removerDoCarrinho(item.id)}
            />
          ))}
        </div>
      </div>
    </div>  
  )

  
}
