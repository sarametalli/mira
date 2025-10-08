import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 overflow-auto bg-neutral-100 pt-[70px] pb-[60px]">
          <Routes>
            <Route path="/" element={<Homepage />} />
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
