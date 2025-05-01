import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Image
        src="/product-placeholder.png"
        alt="Product Image"
        className="w-full h-64 object-cover rounded-lg"
        width={150}
        height={150}
      />
    </div>
  );
}
