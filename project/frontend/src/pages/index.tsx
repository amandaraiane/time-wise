import Image from "next/image";
import { Inter } from "next/font/google";
import Dashboard from "./dashboard";
import { useEffect } from "react";

export default function Home() {
  return (
    <main>
      <Dashboard></Dashboard>
    </main>
  );
}
