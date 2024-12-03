'use client';
import React, { createContext, useEffect, useState } from "react";
import { fetchProdutos, Produto } from "../services/produtosApi";

interface ProdutoContext {
    produtosMasc: Produto[];
    produtosFem: Produto[];
    produtosPromo: Produto[];
    produtosKid: Produto[];
    produtosNew: Produto[];
    loading: boolean;
    error: string | null;
}

export const ProdutoContext = createContext<ProdutoContext | undefined>(undefined);

export const ProdutoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
    const [produtosMasc, setProdutosMasc] = useState<Produto[]>([]);
    const [produtosFem, setProdutosFem] = useState<Produto[]>([]);
    const [produtosPromo, setProdutosPromo] = useState<Produto[]>([]);
    const [produtosKid, setProdutosKid] = useState<Produto[]>([]);
    const [produtosNew, setProdutosNew] = useState<Produto[]>([]);
    const [loading, setLoading] = useState(true); // Inicializa como true
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProdutos = async () => {
            try {
                const { 
                    masculino, 
                    feminino, 
                    infantil, 
                    novaColecao, 
                    promocao 
                } = await fetchProdutos();
                
                setProdutosMasc(masculino);
                setProdutosFem(feminino);
                setProdutosPromo(promocao);
                setProdutosKid(infantil);
                setProdutosNew(novaColecao);
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
            produtosMasc, 
            produtosFem, 
            produtosPromo, 
            produtosKid, 
            produtosNew, 
            loading, 
            error 
        }}>
            {children}
        </ProdutoContext.Provider>
    );
};