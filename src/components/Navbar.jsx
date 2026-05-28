import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <nav id="navbar" className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-150 flex justify-between items-center px-6 md:px-20 py-4 max-w-full">
        <div className="flex items-center gap-3">
          <img 
            alt="HSJ Logo" 
            className="h-10 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmeqBh_ovevCGcxX_oS6diaIt3oMlVEoEGNMJJhJ_Y8SiZmUIgNpOWc4pcsYK7sHgDtlWPjXkzPSvH7FRwqWop4hIgLjju3WeZgUPc23SkyT3oYVOaxPity5QLTldbUgVNVSh2D3fK6YX1MxUzwOueNMKcTFE-rcr2_u1uMAj9-SyEez65W1cBfcNfW3p6pHMNYs2D3Vcoyx0ILv5DsLrsFAtntIWYm5Kz7EB5X98MupZCq6OGFBxI6HsfLwqvWNpOxw1aM05Z7y60"
          />
          <div className="flex flex-col">
            <span className="font-display text-md font-extrabold tracking-tight text-primary">HSJ</span>
            <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider hidden sm:block">Haemophilia Jamaica</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="font-sans text-xs font-bold text-primary border-b-2 border-primary pb-1">
            Home
          </a>
          <a href="/about" className="font-sans text-xs font-bold text-gray-500 hover:text-primary transition-colors">
            About Us
          </a>
          <a href="/contact" className="font-sans text-xs font-bold text-gray-500 hover:text-primary transition-colors">
            Get in contact
          </a>
          <a href="/members" className="font-sans text-xs font-bold text-gray-500 hover:text-primary transition-colors">
            Meet the members
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
          
            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider hover:scale-[1.03] transition-all shadow-md shadow-primary/10 cursor-pointer text-center"
          >
            Donate Now
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors md:hidden text-gray-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Links Overlay */}
      {mobileMenuOpen && (
        <div className="bg-white border-b border-gray-200 shadow-lg px-6 py-4 space-y-3 md:hidden z-40 relative">
          <a 
            href="#" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-primary py-1"
          >
            Home
          </a>
          <a 
            href="#" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-gray-600 py-1 hover:text-primary"
          >
            Our Impact
          </a>
          <a 
            href="#" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-gray-600 py-1 hover:text-primary"
          >
            Our Services
          </a>
          <a 
            href="#" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-gray-600 py-1 hover:text-primary"
          >
            News & Updates
          </a>
        </div>
      )}
    </>
  );
}
