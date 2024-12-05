'use client'
import React, { useContext } from "react";
import { Header } from "./components/templates/header";
import { Promocao } from "./components/templates/promocao";
import { BrandCarousel } from "./components/ui/carroselMarcas";
import { ShoppingCart } from "./components/ui/carrinho";
import { ProdutoContext } from "./context/ProdutoContext";
import { Footer } from "./components/templates/footer";
import { NovaColecao } from "./components/templates/novaColecao";


export default function Home() {
  const contextProduto =  useContext(ProdutoContext)

  if (!contextProduto) {
    return <div>Erro ao carregar contexto</div>;
  }

  const { 
    produtosLimitado,
    loading, 
    error
  } = contextProduto;

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Erro ao carregar produtos</div>
  }


  return (
    <main >
      <header id="home">
        <Header/>
      </header>
      <section className="px-12 " id="limitado">
        <BrandCarousel/>
        <Promocao/>
      </section>
      <section className="px-12 py-10 bg-[#eff4f5]">
          <NovaColecao/>
      </section>
      <ShoppingCart/>   
      <Footer/>
    </main>
  );
}
