"use client";

import React, { useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [bannerImage, setBannerImage] = React.useState<string | null>(null);

  useEffect(() => {
    const fetchProductImage = async () => {
      const response = await fetch(
        "https://mock.com/image/61oewZ7WjbL._AC_SL1500_.jpg"
      );
      const data = await response.json();

      setBannerImage(data);
    };

    fetchProductImage();
  });

  if (!bannerImage) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-hidden">
      <Image
        src={bannerImage}
        alt="Product Image"
        className="w-full bg-white h-64 rounded-lg object-cover "
        width={150}
        height={150}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
