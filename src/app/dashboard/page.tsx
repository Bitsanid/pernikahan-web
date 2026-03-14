import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getLoggedInUser } from "@/lib/auth";
import { LogoutButton } from "@/components/LogoutButton";

export const metadata: Metadata = {
  title: "Dashboard - NikahDigital",
  description: "Kelola undangan pernikahan digital Anda.",
};

export default async function DashboardPage() {
  const user = await getLoggedInUser();
  if (!user) redirect("/auth/login");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">💍</span>
            <span className="text-xl font-bold text-gray-900">
              Nikah<span className="text-primary">Digital</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 hidden sm:block">
              {user.name || user.email}
            </span>
            <LogoutButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 border border-amber-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Selamat datang, {user.name?.split(" ")[0] ?? "Pengguna"}! 👋
          </h1>
          <p className="text-gray-600 text-sm">
            Mulai buat undangan pernikahan digital impian Anda.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Undangan Aktif", value: "0", icon: "💌" },
            { label: "Total RSVP", value: "0", icon: "✅" },
            { label: "Template Tersimpan", value: "0", icon: "🎨" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-5 border border-gray-100 flex items-center gap-4"
            >
              <span className="text-3xl">{stat.icon}</span>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Create Invitation CTA */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center mb-8">
          <span className="text-5xl block mb-4">💒</span>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Buat Undangan Pertama Anda
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
            Pilih template, sesuaikan dengan keinginan Anda, dan bagikan ke tamu undangan.
          </p>
          <Link
            href="/#templates"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            Pilih Template
          </Link>
        </div>

        {/* Account Info */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Informasi Akun</h3>
          <dl className="space-y-3 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-gray-50">
              <dt className="text-gray-500">Nama</dt>
              <dd className="text-gray-900 font-medium">{user.name || "-"}</dd>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-50">
              <dt className="text-gray-500">Email</dt>
              <dd className="text-gray-900">{user.email}</dd>
            </div>
            <div className="flex items-center justify-between py-2">
              <dt className="text-gray-500">Paket</dt>
              <dd>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                  Gratis
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </main>
    </div>
  );
}
