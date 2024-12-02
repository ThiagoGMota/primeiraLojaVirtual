// src/services/ProdutoService.ts

export interface Produto {
    id: number;
    title: string;
    slug: string;
    description: string;
    rating: number;
    price: number;
    image: string;
}

export const fetchProdutos = async (): Promise<Produto[]> => {
    const response = await fetch('./produtos');
    
    if (!response.ok) {
        throw new Error('Erro ao buscar produtos');
    }

    const data = await response.json();
    return data;
};