export default function DetailPenghuni({ isOpen, onClose, dataPenghuni }) {
  // Jika modal tidak aktif atau data penghuni belum siap, jangan tampilkan apa-apa
if (!isOpen || !dataPenghuni) return null;

return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay Latar Gelap */}
    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs" onClick={onClose} />

      {/* Kotak Modal Detail */}
    <div className="relative bg-white w-full max-w-xl p-6 rounded-2xl shadow-2xl border border-slate-200 z-10 max-h-[90vh] overflow-y-auto animate-fadeIn text-left text-xs font-semibold">
        
        {/* Header Modal */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
        <div className="flex items-center gap-2">
            <i className="fas fa-user-id text-slate-900 text-base"></i>
            <h3 className="text-base font-black text-slate-950">Profil & Informasi Lengkap Penghuni</h3>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-lg cursor-pointer">✕</button>
        </div>

        {/* Konten Grid Informasi */}
        <div className="space-y-5">
        
          {/* Kelompok 1: Biodata Utama */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
            <span className="block text-slate-400 text-[10px] uppercase tracking-wider mb-0.5">Nama Lengkap</span>
            <span className="text-sm font-black text-slate-950">{dataPenghuni.nama}</span>
            </div>
            <div>
            <span className="block text-slate-400 text-[10px] uppercase tracking-wider mb-0.5">Nomor Kamar</span>
            <span className="inline-block px-2.5 py-0.5 bg-slate-900 text-white font-bold rounded-md">Kamar {dataPenghuni.kamar}</span>
            </div>
            <div>
            <span className="block text-slate-400 text-[10px] uppercase tracking-wider mb-0.5">Jenis Kelamin</span>
            <span className="text-slate-800 font-bold text-xs">{dataPenghuni.gender}</span>
            </div>
            <div>
            <span className="block text-slate-400 text-[10px] uppercase tracking-wider mb-0.5">No. Telepon / WhatsApp</span>
            <span className="text-slate-800 font-bold text-xs font-mono">{dataPenghuni.noHp}</span>
            </div>
            <div>
            <span className="block text-slate-400 text-[10px] uppercase tracking-wider mb-0.5">Tempat & Tanggal Lahir</span>
            <span className="text-slate-800 font-bold text-xs">{dataPenghuni.tempatLahir}, {dataPenghuni.tanggalLahir}</span>
            </div>
            <div>
            <span className="block text-slate-400 text-[10px] uppercase tracking-wider mb-0.5">Pekerjaan</span>
            <span className="text-slate-800 font-bold text-xs">{dataPenghuni.pekerjaan}</span>
            </div>
            <div>
            <span className="block text-slate-400 text-[10px] uppercase tracking-wider mb-0.5">Tanggal Masuk Kost</span>
            <span className="text-slate-800 font-bold text-xs">{dataPenghuni.tglMasuk}</span>
            </div>
            <div>
            <span className="block text-slate-400 text-[10px] uppercase tracking-wider mb-0.5">Status Hunian</span>
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                dataPenghuni.status === 'Aktif' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-100 text-slate-500 border-slate-200'
            }`}>{dataPenghuni.status}</span>
            </div>
        </div>

          {/* Kelompok 2: Lampiran Dokumen Digital (KTP & Foto Diri) */}
        <div>
            <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3">Dokumen Lampiran</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
              {/* Box Foto KTP */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 text-center p-3">
                <span className="block text-slate-500 font-bold mb-2 text-left border-b border-slate-200/60 pb-1">📄 Foto KTP</span>
                <div className="h-32 bg-slate-200 rounded-lg flex flex-col items-center justify-center border border-slate-300 text-slate-400 gap-1">
                <i className="fas fa-id-card text-3xl"></i>
                <span className="text-[10px]">Preview_KTP_{dataPenghuni.nama.split(' ')[0]}.jpg</span>
                </div>
            </div>

              {/* Box Foto Diri */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 text-center p-3">
                <span className="block text-slate-500 font-bold mb-2 text-left border-b border-slate-200/60 pb-1">📷 Foto Diri</span>
                <div className="h-32 bg-slate-200 rounded-lg flex flex-col items-center justify-center border border-slate-300 text-slate-400 gap-1">
                <i className="fas fa-user-circle text-3xl"></i>
                <span className="text-[10px]">Foto_Wajah_{dataPenghuni.nama.split(' ')[0]}.jpg</span>
                </div>
            </div>

            </div>
        </div>

        </div>

        {/* Footer / Tombol Tutup */}
        <div className="flex justify-end pt-4 mt-6 border-t border-slate-100">
        <button
            type="button" onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold transition-all active:scale-98 cursor-pointer text-xs"
        >
            Selesai & Tutup
        </button>
        </div>

    </div>
    </div>
);
}