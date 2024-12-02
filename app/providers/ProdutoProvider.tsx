'use client'
import { createContext, useEffect, useState } from "react";
import { fetchProdutos, Produto } from "../services/produtosApi";

interface ProdutoContext {
    produtos: Produto[]
    loading: boolean
    error: string | null
}

export const ProdutoContext = createContext< ProdutoContext | undefined >( undefined )
export const ProdutoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect( () => {
        const loadProdutos = async () => {
            try {
                const dados = await fetchProdutos()
                setProdutos(dados)
            } catch (error) {
                setError('Ero ao carregar produtos')
            } finally {
                setLoading(false)
            }
        }
        loadProdutos()
    }, [])

    return (
        <ProdutoContext.Provider value={{produtos, loading, error}}>
            {children}
        </ProdutoContext.Provider>
    )
}