import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 overflow-auto bg-neutral-100">
        <div className='h-[4000px]'>contenuto di test</div>
      </main>
      <Footer />
    </div>
  );
}

export default App
