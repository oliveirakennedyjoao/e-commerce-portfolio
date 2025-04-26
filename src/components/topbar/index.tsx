import Link from "next/link";
import { Avatar } from "./avatar";
import { CartLink } from "./cart";

export function TopBar() {
  return (
    <nav className="flex flex-row gap-2 justify-between items-center">
      <ul className="flex flex-row gap-2">
        <li>
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/home" className="text-blue-500 hover:underline">
            News
          </Link>
        </li>
      </ul>
      <div className="flex flex-row gap-2">
        <CartLink />
        <Avatar />
      </div>
    </nav>
  );
}
