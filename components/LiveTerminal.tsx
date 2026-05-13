"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal, Play, RotateCcw } from 'lucide-react';

interface TerminalLine {
  id: number;
  text: string;
  type: "command" | "info" | "pass" | "fail" | "summary" | "blank" | "header";
  delay?: number;
}

const SCRIPT: TerminalLine[] = [
  { id: 0, type: "command", text: "$ npx playwright test smoke-test-suite.spec.ts --reporter=list" },
  { id: 1, type: "blank", text: "" },
  { id: 2, type: "info", text: "Running 18 tests using 4 workers" },
  { id: 3, type: "blank", text: "" },
  { id: 4, type: "header", text: "  smoke-test-suite.spec.ts" },
  { id: 5, type: "pass", text: "  ✓  [chromium] › Authentication Flow › login with valid credentials (452ms)" },
  { id: 6, type: "pass", text: "  ✓  [chromium] › Authentication Flow › logout clears session (218ms)" },
  { id: 7, type: "pass", text: "  ✓  [chromium] › Authentication Flow › MFA token validation (634ms)" },
  { id: 8, type: "pass", text: "  ✓  [chromium] › Payment Gateway Mock › card tokenization (890ms)" },
  { id: 9, type: "pass", text: "  ✓  [chromium] › Payment Gateway Mock › 3DS challenge flow (1.2s)" },
  { id: 10, type: "pass", text: "  ✓  [chromium] › Payment Gateway Mock › refund processing (445ms)" },
  { id: 11, type: "pass", text: "  ✓  [firefox]  › User Dashboard › data loads within SLA (312ms)" },
  { id: 12, type: "pass", text: "  ✓  [firefox]  › User Dashboard › pagination renders correctly (198ms)" },
  { id: 13, type: "pass", text: "  ✓  [webkit]   › Search & Filter › full-text search returns results (567ms)" },
  { id: 14, type: "pass", text: "  ✓  [webkit]   › Search & Filter › filter combination logic (423ms)" },
  { id: 15, type: "pass", text: "  ✓  [chromium] › API Contract › POST /orders matches schema (89ms)" },
  { id: 16, type: "pass", text: "  ✓  [chromium] › API Contract › GET /users/:id returns 200 (67ms)" },
  { id: 17, type: "pass", text: "  ✓  [chromium] › API Contract › DELETE /sessions invalidates token (112ms)" },
  { id: 18, type: "pass", text: "  ✓  [firefox]  › Notifications › email trigger on order complete (334ms)" },
  { id: 19, type: "pass", text: "  ✓  [webkit]   › Notifications › push notification payload (289ms)" },
  { id: 20, type: "pass", text: "  ✓  [chromium] › Security › XSS injection blocked (156ms)" },
  { id: 21, type: "pass", text: "  ✓  [chromium] › Security › CSRF token validated (203ms)" },
  { id: 22, type: "pass", text: "  ✓  [chromium] › Security › rate limiting enforced (445ms)" },
  { id: 23, type: "blank", text: "" },
  { id: 24, type: "summary", text: "  Summary: 18 passed, 0 failed, 0 skipped" },
  { id: 25, type: "summary", text: "  Duration: 8.4s (parallelized across 4 workers)" },
  { id: 26, type: "blank", text: "" },
  { id: 27, type: "command", text: "$ k6 run --vus 50 --duration 30s performance/load-test.js" },
  { id: 28, type: "blank", text: "" },
  { id: 29, type: "info", text: "          /\\      |‾‾| /‾‾/   /‾‾/" },
  { id: 30, type: "info", text: "     /\\  /  \\     |  |/  /   /  /  " },
  { id: 31, type: "info", text: "    /  \\/    \\    |     (   /   ‾‾\\" },
  { id: 32, type: "info", text: "   /          \\   |  |\\  \\ |  (‾)  |" },
  { id: 33, type: "info", text: "  / __________ \\  |__| \\__\\ \\_____/ .io" },
  { id: 34, type: "blank", text: "" },
  { id: 35, type: "pass", text: "  ✓ http_req_duration............: avg=87ms  p(95)=142ms  p(99)=198ms" },
  { id: 36, type: "pass", text: "  ✓ http_req_failed..............: 0.00%  ✓ 0  ✗ 0" },
  { id: 37, type: "pass", text: "  ✓ http_reqs....................: 14820  494.0/s" },
  { id: 38, type: "pass", text: "  ✓ vus..........................: 50     min=50  max=50" },
  { id: 39, type: "blank", text: "" },
  { id: 40, type: "summary", text: "  PERFORMANCE GATE: PASSED ✓  p95=142ms < threshold 200ms" },
];

