import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const loginText = {
welcome: "Welcome to Co-Living Pagul!",
subWelcome: "Log in to access your dashboard management account.",
};

export default function LoginPage() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Alat untuk pindah halaman via fungsi logika

  // FUNGSI 1: LOGIKA CEK LOGIN (DENGAN ISI DATA)
const handleLoginSubmit = (e) => {
    e.preventDefault();

    // AKUN TIRUAN (Silakan sesuaikan sesukamu untuk demo TA)
    const adminUsername = "admin";
    const adminPassword = "123";

    if (username === adminUsername && password === adminPassword) {
      // Jika benar, langsung arahkan ke route /dashboard
    navigate('/dashboard');
    } else {
      // Jika salah, muncul notifikasi peringatan dan form ter-reset otomatis
    alert("Username atau Password salah! Silakan coba lagi.");
    setUsername('');
    setPassword('');
    }
};

  // FUNGSI 2: LOGIKA BYPASS (TANPA ISI DATA)
const handleBypassLogin = () => {
    navigate('/dashboard');
};

return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden font-sans antialiased">
    <div 
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}
    />
    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md" />

    <div className="relative bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl border border-slate-100 z-10 text-left">
        
        <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2.5 mb-3">
            <img src="/src/assets/Logo Co-Living Pagul.png" alt="Logo" className="h-9 w-auto object-contain" />
            <span className="text-sm font-black text-slate-950 tracking-tight">CO-LIVING PAGUL</span>
        </div>
        <h3 className="text-xl font-black text-slate-950 tracking-tight mt-2">{loginText.welcome}</h3>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-medium px-4">{loginText.subWelcome}</p>
        </div>

        <form onSubmit={handleLoginSubmit} className="space-y-4">
        <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Username</label>
            <input 
            type="text" 
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username demo: admin"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-slate-900 focus:bg-white transition-all text-slate-800 font-medium"
            />
        </div>

        <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Password</label>
            <input 
            type="password" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password demo: 123"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-slate-900 focus:bg-white transition-all text-slate-800"
            />
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 text-slate-500 font-medium cursor-pointer">
            <input type="checkbox" className="rounded-sm border-slate-300 accent-slate-900" />
            Ingat Saya
            </label>
            {/* LINK TOMBOL BYPASS RAHASIA (Bisa diklik untuk langsung masuk tanpa isi) */}
            <button 
            type="button" 
            onClick={handleBypassLogin} 
            className="text-slate-400 hover:text-slate-950 transition-colors font-semibold underline"
            >
            Bypass Login (Demo)
            </button>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-3">
            <Link to="/" className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-sm py-3.5 rounded-xl transition-all active:scale-98 text-center inline-block">
            Batal
            </Link>
            <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm py-3.5 rounded-xl shadow-xs transition-all active:scale-98 cursor-pointer text-center">
            Masuk
            </button>
        </div>
        </form>

    </div>
    </div>
);
}