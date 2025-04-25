import Cardbox from "@/components/cardbox/cardbox";
import NavMenu from "@/components/navmenu/navmenu";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Cardbox className="h-300 w-300 flex flex-col gap-2">
      <NavMenu />
      {children}
    </Cardbox>
  );
}
