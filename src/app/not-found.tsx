import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <span className="text-6xl block mb-4">💍</span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-gray-600 mb-8 max-w-md">
          Maaf, halaman yang Anda cari tidak tersedia. Silakan kembali ke
          halaman utama.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
