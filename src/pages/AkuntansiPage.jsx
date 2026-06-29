import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
{ id: 1, name: 'Dashboard', icon: 'fa-chart-line', path: '/dashboard', active: false },
{ id: 2, name: 'Kamar', icon: 'fa-door-open', path: '/kamar', active: false },
{ id: 3, name: 'Penghuni', icon: 'fa-users', path: '/penghuni', active: false },
{ id: 4, name: 'Akuntansi', icon: 'fa-wallet', path: '/akuntansi', active: true }, // Aktif di sini
];

const initialTransaksiData = [
{ id: 1, tanggal: '01 Mei 2026', tipe: 'Pemasukan', kategori: 'Sewa Kamar', keterangan: 'Sewa Kamar 01 - Jason Surya', jumlah: 1500000 },
{ id: 2, tanggal: '03 Mei 2026', tipe: 'Pengeluaran', kategori: 'Operasional', keterangan: 'Pembelian Token Listrik Utama', jumlah: 500000 },
{ id: 3, tanggal: '05 Mei 2026', tipe: 'Pemasukan', kategori: 'Sewa Kamar', keterangan: 'Sewa Kamar 02 - Andi Herlambang', jumlah: 1500000 },
{ id: 4, tanggal: '10 Mei 2026', tipe: 'Pengeluaran', kategori: 'Pemeliharaan', keterangan: 'Perbaikan Keran Air Kamar Mandi', jumlah: 150000 },
];

export default function AkuntansiPage() {
const [transaksiList] = useState(initialTransaksiData);
const [isLogoutOpen, setIsLogoutOpen] = useState(false);
const [filterTipe, setFilterTipe] = useState('Semua');

const navigate = useNavigate();

  // Hitung Total Finansial Ringkas
const totalPemasukan = transaksiList.filter(t => t.tipe === 'Pemasukan').reduce((sum, t) => sum + t.jumlah, 0);
const totalPengeluaran = transaksiList.filter(t => t.tipe === 'Pengeluaran').reduce((sum, t) => sum + t.jumlah, 0);
const saldoBersih = totalPemasukan - totalPengeluaran;

const filteredTransaksi = transaksiList.filter(t => 
    filterTipe === 'Semua' ? true : t.tipe === filterTipe
);

  // Format angka ke Rupiah standar teks biasa
const formatRupiah = (angka) => {
    return 'Rp ' + angka.toLocaleString('id-ID');
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
            <button key={item.id} onClick={() => navigate(item.path)} className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group cursor-pointer ${item.active ? 'bg-slate-800 text-white shadow-lg' : 'hover:bg-slate-800/50 hover:text-white'}`}>
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
        <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
            <h1 className="text-3xl font-black text-slate-950 tracking-tight">Akuntansi & Keuangan</h1>
            <div className="h-1 w-12 bg-slate-900 mt-2 rounded-full"></div>
        </div>
        
          {/* Tombol Aksi Cepat Finansial */}
        <div className="flex gap-2">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer">
            <i className="fas fa-plus-circle"></i> Catat Pemasukan
            </button>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer">
            <i className="fas fa-minus-circle"></i> Catat Pengeluaran
            </button>
        </div>
        </header>

        {/* RINGKASAN KARTU CASHFLOW (3 KOLOM) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Kartu Pemasukan */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs flex items-center justify-between">
            <div>
            <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Total Pemasukan Bulan Ini</span>
            <span className="text-xl font-black text-emerald-600">{formatRupiah(totalPemasukan)}</span>
            </div>
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-sm"><i className="fas fa-arrow-down"></i></div>
        </div>

          {/* Kartu Pengeluaran */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs flex items-center justify-between">
            <div>
            <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Total Pengeluaran Bulan Ini</span>
            <span className="text-xl font-black text-rose-600">{formatRupiah(totalPengeluaran)}</span>
            </div>
            <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center text-sm"><i className="fas fa-arrow-up"></i></div>
        </div>

          {/* Kartu Kas / Saldo Bersih */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs flex items-center justify-between">
            <div>
            <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Saldo Kas Bersih</span>
            <span className="text-xl font-black text-slate-950">{formatRupiah(saldoBersih)}</span>
            </div>
            <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center text-sm"><i className="fas fa-scale-balanced"></i></div>
        </div>
        </div>

        {/* SELEKTOR FILTER TABEL */}
        <div className="mb-6 flex gap-2 border-b border-slate-200 pb-3">
        {['Semua', 'Pemasukan', 'Pengeluaran'].map((tipe) => (
            <button
            key={tipe}
            onClick={() => setFilterTipe(tipe)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterTipe === tipe 
                ? 'bg-slate-900 text-white' 
                : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200/60'
            }`}
            >
            {tipe}
            </button>
        ))}
        </div>

        {/* TABEL JURNAL TRANSAKSI */}
        <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
            <thead>
                <tr className="text-slate-400 text-[11px] font-bold uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-4">Tanggal</th>
                <th className="px-6 py-4">Tipe</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Keterangan Riwayat</th>
                <th className="px-6 py-4 text-right">Jumlah Saldo</th>
                </tr>
            </thead>
            <tbody className="text-xs font-semibold text-slate-700">
                {filteredTransaksi.length > 0 ? (
            filteredTransaksi.map((t) => (
                    <tr key={t.id} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4 text-slate-500">{t.tanggal}</td>
                    <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-lg font-bold text-[10px] uppercase tracking-wide border ${
                        t.tipe === 'Pemasukan' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-600 border-rose-100'
                        }`}>
                        {t.tipe}
                        </span>
                    </td>
                    <td className="px-6 py-4 text-slate-950 font-bold">{t.kategori}</td>
                    <td className="px-6 py-4 text-slate-500 italic">{t.keterangan}</td>
                    <td className={`px-6 py-4 text-right font-bold text-sm ${
                        t.tipe === 'Pemasukan' ? 'text-emerald-600' : 'text-rose-600'
                    }`}>
                        {t.tipe === 'Pemasukan' ? '+' : '-'} {formatRupiah(t.jumlah)}
                    </td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan="5" className="px-6 py-10 text-center text-slate-400 font-bold">Tidak ada riwayat transaksi finansial.</td>
                </tr>
                )}
            </tbody>
            </table>
        </div>
        </div>
    </main>

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