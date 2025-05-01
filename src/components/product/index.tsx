import React, { HTMLProps } from "react";
import ProductImage from "../product-image";

interface CardboxProps extends HTMLProps<HTMLDivElement> {
  title: string;
  description: string;
  price: number;
}

export default function Product({ title, description, price }: CardboxProps) {
  const locatedPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <div className="w-sm flex flex-col gap-2">
      <div className="bg-zinc-700 dark:bg-gray-800 shadow-md rounded-lg p-4">
        <ProductImage imageUrl="/product-placeholder.png" />
        <p className="text-white font-bold mb-4">{title}</p>
        <p className="text-zinc-400 mb-4 line-clamp-3 text-sm">{description}</p>
        <div className="flex justify-between items-center gap-4">
          <p className="text-amber-500 text-2xl font-bold">{locatedPrice}</p>
          <button
            type="button"
            className="flex-1 text-black bg-amber-500  px-4 py-2 rounded-4xl hover:cursor-pointer hover:bg-amber-500"
            onClick={() => {
              alert("Added to cart");
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
