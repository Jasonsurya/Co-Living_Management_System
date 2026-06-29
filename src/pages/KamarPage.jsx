import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalIsiKamar from '../components/ModalIsiKamar'; 
import PopUp_Kamar from '../components/PopUp_Kamar'; // Sudah terimpor dengan benar

const menuItems = [
{ id: 1, name: 'Dashboard', icon: 'fa-chart-line', path: '/dashboard', active: false },
{ id: 2, name: 'Kamar', icon: 'fa-door-open', path: '/kamar', active: true },
{ id: 3, name: 'Penghuni', icon: 'fa-users', path: '/penghuni', active: false },
{ id: 4, name: 'Akuntansi', icon: 'fa-wallet', path: '/akuntansi', active: false },
];

const initialKamarData = [
{ id: 1, nomor: '1', status: 'terisi', penghuni: 'Jason Surya Padantya', icon: 'fa-door-closed' },
{ id: 2, nomor: '2', status: 'terisi', penghuni: 'Penghuni Kamar 2', icon: 'fa-door-closed' },
{ id: 3, nomor: '3', status: 'proses', penghuni: 'Belum Terisi', icon: 'fa-door-open' },
{ id: 4, nomor: '4', status: 'kosong', penghuni: '', icon: null },
{ id: 5, nomor: '5', status: 'kosong', penghuni: '', icon: null },
{ id: 6, nomor: '6', status: 'kosong', penghuni: '', icon: null },
{ id: 7, nomor: '7', status: 'kosong', penghuni: '', icon: null },
{ id: 8, nomor: '8', status: 'kosong', penghuni: '', icon: null },
{ id: 9, nomor: '9', status: 'kosong', penghuni: '', icon: null },
{ id: 10, nomor: '10', status: 'kosong', penghuni: '', icon: null },
{ id: 11, nomor: '11', status: 'kosong', penghuni: '', icon: null },
{ id: 12, nomor: '12', status: 'kosong', penghuni: '', icon: null },
{ id: 13, nomor: '13', status: 'kosong', penghuni: '', icon: null },
{ id: 14, nomor: '14', status: 'kosong', penghuni: '', icon: null },
];

