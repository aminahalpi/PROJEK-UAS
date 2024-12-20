import React from 'react';
import './Bantuan.css'; 
const Bantuan = () => {
  return (
    <div className="bantuan">
      <h2>Bantuan</h2>
      <div className="section">
        <h3>1. Deskripsi Fitur Aplikasi GiCare UAD</h3>
        <p>
          GiCare UAD adalah aplikasi yang dirancang untuk memudahkan pengguna dalam mengakses layanan kesehatan. 
          Fitur-fitur utama termasuk pendaftaran janji temu, informasi layanan, dan pengingat untuk kunjungan.
        </p>
      </div>
      <div className="section">
        <h3>2. FAQ (Pertanyaan yang Sering Diajukan)</h3>
        <ul>
          <li><strong>Q:</strong> Bagaimana cara mendaftar di aplikasi GiCare UAD?</li>
          <li><strong>A:</strong> Anda dapat mendaftar dengan mengisi formulir pendaftaran di aplikasi.</li>
          <li><strong>Q:</strong> Apakah saya bisa membatalkan janji temu?</li>
          <li><strong>A:</strong> Ya, Anda dapat membatalkan janji temu melalui aplikasi.</li>
        </ul>
      </div>
      <div className="section">
        <h3>3. Contact Person</h3>
        <p>
          Jika Anda memiliki pertanyaan lebih lanjut, silakan hubungi kami di:
        </p>
        <p>
          <strong>Telepon:</strong> (021) 123-4567
        </p>
        <p>
          <strong>Email:</strong> support@gicareuad.com
        </p>
      </div>
    </div>
  );
};

export default Bantuan;