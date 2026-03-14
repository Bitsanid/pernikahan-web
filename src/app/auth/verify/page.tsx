import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verifikasi Email - NikahDigital",
  description: "Periksa email Anda untuk memverifikasi akun NikahDigital.",
};

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">
        <span className="text-6xl block mb-6">📧</span>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Periksa Email Anda
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Kami telah mengirimkan link verifikasi ke email Anda. Klik link
          tersebut untuk mengaktifkan akun NikahDigital Anda.
        </p>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-6">
          <p className="text-sm text-gray-500">
            Tidak menerima email?{" "}
            <span className="text-gray-400">
              Periksa folder spam atau hubungi support kami.
            </span>
          </p>
        </div>
        <Link
          href="/auth/login"
          className="text-sm text-primary font-medium hover:underline"
        >
          Kembali ke halaman masuk
        </Link>
      </div>
    </div>
  );
}
