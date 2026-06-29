import { useState } from 'react';

export default function ModalIsiKamar({ isOpen, onClose, nomorKamar }) {
const [formData, setFormData] = useState({
    nama: '',
    jenisKelamin: 'Laki-laki',
    tempatLahir: '',
    tanggalLahir: '',
    noTelp: '',
    pekerjaan: '',
    fotoKtp: null,
    fotoDiri: null
});

  if (!isOpen) return null; // Jika statusnya tidak open, modal tidak dirender

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Data Penghuni Baru Kamar ${nomorKamar}:`, formData);
    alert(`Data penghuni Kamar ${nomorKamar} berhasil disimpan! (Cek console log)`);
    
    // Reset form & tutup modal
    setFormData({
    nama: '',
    jenisKelamin: 'Laki-laki',
    tempatLahir: '',
    tanggalLahir: '',
    noTelp: '',
    pekerjaan: '',
    fotoKtp: null,
    fotoDiri: null
    });
    onClose();
};

return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay Latar Gelap */}
    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs" onClick={onClose} />
    
      {/* Kotak Form */}
    <div className="relative bg-white w-full max-w-lg p-6 rounded-2xl shadow-2xl border border-slate-200 z-10 max-h-[90vh] overflow-y-auto animate-fadeIn text-left text-xs font-semibold">
        
        {/* Header Modal */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
        <h3 className="text-lg font-black text-slate-950">Pendataan Penghuni Baru (Kamar {nomorKamar})</h3>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-lg cursor-pointer">✕</button>
        </div>

        {/* Isi Form Konten */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
        
          {/* Nama */}
        <div>
            <label className="block text-slate-500 mb-1">Nama Lengkap</label>
            <input 
            type="text" name="nama" required value={formData.nama} onChange={handleInputChange}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-slate-900 bg-slate-50 text-slate-950 font-bold"
            placeholder="Masukkan nama lengkap"
            />
        </div>

          {/* Jenis Kelamin */}
        <div>
            <label className="block text-slate-500 mb-2">Jenis Kelamin</label>
            <div className="flex gap-6 items-center">
            <label className="flex items-center gap-2 cursor-pointer text-slate-950 font-bold">
                <input 
                type="radio" name="jenisKelamin" value="Laki-laki" checked={formData.jenisKelamin === 'Laki-laki'} onChange={handleInputChange}
                className="w-4 h-4 accent-slate-900"
                />
                Laki-laki
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-slate-950 font-bold">
                <input 
                type="radio" name="jenisKelamin" value="Perempuan" checked={formData.jenisKelamin === 'Perempuan'} onChange={handleInputChange}
                className="w-4 h-4 accent-slate-900"
                />
                Perempuan
            </label>
            </div>
        </div>

          {/* Tempat & Tanggal Lahir */}
        <div className="grid grid-cols-2 gap-3">
            <div>
            <label className="block text-slate-500 mb-1">Tempat Lahir</label>
            <input 
                type="text" name="tempatLahir" required value={formData.tempatLahir} onChange={handleInputChange}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-slate-900 bg-slate-50 text-slate-950 font-bold"
                placeholder="Kota kelahiran"
            />
            </div>
            <div>
            <label className="block text-slate-500 mb-1">Tanggal Lahir</label>
            <input 
                type="date" name="tanggalLahir" required value={formData.tanggalLahir} onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:border-slate-900 bg-slate-50 text-slate-950 font-bold"
            />
            </div>
        </div>

          {/* No Telepon & Pekerjaan */}
        <div className="grid grid-cols-2 gap-3">
            <div>
            <label className="block text-slate-500 mb-1">No. Telepon / WhatsApp</label>
            <input 
                type="tel" name="noTelp" required value={formData.noTelp} onChange={handleInputChange}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-slate-900 bg-slate-50 text-slate-950 font-bold"
                placeholder="Contoh: 0812345..."
            />
            </div>
            <div>
            <label className="block text-slate-500 mb-1">Pekerjaan</label>
            <input 
                type="text" name="pekerjaan" required value={formData.pekerjaan} onChange={handleInputChange}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-slate-900 bg-slate-50 text-slate-950 font-bold"
                placeholder="Pekerjaan saat ini"
            />
            </div>
        </div>

          {/* Area Berkas: KTP & Foto Diri */}
        <div className="grid grid-cols-2 gap-3 pt-2">
            <div>
            <label className="block text-slate-500 mb-1">Foto KTP</label>
            <div className="border border-dashed border-slate-300 rounded-xl p-3 bg-slate-50/50 text-center relative hover:bg-slate-50 transition-all">
                <input 
                type="file" name="fotoKtp" accept="image/*" required onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <i className="fas fa-id-card text-lg text-slate-400 mb-1 block"></i>
                <span className="text-[10px] text-slate-500 block truncate">
                {formData.fotoKtp ? formData.fotoKtp.name : "Pilih berkas KTP"}
                </span>
            </div>
            </div>
            
            <div>
            <label className="block text-slate-500 mb-1">Foto Diri</label>
            <div className="border border-dashed border-slate-300 rounded-xl p-3 bg-slate-50/50 text-center relative hover:bg-slate-50 transition-all">
                <input 
                type="file" name="fotoDiri" accept="image/*" required onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <i className="fas fa-camera text-lg text-slate-400 mb-1 block"></i>
                <span className="text-[10px] text-slate-500 block truncate">
                {formData.fotoDiri ? formData.fotoDiri.name : "Pilih foto wajah"}
                </span>
            </div>
            </div>
        </div>

          {/* Tombol Aksi */}
        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
            type="button" onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold cursor-pointer"
            >
            Batal
            </button>
            <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold shadow-xs active:scale-98 cursor-pointer"
            >
            Simpan Data
            </button>
        </div>

        </form>
    </div>
    </div>
);
}