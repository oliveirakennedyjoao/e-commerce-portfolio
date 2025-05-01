import { Avatar } from "./avatar";
import { CartLink } from "./cart";
import { Links } from "./links";

export function TopBar() {
  return (
    <nav className="flex flex-row gap-2 justify-between items-center">
      <Links />
      <div className="flex flex-row gap-2">
        <CartLink />
        <Avatar />
      </div>
    </nav>
  );
}
