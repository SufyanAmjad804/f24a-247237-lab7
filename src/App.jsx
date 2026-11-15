
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
  // Topic 3: Guest array
  const guests = [
    { name: "Sara", seat: 4 },
    { name: "Omar", seat: 9 },
    { name: "Hina", seat: 2 },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Hostel Store</h1>
      </header>

      <main className="main">
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
      </main>

      <footer className="footer">
        Roll Number: 247237
      </footer>
    </div>
  );
}

export default App;
