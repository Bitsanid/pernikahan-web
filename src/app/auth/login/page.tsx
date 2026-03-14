import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/LoginForm";
import { getLoggedInUser } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Masuk - NikahDigital",
  description: "Masuk ke akun NikahDigital Anda untuk mengelola undangan pernikahan digital.",
};

export default async function LoginPage() {
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
            Masuk ke <span className="text-primary">NikahDigital</span>
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Kelola undangan pernikahan digital Anda
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <LoginForm />
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
