"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Beaker } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: number;
  name: string;
  casNumber: string;
  image: string;
  slug: string;
}

const pharmaProducts: Product[] = [
  {
    id: 1,
    name: "4 Methyl 2 Amino 6 Nitro Phenol",
    casNumber: "CAS: 6265-07-2",
    image:
      "https://www.gyangroup.in/upload_data/images/Product/62/GHP-1023.png",
    slug: "4-methyl-2-amino-6-nitro-phenol",
  },
  {
    id: 2,
    name: "2,5 Diethoxy Aniline",
    casNumber: "CAS: 94-85-9",
    image:
      "https://www.gyangroup.in/upload_data/images/Product/59/GHP-1021.png",
    slug: "2-5-diethoxy-aniline",
  },
  {
    id: 3,
    name: "N N Dimethyl Benzaldehyde",
    casNumber: "CAS: 100-10-7",
    image:
      "https://www.gyangroup.in/upload_data/images/Product/57/GHP-1004.png",
    slug: "n-n-dimethyl-benzaldehyde",
  },
  {
    id: 4,
    name: "1 Amino 7 Naphthol",
    casNumber: "CAS: 116-46-7",
    image:
      "https://www.gyangroup.in/upload_data/images/Product/56/GHP-1001.png",
    slug: "1-amino-7-naphthol",
  },
];

export const PharmaAndApiIntermediates = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header animation
      if (headerRef.current) {
        const title = headerRef.current.querySelector(".header-title");
        const paragraphs = headerRef.current.querySelectorAll("p");

        gsap.from(title, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        gsap.from(paragraphs, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.3,
          ease: "power3.out",
        });
      }

      // Category title animation
      if (categoryRef.current) {
        gsap.from(categoryRef.current, {
          scrollTrigger: {
            trigger: categoryRef.current,
            start: "top 85%",
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      // Products animation
      if (productsRef.current) {
        const cards = productsRef.current.querySelectorAll(".product-card");
        gsap.from(cards, {
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-ivory py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <h1 className="header-title text-teal-green text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Products Range
          </h1>
          <p className="text-pewter text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-4">
            With our dedication, determination and innovation we are one such
            association who are successfully making the products and
            continuously strive to reach the best standards in both quality &
            value.
          </p>
          <p className="text-pewter text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            Our concept has driven us to manufacture vital products under
            co-development with our manufacturing associates to fulfill the
            current requirement.
          </p>
        </div>

        {/* Category: Pharma & API Intermediate */}
        <div className="mb-12">
          <div
            ref={categoryRef}
            className="flex items-center gap-3 mb-8 md:mb-12"
          >
            <div className="w-12 h-12 rounded-full bg-teal-green/10 flex items-center justify-center">
              <Beaker className="w-6 h-6 text-teal-green" />
            </div>
            <h2 className="text-teal-green text-2xl md:text-3xl lg:text-4xl font-bold">
              Pharma & API Intermediate
            </h2>
          </div>

          {/* Products Grid */}
          <div
            ref={productsRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pharmaProducts.map((product) => (
              <Link
                href={`/products/pharma-and-api-intermediates/${product.slug}`}
                key={product.id}
                className="product-card group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-[280px] bg-linear-to-br from-ivory to-white p-6 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-teal-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="object-contain relative z-10 transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 border-t-4 border-teal-green">
                    <p className="text-pewter text-sm mb-2 font-medium">
                      {product.casNumber}
                    </p>
                    <h3 className="text-ebony text-lg font-bold leading-tight mb-4 group-hover:text-teal-green transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 text-teal-green font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
