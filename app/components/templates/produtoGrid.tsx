import React from 'react';
import { Produto } from '@/app/interface/produto';
import { ProdutoCard } from '../ui/produtoCard';

interface ProdutoGridProps {
  produtos: Produto[];
}

export const ProdutoGrid: React.FC<ProdutoGridProps> = ({ produtos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center max-w-7xl mx-auto px-4">
      {produtos.map((produto) => (
        <ProdutoCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
};

