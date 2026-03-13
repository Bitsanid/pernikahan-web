"use client";

import { useState } from "react";
import type { RSVPEntry } from "@/lib/data";

export function RSVPForm({ templateId }: { templateId: string }) {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "hadir" as "hadir" | "tidak_hadir",
    jumlahTamu: 1,
    ucapan: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [entries, setEntries] = useState<RSVPEntry[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newEntry: RSVPEntry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      ...formData,
      createdAt: new Date().toISOString(),
    };
    setEntries((prev) => [newEntry, ...prev]);
    setSubmitted(true);
    setFormData({ name: "", attendance: "hadir", jumlahTamu: 1, ucapan: "" });
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div id={`rsvp-${templateId}`}>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1 opacity-80"
          >
            Nama Lengkap
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            placeholder="Masukkan nama Anda"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 opacity-80">
            Kehadiran
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="attendance"
                value="hadir"
                checked={formData.attendance === "hadir"}
                onChange={() =>
                  setFormData((prev) => ({ ...prev, attendance: "hadir" }))
                }
                className="accent-primary"
              />
              <span className="text-sm">Hadir</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="attendance"
                value="tidak_hadir"
                checked={formData.attendance === "tidak_hadir"}
                onChange={() =>
                  setFormData((prev) => ({
                    ...prev,
                    attendance: "tidak_hadir",
                  }))
                }
                className="accent-primary"
              />
              <span className="text-sm">Tidak Hadir</span>
            </label>
          </div>
        </div>

        {formData.attendance === "hadir" && (
          <div>
            <label
              htmlFor="jumlahTamu"
              className="block text-sm font-medium mb-1 opacity-80"
            >
              Jumlah Tamu
            </label>
            <select
              id="jumlahTamu"
              value={formData.jumlahTamu}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  jumlahTamu: Number(e.target.value),
                }))
              }
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n} orang
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label
            htmlFor="ucapan"
            className="block text-sm font-medium mb-1 opacity-80"
          >
            Ucapan &amp; Doa
          </label>
          <textarea
            id="ucapan"
            rows={3}
            value={formData.ucapan}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, ucapan: e.target.value }))
            }
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            placeholder="Tulis ucapan dan doa untuk kedua mempelai..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
        >
          Kirim RSVP
        </button>

        {submitted && (
          <div className="text-center text-green-600 text-sm font-medium animate-fade-in">
            ✓ Terima kasih! RSVP Anda telah terkirim.
          </div>
        )}
      </form>

      {entries.length > 0 && (
        <div className="mt-8 max-w-md mx-auto">
          <h4 className="text-sm font-semibold mb-3 opacity-70">
            Ucapan Tamu ({entries.length})
          </h4>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-white/60 rounded-lg p-3 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm text-gray-900">
                    {entry.name}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      entry.attendance === "hadir"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {entry.attendance === "hadir" ? "Hadir" : "Tidak Hadir"}
                  </span>
                </div>
                {entry.ucapan && (
                  <p className="text-sm text-gray-600 italic">
                    &ldquo;{entry.ucapan}&rdquo;
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
