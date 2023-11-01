import { Bars3Icon } from "@heroicons/react/24/outline";

interface MenuItem {
  name: string;
  href: string;
}

const menuItem: MenuItem[] = [
  {
    name: "홈",
    href: "/",
  },
  {
    name: "프로젝트",
    href: "/projects",
  },
];

export function MenuNav() {
  return (
    <MenuContainer>
      <MobileMenuBar />
      <DesktopMenuBar />
    </MenuContainer>
  );
}

function MenuContainer({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex h-16 w-full items-center justify-between border-2 border-solid border-yellow-300 px-4 lg:h-32">
      <h1 className="font-mono text-xl font-bold lg:text-3xl">solban1</h1>
      {children}
    </header>
  );
}

function MobileMenuBar() {
  return <Bars3Icon className="block h-8 w-8 cursor-pointer lg:hidden" />;
}

function DesktopMenuBar() {
  return <div className="hidden lg:block">DesktopMenuBar</div>;
}
