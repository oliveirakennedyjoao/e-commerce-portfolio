"use client";

import React, { HTMLProps, Suspense } from "react";
import Image from "next/image";

interface ProductImageProps extends HTMLProps<HTMLDivElement> {
  imageUrl: string;
}

export default function ProductImage({ imageUrl }: ProductImageProps) {
  return (
    <Suspense fallback={<div>Fetching image...</div>}>
      <Image
        src={imageUrl}
        alt="Product Image"
        className="w-full h-48 object-cover rounded-lg mb-4"
        width={150}
        height={150}
      />
    </Suspense>
  );
}
