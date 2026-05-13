"use client";

import { useState, useEffect } from "react";
import { Check, Circle, Loader, AlertCircle } from 'lucide-react';

type StepStatus = "waiting" | "running" | "passed" | "failed";

interface PipelineStep {
  id: number;
  label: string;
  sublabel: string;
  duration: number;
  tests?: string;
}

const STEPS: PipelineStep[] = [
  { id: 0, label: "Build", sublabel: "Compile & Bundle", duration: 1800, tests: "TypeScript check" },
  { id: 1, label: "Unit Tests", sublabel: "Jest / Vitest", duration: 2200, tests: "847 tests" },
  { id: 2, label: "Contract Tests", sublabel: "Pact / OpenAPI", duration: 1600, tests: "34 contracts" },
  { id: 3, label: "E2E Suite", sublabel: "Playwright / Cypress", duration: 3000, tests: "142 scenarios" },
  { id: 4, label: "Performance Gate", sublabel: "k6 / Artillery", duration: 2400, tests: "p95 < 200ms" },
];

export default function PipelineStepper() {
  const [statuses, setStatuses] = useState<StepStatus[]>(
    STEPS.map(() => "waiting")
  );
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(false);

  const runPipeline = () => {
    setStatuses(STEPS.map(() => "waiting"));
    setActiveStep(-1);
    setCompleted(false);
    setRunning(true);
  };

  useEffect(() => {
    if (!running) return;

    let currentStep = 0;

    const runStep = (stepIndex: number) => {
      if (stepIndex >= STEPS.length) {
        setRunning(false);
        setCompleted(true);
        setActiveStep(-1);
        return;
      }

      setActiveStep(stepIndex);
      setStatuses((prev) => {
        const next = [...prev];
        next[stepIndex] = "running";
        return next;
      });

      setTimeout(() => {
        setStatuses((prev) => {
          const next = [...prev];
          next[stepIndex] = "passed";
          return next;
        });
        currentStep = stepIndex + 1;
        setTimeout(() => runStep(currentStep), 400);
      }, STEPS[stepIndex].duration);
    };

    runStep(0);
  }, [running]);

  const getStepColor = (status: StepStatus, isActive: boolean) => {
    if (status === "passed") return "border-[#10b981] bg-[#10b981]/10 text-[#10b981]";
    if (status === "running") return "border-[#f59e0b] bg-[#f59e0b]/10 text-[#f59e0b]";
    if (status === "failed") return "border-red-500 bg-red-500/10 text-red-400";
    return "border-[#334155] bg-[#1e293b]/40 text-slate-500";
  };

  const getConnectorColor = (stepIndex: number) => {
    if (statuses[stepIndex] === "passed" && statuses[stepIndex + 1] !== "waiting") {
      return "bg-[#10b981]";
    }
    if (statuses[stepIndex] === "passed") return "bg-[#10b981]";
    return "bg-[#334155]";
  };

  return (
    <section id="pipeline" className="py-24 bg-[#0a0a14] relative">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#f59e0b]/30 bg-[#f59e0b]/5 mb-4">
            <span className="font-mono text-xs text-[#f59e0b] tracking-widest uppercase">CI/CD Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100 mb-4">
            Automated Quality Gates
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Every commit triggers a multi-stage validation pipeline. Zero manual intervention. Zero surprises in production.
          </p>
        </div>

        {/* Pipeline visual */}
        <div className="bg-[#1e293b]/40 border border-[#334155] rounded-xl p-6 sm:p-8 mb-8">
          {/* Terminal header bar */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#334155]">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]/70" />
            <div className="w-3 h-3 rounded-full bg-[#10b981]/70" />
            <span className="ml-3 font-mono text-xs text-slate-500">pipeline.yml — GitHub Actions</span>
            {running && (
              <span className="ml-auto font-mono text-xs text-[#f59e0b] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
                RUNNING
              </span>
            )}
            {completed && (
              <span className="ml-auto font-mono text-xs text-[#10b981] flex items-center gap-1">
                <Check className="w-3 h-3" />
                ALL GATES PASSED
              </span>
            )}
          </div>

          {/* Steps — horizontal on desktop, vertical on mobile */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-0">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex flex-col md:flex-row items-start md:items-center flex-1 min-w-0">
                {/* Step card */}
                <div
                  className={
                    "relative flex-shrink-0 w-full md:w-auto rounded-lg border-2 p-4 transition-all duration-500 " +
                    getStepColor(statuses[index], activeStep === index)
                  }
                  style={{
                    boxShadow:
                      statuses[index] === "running"
                        ? "0 0 20px rgba(245,158,11,0.25)"
                        : statuses[index] === "passed"
                        ? "0 0 16px rgba(16,185,129,0.2)"
                        : "none",
                  }}
                >
                  <div className="flex items-center gap-3 md:flex-col md:items-center md:gap-2 md:text-center">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      {statuses[index] === "passed" && (
                        <Check className="w-5 h-5 text-[#10b981]" />
                      )}
                      {statuses[index] === "running" && (
                        <Loader className="w-5 h-5 text-[#f59e0b] animate-spin" />
                      )}
                      {statuses[index] === "waiting" && (
                        <Circle className="w-5 h-5 text-slate-600" />
                      )}
                      {statuses[index] === "failed" && (
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                    {/* Labels */}
                    <div>
                      <div className="font-mono text-sm font-bold whitespace-nowrap">{step.label}</div>
                      <div className="font-mono text-xs text-slate-500 whitespace-nowrap">{step.sublabel}</div>
                      {step.tests && (
                        <div className="font-mono text-xs mt-1 whitespace-nowrap">
                          {statuses[index] === "passed" ? (
                            <span className="text-[#10b981]">{step.tests}</span>
                          ) : (
                            <span className="text-slate-600">{step.tests}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {index < STEPS.length - 1 && (
                  <div className="flex md:flex-row flex-col items-center md:flex-1 md:mx-1 my-1 md:my-0">
                    {/* Mobile: vertical line */}
                    <div className="md:hidden w-px h-6 bg-[#334155] ml-6" />
                    {/* Desktop: horizontal line */}
                    <div className="hidden md:flex items-center w-full">
                      <div className="relative h-px flex-1 bg-[#334155] overflow-hidden">
                        <div
                          className={"absolute inset-y-0 left-0 transition-all duration-700 " + getConnectorColor(index)}
                          style={{ width: statuses[index] === "passed" ? "100%" : "0%" }}
                        />
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#334155] flex-shrink-0" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Run button */}
        <div className="text-center">
          <button
            onClick={runPipeline}
            disabled={running}
            className={
              "inline-flex items-center gap-3 px-8 py-4 font-mono font-bold rounded-lg border-2 transition-all duration-200 " +
              (running
                ? "border-[#f59e0b]/50 text-[#f59e0b] bg-[#f59e0b]/5 cursor-not-allowed"
                : "border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-[#0f0f1a] glow-green")
            }
          >
            {running ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                <span>Pipeline Running...</span>
              </>
            ) : (
              <>
                <span className="text-lg">▶</span>
                <span>{completed ? "$ re-run pipeline" : "$ run pipeline"}</span>
              </>
            )}
          </button>
          <p className="mt-3 font-mono text-xs text-slate-600">
            Click to simulate a full CI/CD pipeline execution
          </p>
        </div>
      </div>
    </section>
  );
}
