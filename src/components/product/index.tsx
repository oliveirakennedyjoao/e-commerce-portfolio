import React, { HTMLProps } from "react";
import ProductImage from "../product-image";

interface CardboxProps extends HTMLProps<HTMLDivElement> {
  title: string;
  description: string;
  price: number;
}

export default function Product({ title, description, price }: CardboxProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold text-black">Card Title</h2>
        <ProductImage imageUrl="/product-placeholder.png" />
        <p className="text-gray-700 mb-4">{title}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-700 mb-4">{price}</p>
      </div>
    </div>
  );
}
