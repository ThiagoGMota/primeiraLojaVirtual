'use client'

import React, { useEffect, useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import Image from "next/image"

const brands = [
  {
    name: "CHANEL",
    logo: "/chanel-2.svg"
  },
  {
    name: "Balenciaga",
    logo: "/balenciaga-4.svg"
  },
  {
    name:"Armani",
    logo: "/armani.svg"
  },
  {
    name: "LOUIS VUITTON",
    logo: "/louis-vuitton-1.svg"
  },
  {
    name: "Gucci",
    logo: "/gucci-4.svg"
  },
  {
    name: "PRADA",
    logo: "/prada.svg"
  },
  {
    name: "Calvin Klein",
    logo: "/calvin-klein-1.svg"
  },
  {
    name: "DENIM",
    logo: "/denim.svg"
  },
  {
    name:"Dior",
    logo: "/dior.svg"
  },
  {
    name:"Hermes",
    logo: "/hermes-logo.svg"
  },
  {
    name:"yves-saint-laurent",
    logo: "/yves-saint-laurent-1.svg"
  }
]

export function BrandCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (!api) {
      return
    }

    const scrollNext = () => {
      api.scrollNext()
    }

    intervalRef.current = window.setInterval(scrollNext, 3000)

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }
  }, [api])

  return (
    <div className=" py-12 ">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-7xl mx-auto  "
      >
        <CarouselContent>
          {brands.map((brand, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
              <div className="p-4">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={200}
                  height={80}
                  className="h-20 w-full object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

