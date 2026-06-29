import { useState } from 'react';
import Logo from "../assets/Logo Co-Living Pagul.png";
import HeroImage from "../assets/HeroSection.jpeg";
import KamarTidur from "../assets/Kamar_Tidur.jpeg";
import KamarMandi from "../assets/Kamar_Mandi.jpeg";
import RuangKumpul from "../assets/Ruang_Kumpul.jpeg";
import Dapur from "../assets/Dapur.jpeg";
import Parkiran from "../assets/Parkiran.jpeg";
import AreaDepan from "../assets/Area_Depan.jpeg";

// 1. TARUH DATA GALERI DI LUAR KOMPONEN UTAMA AGAR KODE BERSIH DAN RAPI
const galeriData = [
  { id: 1, title: 'Kamar Tidur', src: KamarTidur },
  { id: 2, title: 'Kamar Mandi', src: KamarMandi},
  { id: 3, title: 'Area Kumpul', src: RuangKumpul },
  { id: 4, title: 'Dapur Bersama', src: Dapur },
  { id: 5, title: 'Tempat Parkir', src: Parkiran },
  { id: 6, title: 'Area Depan ', src: AreaDepan },
];

const kontakData = {
        email: "colivingpagul@gmail.com",
        instagram: "@coliving.pagul",
        instagramUrl: "https://instagram.com", 
        whatsapp: "6281234567890", 
        whatsappUrl: "https://wa.me/6285383444873",
        alamatLengkap: "Gg. Pagul, Kedaton, Kec. Kedaton, Kota Bandar Lampung, Lampung 35141",
        mapEmbedUrl: "https://maps.google.com/maps?q=-5.416291723375914,105.25177346980607&z=15&output=embed",
};

