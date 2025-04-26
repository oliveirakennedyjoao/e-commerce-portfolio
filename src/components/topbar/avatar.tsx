import Image from "next/image";

export function Avatar() {
  return (
    <div className="flex items-center">
      <Image
        src="/vercel.svg"
        alt="Avatar"
        className="w-10 h-10 rounded-full"
        width={50}
        height={50}
      />
    </div>
  );
}
