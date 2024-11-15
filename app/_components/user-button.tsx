"use client";
import { UserButton } from "@clerk/nextjs";
import { useMediaQuery } from "react-responsive";

const UserButtonName = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  return (
    <div className={`${!isSmallScreen && "rounded-[8px] border px-4 py-2"}`}>
      <UserButton showName={!isSmallScreen} />
    </div>
  );
};

export default UserButtonName;
