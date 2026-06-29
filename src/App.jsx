import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import KamarPage from './pages/KamarPage';
import PenghuniPage from './pages/PenghuniPage';
import AkuntansiPage from './pages/AkuntansiPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/login" element={<LoginPage />} /> 

        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/Kamar" element={<KamarPage />} />

        <Route path="/Penghuni" element={<PenghuniPage />} />

        <Route path="/Akuntansi" element={<AkuntansiPage />} />
      </Routes>

    </Router>
  );
}