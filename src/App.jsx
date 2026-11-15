
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
  return (
    <div className="app">
      <header className="header">
        <h1>Hostel Store</h1>
      </header>

      <main className="main">
        <h2>Welcome to Hostel Store</h2>

        <h2>Guest Example</h2>
        <Guest name="Sara" seat={4} />
      </main>

      <footer className="footer">
        Roll Number: 247237
      </footer>
    </div>
  );
}

export default App;
