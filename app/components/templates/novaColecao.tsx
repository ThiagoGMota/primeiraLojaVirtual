'use client'
import react from 'react'
import { playfair_display } from "@/app/fonts/fonts";
import { ProdutoContext } from "@/app/context/ProdutoContext";
import { useContext, useState } from "react";
import { CategoriaNav } from "../ui/navProducts";
import { ProdutoGrid } from "./produtoGrid";

export const NovaColecao = () => {
  const context = useContext(ProdutoContext);

  if (!context) {
    return <div>Erro ao carregar contexto</div>;
  }

  const {
    roupaFeminina,
    roupaInfantil,
    roupaMasculina,
    acessoriosFemininos,
    acessoriosMasculinos,
    loading,
    error,
  } = context;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Erro ao carregar produtos</div>;

  const [categoria, setCategoria] = useState<string>('roupaMasculina');

  const getProdutos = () => {
    switch (categoria) {
      case 'roupaMasculina':
        return roupaMasculina;
      case 'roupaFeminina':
        return roupaFeminina;
      case 'acessoriosMasculinos':
        return acessoriosMasculinos;
      case 'acessoriosFemininos':
        return acessoriosFemininos;
      case 'roupaInfantil':
        return roupaInfantil;
      default:
        return [];
    }
  };

  // Obtém os produtos da categoria selecionada
  const produtosFiltrados = getProdutos();

  return (
    <div className="py-8">
      {/* Cabeçalho */}
      <div className="flex flex-col items-center justify-center gap-8 mb-8">
        <h1 className={`text-4xl font-bold ${playfair_display.className}`}>
          Nova Coleção
        </h1>
        <p className="text-zinc-600 text-xl text-center">
          Explore nossa coleção mais recente de novidades e fique à frente da curva da moda!
          <br />
          Descubra estilos da moda para homens, mulheres e crianças.
        </p>
      </div>
      <div className='flex items-center justify-center'>
        <CategoriaNav categoria={categoria} setCategoria={setCategoria} />
      </div>
      <ProdutoGrid produtos={produtosFiltrados} />
    </div>
  );
};
