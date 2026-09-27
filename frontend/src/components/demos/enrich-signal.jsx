// enrich-signal.jsx — Enrichment page visual
// "Watch an account get enriched" — layers light up one by one, fit score climbs.
// Mounts into #enrich-signal-mount. Interactive (Run button) + auto-runs once on view.

import React, { useState, useEffect, useRef } from "react";

function useRunOnViewES(ref, run) {
  const fired = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !fired.current) {
            fired.current = true;
            run();
          }
        });
      },
      { threshold: 0.35 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
}

const ESG_ACCOUNT = {
  name: "Helix Logistics",
  domain: "helixlogistics.io",
  meta: "Freight & Logistics · San Francisco",
};

const ESG_LAYERS = [
  {
    key: "tech",
    tag: "TECH",
    label: "Tech stack",
    value: "Salesforce · Snowflake · 6sense",
    color: "var(--cobalt)",
  },
  {
    key: "intent",
    tag: "INTENT",
    label: "Buying intent",
    value: "Active · TMS evaluation",
    color: "#d4a82c",
  },
  {
    key: "behavior",
    tag: "BEHAVIOR",
    label: "Engagement",
    value: "14-day surge · +320%",
    color: "#d4a82c",
  },
  {
    key: "firmo",
    tag: "FIRMO",
    label: "Firmographics",
    value: "410 staff · $80M–$120M",
    color: "var(--cobalt)",
  },
  {
    key: "segment",
    tag: "SEGMENT",
    label: "Segment",
    value: "Mid-market · Logistics ICP",
    color: "var(--cobalt)",
  },
  {
    key: "persona",
    tag: "PERSONA",
    label: "Buyer persona",
    value: "Economic buyer · RevOps",
    color: "#d4a82c",
  },
  {
    key: "score",
    tag: "SCORE",
    label: "Lead score",
    value: "92 / 100 · A-tier",
    color: "#d4a82c",
  },
  {
    key: "market",
    tag: "MARKET",
    label: "Market signal",
    value: "Series C · hiring +18%",
    color: "var(--cobalt)",
  },
];

const ESG_BASE_SCORE = 38;
const ESG_FINAL_SCORE = 92;

function EnrichSignalDemo() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  function start() {
    clearTimeout(timerRef.current);
    setStep(0);
    setRunning(true);
    let i = 0;
    function next() {
      i += 1;
      setStep(i);
      if (i < ESG_LAYERS.length) timerRef.current = setTimeout(next, 300);
      else setRunning(false);
    }
    timerRef.current = setTimeout(next, 380);
  }
  function reset() {
    clearTimeout(timerRef.current);
    setStep(0);
    setRunning(false);
  }

  useRunOnViewES(rootRef, start);

  const filled = step;
  const frac = filled / ESG_LAYERS.length;
  const score = Math.round(
    ESG_BASE_SCORE + (ESG_FINAL_SCORE - ESG_BASE_SCORE) * frac,
  );
  const intent = filled >= 2 ? "Active" : "—";
  const stage =
    filled === 0
      ? "Cold"
      : filled < 4
        ? "Aware"
        : filled < 7
          ? "Evaluating"
          : "In-market";
  const grade = score >= 85 ? "A" : score >= 70 ? "B" : score >= 55 ? "C" : "D";

  // ring geometry
  const R = 52,
    C = 2 * Math.PI * R;
  const dash = C * (score / 100);

  return (
    <div className="esg-wrap" ref={rootRef}>
      <div className="esg-head">
        <div>
          <div className="esg-eyebrow">Live demo · Account intelligence</div>
          <div className="esg-title">
            Watch an account get <em>enriched</em>.
          </div>
        </div>
        <div className="esg-controls">
          <button
            className="esg-btn esg-btn-primary"
            onClick={start}
            disabled={running}
          >
            {step === 0
              ? "▶ Run enrichment"
              : running
                ? "Enriching…"
                : "▶ Run again"}
          </button>
          <button
            className="esg-btn esg-btn-ghost"
            onClick={reset}
            disabled={step === 0 || running}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="esg-grid">
        {/* Signal stack */}
        <div className="esg-card">
          <div className="esg-card-head">
            <div className="esg-avatar">HL</div>
            <div>
              <div className="esg-name">{ESG_ACCOUNT.name}</div>
              <div className="esg-sub">
                {ESG_ACCOUNT.domain} · {ESG_ACCOUNT.meta}
              </div>
            </div>
            <div className="esg-status">
              <span className="esg-status-dot" data-running={running} />
              <span>
                {running
                  ? "Enriching"
                  : filled === ESG_LAYERS.length
                    ? "Complete"
                    : "Ready"}
              </span>
            </div>
          </div>

          <div className="esg-layers">
            {ESG_LAYERS.map((l, i) => {
              const on = i < filled;
              const just = i === filled - 1 && running;
              return (
                <div
                  key={l.key}
                  className={`esg-layer ${on ? "on" : ""} ${just ? "just" : ""}`}
                >
                  <span
                    className="esg-layer-tag"
                    style={{ color: l.color, borderColor: l.color + "40" }}
                  >
                    {l.tag}
                  </span>
                  <span className="esg-layer-label">{l.label}</span>
                  <span className="esg-layer-value">
                    {on ? l.value : "awaiting signal…"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Score + status */}
        <div className="esg-side">
          <div className="esg-score-card">
            <div className="esg-stat-head">Account fit score</div>
            <div className="esg-ring-wrap">
              <svg viewBox="0 0 120 120" className="esg-ring">
                <circle cx="60" cy="60" r={R} className="esg-ring-bg" />
                <circle
                  cx="60"
                  cy="60"
                  r={R}
                  className="esg-ring-fg"
                  style={{ strokeDasharray: C, strokeDashoffset: C - dash }}
                />
              </svg>
              <div className="esg-ring-center">
                <div className="esg-score-num mono">{score}</div>
                <div className="esg-score-grade">grade {grade}</div>
              </div>
            </div>
            <div className="esg-score-foot">
              <span>from {ESG_BASE_SCORE}</span>
              <span className="esg-score-delta">
                +{score - ESG_BASE_SCORE} pts
              </span>
            </div>
          </div>

          <div className="esg-badges">
            <div className="esg-badge">
              <div className="esg-badge-lbl">Intent</div>
              <div
                className={`esg-badge-val ${intent === "Active" ? "hot" : ""}`}
              >
                {intent}
              </div>
            </div>
            <div className="esg-badge">
              <div className="esg-badge-lbl">Buying stage</div>
              <div className="esg-badge-val">{stage}</div>
            </div>
            <div className="esg-badge">
              <div className="esg-badge-lbl">Signals</div>
              <div className="esg-badge-val mono">
                {filled}/{ESG_LAYERS.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrichSignalDemo;
