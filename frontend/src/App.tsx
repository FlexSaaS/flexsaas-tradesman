import clientAConfig from "./configs/clientA";
import clientBConfig from "./configs/clientB";
import type { ClientConfig } from "./types/Config";

const clientKey = import.meta.env.VITE_CLIENT || "A";
const config: ClientConfig = clientKey === "B" ? clientBConfig : clientAConfig;

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <header style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src={config.logo} alt="logo" style={{ height: 60 }} />
        <h1>{config.name}</h1>
      </header>
      <main>
        <p style={{ color: config.primaryColor }}>{config.tagline}</p>
        <button
          style={{
            background: config.primaryColor,
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            marginTop: "1rem",
          }}
        >
          Book Now
        </button>
      </main>
    </div>
  );
}

export default App;
