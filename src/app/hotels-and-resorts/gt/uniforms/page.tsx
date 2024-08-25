"use client";

import { Header } from "@/components/HeaderLoggedIn";
import Link from "next/link";
import { useState } from "react";

function camelize(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

const hierarchy = [
  {
    key: "fo",
    name: "Front Office",
    positions: ["Associates Male", "Associates Female"],
  },
  {
    key: "fb",
    name: "F&B/HK Associates",
    positions: ["Male", "Female", "Male-2", "Female-2"],
  },
  {
    key: "salesAndMarketing",
    name: "Sales & Marketing",
    positions: [
      "Supervisors Male",
      "Supervisors Female",
      "Manager Male",
      "Manager Female",
    ],
  },
  {
    key: "valetAndSecurity",
    name: "Valet & Security",
    positions: ["Valet Male", "Security Male", "Security Female"],
  },
  {
    key: "kstOrHygiene",
    name: "KST / Hygiene",
    positions: ["Kitchen Steward Male", "Steward Supervisor"],
  },
  {
    key: "engineeringOrGardener",
    name: "Engineering / Gardener",
    positions: ["Engineering Technician / Associate", "Gardener"],
  },
  {
    key: "ITOrAdminOrHR",
    name: "IT / Admin / HR",
    positions: ["Male", "Female"],
  },
  {
    key: "HOD",
    name: "HOD",
    positions: ["Male", "Female"],
  },
];

export default function HotelsAndResorts() {
  const [selectedD, setSelectedD] = useState(hierarchy[0]);
  return (
    <main className="bg-white h-screen w-screen">
      <Header companyLogo="/gt.png" shopUrl="/hotels-and-resorts/gt" />
      <div className="h-[calc(100vh-97px)] p-10">
        <div className="flex items-center">
          {hierarchy.map((department, idx) => (
            <p
              className={`px-4 ${
                idx === hierarchy.length - 1 ? "" : "border-r border-black"
              } cursor-pointer ${
                selectedD.name === department.name
                  ? "text-red-600 underline"
                  : ""
              }`}
              onClick={() => setSelectedD(department)}
            >
              {department.name}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-12 overflow-x-scroll pt-8">
          {selectedD.positions.map((pos, idx) => (
            <Link
              className="w-1/4"
              href={`/hotels-and-resorts/gt/uniforms/${camelize(
                selectedD.key
              )}/${camelize(pos)}`}
            >
              <div className="py-6 bg-gray-100 w-full flex items-center justify-center ">
                <img
                  src={`/gt/${selectedD.key}/Picture${idx + 1}.png`}
                  alt="uniform"
                  className="max-h-[60vh] object-contain"
                />
              </div>
              <p className="pt-3">{pos}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
