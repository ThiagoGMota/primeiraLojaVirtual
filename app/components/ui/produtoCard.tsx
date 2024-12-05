import React, { useContext } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { Produto } from '@/app/interface/produto';
import { CarrinhoContext } from '@/app/context/carrinhoContext';

interface ProdutoCardProps {
  produto: Produto;
}

export const ProdutoCard: React.FC<ProdutoCardProps> = ({ produto }) => {

  const carrinhoContexto = useContext(CarrinhoContext);
  if (!carrinhoContexto) {
    throw new Error("BotaoAdicionarAoCarrinho deve ser usado dentro do CarrinhoProvider.");
  }
  const { acoes } = carrinhoContexto;

  const adicionarAoCarrinho = () => {
    acoes({type: 'ADICIONAR', produto});
  }
  return (
    <Card className='w-80 flex flex-col justify-between'>
      <CardHeader className="p-4 pb-0">
        <CardContent className="p-0">
          <Image src={produto.image} alt={produto.title} width={300} height={300} className="w-full h-56 object-cover rounded-md" />
        </CardContent>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <CardTitle className="text-base font-medium line-clamp-2 mb-2">{produto.title}</CardTitle>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(produto.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm">{produto.rating.toFixed(1)}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="font-bold text-lg">R$ {produto.price.toFixed(2)}</span>
        <Button onClick={adicionarAoCarrinho}>Adicionar</Button>
      </CardFooter>
    </Card>
  );
};

