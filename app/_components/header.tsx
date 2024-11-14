import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const menuItems = [
  {
    title: "Dashboard",
    href: "/",
  },
  {
    title: "Transações",
    href: "/transactions",
  },
  {
    title: "Assinaturas",
    href: "/assinaturas",
  },
];

const Header = async () => {
  const { userId } = await auth();
  return (
    <>
      {userId ? (
        <header className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center justify-between gap-12">
            <Link href="/">
              <Image src={"/logo.svg"} alt="logo" width={173} height={39} />
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  {menuItems.map((item) => (
                    <NavigationMenuLink
                      href={item.href}
                      key={item.title}
                      className={
                        "mr-12 text-sm text-muted-foreground transition-all hover:text-primary"
                      }
                    >
                      {item.title}
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="rounded-[8px] border px-4 py-2">
            <UserButton showName />
          </div>
        </header>
      ) : null}
    </>
  );
};

export default Header;
