export interface Produto {
    id: number;
    title: string;
    slug: string;
    description: string;
    rating: number;
    price: number;
    image: string;
    category: string[]; // Certifique-se de que isso é sempre um array
}

// Definindo as categorias como um tipo literal
type Categoria = 'masculino' | 'promocao' | 'feminino' | 'infantil' | 'novaColecao';

export const fetchProdutos = async (): Promise<Record<Categoria, Produto[]>> => {
    const response = await fetch('http://localhost:3001/products');
    
    if (!response.ok) {
        throw new Error('Erro ao buscar produtos');
    }

    const data: Produto[] = await response.json();

    // Inicializando categorias
    const produtosPorCategoria: Record<Categoria, Produto[]> = {
        masculino: [],
        promocao: [],
        feminino: [],
        infantil: [],
        novaColecao: [],
    };

    // Organizando produtos por categoria
    data.forEach(produto => {
        // Verifica se category é um array e se não é undefined
        if (Array.isArray(produto.category)) {
            produto.category.forEach(cat => {
                if (cat in produtosPorCategoria) {
                    produtosPorCategoria[cat as Categoria].push(produto);
                } else {
                    console.warn(`Categoria desconhecida: ${cat}`);
                }
            });
        } else {
            console.error(`Produto ${produto.title} não possui uma categoria válida. Esperado um array.`);
        }
    });    
    console.log(produtosPorCategoria);
    
    return produtosPorCategoria;
};