"use client";

import { useState, useEffect } from "react";
import { Shield, Menu, X } from 'lucide-react';

const navLinks = [
  { label: "Pipeline", href: "#pipeline" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Terminal", href: "#terminal" },
  { label: "Projects", href: "#projects" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
        (scrolled ? "bg-[#0f0f1a]/95 backdrop-blur-md border-b border-[#1e293b]" : "bg-transparent")
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded border border-[#10b981]/50 flex items-center justify-center group-hover:border-[#10b981] transition-all duration-300">
              <Shield className="w-4 h-4 text-[#10b981]" />
            </div>
            <span className="font-mono text-sm font-semibold text-slate-200 tracking-wider">
              <span className="text-[#10b981]">AM</span>
              <span className="text-slate-400">::</span>
              <span>SDET</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-mono text-slate-400 hover:text-[#10b981] transition-colors duration-200 relative group"
              >
                <span className="text-[#10b981]/50 group-hover:text-[#10b981] transition-colors">#</span>
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#10b981] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:alex.morgan@example.com"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-mono font-semibold text-[#0f0f1a] bg-[#10b981] rounded hover:bg-[#34d399] transition-all duration-200"
            >
              <span>$ hire --me</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-[#10b981] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0f0f1a] border-b border-[#1e293b]">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-mono text-slate-400 hover:text-[#10b981] rounded transition-all duration-200"
              >
                <span className="text-[#10b981]/50">#</span>
                {link.label}
              </a>
            ))}
            <a
              href="mailto:alex.morgan@example.com"
              className="block mt-3 px-4 py-3 text-sm font-mono font-semibold text-center text-[#0f0f1a] bg-[#10b981] rounded hover:bg-[#34d399] transition-all duration-200"
            >
              $ hire --me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
