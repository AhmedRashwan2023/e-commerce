"use client";

import { usePathname } from "next/navigation";

const LogIt = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return <></>;
};

export default LogIt;
