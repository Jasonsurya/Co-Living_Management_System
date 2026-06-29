import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Impor useNavigate

// ZONA 1: DATA STATIK
const menuItems = [
{ id: 1, name: 'Dashboard', icon: 'fa-chart-line', path: '/dashboard', active: true },
{ id: 2, name: 'Kamar', icon: 'fa-door-open', path: '/kamar', active: false }, 
{ id: 3, name: 'Penghuni', icon: 'fa-users', path: '/penghuni', active: false },
{ id: 4, name: 'Akuntansi', icon: 'fa-wallet', path: '/akuntansi', active: false },
];

const statCards = [
{ label: 'Total Kamar', value: '14 Kamar', icon: 'fa-hotel' },
{ label: 'Kamar Terisi', value: '8 Kamar', icon: 'fa-bed' },
{ label: 'Kamar Kosong', value: '6 Kamar', icon: 'fa-door-closed' },
{ label: 'Total Uang', value: 'Rp 7.000.000,00', icon: 'fa-money-bill-wave' },
{ label: 'Uang Masuk', value: 'Rp 2.500.000,00', icon: 'fa-arrow-down' },
{ label: 'Uang Keluar', value: 'Rp 1.200.000,00', icon: 'fa-arrow-up' },
];

const penghuniTable = [
{ date: '11/11/2022', name: 'Andi Herlambang', room: 'Kamar 01', status: 'Lunas', label: 'success' },
{ date: '22/10/2022', name: 'Budi Santoso', room: 'Kamar 04', status: 'Tertunda', label: 'warning' },
{ date: '22/05/2022', name: 'Citra Lestari', room: 'Kamar 02', status: 'Terlambat', label: 'danger' },
{ date: '14/07/2020', name: 'Dewi Sartika', room: 'Kamar 06', status: 'Lunas', label: 'success' },
];

