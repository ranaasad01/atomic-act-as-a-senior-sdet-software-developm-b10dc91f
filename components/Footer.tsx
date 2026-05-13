import { Shield, Code2 as Github, Briefcase as Linkedin, Mail, Terminal } from 'lucide-react';

const footerLinks = [
  { label: "Pipeline", href: "#pipeline" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Terminal", href: "#terminal" },
  { label: "Projects", href: "#projects" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/alexmorgan" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/alexmorgan" },
  { icon: Mail, label: "Email", href: "mailto:alex.morgan@example.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-[#1e293b] relative">
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded border border-[#10b981]/50 flex items-center justify-center">
                <Shield className="w-4 h-4 text-[#10b981]" />
              </div>
              <span className="font-mono text-sm font-semibold text-slate-200">
                <span className="text-[#10b981]">AM</span>
                <span className="text-slate-400">::</span>
                <span>SDET</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Building quality systems that scale. Reliability is not a feature — it is the foundation.
            </p>
            <div className="flex items-center gap-1 font-mono text-xs text-slate-600">
              <Terminal className="w-3 h-3 text-[#10b981]" />
              <span>Available for senior SDET &amp; QA Lead roles</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-sm text-slate-400 hover:text-[#10b981] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#10b981]/30 group-hover:text-[#10b981] transition-colors">#</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-slate-400 hover:text-[#10b981] transition-colors group"
                >
                  <div className="w-7 h-7 rounded border border-[#334155] flex items-center justify-center group-hover:border-[#10b981]/50 transition-colors">
                    <social.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-sm">{social.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 p-3 rounded-lg border border-[#10b981]/20 bg-[#10b981]/5">
              <p className="font-mono text-xs text-[#10b981] mb-1">$ status --availability</p>
              <p className="font-mono text-xs text-slate-400">
                Open to: Remote / Hybrid Senior SDET roles
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-slate-600">
            © 2024 Alex Morgan. Built with Next.js, Playwright, and zero tolerance for flaky tests.
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
