"use client";

import { Header } from "@/components/Header";
import { LoginForm } from "@/components/LoginForm";

export default function GatewayResortsLogin() {
  return (
    <main className="bg-white h-screen w-screen">
      <Header />
      <LoginForm
        bgSrc="/gt.png"
        bgColor="#f3b844"
        signUpHref="/hotels-and-resorts/gt/sign-up"
      />
    </main>
  );
}
