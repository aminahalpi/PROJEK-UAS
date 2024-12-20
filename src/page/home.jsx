import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home">
      <h2>Selamat Datang di GiCare UAD</h2>
      <p>
        GiCare UAD adalah program kesehatan gigi gratis yang disediakan oleh 
        UNIVERSITAS AHMAD DAHLAN (UAD). Program ini dirancang untuk memberi akses 
        gratis kepada seluruh mahasiswa UAD untuk mendapatkan pemeriksaan dan 
        edukasi kesehatan gigi secara gratis. 
      </p>
      <p>
        GiCare UAD juga bertujuan untuk meningkatkan kesadaran tentang pentingnya 
        menjaga kesehatan gigi dan mulut. Kami percaya bahwa kesehatan gigi yang 
        baik adalah bagian penting dari kesehatan secara keseluruhan.
      </p>

      <h3>Papan Informasi</h3>
      <div className="info-board">
        <h4>Pengumuman</h4>
        <p>Jadwal pemeriksaan gigi gratis akan diumumkan setiap bulan.</p>
        
        <h4>Jadwal Kegiatan Klinik</h4>
        <p>Klinik buka setiap Senin hingga Jumat, 08:00 - 16:00.</p>
        
        <h4>Informasi atau Berita Klinik</h4>
        <p>Klinik kami baru saja mendapatkan peralatan terbaru untuk pemeriksaan gigi.</p>
      </div>
    </div>
  );
};

export default Home;