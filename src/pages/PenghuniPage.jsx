import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailPenghuni from '../components/DetailPenghuni'; // Impor komponen pop-up detail baru

const menuItems = [
{ id: 1, name: 'Dashboard', icon: 'fa-chart-line', path: '/dashboard', active: false },
{ id: 2, name: 'Kamar', icon: 'fa-door-open', path: '/kamar', active: false },
{ id: 3, name: 'Penghuni', icon: 'fa-users', path: '/penghuni', active: true },
{ id: 4, name: 'Akuntansi', icon: 'fa-wallet', path: '/akuntansi', active: false },
];

// Mockup data lengkap sesuai data yang diinput via ModalIsiKamar
const initialPenghuniData = [
{ id: 1, nama: 'Jason Surya Padantya', kamar: '01', gender: 'Laki-laki', noHp: '081234567890', pekerjaan: 'Mahasiswa', tempatLahir: 'Bandar Lampung', tanggalLahir: '2003-05-14', tglMasuk: '12 Jan 2026', status: 'Lunas',label: 'success' },
{ id: 2, nama: 'Andi Herlambang', kamar: '02', gender: 'Laki-laki', noHp: '085712345678', pekerjaan: 'Karyawan', tempatLahir: 'Metro', tanggalLahir: '1999-08-22', tglMasuk: '05 Feb 2026', status: 'Terlambat',label: 'warning' },
{ id: 3, nama: 'Citra Lestari', kamar: '05', gender: 'Perempuan', noHp: '089987654321', pekerjaan: 'Mahasiswa', tempatLahir: 'Jakarta', tanggalLahir: '2004-11-02', tglMasuk: '20 Mar 2026', status: 'Tertunda',label: 'danger' },
{ id: 4, nama: 'Budi Santoso', kamar: '07', gender: 'Laki-laki', noHp: '082111223344', pekerjaan: 'Freelancer', tempatLahir: 'Palembang', tanggalLahir: '1997-02-17', tglMasuk: '01 Apr 2026', status: 'Lunas',label: 'success' },
];

export default function PenghuniPage() {
const [penghuniList] = useState(initialPenghuniData);
const [isLogoutOpen, setIsLogoutOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState('');

  // State kontrol untuk pop-up detail penghuni
const [isDetailOpen, setIsDetailOpen] = useState(false);
const [selectedPenghuni, setSelectedPenghuni] = useState(null);

const navigate = useNavigate();

const handleMenuClick = (path) => {
    navigate(path);
};

  // Fungsi saat tombol "Lihat Detail" diklik
const handleOpenDetail = (penghuniObj) => {
    setSelectedPenghuni(penghuniObj); // Simpan objek data penghuni terpilih
    setIsDetailOpen(true);            // Buka modal pop-up detail
};

const filteredPenghuni = penghuniList.filter(p => 
    p.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.noHp.includes(searchQuery)
);

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
        <h1 className="text-3xl font-black text-slate-950 tracking-tight">Data Penghuni</h1>
        <div className="h-1 w-12 bg-slate-900 mt-2 rounded-full"></div>
        </header>

        {/* Alat Filter & Pencarian */}
        <div className="mb-6 bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:max-w-xs">
            <i className="fas fa-search absolute left-4 top-3.5 text-slate-400 text-xs"></i>
            <input 
            type="text"
            placeholder="Cari nama atau nomor HP..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 text-xs font-semibold pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-slate-900 focus:bg-white text-slate-950 transition-all"
            />
        </div>
        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Total Record: <span className="text-slate-950 font-black">{filteredPenghuni.length} Orang</span>
        </div>
        </div>


        {/* TABEL DATA PENGHUNI */}
        <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
            <thead>
                <tr className="text-slate-400 text-[11px] font-bold uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-4">Nama Penghuni</th>
                <th className="px-6 py-4">No. HP</th>
                <th className="px-6 py-4">Tanggal Masuk</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Aksi</th>
                </tr>
            </thead>
            <tbody className="text-xs font-semibold text-slate-700">
                {filteredPenghuni.length > 0 ? (
                filteredPenghuni.map((p) => (
                    <tr key={p.id} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4 text-slate-950 font-bold">{p.nama}</td>
                    <td className="px-6 py-4 font-mono text-slate-600">{p.noHp}</td>
                    <td className="px-6 py-4 text-slate-500">{p.tglMasuk}</td>
                    <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase border ${
                        p.label === 'success' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                        p.label === 'warning' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                        'bg-rose-50 text-rose-600 border-rose-100'
                        }`}>
                        {p.status}
                        </span>
                    </td>
                    <td className="px-6 py-4 text-center">
<div className="flex justify-center items-center gap-2">
    
    {/* 1. TOMBOL LIHAT DETAIL (Ikon Mata - Biru) */}
    <button 
    onClick={() => handleOpenDetail(p)}
    className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg border border-blue-200 shadow-xs transition-all duration-200 cursor-pointer" 
    title="Lihat Detail Profil"
    >
    <i className="fas fa-eye text-sm"></i>
    </button>

</div>
</td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan="5" className="px-6 py-10 text-center text-slate-400 font-bold">Data tidak ditemukan.</td>
                </tr>
                )}
            </tbody>
            </table>
        </div>
        </div>
    </main>

      {/* --- COMPONENT MODAL DETAIL PENGHUNI --- */}
    <DetailPenghuni 
        isOpen={isDetailOpen} 
        onClose={() => setIsDetailOpen(false)} 
        dataPenghuni={selectedPenghuni} 
    />

      {/* --- LOGOUT MODAL --- */}
    {isLogoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-xs" onClick={() => setIsLogoutOpen(false)} />
        <div className="relative bg-white w-full max-w-sm p-6 rounded-2xl shadow-2xl border border-slate-100 z-10 text-center animate-fadeIn">
            <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center text-xl mx-auto mb-4">⚠️</div>
            <h3 className="text-base font-black text-slate-950 tracking-tight">Konfirmasi Keluar</h3>
            <p className="text-xs text-slate-500 mt-2">Apakah Anda yakin ingin keluar dari sistem?</p>
            <div className="grid grid-cols-2 gap-3 mt-6">
            <button onClick={() => setIsLogoutOpen(false)} className="w-full bg-slate-100 text-slate-700 font-semibold text-xs py-3 rounded-xl">Batal</button>
            <button onClick={() => { setIsLogoutOpen(false); navigate('/'); }} className="w-full bg-rose-600 text-white font-semibold text-xs py-3 rounded-xl">Ya, Keluar</button>
            </div>
        </div>
        </div>
    )}
    </div>
);
}