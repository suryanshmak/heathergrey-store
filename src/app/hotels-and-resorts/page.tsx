"use client";

import Image from "next/image";
import { Header } from "../../components/Header";
import { Hotels } from "./hotels";

export default function HotelsAndResorts() {
  return (
    <main className="bg-white h-screen w-screen">
      <Header />
      <Hotels />
    </main>
  );
}
