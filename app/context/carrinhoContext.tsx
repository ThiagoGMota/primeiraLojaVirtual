'use client';

import { createContext, useReducer, ReactNode } from "react";
import { DescricaoProdutoNoCarrinho } from "../interfaces";

export interface EstadoCarrinho {
    itens: DescricaoProdutoNoCarrinho[];
}

interface FuncoesCompartilhadas {
    estadoAtual: EstadoCarrinho;
    acoes: React.Dispatch<AcaoCarrinho>;
}

type AcaoCarrinho = 
    | { type: 'ADICIONAR'; produto: DescricaoProdutoNoCarrinho }
    | { type: 'REMOVER'; id: number }
    | { type: 'LIMPAR' };

// Contexto
export const CarrinhoContext = createContext<FuncoesCompartilhadas | undefined>(undefined);

// Estado inicial do carrinho
const estadoInicialCarrinho: EstadoCarrinho = { itens: [] };

// Reducer para gerenciar ações do carrinho
const acoesDoCarrinho = (estadoCarrinho: EstadoCarrinho, acao: AcaoCarrinho): EstadoCarrinho => {
    switch (acao.type) {
        case 'ADICIONAR': {
            const produto = acao.produto;

            // Verifica se o produto já existe no carrinho
            const itemExistente = estadoCarrinho.itens.find(
                (item) =>
                    item.id === produto.id 
            );

            if (itemExistente) {
                // Incrementa a quantidade do item existente
                return {
                    ...estadoCarrinho,
                    itens: estadoCarrinho.itens.map((item) =>
                        item === itemExistente
                            ? { ...item, quantidade: (item.quantidade || 1) + 1 }
                            : item
                    ),
                };
            }

            // Adiciona o novo produto ao carrinho com quantidade inicial 1
            return {
                ...estadoCarrinho,
                itens: [...estadoCarrinho.itens, { ...produto, quantidade: 1 }],
            };
        }

        case 'REMOVER':
            return {
                ...estadoCarrinho,
                itens: estadoCarrinho.itens.filter((item) => item.id !== acao.id),
            };

        case 'LIMPAR':
            return { ...estadoCarrinho, itens: [] };

        default:
            return estadoCarrinho;
    }
};

// Provider do Carrinho
export const CarrinhoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [estadoAtual, acoes] = useReducer(acoesDoCarrinho, estadoInicialCarrinho);

    return (
        <CarrinhoContext.Provider value={{ estadoAtual, acoes }}>
            {children}
        </CarrinhoContext.Provider>
    );
};
