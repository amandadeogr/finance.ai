"use client";
import { useMediaQuery } from "react-responsive";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

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

const NavigationMenuItems = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {isSmallScreen ? (
            <div className="small-screen-menu">
              <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
              <NavigationMenuContent>
                {menuItems.map((item) => (
                  <NavigationMenuLink
                    href={item.href}
                    key={item.title}
                    className="block p-6 text-sm text-muted-foreground transition-all hover:text-primary"
                  >
                    {item.title}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </div>
          ) : (
            <div className="large-screen-menu">
              {menuItems.map((item) => (
                <NavigationMenuLink
                  href={item.href}
                  key={item.title}
                  className="mr-12 text-sm text-muted-foreground transition-all hover:text-primary"
                >
                  {item.title}
                </NavigationMenuLink>
              ))}
            </div>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuItems;
