import React from 'react';
import { Button } from '@/components/ui/button';

type NavItem = {
  label:  string;
  value:  string;
  id:     string
};

interface CategoriaNavProps {
  categoria: string;
  setCategoria: (value: string) => void;
}

export const CategoriaNav: React.FC<CategoriaNavProps> = ({ categoria, setCategoria }) => {
  const navItems: NavItem[] = [
    { label: 'Masculino', value: 'roupaMasculina', id:'masculino' },
    { label: 'Feminino', value: 'roupaFeminina', id: 'feminino' },
    { label: 'Acessorios M', value: 'acessoriosMasculinos', id: 'acessorios-masculino' },
    { label: 'Acessoris F', value: 'acessoriosFemininos', id: 'acessoriosFemininos' },
    { label: 'Infantil', value: 'roupaInfantil', id: 'infantil' },
  ];

  return (
    <nav className="mb-8">
      <ul className="flex gap-4">
        {navItems.map((item) => (
          <li key={item.label}>
            <Button
              id={item.id}
              className={` py-6 w-48 rounded-lg text-sm font-medium  bg-transparent shadow-none ${
                categoria === item.value
                  ? 'bg-black text-white '
                  : 'text-black hover:bg-white hover:text-black'
              }`}
              onClick={() => setCategoria(item.value)}
            >
              {item.label}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
