
import { useState } from "react";
import "./App.css";

function Guest({ name, seat }) {
  return (
    <div className="guest">
      <span>{name}</span>
      <span>Seat {seat}</span>
    </div>
  );
}

function App() {
  const guests = [
    { name: "Sara", seat: 4 },
    { name: "Omar", seat: 9 },
    { name: "Hina", seat: 2 },
  ];

  // Topic 4: Controlled input
  const [name, setName] = useState("");

  return (
    <div className="app">
      <header className="header">
        <h1>Hostel Store</h1>
      </header>

      <main className="main">
        <h2>Guest Wall</h2>

        <div className="wall">
          {guests.map((guest) => (
            <Guest key={guest.name} name={guest.name} seat={guest.seat} />
          ))}
        </div>

        <h2>Find a Guest</h2>

        <input
          type="text"
          placeholder="Enter guest name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </main>

      <footer className="footer">
        Roll Number: 247237
      </footer>
    </div>
  );
}

export default App;
