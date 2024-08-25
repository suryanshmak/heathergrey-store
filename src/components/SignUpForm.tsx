import { useRef, useState } from "react";
import { Input } from "./Input";

export const SignUpForm = ({ bgSrc, bgColor }: any) => {
  const name = useRef<HTMLInputElement | null>(null);
  const designation = useRef<HTMLInputElement | null>(null);
  const companyName = useRef<HTMLInputElement | null>(null);
  const brandName = useRef<HTMLInputElement | null>(null);
  const landlineNo = useRef<HTMLInputElement | null>(null);
  const mobileNo = useRef<HTMLInputElement | null>(null);
  const location = useRef<HTMLInputElement | null>(null);
  const address = useRef<HTMLInputElement | null>(null);
  const gst = useRef<HTMLInputElement | null>(null);
  return (
    <div className="h-[calc(100vh-97px)] relative flex items-center justify-center">
      <div className="h-full w-full flex items-center justify-center absolute top-0 left-0">
        <div className="w-1/2 h-full flex items-center justify-center">
          <img src={bgSrc} alt="company-logo" className="w-auto h-auto" />
        </div>
        <div className={`w-1/2 h-full`} style={{ background: bgColor }} />
      </div>
      <div className="w-2/5 bg-white z-10 border border-gray-300 py-10 px-12 flex flex-col gap-3">
        <p className="text-2xl xl:text-3xl text-black">Sign Up</p>
        <div className="flex flex-col gap-3">
          <div className="flex w-full items-center gap-3">
            <div className="basis-1/2">
              <Input ref={name} placeholder="Full Name" />
            </div>
            <div className="basis-1/2">
              <Input ref={designation} placeholder="Designation" />
            </div>
          </div>
          <div className="flex w-full items-center gap-3">
            <div className="basis-1/2">
              <Input ref={companyName} placeholder="Company Name" />
            </div>
            <div className="basis-1/2">
              <Input ref={brandName} placeholder="Brand Name" />
            </div>
          </div>
          <div className="flex w-full items-center gap-3">
            <div className="basis-1/2">
              <Input ref={landlineNo} placeholder="Landline No." />
            </div>
            <div className="basis-1/2">
              <Input ref={mobileNo} placeholder="Mobile No." />
            </div>
          </div>
          <Input ref={location} placeholder="Location" />
          <Input ref={address} placeholder="Address" />
          <Input ref={gst} placeholder="GST No." />
          <button className="bg-red-600 text-white w-full h-12" type="submit">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};
