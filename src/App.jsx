
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

  const [name, setName] = useState("");

  // Topic 5: Find function
  function handleFind(event) {
    event.preventDefault();

    const foundGuest = guests.find(
      (guest) => guest.name === name
    );

    console.log(foundGuest);
  }

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

        <form onSubmit={handleFind}>
          <input
            type="text"
            placeholder="Enter guest name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <button type="submit">Find</button>
        </form>
      </main>

      <footer className="footer">
        Roll Number: 247237
      </footer>
    </div>
  );
}

export default App;
