import { Shield, Gauge, Terminal, ArrowRight, Code2 as Github, Briefcase as Linkedin } from 'lucide-react';

const stats = [
  { value: "8+", label: "Years in QA" },
  { value: "200K+", label: "Tests Automated" },
  { value: "99.4%", label: "Pipeline Reliability" },
  { value: "70%", label: "Regression Reduction" },
];

const badges = [
  { icon: Shield, label: "Zero-Defect Advocate", color: "text-[#10b981]", border: "border-[#10b981]/30" },
  { icon: Gauge, label: "Performance Gatekeeper", color: "text-[#f59e0b]", border: "border-[#f59e0b]/30" },
  { icon: Terminal, label: "CI/CD Reliability", color: "text-[#10b981]", border: "border-[#10b981]/30" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0f0f1a]" />
      <div className="absolute inset-0 grid-overlay opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(16,185,129,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(245,158,11,0.05)_0%,transparent_50%)]" />

      {/* Decorative corner brackets */}
      <div className="absolute top-24 left-8 w-12 h-12 border-t-2 border-l-2 border-[#10b981]/30" />
      <div className="absolute top-24 right-8 w-12 h-12 border-t-2 border-r-2 border-[#10b981]/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#10b981]/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#10b981]/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#10b981]/30 bg-[#10b981]/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="font-mono text-xs text-[#10b981] tracking-widest uppercase">
              Available for Senior SDET Roles
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
            <span className="block text-slate-100">Alex Morgan</span>
            <span className="block mt-2">
              <span className="text-[#10b981] glow-green-text">Lead Automation</span>
              <span className="text-slate-400"> &amp; </span>
              <span className="text-slate-100">Quality Engineer</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-4 leading-relaxed">
            Specializing in high-scale E2E frameworks, CI/CD reliability, and performance gatekeeping.
          </p>
          <p className="max-w-xl mx-auto font-mono text-sm text-slate-500 mb-10">
            <span className="text-[#10b981]">$</span> Building systems that catch bugs before they catch you.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className={"flex items-center gap-2 px-4 py-2 rounded border bg-[#1e293b]/60 " + badge.border}
              >
                <badge.icon className={"w-4 h-4 " + badge.color} />
                <span className="font-mono text-xs text-slate-300">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#10b981] text-[#0f0f1a] font-mono font-bold rounded hover:bg-[#34d399] transition-all duration-200 glow-green group"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pipeline"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#334155] text-slate-300 font-mono font-semibold rounded hover:border-[#10b981]/50 hover:text-[#10b981] transition-all duration-200"
            >
              <Terminal className="w-4 h-4" />
              <span>See the Pipeline</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-lg border border-[#1e293b] bg-[#1e293b]/40 text-center"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#10b981] glow-green-text mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-[#10b981] transition-colors font-mono text-sm"
            >
              <Github className="w-4 h-4" />
              <span>github.com/alexmorgan</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-[#10b981] transition-colors font-mono text-sm"
            >
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/alexmorgan</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f1a] to-transparent" />
    </section>
  );
}
