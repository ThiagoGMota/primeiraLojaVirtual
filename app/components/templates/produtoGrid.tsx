import React from 'react';
import { Produto } from '@/app/interface/produto';
import { ProdutoCard } from '../ui/produtoCard';

interface ProdutoGridProps {
  produtos: Produto[];
}

export const ProdutoGrid: React.FC<ProdutoGridProps> = ({ produtos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {produtos.map((produto) => (
        <ProdutoCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
};