export default function DashboardPage() {
  // ZONA 2: LOGIKA & STATE
const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const navigate = useNavigate(); // 2. Inisialisasi fungsi navigasi

const handleMenuClick = (path) => {
    navigate(path); // Fungsi untuk berpindah halaman sesuai rute menu
};

const handleEksekusiLogout = () => {
    setIsLogoutOpen(false);
    navigate('/'); 
};

  // ZONA 3: TAMPILAN (UI)
return (
    <div className="flex min-h-screen bg-slate-100 font-sans text-slate-800">
    
      {/* --- SIDEBAR KIRI --- */}
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col sticky top-0 h-screen shadow-2xl">
        <div className="p-6 flex flex-col items-center border-b border-slate-800">
        <img 
            src="/src/assets/Logo Co-Living Pagul.png" 
            alt="Logo Pagul" 
            className="h-16 w-auto mb-2"
        />
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Co-Living Pagul</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
            <button
            key={item.id}
              onClick={() => handleMenuClick(item.path)} // 3. Pemicu perpindahan halaman saat diklik
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group cursor-pointer ${
                item.active ? 'bg-slate-800 text-white shadow-lg' : 'hover:bg-slate-800/50 hover:text-white'
            }`}
            >
            <i className={`fas ${item.icon} w-5 text-lg ${item.active ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-300'}`}></i>
            <span className="text-sm font-semibold">{item.name}</span>
            </button>
        ))}
        </nav>

        {/* Tombol Keluar */}
        <div className="p-4 mt-auto">
        <button 
            onClick={() => setIsLogoutOpen(true)}
            className="flex items-center gap-4 px-4 py-3 w-full rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all font-bold text-sm cursor-pointer"
        >
            <i className="fas fa-sign-out-alt w-5"></i> Keluar
        </button>
        </div>
    </aside>

      {/* --- MAIN CONTENT AREA --- */}
    <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="mb-8">
        <h1 className="text-3xl font-black text-slate-950 tracking-tight">Dashboard</h1>
        <div className="h-1 w-12 bg-slate-900 mt-2 rounded-full"></div>
        </header>

        {/* 1. Stat Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {statCards.map((card, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-1">
            <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{card.label}</span>
                <i className={`fas ${card.icon} text-slate-300 text-xs`}></i>
            </div>
            <div className="text-sm font-black text-slate-950">{card.value}</div>
            </div>
        ))}
        </div>

        {/* 2. Chart Section */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
            <h3 className="text-sm font-bold text-slate-500 mb-6 text-center uppercase tracking-widest">Status Pembayaran Penghuni</h3>
            <div className="flex items-end justify-around h-48 gap-2 px-4 border-b border-slate-100">
            <div className="w-8 bg-blue-500 rounded-t-lg" style={{ height: '60%' }}></div>
            <div className="w-8 bg-blue-400 rounded-t-lg" style={{ height: '80%' }}></div>
            <div className="w-8 bg-blue-300 rounded-t-lg" style={{ height: '40%' }}></div>
            <div className="w-8 bg-blue-500 rounded-t-lg" style={{ height: '90%' }}></div>
            <div className="w-8 bg-blue-200 rounded-t-lg" style={{ height: '50%' }}></div>
            <div className="w-8 bg-blue-600 rounded-t-lg" style={{ height: '70%' }}></div>
            <div className="w-8 bg-blue-400 rounded-t-lg" style={{ height: '85%' }}></div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col justify-around">
            <div className="text-center">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Growth</div>
                <div className="text-2xl font-black text-slate-950">64%</div>
                <div className="w-full bg-slate-100 h-1.5 mt-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[64%]"></div>
                </div>
            </div>
            <div className="text-center">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Activity</div>
                <div className="text-2xl font-black text-slate-950">86%</div>
                <div className="w-full bg-slate-100 h-1.5 mt-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[86%]"></div>
                </div>
            </div>
            <div className="text-center">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Yearly</div>
                <div className="text-2xl font-black text-slate-950">+34%</div>
            </div>
        </div>
        </div>

        {/* 3. Section Daftar Penghuni */}
        <section className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
            <h2 className="text-lg font-black text-slate-950 tracking-tight">Daftar Penghuni</h2>
        </div>

        <div className="grid grid-cols-3 gap-4 p-6 bg-slate-50/50">
            <div className="bg-emerald-500 text-white p-4 rounded-2xl text-center shadow-lg shadow-emerald-500/20">
                <div className="text-xs font-bold uppercase mb-1">Lunas</div>
                <div className="text-3xl font-black">6</div>
            </div>
            <div className="bg-amber-400 text-white p-4 rounded-2xl text-center shadow-lg shadow-amber-400/20">
                <div className="text-xs font-bold uppercase mb-1">Tertunda</div>
                <div className="text-3xl font-black">3</div>
            </div>
            <div className="bg-rose-500 text-white p-4 rounded-2xl text-center shadow-lg shadow-rose-500/20">
                <div className="text-xs font-bold uppercase mb-1">Terlambat</div>
                <div className="text-3xl font-black">5</div>
            </div>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                <tr className="text-slate-400 text-[11px] font-bold uppercase tracking-widest border-b border-slate-100 bg-slate-50/30">
                    <th className="px-6 py-4">📅 Date</th>
                    <th className="px-6 py-4">👤 Name</th>
                    <th className="px-6 py-4">🚪 Room</th>
                    <th className="px-6 py-4">🏷️ Status</th>
                </tr>
                </thead>
                <tbody className="text-sm font-medium">
                {penghuniTable.map((row, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4">{row.date}</td>
                    <td className="px-6 py-4 text-slate-950 font-bold">{row.name}</td>
                    <td className="px-6 py-4 text-slate-500">{row.room}</td>
                    <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase border ${
                        row.label === 'success' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                        row.label === 'warning' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                        'bg-rose-50 text-rose-600 border-rose-100'
                        }`}>
                        {row.status}
                        </span>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </section>
    </main>

      {/* --- POP-UP LOGOUT OVERLAY --- */}
    {isLogoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-xs" onClick={() => setIsLogoutOpen(false)} />
        <div className="relative bg-white w-full max-w-sm p-6 rounded-2xl shadow-2xl border border-slate-100 z-10 text-center animate-fadeIn">
            <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center text-xl mx-auto mb-4">
            ⚠️
            </div>
            <h3 className="text-base font-black text-slate-950 tracking-tight">Konfirmasi Keluar</h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
            Apakah Anda yakin ingin keluar dari sistem manajemen Co-Living Pagul?
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
            <button type="button" onClick={() => setIsLogoutOpen(false)} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-3 rounded-xl transition-all cursor-pointer">
                Tetap di Sistem
            </button>
            <button type="button" onClick={handleEksekusiLogout} className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs py-3 rounded-xl shadow-sm transition-all active:scale-98 cursor-pointer">
                Ya, Keluar
            </button>
            </div>
        </div>
        </div>
    )}

    </div>
);
}