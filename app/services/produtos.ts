// pages/api/products.ts

import type { NextApiRequest, NextApiResponse } from 'next';

const products = [
    {
        id: 1,
        title: "Camiseta Estampada",
        slug: "camiseta-estampada",
        description: "Camiseta de algodão 100% com estampa exclusiva. Confortável e perfeita para o dia a dia.",
        rating: 4.5,
        preco: 1200,
        image: "https://images.unsplash.com/photo-1593642632780-e3b3c0e7d3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGNhbXNpc3RlfGVufDB8fHx8MTYzMjQ0NzQ1MQ&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        id: 2,
        title: "Tênis Esportivo",
        slug: "tenis-esportivo",
        description: "Tênis leve e respirável, ideal para corridas e atividades físicas. Design moderno e confortável.",
        rating: 4.7,
        preco: 1200,      image: "https://images.unsplash.com/photo-1574169208506-5d0c4b4e9f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHRlbmlzfGVufDB8fHx8MTYzMjQ0NzQ2MQ&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        id: 3,
        title: "Relógio Elegante",
        slug: "relogio-elegante",
        description: "Relógio de pulso com design sofisticado e resistência à água. Perfeito para qualquer ocasião.",
        rating: 4.9,
        preco: 1200,      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEyfHx3YXRjaHxlbnwwfHx8fDE2MzI0NDc0NzU&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        id: 4,
        title: "Mochila Casual",
        slug: "mochila-casual",
        description: "Mochila resistente com múltiplos compartimentos. Ideal para viagens ou uso diário.",
        rating: 4.3,
        preco: 1200,
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEyfHx3YXRjaHxlbnwwfHx8fDE2MzI0NDc0NzU&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        id: 5,
        title: "Fone de Ouvido Bluetooth",
        slug: "fone-de-ouvido-bluetooth",
        description: "Fones de ouvido sem fio com cancelamento de ruído e qualidade de som superior.",
        rating: 4.6,
        preco: 1200,     image: "https://images.unsplash.com/photo-1517423440428-a5b24ad46762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDIyfHxob21lfGVufDB8fHx8MTYzMjQ0NzQ5Mg&ixlib=rb-1.2.1&q=80&w=400"
    }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Simula um atraso de 1 segundo (1000 ms)
    setTimeout(() => {
        res.status(200).json(products);
    }, 1000);
}