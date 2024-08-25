"use client";

import { Header } from "@/components/HeaderLoggedIn";
import { usePathname, useSearchParams } from "next/navigation";

function CamelCase(str: string) {
  return str.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase();
  });
}

export default function BuyUniform() {
  const p = usePathname();
  const position = p.slice(p.lastIndexOf("/") + 1, p.length);
  const replacedP = p.replace(`/${position}`, "");
  const department = replacedP.slice(
    replacedP.lastIndexOf("/") + 1,
    replacedP.length
  );
  return (
    <>
      <Header companyLogo="/gt.png" shopUrl="/hotels-and-resorts/gt" />
      <div className="p-8">
        <p>
          {CamelCase(department)} - {CamelCase(position)}
        </p>
        <div></div>
      </div>
    </>
  );
}
