"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import LocalSwitcher from "./local-switcher";

const Navigarot = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  return (
    <>
      {pathName.includes("/shopping-items") && <LocalSwitcher />}
      {children}
    </>
  );
};

export default Navigarot;
