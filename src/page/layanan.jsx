import React from 'react';
import './Layanan.css'; 

const Layanan = () => {
  const services = [
    {
      name: "Pemeriksaan Gigi Gratis",
      description: "Pemeriksaan kesehatan gigi secara menyeluruh.",
      hours: "Senin - Jumat, 08:00 - 16:00",
      location: "Ruang Kesehatan, Universitas Ahmad Dahlan"
    },
    {
      name: "Edukasi Kesehatan Gigi",
      description: "Sesi edukasi tentang cara menjaga kesehatan gigi.",
      hours: "Setiap Selasa, 10:00 - 12:00",
      location: "Ruang Edukasi, Universitas Ahmad Dahlan"
    },
    {
      name: "Konseling Kesehatan Mulut",
      description: "Konsultasi dengan dokter gigi mengenai masalah kesehatan mulut.",
      hours: "Setiap Kamis, 13:00 - 15:00",
      location: "Klinik Gigi, Universitas Ahmad Dahlan"
    }
  ];

  return (
    <div className="layanan">
      <h2>Layanan Kami</h2>
      <p>Informasi seputar layanan yang tersedia:</p>
      <div className="services">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3 className="service-name">{service.name}</h3>
            <div className="service-info">
              <p>{service.description}</p>
              <p><strong>Jam Operasional:</strong> {service.hours}</p>
              <p><strong>Lokasi:</strong> {service.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layanan;