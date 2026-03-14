import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SignupForm } from "@/components/SignupForm";
import { getLoggedInUser } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Daftar - NikahDigital",
  description: "Buat akun NikahDigital gratis dan mulai membuat undangan pernikahan digital Anda.",
};

export default async function SignupPage() {
  const user = await getLoggedInUser();
  if (user) redirect("/dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 justify-center">
            <span className="text-4xl">💍</span>
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            Daftar ke <span className="text-primary">NikahDigital</span>
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Gratis selamanya untuk paket dasar
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <SignupForm />
        </div>

        {/* Back to home */}
        <p className="mt-6 text-center text-sm text-gray-400">
          <Link href="/" className="hover:text-gray-600 transition-colors">
            ← Kembali ke beranda
          </Link>
        </p>
      </div>
    </div>
  );
}
