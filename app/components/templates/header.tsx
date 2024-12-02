import { playfair_display } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/capa1.jpeg"
        alt="cover"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-white z-10">
          <h1 className={`text-6xl font-bold my-28 ${playfair_display.className}`}>
            Elegância que transcende o tempo.
          </h1>
          <div className="flex justify-between items-center flex-col gap-y-8">
            <p className="text-4xl text-center text-zinc-300 ">Nova Coleção</p>
            <Link 
                href={'/novidades'} 
                className="bg-black py-6 px-12 rounded-xl hover:bg-white 
                hover:text-black ease-linear border-2 border-black"
            >
                Compre Agora
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};