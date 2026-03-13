import { demoEvent } from "@/lib/data";
import { CountdownTimer } from "../CountdownTimer";
import { RSVPForm } from "../RSVPForm";

export function ModernElegantTemplate() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white bg-geometric">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a2e]/50 to-[#1a1a2e]" />
        <div className="relative z-10 animate-fade-in">
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-6">
            The Wedding of
          </p>
          <h1 className="text-5xl sm:text-7xl font-serif mb-4">
            {demoEvent.bride}
          </h1>
          <div className="text-[#c9a84c] text-3xl my-2">&amp;</div>
          <h1 className="text-5xl sm:text-7xl font-serif mb-8">
            {demoEvent.groom}
          </h1>
          <p className="text-white/60 text-lg">{demoEvent.akadDate}</p>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-16 px-6 text-center">
        <p className="text-[#c9a84c] text-sm tracking-[0.2em] uppercase mb-6">
          Menghitung Hari
        </p>
        <CountdownTimer targetDate="2026-06-15T08:00:00+07:00" />
      </section>

      {/* Couple */}
      <section className="py-16 px-6 max-w-2xl mx-auto text-center">
        <p className="text-[#c9a84c] text-sm tracking-[0.2em] uppercase mb-8">
          Mempelai
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="animate-slide-up">
            <div className="w-32 h-32 mx-auto rounded-full bg-[#c9a84c]/20 flex items-center justify-center text-4xl mb-4">
              👰
            </div>
            <h3 className="text-2xl font-serif mb-1">{demoEvent.bride}</h3>
            <p className="text-white/50 text-sm">Putri dari {demoEvent.brideParents}</p>
          </div>
          <div className="animate-slide-up">
            <div className="w-32 h-32 mx-auto rounded-full bg-[#c9a84c]/20 flex items-center justify-center text-4xl mb-4">
              🤵
            </div>
            <h3 className="text-2xl font-serif mb-1">{demoEvent.groom}</h3>
            <p className="text-white/50 text-sm">Putra dari {demoEvent.groomParents}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 max-w-2xl mx-auto text-center">
        <p className="text-[#c9a84c] text-sm tracking-[0.2em] uppercase mb-6">
          Kisah Cinta Kami
        </p>
        <div className="text-[#c9a84c] text-2xl mb-4">❦</div>
        <p className="text-white/70 leading-relaxed italic">
          &ldquo;{demoEvent.story}&rdquo;
        </p>
      </section>

      {/* Events */}
      <section className="py-16 px-6 max-w-2xl mx-auto">
        <p className="text-[#c9a84c] text-sm tracking-[0.2em] uppercase mb-8 text-center">
          Acara
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 text-center border border-[#c9a84c]/20">
            <div className="text-[#c9a84c] text-2xl mb-3">🕌</div>
            <h3 className="text-xl font-serif mb-2">Akad Nikah</h3>
            <p className="text-white/60 text-sm mb-1">{demoEvent.akadDate}</p>
            <p className="text-white/60 text-sm mb-3">{demoEvent.akadTime}</p>
            <p className="text-white/80 text-sm">{demoEvent.akadLocation}</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 text-center border border-[#c9a84c]/20">
            <div className="text-[#c9a84c] text-2xl mb-3">🎊</div>
            <h3 className="text-xl font-serif mb-2">Resepsi</h3>
            <p className="text-white/60 text-sm mb-1">{demoEvent.resepsiDate}</p>
            <p className="text-white/60 text-sm mb-3">{demoEvent.resepsiTime}</p>
            <p className="text-white/80 text-sm">{demoEvent.resepsiLocation}</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a
            href={demoEvent.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors text-sm"
          >
            📍 Lihat Lokasi di Maps
          </a>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-16 px-6 max-w-2xl mx-auto text-center">
        <p className="text-[#c9a84c] text-sm tracking-[0.2em] uppercase mb-2">
          Konfirmasi Kehadiran
        </p>
        <h2 className="text-3xl font-serif mb-8">RSVP</h2>
        <RSVPForm templateId="modern-elegant" />
      </section>

      {/* Footer */}
      <section className="py-16 px-6 text-center border-t border-[#c9a84c]/10">
        <div className="text-[#c9a84c] text-3xl mb-4">❦</div>
        <p className="text-white/50 text-sm">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
        </p>
        <p className="text-white/30 text-xs mt-6">
          Dibuat dengan ❤️ menggunakan NikahDigital
        </p>
      </section>
    </div>
  );
}
