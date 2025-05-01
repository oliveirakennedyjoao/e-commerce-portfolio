// import { ShoppingCartOutlined } from "@mui/icons-material";
import Link from "next/link";

export function CartLink() {
  return (
    <Link href="/cart" className="rounded-2xl p-4">
      {/* <ShoppingCartOutlined className="text-white" /> */}
      <span>Cart Icon</span>
    </Link>
  );
}
