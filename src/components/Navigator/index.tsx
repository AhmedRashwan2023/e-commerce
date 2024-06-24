"use client";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import LocalSwitcher from "./local-switcher";
import { ReactNode } from "react";

const Navigarot = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();

  return (
    <>
      {pathName.includes("/shopping-items") && <LocalSwitcher />}
      {!pathName.includes("/account/") && children}
    </>
  );
};

export default Navigarot;
