export interface WeddingTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  previewColor: string;
  accentColor: string;
  bgPattern: string;
}

export interface WeddingEvent {
  bride: string;
  groom: string;
  brideParents: string;
  groomParents: string;
  akadDate: string;
  akadTime: string;
  akadLocation: string;
  resepsiDate: string;
  resepsiTime: string;
  resepsiLocation: string;
  mapUrl: string;
  story: string;
}

export interface RSVPEntry {
  id: string;
  name: string;
  attendance: "hadir" | "tidak_hadir";
  jumlahTamu: number;
  ucapan: string;
  createdAt: string;
}

export const templates: WeddingTemplate[] = [
  {
    id: "modern-elegant",
    name: "Modern Elegant",
    description:
      "Desain modern minimalis dengan sentuhan emas yang elegan. Cocok untuk pasangan yang menyukai kesederhanaan.",
    category: "Modern",
    previewColor: "#1a1a2e",
    accentColor: "#c9a84c",
    bgPattern: "geometric",
  },
  {
    id: "adat-jawa",
    name: "Adat Jawa",
    description:
      "Tema tradisional Jawa dengan motif batik dan ornamen wayang. Sempurna untuk pernikahan adat.",
    category: "Tradisional",
    previewColor: "#4a1a0a",
    accentColor: "#d4a574",
    bgPattern: "batik",
  },
  {
    id: "floral-garden",
    name: "Floral Garden",
    description:
      "Desain romantis dengan hiasan bunga-bunga cantik. Ideal untuk pernikahan di taman atau outdoor.",
    category: "Romantis",
    previewColor: "#2d4a3e",
    accentColor: "#e8a0bf",
    bgPattern: "floral",
  },
];

export const demoEvent: WeddingEvent = {
  bride: "Anisa Rahma",
  groom: "Budi Santoso",
  brideParents: "Bapak Ahmad & Ibu Siti",
  groomParents: "Bapak Hendra & Ibu Dewi",
  akadDate: "Sabtu, 15 Juni 2026",
  akadTime: "08:00 - 10:00 WIB",
  akadLocation: "Masjid Al-Ikhlas, Jakarta Selatan",
  resepsiDate: "Sabtu, 15 Juni 2026",
  resepsiTime: "11:00 - 14:00 WIB",
  resepsiLocation: "Ballroom Hotel Grand Sahid, Jakarta",
  mapUrl: "https://maps.google.com/?q=-6.2088,106.8456",
  story:
    "Kami bertemu pertama kali di bangku kuliah tahun 2020. Dari teman sekelas, menjadi sahabat, dan kini kami siap membangun rumah tangga bersama. Alhamdulillah.",
};
