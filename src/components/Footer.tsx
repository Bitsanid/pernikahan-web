import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💍</span>
              <span className="text-xl font-bold">
                Nikah<span className="text-primary">Digital</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Platform undangan pernikahan digital terbaik di Indonesia. Buat
              undangan cantik dalam hitungan menit.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Link</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/#templates" className="hover:text-white transition-colors">
                  Template
                </Link>
              </li>
              <li>
                <Link href="/#fitur" className="hover:text-white transition-colors">
                  Fitur
                </Link>
              </li>
              <li>
                <Link href="/#harga" className="hover:text-white transition-colors">
                  Harga
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: abrahamyusuf.eth@gmail.com</li>
              <li>GitHub: @abraham-yusuf</li>
              <li>X: @bram0511</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© 2026 NikahDigital. All rights reserved. MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
