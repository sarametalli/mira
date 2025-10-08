import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Homepage from './components/pages/Homepage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App
