import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="flex flex-row gap-2">
      <Link href="/" className="text-blue-500 hover:underline">
        Home
      </Link>
      <Link href="/home" className="text-blue-500 hover:underline">
        Home
      </Link>
      <Link href="/about" className="text-blue-500 hover:underline">
        About
      </Link>
    </nav>
  );
}
