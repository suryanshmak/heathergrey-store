"use client";

import Image from "next/image";
import { Header } from "@/components/HeaderLoggedIn";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white h-screen w-screen">
      <Header companyLogo="/gt.png" shopUrl="/hotels-and-resorts/gt" />
      <div className="h-[calc(100vh-97px)] flex items-center">
        <div className="w-1/2 flex flex-col gap-8 justify-center px-32 border-r-[2px] border-gray-300">
          <div className="flex flex-col">
            <p className="text-3xl">
              Click to order if you have sizes of the team
            </p>
            <p className="text-2xl opacity-80">(XS, S, M, L, XL, XXL)</p>
          </div>
          <p className="text-lg text-gray-500">
            If you have sizing details of your team members click next
          </p>
          <Link href="/hotels-and-resorts/gt/uniforms">
            <button className="bg-red-600 text-white w-36 h-12">Next</button>
          </Link>
        </div>
        <div className="w-1/2 flex flex-col gap-8 justify-center px-32">
          <p className="text-3xl pb-8">Click here to order with sizing help</p>
          <p className="text-lg text-gray-500">
            This helps in generating standard sizes based on the measurements
          </p>
          <button className="bg-red-600 text-white w-36 h-12">Next</button>
        </div>
      </div>
    </main>
  );
}
