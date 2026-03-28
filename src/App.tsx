import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Events } from "./pages/Events";
import { Gallery } from "./pages/Gallery";
import { Donate } from "./pages/Donate";

export default function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen bg-white font-sans text-zinc-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>

        <footer className="bg-zinc-900 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-zinc-400">
              © 2026 Madan Mina Sarvodaya Foundation. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}