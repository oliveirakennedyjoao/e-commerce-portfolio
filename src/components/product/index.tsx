import React, { HTMLProps, useEffect } from "react";
import ProductImage from "../product-image";

interface CardboxProps extends HTMLProps<HTMLDivElement> {
  title: string;
  description: string;
  price: number;
  imgUrl: string;
}

export default function Product({
  title,
  description,
  price,
  imgUrl,
}: CardboxProps) {
  const [bannerImage, setBannerImage] = React.useState<string | null>(null);

  const locatedPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  useEffect(() => {
    const fetchProductImage = async () => {
      const response = await fetch(`https://mock.com/image/${imgUrl}`);
      const data = await response.json();

      setBannerImage(data);
    };

    fetchProductImage();
  });

  if (!bannerImage) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-sm flex flex-col gap-2">
      <div className="bg-zinc-700/50 dark:bg-gray-800 shadow-md rounded-lg p-4">
        <ProductImage imageUrl={bannerImage} />
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
