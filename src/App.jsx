
import { useState } from "react";
import "./App.css";

// Topic 2: Guest component
function Guest({ name, seat }) {
  return (
    <div className="guest">
      <span>{name}</span>
      <span>Seat {seat}</span>
    </div>
  );
}

function App() {
  // Topic 3: Guest wall
  const guests = [
    { name: "Sara", seat: 4 },
    { name: "Omar", seat: 9 },
    { name: "Hina", seat: 2 },
  ];

  // Topic 4: Name input state
  const [name, setName] = useState("");

  // Topic 6: Result card state
  const [selectedGuest, setSelectedGuest] = useState(null);

  // Topic 8: Message state
  const [message, setMessage] = useState("");

  // Topic 5, 7 and 8: Find guest
  function handleFind(event) {
    event.preventDefault();
    const searchName = name.trim();

if (searchName === "") {
  setMessage("Type a name");
  return;
}

    const foundGuest = guests.find(
  (guest) =>
    guest.name.toLowerCase() === searchName.toLowerCase()
);

    if (foundGuest) {
      setSelectedGuest(foundGuest);
      setMessage("");
    } else {
      setSelectedGuest(null);
      setMessage("Not on the list");
    }
  }

  return (
    <div className="app">
      {/* Topic 1: Header */}
      <header className="header">
        <h1>Hostel Store</h1>
      </header>

      <main className="main">
        {/* Topic 3 and 10: Guest wall */}
        <h2>Guest Wall</h2>

        <div className="wall">
          {guests.map((guest) => (
            <Guest
              key={guest.name}
              name={guest.name}
              seat={guest.seat}
            />
          ))}
        </div>

        {/* Topic 4 and 5: Name box and Find */}
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

        {/* Topic 6: Guest card */}
        <h2>Guest Card</h2>

        <div className="card">
          {selectedGuest && (
            <Guest
              name={selectedGuest.name}
              seat={selectedGuest.seat}
            />
          )}
        </div>

        {/* Topic 8: Error message */}
        <p className="message">{message}</p>
      </main>

      {/* Topic 1: Footer */}
      <footer className="footer">
        Roll Number: 247237
      </footer>
    </div>
  );
}

export default App;
