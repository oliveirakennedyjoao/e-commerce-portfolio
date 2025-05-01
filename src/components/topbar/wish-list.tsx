// import { ShoppingCartOutlined } from "@mui/icons-material";
import Link from "next/link";

export function WishListLink() {
  return (
    <Link href="/wish-list" className="rounded-2xl p-4">
      {/* <ShoppingCartOutlined className="text-white" /> */}
      <span>Wish List Icon</span>
    </Link>
  );
}