const LINE_DELAY_MS = 120;

function getLineClass(type: TerminalLine["type"]): string {
  switch (type) {
    case "command": return "text-[#f59e0b] font-semibold";
    case "pass": return "text-[#10b981]";
    case "fail": return "text-red-400";
    case "summary": return "text-[#f59e0b] font-semibold";
    case "header": return "text-slate-300 font-semibold";
    case "info": return "text-slate-400";
    default: return "text-slate-600";
  }
}

export default function LiveTerminal() {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startExecution = () => {
    setVisibleLines([]);
    setLineIndex(0);
    setIsDone(false);
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setLineIndex((prev) => {
        if (prev >= SCRIPT.length) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          setIsDone(true);
          return prev;
        }
        setVisibleLines((lines) => [...lines, SCRIPT[prev]]);
        return prev + 1;
      });
    }, LINE_DELAY_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <section id="terminal" className="py-24 bg-[#0a0a14] relative">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#10b981]/30 bg-[#10b981]/5 mb-4">
            <Terminal className="w-3 h-3 text-[#10b981]" />
            <span className="font-mono text-xs text-[#10b981] tracking-widest uppercase">Live Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100 mb-4">
            Test Suite in Action
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Real output from a Playwright E2E suite followed by a k6 performance gate. Every line is a quality signal.
          </p>
        </div>

        {/* Terminal window */}
        <div className="rounded-xl border border-[#334155] overflow-hidden shadow-2xl" style={{ boxShadow: "0 0 40px rgba(16,185,129,0.1), 0 20px 60px rgba(0,0,0,0.5)" }}>
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#1e293b] border-b border-[#334155]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]/80" />
              <div className="w-3 h-3 rounded-full bg-[#10b981]/80" />
              <span className="ml-3 font-mono text-xs text-slate-500">
                alex@ci-runner: ~/project
              </span>
            </div>
            <div className="flex items-center gap-3">
              {isRunning && (
                <span className="flex items-center gap-1.5 font-mono text-xs text-[#f59e0b]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
                  EXECUTING
                </span>
              )}
              {isDone && (
                <span className="flex items-center gap-1.5 font-mono text-xs text-[#10b981]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                  COMPLETE
                </span>
              )}
            </div>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="bg-[#080810] p-5 h-80 sm:h-96 overflow-y-auto terminal-scroll font-mono text-xs sm:text-sm leading-relaxed"
          >
            {visibleLines.length === 0 && !isRunning && (
              <div className="flex items-center gap-2 text-slate-600">
                <span className="text-[#10b981]">$</span>
                <span>Click &quot;Run Test Suite&quot; to execute</span>
                <span className="cursor-blink text-[#10b981]">█</span>
              </div>
            )}
            {visibleLines.map((line) => (
              <div key={line.id} className={"whitespace-pre-wrap break-all " + getLineClass(line.type)}>
                {line.text || "\u00A0"}
              </div>
            ))}
            {isRunning && (
              <div className="flex items-center gap-1 text-[#10b981] mt-1">
                <span className="cursor-blink">█</span>
              </div>
            )}
            {isDone && (
              <div className="flex items-center gap-2 text-[#10b981] mt-2">
                <span>$</span>
                <span className="cursor-blink">█</span>
              </div>
            )}
          </div>

          {/* Footer bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#1e293b]/80 border-t border-[#334155]">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-slate-600">
                Lines: {visibleLines.length}/{SCRIPT.length}
              </span>
              {isDone && (
                <span className="font-mono text-xs text-[#10b981]">
                  Exit code: 0
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {isDone && (
                <button
                  onClick={startExecution}
                  className="flex items-center gap-1.5 px-3 py-1 font-mono text-xs text-slate-400 border border-[#334155] rounded hover:border-[#10b981]/50 hover:text-[#10b981] transition-all duration-200"
                >
                  <RotateCcw className="w-3 h-3" />
                  Re-run
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Run button */}
        {!isRunning && !isDone && (
          <div className="text-center mt-8">
            <button
              onClick={startExecution}
              className="inline-flex items-center gap-3 px-8 py-4 font-mono font-bold text-[#0f0f1a] bg-[#10b981] rounded-lg hover:bg-[#34d399] transition-all duration-200 glow-green"
            >
              <Play className="w-4 h-4" />
              <span>$ run test-suite</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
