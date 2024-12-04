import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { Produto } from '@/app/interface/produto';

interface ProdutoCardProps {
  produto: Produto;
}

export const ProdutoCard: React.FC<ProdutoCardProps> = ({ produto }) => {
  return (
    <Card>
      <CardHeader>
        <CardContent>
          <Image src={produto.image} alt={produto.title} width={300} height={300} />
        </CardContent>
      </CardHeader>
      <CardContent>
        <CardTitle>{produto.title}</CardTitle>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(produto.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2">{produto.rating.toFixed(1)}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-bold">R$ {produto.price.toFixed(2)}</span>
        <Button>Adicionar ao carrinho</Button>
      </CardFooter>
    </Card>
  );
};
