"use client";

import Hero from "@/components/hero";
import Product from "@/components/product";
import { ListProduct } from "@/models/ListProduct";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<ListProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://mock.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, [setProducts]);

  return (
    products && (
      <div className="grid grid-cols-1 ">
        <div>
          <Hero />
        </div>
        <div>
          {products.map((product: ListProduct) => (
            <Product
              title={product.title}
              description={product.description}
              price={product.price}
              key={product.id}
            />
          ))}
        </div>
      </div>
    )
  );
}
