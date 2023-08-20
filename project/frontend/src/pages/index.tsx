import Image from "next/image";
import { Inter } from "next/font/google";
import Dashboard from "./dashboard";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="" style={inter.style}>
      <Dashboard></Dashboard>
    </main>
  );
}