export default function KamarPage() {
  // 1. Mengaktifkan setKamarList agar data kartu di layar bisa di-update secara dinamis
const [kamarList, setKamarList] = useState(initialKamarData); 
const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  // State kontrol modal isi kamar
const [isFormOpen, setIsFormOpen] = useState(false);
const [selectedKamarNo, setSelectedKamarNo] = useState(null);

  // 2. State baru untuk kontrol PopUp_Kamar (Konfirmasi Mengeluarkan Penghuni)
const [isPopUpOpen, setIsPopUpOpen] = useState(false);
const [selectedPenghuniName, setSelectedPenghuniName] = useState('');

const navigate = useNavigate();

const handleMenuClick = (path) => {
    navigate(path);
};

  // 3. Modifikasi fungsi aksi tombol
const handleActionKamar = (kamar) => {
    if (kamar.status === 'kosong' || kamar.status === 'proses') {
    setSelectedKamarNo(kamar.nomor);
    setIsFormOpen(true); 
    } else if (kamar.status === 'terisi') {
      // Jika terisi, simpan data kamar yang dipilih lalu buka Pop-up Validasi
    setSelectedKamarNo(kamar.nomor);
    setSelectedPenghuniName(kamar.penghuni);
    setIsPopUpOpen(true);
    }
};

  // 4. Fungsi Eksekusi ketika Admin klik "Ya, Keluarkan" di Pop-up
const handleConfirmKosongkanKamar = () => {
    setKamarList(prevList => 
    prevList.map(kamar => 
        kamar.nomor === selectedKamarNo 
          ? { ...kamar, status: 'kosong', penghuni: '', icon: null } // Reset data kamar menjadi kosong
        : kamar
    )
    );
    setIsPopUpOpen(false); // Tutup pop-up setelah eksekusi selesai
};

return (
    <div className="flex min-h-screen bg-slate-100 font-sans text-slate-800">
    
      {/* --- SIDEBAR KIRI --- */}
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col sticky top-0 h-screen shadow-2xl">
        <div className="p-6 flex flex-col items-center border-b border-slate-800">
        <img src="/src/assets/Logo Co-Living Pagul.png" alt="Logo Pagul" className="h-16 w-auto mb-2" />
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Co-Living Pagul</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
            <button key={item.id} onClick={() => handleMenuClick(item.path)} className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group cursor-pointer ${item.active ? 'bg-slate-800 text-white shadow-lg' : 'hover:bg-slate-800/50 hover:text-white'}`}>
            <i className={`fas ${item.icon} w-5 text-lg ${item.active ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-300'}`}></i>
            <span className="text-sm font-semibold">{item.name}</span>
            </button>
        ))}
        </nav>
        <div className="p-4 mt-auto">
        <button onClick={() => setIsLogoutOpen(true)} className="flex items-center gap-4 px-4 py-3 w-full rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all font-bold text-sm cursor-pointer">
            <i className="fas fa-sign-out-alt w-5"></i> Keluar
        </button>
        </div>
    </aside>

      {/* --- MAIN CONTENT AREA --- */}
    <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8">
        <h1 className="text-3xl font-black text-slate-950 tracking-tight">Kamar</h1>
        <div className="h-1 w-12 bg-slate-900 mt-2 rounded-full"></div>
        </header>

        {/* GRID KARTU KAMAR */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {kamarList.map((kamar) => {
            let headerStyle = "bg-slate-200 text-slate-800 border-slate-300";
            let buttonStyle = "bg-slate-200 hover:bg-slate-300 text-slate-600";
            let buttonText = "Isi kamar";

            if (kamar.status === 'terisi') {
            headerStyle = "bg-emerald-100 text-emerald-800 border-emerald-200";
            buttonStyle = "bg-rose-500 hover:bg-rose-600 text-white";
            buttonText = "Keluar kamar";
            } else if (kamar.status === 'proses') {
            headerStyle = "bg-slate-200 text-slate-800 border-slate-300";
            buttonStyle = "bg-blue-600 hover:bg-blue-700 text-white";
            buttonText = "Isi Kamar";
            }

            return (
            <div key={kamar.id} className="bg-white rounded-2xl border-2 border-slate-300 shadow-xs overflow-hidden flex flex-col justify-between text-center min-h-55">
                <div className={`py-1.5 font-bold text-lg border-b-2 border-slate-300 ${headerStyle}`}>
                {kamar.nomor}
                </div>
                <div className="flex-1 flex flex-col items-center justify-center p-4 min-h-25">
                {kamar.icon ? <i className={`fas ${kamar.icon} text-4xl text-slate-800 mb-2`}></i> : <div className="h-10"></div>}
                {kamar.penghuni && <span className="text-[11px] font-bold text-slate-800 tracking-tight line-clamp-1 px-1">{kamar.penghuni}</span>}
                </div>
                <div className="p-2.5 border-t border-slate-100 bg-slate-50/50">
                  {/* Mengirim data objek kamar seutuhnya ke fungsi handler */}
                <button onClick={() => handleActionKamar(kamar)} className={`w-full py-2 px-3 rounded-xl font-bold text-xs transition-all active:scale-95 cursor-pointer ${buttonStyle}`}>
                    {buttonText}
                </button>
                </div>
            </div>
            );
        })}
        </div>
    </main>

      {/* --- INJEKSI KOMPONEN BARU: POP-UP VALIDASI KELUAR KAMAR --- */}
    <PopUp_Kamar 
        isOpen={isPopUpOpen}
        onClose={() => setIsPopUpOpen(false)}
        onConfirm={handleConfirmKosongkanKamar}
        nomorKamar={selectedKamarNo}
        namaPenghuni={selectedPenghuniName}
    />

      {/* PEMANGGILAN KOMPONEN MODAL FORM ISI KAMAR */}
    <ModalIsiKamar 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        nomorKamar={selectedKamarNo} 
    />

      {/* --- POP-UP LOGOUT OVERLAY --- */}
    {isLogoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-xs" onClick={() => setIsLogoutOpen(false)} />
        <div className="relative bg-white w-full max-w-sm p-6 rounded-2xl shadow-2xl border border-slate-100 z-10 text-center animate-fadeIn">
            <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center text-xl mx-auto mb-4">⚠️</div>
            <h3 className="text-base font-black text-slate-950 tracking-tight">Konfirmasi Keluar</h3>
            <p className="text-xs text-slate-500 mt-2">Apakah Anda yakin ingin keluar dari sistem manajemen Co-Living Pagul?</p>
            <div className="grid grid-cols-2 gap-3 mt-6">
            <button type="button" onClick={() => setIsLogoutOpen(false)} className="w-full bg-slate-100 text-slate-700 font-semibold text-xs py-3 rounded-xl">Tetap di Sistem</button>
            <button type="button" onClick={() => { setIsLogoutOpen(false); navigate('/'); }} className="w-full bg-rose-600 text-white font-semibold text-xs py-3 rounded-xl">Ya, Keluar</button>
            </div>
        </div>
        </div>
    )}

    </div>
);
}