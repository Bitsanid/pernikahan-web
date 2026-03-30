import Link from "next/link";
import { getLoggedInUser } from "@/lib/auth";
import MobileMenu from "./MobileMenu";

export async function Navbar() {
  const user = await getLoggedInUser();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">💍</span>
            <span className="text-xl font-bold text-gray-900">
              Nikah<span className="text-primary">Digital</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-6">
            <Link
              href="/#templates"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Template
            </Link>
            <Link
              href="/#fitur"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Fitur
            </Link>
            <Link
              href="/#harga"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Harga
            </Link>
            {user ? (
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/auth/login"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  Masuk
                </Link>
                <Link
                  href="/auth/signup"
                  className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  Daftar Gratis
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <MobileMenu isLoggedIn={!!user} />
        </div>
      </div>
    </nav>
  );
}
