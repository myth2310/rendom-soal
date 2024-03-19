import React, { useState } from 'react';
import './App.css';

function App() {
  const [soal, setSoal] = useState("");
  const [gambar, setGambar] = useState("");
  const [tombolAktif, setTombolAktif] = useState(true);

  const soalAcak = [
    { kode: "Kode Homework 1", gambar: "giphy4.webp" },
    { kode: "Kode Homework 2", gambar: "giphy5.webp" },
    { kode: "Kode Homework 3", gambar: "giphy6.webp" }
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
        <h2>Algoritma dan Struktur Data 2</h2>
        {gambar && <img src={gambar} alt="Gambar Soal" className="gambar-soal" />}
        <p className='code-soal'>{soal}</p>
        <button onClick={acakKodeSoal} disabled={!tombolAktif}>Kode Soal</button>
      </header>
    </div>
  );
}

export default App;
