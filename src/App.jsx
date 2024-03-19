import React, { useState } from 'react';
import './App.css';

function App() {
  const [soal, setSoal] = useState("");
  const [gambar, setGambar] = useState("");
  const [tombolAktif, setTombolAktif] = useState(true);

  const soalAcak = [
    { kode: "Kode Soal Anda 1", gambar: "public/giphy1.webp" },
    { kode: "Kode Soal Anda 2", gambar: "public/giphy2.webp" },
    { kode: "Kode Soal Anda 3", gambar: "public/giphy3.webp" }
  ];

  const acakKodeSoal = () => {
    const index = Math.floor(Math.random() * soalAcak.length);
    const soalTerpilih = soalAcak[index].kode;
    const gambarTerpilih = soalAcak[index].gambar;
    setSoal(soalTerpilih);
    setGambar(gambarTerpilih);
    setTombolAktif(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Soal Algoritma dan Struktur Data 2</h2>
        {gambar && <img src={gambar} alt="Gambar Soal" className="gambar-soal" />}
        <p className='code-soal'>{soal}</p>
        <button onClick={acakKodeSoal} disabled={!tombolAktif}>Acak Kode Soal</button>
      </header>
    </div>
  );
}

export default App;
