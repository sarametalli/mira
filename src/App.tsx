import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Events from "./components/pages/Events";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 overflow-auto bg-neutral-100">
          <Routes>
            <Route path="/" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
