"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <Link href="/" className="navbar-logo">
              AxionLabs
            </Link>
          </div>
          <div className="navbar-links hidden md:flex">
            <Link href="/" className="navbar-link" aria-label="Home">
              Home
            </Link>
            <Link href="/about" className="navbar-link" aria-label="About">
              About
            </Link>
            <Link href="/services" className="navbar-link" aria-label="Services">
              Services
            </Link>
            <Link href="/contact" className="navbar-link" aria-label="Contact">
              Contact
            </Link>
          </div>
          <div className="navbar-toggle md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-toggle-button"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="navbar-dropdown md:hidden">
          <Link href="/" className="navbar-dropdown-link" aria-label="Home">
            Home
          </Link>
          <Link href="/about" className="navbar-dropdown-link" aria-label="About">
            About
          </Link>
          <Link href="/services" className="navbar-dropdown-link" aria-label="Services">
            Services
          </Link>
          <Link href="/contact" className="navbar-dropdown-link" aria-label="Contact">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