export default function LandingPage() {
  // 2. SEMUA LOGIKA STATE DAN FUNGSI HARUS DI SINI (SEBELUM RETURN)
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 2; // Karena ada 6 gambar dan tampil 3 per halaman (6 / 3 = 2 halaman)

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleBukaLogin = () => {
    window.location.href = '/Login'; 
  };  

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800">

      
      {/* 1. NAVBAR SECTION */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <img 
              src={Logo}
              className="h-11 w-auto object-contain"
            />
            <div className="text-lg font-black text-slate-950 tracking-tight">
              CO-LIVING <span className="font-normal text-slate-600">PAGUL</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 font-semibold text-sm text-slate-600">
            <a href="#home" className="hover:text-slate-950 transition-colors">Beranda</a>
            <a href="#fasilitas" className="hover:text-slate-950 transition-colors">Fasilitas</a>
            <a href="#galeri" className="hover:text-slate-950 transition-colors">Galeri</a>
            <a href="#tentang" className="hover:text-slate-950 transition-colors">Tentang Kami</a>
          </div>

          <div>
            
            <button onClick={handleBukaLogin} className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs transition-all active:scale-95 cursor-pointer">
              Masuk
            </button>
          </div>

        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="bg-[#D8D7D8] pt-20 pb-24 border-b border-slate-300/20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    {/* SISI KIRI: TEKS */}
    <div className="space-y-6 text-left">
      <div className="inline-flex items-center gap-2 bg-white/50 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-300/50 shadow-xs">
        📍 Hunian Modern & Strategis di Bandar Lampung
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 leading-tight tracking-tight">
        Gaya Hidup Baru yang <span className="text-slate-800 font-light">Lebih Praktis</span>
      </h1>
      <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-lg">
        Nikmati kenyamanan tinggal di hunian co-living eksklusif. Kamar siap huni, fasilitas lengkap, dan lingkungan yang mendukung produktivitas Anda.
      </p>
    </div>

    {/* SISI KANAN: GAMBAR */}
    <div className="relative">
      <div className="w-full h-80 md:h-112.5 bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center border border-slate-800/20">
        <img 
          src={HeroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Dekorasi Aksen agar tidak sepi */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-400/20 rounded-full blur-3xl -z-10"></div>
    </div>

  </div>
</section>

      {/* 3. FACILITIES SECTION */}
      <section id="fasilitas" className="bg-[#E3E2E4] py-24 border-t border-gray-500/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-950 tracking-tight">Fasilitas</h2>
          <div className="w-12 h-1 bg-slate-900 mx-auto mt-3 rounded-full"></div>
        
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-left">
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-xl mb-4">🛜</div>
              <h3 className="text-base font-bold text-slate-950 mb-1">Wi-Fi Cepat</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Koneksi internet stabil dan kencang untuk mendukung kerja remote atau kuliah.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-xl mb-4">🛋️</div>
              <h3 className="text-base font-bold text-slate-950 mb-1">Ruang Komunal</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Area bersantai bersama penghuni lain yang nyaman, estetik, dan ber-AC.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-xl mb-4">🧺</div>
              <h3 className="text-base font-bold text-slate-950 mb-1">Layanan Kebersihan</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Pembersihan area publik secara rutin menjaga lingkungan hunian tetap higienis.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-xl mb-4">🔑</div>
              <h3 className="text-base font-bold text-slate-950 mb-1">Keamanan 24 Jam</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Akses kartu digital (Smart Lock) dan pantauan CCTV di area strategis.</p>
            </div>
          </div>
        </div>
        </section>


      {/* 3.5 GALERI SECTION */}
      <section id="galeri" className="bg-slate-50 py-24 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-950 tracking-tight">Galeri Hunian</h2>
          <div className="w-12 h-1 bg-slate-900 mx-auto mt-3 rounded-full mb-12"></div>

          {/* CONTAINER SLIDER DENGAN NAVIGASI PANAH */}
          <div className="relative flex items-center justify-center group">
            
            {/* Tombol Panah Kiri */}
            <button 
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="absolute left-0 z-10 p-3 rounded-full bg-white border border-slate-200 shadow-md transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none hover:bg-slate-50 cursor-pointer"
            >
              <span className="text-xl font-bold text-slate-800">←</span>
            </button>

            {/* Jendela Masking Gambar */}
            <div className="w-full overflow-hidden mx-14">
              <div 
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {galeriData.map((item) => (
                  <div key={item.id} 
                  className="w-[calc((100%-3rem)/3)] shrink-0 group/card"
                  >
                    <div className="relative h-64 w-full bg-slate-200 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                      <img 
                        src={item.src} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent flex items-end p-4 text-left">
                        <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tombol Panah Kanan */}
            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="absolute right-0 z-10 p-3 rounded-full bg-white border border-slate-200 shadow-md transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none hover:bg-slate-50 cursor-pointer"
            >
              <span className="text-xl font-bold text-slate-800">→</span>
            </button>
          </div>

          {/* PAGINATION DOTS */}
          <div className="flex justify-center items-center space-x-3 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentPage === index ? 'w-8 bg-slate-900' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 4. TENTANG KAMI SECTION (KONTAK & MAPS) */}
      <section id="tentang" className="bg-[#E3E2E4]  py-24 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* SISI KIRI: KOTAK INFORMASI KONTAK */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/60 space-y-6 text-left">
              <div>
                <h2 className="text-3xl font-black text-slate-950 tracking-tight">Kontak Kami</h2>
                <p className="text-xs text-slate-500 mt-2">Punya pertanyaan seputar ketersediaan kamar? Hubungi layanan pelanggan kami.</p>
              </div>
              
              <div className="h-px bg-slate-200 w-full"></div>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a href={kontakData.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 transition-all group">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-lg font-bold group-hover:scale-105 transition-transform">💬</div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">WhatsApp</div>
                    <div className="text-sm font-semibold text-slate-800">+{kontakData.whatsapp}</div>
                  </div>
                </a>

                {/* Instagram */}
                <a href={kontakData.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 transition-all group">
                  <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center text-lg font-bold group-hover:scale-105 transition-transform">📸</div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Instagram</div>
                    <div className="text-sm font-semibold text-slate-800">{kontakData.instagram}</div>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-center gap-4 p-3 rounded-xl border border-transparent">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-lg font-bold">✉️</div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</div>
                    <div className="text-sm font-semibold text-slate-800">{kontakData.email}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SISI KANAN: MAP & DETAIL ALAMAT DI BAWAHNYA */}
            <div className="space-y-6 text-left">
              <div className="w-full h-72 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative">
                <iframe
                  src={kontakData.mapEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Co-Living Pagul"
                ></iframe>
              </div>

              <a 
              href="https://www.google.com/maps/search/?api=1&query=-5.41642004808842, 105.25170592886415"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold py-3 px-4 rounded-xl border border-slate-200 shadow-xs transition-all active:scale-98 cursor-pointer"
              >
                <span className="text-base">📍</span> Buka di Google Maps (Navigasi Langsung)
                </a>

              {/* Teks Informasi Alamat di Bawah Map */}
              <div className="bg-slate-50/50 border border-slate-200/60 p-5 rounded-2xl flex items-start gap-4">
                <div className="text-xl mt-0.5">📍</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Alamat Hunian</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                    {kontakData.alamatLengkap}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          <div>
            &copy; 2026 Co-Living Pagul. All rights reserved.
          </div>
          <div className="flex space-x-6 text-slate-500">
            <span>Sistem Administrasi Back-Office v1.0</span>
          </div>
        </div>
      </footer>

    </div>
  );
}