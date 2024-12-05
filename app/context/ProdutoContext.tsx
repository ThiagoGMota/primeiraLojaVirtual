'use client';
import React, { createContext, useEffect, useState } from "react";
import { fetchProdutos, Produto } from "../services/produtosApi";

interface ProdutoContext {
    roupaMasculina: Produto[];
    roupaFeminina: Produto[];
    produtosLimitado: Produto[];
    roupaInfantil: Produto[];
    acessoriosFemininos: Produto[]
    acessoriosMasculinos: Produto[]
    loading: boolean;
    error: string | null;
}

export const ProdutoContext = createContext<ProdutoContext | undefined>(undefined);

export const ProdutoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
    const [roupaMasculina, setRoupaMasculina] = useState<Produto[]>([]);
    const [roupaFeminina, setRoupaFeminina] = useState<Produto[]>([]);
    const [produtosLimitado, setProdutosLimitado] = useState<Produto[]>([]);
    const [roupaInfantil, setRoupaInfantil] = useState<Produto[]>([]);
    const [acessoriosMasculinos, setAcessoriosMasculinos] = useState<Produto[]>([]);
    const [acessoriosFemininos, setAcessoriosfemininos] = useState<Produto[]>([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProdutos = async () => {
            try {
                const { 
                    masculino, 
                    feminino, 
                    infantil,
                    acessoriosFemininos,
                    acessoriosMasculinos,
                    limitado
                } = await fetchProdutos();
                
                setAcessoriosMasculinos(acessoriosMasculinos)
                setAcessoriosfemininos(acessoriosFemininos)
                setRoupaInfantil(infantil)
                setRoupaFeminina(feminino)
                setRoupaMasculina(masculino)
                setProdutosLimitado(limitado)
            } catch (error) {
                console.error(error); // Log do erro para depuração
                setError('Erro ao carregar produtos'); // Corrigido o typo
            } finally {
                setLoading(false); // Mover aqui para garantir que loading é sempre atualizado
            }
        };

        loadProdutos();
    }, []);

    return (
        <ProdutoContext.Provider value={{ 
            roupaFeminina,
            roupaMasculina,
            produtosLimitado,
            roupaInfantil,
            acessoriosMasculinos,
            acessoriosFemininos,
            loading, 
            error 
        }}>
            {children}
        </ProdutoContext.Provider>
    );
};