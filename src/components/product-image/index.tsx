"use client";

import React, { HTMLProps, Suspense } from "react";
import Image from "next/image";

interface ProductImageProps extends HTMLProps<HTMLDivElement> {
  imageUrl: string;
}

export default function ProductImage({ imageUrl }: ProductImageProps) {
  return (
    <Suspense fallback={<div>Fetching image...</div>}>
      <div className="bg-white relative w-full h-56 overflow-hidden group rounded-lg mb-4">
        <Image
          src={imageUrl}
          alt="Product Image"
          className=" object-cover transition-transform duration-300 group-hover:scale-110"
          fill
          sizes="100%"
          style={{ objectFit: "contain" }}
        />
      </div>
    </Suspense>
  );
}
