import React, { ReactNode, HTMLProps } from "react";

interface CardboxProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export default function Cardbox({ children }: CardboxProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold">Card Title</h2>
        {children}
      </div>
    </div>
  );
}
