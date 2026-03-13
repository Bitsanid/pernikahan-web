import Link from "next/link";

export function Navbar() {
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
          </div>
        </div>
      </div>
    </nav>
  );
}
