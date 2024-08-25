"use client";

import { Header } from "@/components/Header";
import { SignUpForm } from "@/components/SignUpForm";

export default function GatewayResortsSignUp() {
  return (
    <main className="bg-white h-screen w-screen">
      <Header />
      <SignUpForm bgSrc="/gt.png" bgColor="#f3b844" />
    </main>
  );
}
