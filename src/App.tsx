import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 overflow-auto bg-neutral-100 z-0">
        <div className='h-[4000px]'><p className='p-[10%]'>contenuto di test</p></div>
      </main>
      <Footer />
    </div>
  );
}

export default App
