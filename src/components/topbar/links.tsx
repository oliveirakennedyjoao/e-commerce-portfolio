import Link from "next/link";

export function Links() {
  return (
    <ul className="flex flex-row gap-2">
      <li>
        <Link href="/" className="text-blue-500 hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link href="/products" className="text-blue-500 hover:underline">
          Products
        </Link>
      </li>
    </ul>
  );
}
