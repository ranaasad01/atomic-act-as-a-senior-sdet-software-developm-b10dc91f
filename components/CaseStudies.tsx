import React from "react";
import { ArrowRight, Shield, Gauge, Terminal, Check } from 'lucide-react';

interface CaseStudy {
  id: string;
  metric: string;
  metricLabel: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  tags: string[];
  icon: React.ElementType;
  accentColor: string;
  borderColor: string;
  bgColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "parallel-execution",
    metric: "70%",
    metricLabel: "Regression Time Reduction",
    title: "Parallel Execution at Scale",
    description:
      "Redesigned a monolithic 4-hour regression suite into a parallelized, sharded Playwright framework running across 16 workers in GitHub Actions.",
    challenge:
      "Legacy sequential test suite blocked deployments for 4+ hours. Dev teams were bypassing QA gates to hit release deadlines.",
    solution:
      "Implemented Playwright sharding with dynamic worker allocation, test isolation via fixture factories, and a custom retry-on-flake mechanism with telemetry.",
    outcomes: [
      "Regression runtime: 4h 12m → 1h 16m",
      "Flaky test rate reduced from 18% to 0.4%",
      "Unblocked 3x daily deployment cadence",
      "Zero production regressions post-rollout",
    ],
    tags: ["Playwright", "GitHub Actions", "Sharding", "TypeScript", "Parallelization"],
    icon: Gauge,
    accentColor: "text-[#10b981]",
    borderColor: "border-[#10b981]/20",
    bgColor: "bg-[#10b981]/5",
  },
  {
    id: "shift-left-security",
    metric: "100%",
    metricLabel: "Security Coverage in CI",
    title: "Shift-Left Security in GitLab CI",
    description:
      "Embedded SAST, DAST, dependency scanning, and container vulnerability checks directly into the GitLab CI pipeline as mandatory quality gates.",
    challenge:
      "Security reviews were a post-release bottleneck. Critical CVEs were discovered in production, causing emergency patches and SLA breaches.",
    solution:
      "Integrated OWASP ZAP for DAST, Trivy for container scanning, Semgrep for SAST, and Snyk for dependency auditing — all as blocking pipeline stages with Slack alerting.",
    outcomes: [
      "Critical CVEs caught pre-merge: 23 in first quarter",
      "Mean time to remediation: 14 days → 2 days",
      "Achieved SOC 2 Type II compliance readiness",
      "Zero security incidents post-implementation",
    ],
    tags: ["GitLab CI", "OWASP ZAP", "Trivy", "Semgrep", "DevSecOps", "SAST/DAST"],
    icon: Shield,
    accentColor: "text-[#f59e0b]",
    borderColor: "border-[#f59e0b]/20",
    bgColor: "bg-[#f59e0b]/5",
  },
  {
    id: "data-driven-framework",
    metric: "5x",
    metricLabel: "Test Coverage Multiplier",
    title: "Data-Driven Framework for Legacy Systems",
    description:
      "Built a custom data-driven test framework on top of a 15-year-old COBOL-backed system with no existing API layer, using screen-scraping and contract mocking.",
    challenge:
      "Legacy mainframe system had zero automated test coverage. Manual regression took 3 weeks per release cycle with a 12-person QA team.",
    solution:
      "Engineered a Python-based data-driven framework with CSV/Excel test data injection, Selenium for UI layer, custom API stubs via WireMock, and Allure for reporting.",
    outcomes: [
      "Test coverage: 0% → 78% in 6 months",
      "Manual regression team: 12 → 3 engineers",
      "Release cycle: 3 weeks → 4 days",
      "Defect escape rate reduced by 91%",
    ],
    tags: ["Python", "Selenium", "WireMock", "Allure", "Data-Driven", "Legacy Systems"],
    icon: Terminal,
    accentColor: "text-[#10b981]",
    borderColor: "border-[#10b981]/20",
    bgColor: "bg-[#10b981]/5",
  },
];

export default function CaseStudies() {
  return (
    <section id="projects" className="py-24 bg-[#0f0f1a] relative">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#f59e0b]/30 bg-[#f59e0b]/5 mb-4">
            <span className="font-mono text-xs text-[#f59e0b] tracking-widest uppercase">Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100 mb-4">
            Engineering Impact
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Quality engineering measured in outcomes — not test counts. Every project delivered measurable reliability gains.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className={"group rounded-xl border bg-[#1e293b]/30 p-6 flex flex-col card-hover-green " + study.borderColor}
            >
              {/* Metric callout */}
              <div className={"inline-flex items-baseline gap-2 px-4 py-3 rounded-lg border mb-5 " + study.borderColor + " " + study.bgColor}>
                <span className={"text-4xl font-black " + study.accentColor + " glow-green-text"}>
                  {study.metric}
                </span>
                <span className="font-mono text-xs text-slate-400">{study.metricLabel}</span>
              </div>

              {/* Icon + Title */}
              <div className="flex items-start gap-3 mb-3">
                <div className={"p-2 rounded-lg border " + study.borderColor + " " + study.bgColor}>
                  <study.icon className={"w-5 h-5 " + study.accentColor} />
                </div>
                <h3 className="text-lg font-bold text-slate-100 leading-tight">{study.title}</h3>
              </div>

              <p className="text-slate-400 text-sm mb-5 leading-relaxed">{study.description}</p>

              {/* Challenge / Solution */}
              <div className="space-y-3 mb-5">
                <div>
                  <span className="font-mono text-xs text-slate-600 uppercase tracking-wider">Challenge</span>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-slate-600 uppercase tracking-wider">Solution</span>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">{study.solution}</p>
                </div>
              </div>

              {/* Outcomes */}
              <div className="mb-5 flex-1">
                <span className="font-mono text-xs text-slate-600 uppercase tracking-wider">Outcomes</span>
                <ul className="mt-2 space-y-1.5">
                  {study.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <Check className={"w-3.5 h-3.5 mt-0.5 flex-shrink-0 " + study.accentColor} />
                      <span className="text-xs text-slate-400">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded border border-[#334155] text-slate-500 bg-[#0f0f1a]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-px rounded-xl bg-gradient-to-r from-[#10b981]/30 via-[#f59e0b]/30 to-[#10b981]/30">
            <div className="bg-[#1e293b] rounded-xl px-8 py-6">
              <p className="font-mono text-sm text-slate-400 mb-2">
                <span className="text-[#10b981]">$</span> Want to see the full technical breakdown?
              </p>
              <a
                href="mailto:alex.morgan@example.com"
                className="inline-flex items-center gap-2 text-slate-200 font-semibold hover:text-[#10b981] transition-colors group"
              >
                <span>Request detailed case study documentation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
