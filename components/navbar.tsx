"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay for slide-down effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-neutral-800 text-neutral-100 shadow-lg transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ boxShadow: "0 4px 15px rgba(139, 92, 246, 0.5)" }} // Glowing box-shadow
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-center space-x-6">
        <div className="text-xl font-bold text-violet-400 animate-pulse">
          AxionLabs
        </div>
        <ul className="flex space-x-6">
          <li className="hover:text-violet-400 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-violet-400 cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-violet-400 cursor-pointer">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-violet-400 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="h-1 bg-violet-400 animate-pulse mt-2" />
    </nav>
  );
}
