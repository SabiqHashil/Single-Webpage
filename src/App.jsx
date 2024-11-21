import "./App.css";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen font-sans">
      <div className="scroll inset-0 bg-[url('https://cdn.prod.website-files.com/65ddbdd3c4bfbc5790b41fbc/65e1ced722f8d5b5fcd83c5a_mesh-gradient-3.webp')] bg-cover bg-center bg-opacity-20">
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Features />
        </div>
      </div>
    </div>
  );
}

export default App;
