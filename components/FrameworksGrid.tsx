import React from "react";
import { Shield, Gauge, Terminal, Activity } from 'lucide-react';

interface Tool {
  name: string;
  level: number;
  tag?: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  bgColor: string;
  description: string;
  tools: Tool[];
}

const categories: Category[] = [
  {
    id: "web",
    label: "Web E2E Testing",
    icon: Shield,
    color: "text-[#10b981]",
    borderColor: "border-[#10b981]/30",
    bgColor: "bg-[#10b981]/5",
    description: "Browser automation & end-to-end validation",
    tools: [
      { name: "Playwright", level: 95, tag: "Primary" },
      { name: "Cypress", level: 90, tag: "E2E" },
      { name: "Selenium", level: 85, tag: "Legacy" },
      { name: "WebdriverIO", level: 75 },
    ],
  },
  {
    id: "api",
    label: "API & Contract Testing",
    icon: Terminal,
    color: "text-[#f59e0b]",
    borderColor: "border-[#f59e0b]/30",
    bgColor: "bg-[#f59e0b]/5",
    description: "Service reliability & contract validation",
    tools: [
      { name: "RestAssured", level: 90, tag: "Java" },
      { name: "Supertest", level: 88, tag: "Node" },
      { name: "Postman/Newman", level: 92, tag: "CI" },
      { name: "Pact", level: 80, tag: "Contract" },
    ],
  },
  {
    id: "performance",
    label: "Performance & Load",
    icon: Gauge,
    color: "text-[#10b981]",
    borderColor: "border-[#10b981]/30",
    bgColor: "bg-[#10b981]/5",
    description: "Scalability validation & SLA gatekeeping",
    tools: [
      { name: "k6", level: 93, tag: "Primary" },
      { name: "JMeter", level: 85, tag: "Load" },
      { name: "Artillery", level: 82, tag: "Stress" },
      { name: "Gatling", level: 70 },
    ],
  },
  {
    id: "infra",
    label: "Infrastructure & CI/CD",
    icon: Activity,
    color: "text-[#f59e0b]",
    borderColor: "border-[#f59e0b]/30",
    bgColor: "bg-[#f59e0b]/5",
    description: "Pipeline orchestration & test infrastructure",
    tools: [
      { name: "GitHub Actions", level: 95, tag: "Primary" },
      { name: "Docker", level: 90, tag: "Containers" },
      { name: "Jenkins", level: 85, tag: "CI" },
      { name: "GitLab CI", level: 88, tag: "DevSecOps" },
    ],
  },
];

function SkillBar({ level, color }: { level: number; color: string }) {
  return (
    <div className="w-full h-1 bg-[#334155] rounded-full overflow-hidden">
      <div
        className={"h-full rounded-full transition-all duration-1000 " + (color.includes("10b981") ? "bg-[#10b981]" : "bg-[#f59e0b]")}
        style={{ width: level + "%" }}
      />
    </div>
  );
}

export default function FrameworksGrid() {
  return (
    <section id="frameworks" className="py-24 bg-[#0f0f1a] relative">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#10b981]/30 bg-[#10b981]/5 mb-4">
            <span className="font-mono text-xs text-[#10b981] tracking-widest uppercase">Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100 mb-4">
            Frameworks &amp; Toolchain
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A battle-tested stack covering every layer of the quality pyramid — from unit contracts to production load gates.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={"rounded-xl border bg-[#1e293b]/40 p-6 card-hover-green " + cat.borderColor}
            >
              {/* Category header */}
              <div className={"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border mb-4 " + cat.borderColor + " " + cat.bgColor}>
                <cat.icon className={"w-4 h-4 " + cat.color} />
                <span className={"font-mono text-xs font-semibold " + cat.color}>{cat.label}</span>
              </div>
              <p className="text-slate-500 text-xs mb-5 font-mono">{cat.description}</p>

              {/* Tools list */}
              <div className="space-y-4">
                {cat.tools.map((tool) => (
                  <div key={tool.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm text-slate-200 font-medium">{tool.name}</span>
                        {tool.tag && (
                          <span
                            className={
                              "font-mono text-xs px-1.5 py-0.5 rounded border " +
                              (cat.color.includes("10b981")
                                ? "border-[#10b981]/30 text-[#10b981] bg-[#10b981]/5"
                                : "border-[#f59e0b]/30 text-[#f59e0b] bg-[#f59e0b]/5")
                            }
                          >
                            {tool.tag}
                          </span>
                        )}
                      </div>
                      <span className={"font-mono text-xs " + cat.color}>{tool.level}%</span>
                    </div>
                    <SkillBar level={tool.level} color={cat.color} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tool badges */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-slate-600 mb-4 uppercase tracking-widest">Also proficient in</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "TypeScript", "Python", "Java", "Node.js", "AWS", "Kubernetes",
              "Allure Reports", "Grafana", "InfluxDB", "SonarQube", "OWASP ZAP", "Trivy",
            ].map((tool) => (
              <span
                key={tool}
                className="font-mono text-xs px-3 py-1.5 rounded border border-[#334155] text-slate-500 bg-[#1e293b]/30 hover:border-[#10b981]/30 hover:text-slate-300 transition-all duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
