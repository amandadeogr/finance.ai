import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import UserButtonName from "./user-button";
import NavigationMenuItems from "./navigation-menu";

const Header = async () => {
  const { userId } = await auth();
  return (
    <>
      {userId ? (
        <header className="flex items-center justify-between px-4 py-4 sm:px-8">
          <div className="flex items-center justify-between sm:gap-12">
            <Link href="/">
              <Image src={"/logo.svg"} alt="logo" width={173} height={39} />
            </Link>

            <NavigationMenuItems />
          </div>

          <UserButtonName />
        </header>
      ) : null}
    </>
  );
};

export default Header;
