'use client'
import React, { useContext } from "react";
import { Header } from "./components/templates/header";
import { Promocao } from "./components/templates/promocao";
import { BrandCarousel } from "./components/ui/carroselMarcas";
import ShoppingCart from "./components/ui/cartBtn";
import { ProdutoContext } from "./providers/ProdutoProvider";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function Home() {
  const contextProduto =  useContext(ProdutoContext)

  if (!contextProduto) {
    return <div>Erro ao carregar contexto</div>;
  }

  const { produtos, loading, error } = contextProduto;

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Erro ao carregar produtos</div>
  }


  return (
    <main>
      <header className="">
        <Header/>
      </header>
      <section className="px-12">
        <BrandCarousel/>
        <Promocao/>
      </section>
      <h1>produts</h1>
      {produtos?.map(produto => (
        <Card key={produto.id}>
          <CardHeader>
            <CardContent>
              <Image src={produto.image} alt="cover" width={100} height={100} />
            </CardContent>
          </CardHeader>
          <CardContent>
            <CardTitle>{produto.title}</CardTitle>
            <span>{produto.rating}</span>
          </CardContent>
          <CardFooter>
            <span>{produto.price}</span>
            <Button>Add ao carrinho</Button>
          </CardFooter>
        </Card>
      ))}
      <ShoppingCart/>   
    </main>
  );
}