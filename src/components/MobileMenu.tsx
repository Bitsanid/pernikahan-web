"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface MobileMenuProps {
  isLoggedIn: boolean;
}

export default function MobileMenu({ isLoggedIn }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="sm:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 -mr-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-[70] w-[280px] h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          boxShadow: isOpen ? "0 0 50px rgba(0,0,0,0.15)" : "none",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-gray-50">
            <span className="text-xl font-bold text-gray-900">Menu</span>
            <button
              onClick={closeMenu}
              className="p-2 -mr-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="flex flex-col gap-1">
              <Link
                href="/#templates"
                onClick={closeMenu}
                className="px-4 py-3 text-lg font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-xl transition-all"
              >
                Template
              </Link>
              <Link
                href="/#fitur"
                onClick={closeMenu}
                className="px-4 py-3 text-lg font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-xl transition-all"
              >
                Fitur
              </Link>
              <Link
                href="/#harga"
                onClick={closeMenu}
                className="px-4 py-3 text-lg font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-xl transition-all"
              >
                Harga
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              {isLoggedIn ? (
                <Link
                  href="/dashboard"
                  onClick={closeMenu}
                  className="block w-full px-6 py-4 bg-primary text-white rounded-full text-center font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                >
                  Dashboard
                </Link>
              ) : (
                <div className="flex flex-col gap-4">
                  <Link
                    href="/auth/login"
                    onClick={closeMenu}
                    className="block w-full px-6 py-4 text-center text-gray-600 hover:text-gray-900 font-semibold transition-colors"
                  >
                    Masuk
                  </Link>
                  <Link
                    href="/auth/signup"
                    onClick={closeMenu}
                    className="block w-full px-6 py-4 bg-primary text-white rounded-full text-center font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                  >
                    Daftar Gratis
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <div className="p-6 border-t border-gray-50 bg-gray-50/50">
            <p className="text-xs text-center text-gray-400">
              © {new Date().getFullYear()} NikahDigital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
