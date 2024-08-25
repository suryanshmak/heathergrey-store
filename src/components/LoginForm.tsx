import { useState } from "react";
import { Input } from "./Input";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const LoginForm = ({ bgSrc, bgColor, signUpHref }: any) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  return (
    <div className="h-[calc(100vh-97px)] relative flex items-center justify-center">
      <div className="h-full w-full flex items-center justify-center absolute top-0 left-0">
        <div className="w-1/2 h-full flex items-center justify-center">
          <img src={bgSrc} alt="company-logo" className="w-auto h-auto" />
        </div>
        <div className={`w-1/2 h-full`} style={{ background: bgColor }} />
      </div>
      <form
        className="h-[70%] w-[30%] bg-white z-10 border border-gray-300 p-12 flex flex-col gap-8"
        onSubmit={(e) => {
          e.preventDefault();
          if (!username || !password) {
            alert("enter details");
            return;
          }
          router.push(signUpHref.replace("sign-up", ""));
        }}
      >
        <p className="text-2xl xl:text-3xl text-black">Login</p>
        <div className="flex flex-col gap-6">
          <Input
            value={username}
            onChange={(e: any) => setUsername(e.currentTarget.value)}
            placeholder="User Name*"
          />
          <Input
            value={password}
            onChange={(e: any) => setPassword(e.currentTarget.value)}
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <p>Remember Me</p>
          </div>
          <Link href="/" className="hover:opacity-60">
            Forgot Password?
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3">
          <button className="bg-red-600 text-white w-full h-12" type="submit">
            Login
          </button>
          <Link href={signUpHref} className="hover:opacity-60">
            Not a member? Register
          </Link>
        </div>
      </form>
    </div>
  );
};
