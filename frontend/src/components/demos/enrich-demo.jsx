// enrich-demo.jsx — Live record enrichment demo widget
// Mounts into #enrich-demo-mount.

import React, { useState, useEffect, useRef } from "react";

const SAMPLE_RECORD = {
  name: "Morgan Reyes",
  company: "Helix Logistics",
  domain: "helixlogistics.io",
};

// Fields that start empty and get enriched
const ENRICH_PLAN = [
  {
    key: "email",
    label: "Email",
    value: "m.reyes@helixlogistics.io",
    kind: "append",
    source: "verified · catch-all guarded",
  },
  {
    key: "phone",
    label: "Direct dial",
    value: "+1 (415) 555 · 0428",
    kind: "append",
    source: "verified · do-not-call clean",
  },
  {
    key: "title",
    label: "Job title",
    value: "VP, Revenue Operations",
    kind: "append",
    source: "LinkedIn · refreshed 4d ago",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/mreyes-ops",
    kind: "append",
    source: "profile match · 0.97",
  },
  {
    key: "employees",
    label: "Employees",
    value: "410",
    kind: "firmo",
    source: "firmographic",
  },
  {
    key: "revenue",
    label: "Revenue band",
    value: "$80M – $120M",
    kind: "firmo",
    source: "firmographic",
  },
  {
    key: "industry",
    label: "Industry",
    value: "Freight & Logistics",
    kind: "firmo",
    source: "firmographic",
  },
  {
    key: "tech",
    label: "Tech stack",
    value: "Salesforce · Snowflake · 6Sense",
    kind: "enrich",
    source: "technographic",
  },
  {
    key: "intent",
    label: "Buying intent",
    value: "Active · TMS evaluation",
    kind: "enrich",
    source: "intent · 14-day surge",
  },
  {
    key: "score",
    label: "Fit score",
    value: "92 / 100",
    kind: "enrich",
    source: "predictive scoring",
  },
];

const KIND_STYLE = {
  append: { color: "var(--hot)", label: "APPEND" },
  firmo: { color: "var(--cobalt)", label: "FIRMO" },
  enrich: { color: "#7a52d6", label: "ENRICH" },
};

function EnrichDemo() {
  const [step, setStep] = useState(0); // 0 = idle empty, 1..N = filled count
  const [running, setRunning] = useState(false);
  const [hover, setHover] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  function start() {
    if (running) return;
    setStep(0);
    setRunning(true);
    let i = 0;
    function next() {
      i += 1;
      setStep(i);
      if (i < ENRICH_PLAN.length) {
        timerRef.current = setTimeout(next, 260);
      } else {
        setRunning(false);
      }
    }
    timerRef.current = setTimeout(next, 350);
  }
  function reset() {
    clearTimeout(timerRef.current);
    setStep(0);
    setRunning(false);
  }

  // Stats derived from progress
  const filledCount = step;
  const totalFields = ENRICH_PLAN.length + 3; // existing 3 base fields counted in completeness
  const completeness = Math.round(((filledCount + 3) / totalFields) * 100);
  const reachability = Math.min(
    100,
    Math.round(45 + (filledCount / ENRICH_PLAN.length) * 53),
  );
  const accuracy = filledCount > 0 ? 98 : 0;

  return (
    <div className="ed-wrap" id="demo">
      <div className="ed-head">
        <div>
          <div className="ed-eyebrow">Live demo · Real schema</div>
          <div className="ed-title">Watch a record get appended.</div>
        </div>
        <div className="ed-controls">
          <button
            className="ed-btn ed-btn-primary"
            onClick={start}
            disabled={running}
          >
            {step === 0
              ? "▶ Run append"
              : running
                ? "Appending…"
                : "▶ Run again"}
          </button>
          <button
            className="ed-btn ed-btn-ghost"
            onClick={reset}
            disabled={step === 0}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="ed-grid">
        {/* Record card */}
        <div className="ed-card">
          <div className="ed-card-head">
            <div className="ed-avatar">MR</div>
            <div>
              <div className="ed-name">{SAMPLE_RECORD.name}</div>
              <div className="ed-sub">
                {SAMPLE_RECORD.company} · {SAMPLE_RECORD.domain}
              </div>
            </div>
            <div className="ed-status">
              <span className="ed-status-dot" data-running={running} />
              <span>
                {running
                  ? "Enriching"
                  : filledCount === ENRICH_PLAN.length
                    ? "Complete"
                    : "Ready"}
              </span>
            </div>
          </div>

          <div className="ed-fields">
            {ENRICH_PLAN.map((f, i) => {
              const filled = i < filledCount;
              const justFilled = i === filledCount - 1 && running;
              const ks = KIND_STYLE[f.kind];
              return (
                <div
                  key={f.key}
                  className={`ed-field ${filled ? "filled" : ""} ${justFilled ? "just" : ""}`}
                  onMouseEnter={() => filled && setHover(f.key)}
                  onMouseLeave={() => setHover(null)}
                >
                  <div className="ed-field-label">
                    <span
                      className="ed-kind"
                      style={{ color: ks.color, borderColor: ks.color + "33" }}
                    >
                      {ks.label}
                    </span>
                    <span>{f.label}</span>
                  </div>
                  <div className="ed-field-value">
                    {filled ? (
                      <>
                        <span className="ed-val">{f.value}</span>
                        <span className="ed-src">{f.source}</span>
                      </>
                    ) : (
                      <span className="ed-empty">not set</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Side panel: stats */}
        <div className="ed-side">
          <div className="ed-stat-card">
            <div className="ed-stat-head">Record completeness</div>
            <div className="ed-bar">
              <div
                className="ed-bar-fill"
                style={{ width: completeness + "%" }}
              />
            </div>
            <div className="ed-stat-row">
              <span className="ed-big mono">
                {completeness}
                <em>%</em>
              </span>
              <span className="ed-stat-delta">
                +{Math.round(completeness - 23)}pt
              </span>
            </div>
            <div className="ed-stat-sub">
              Started at 23% · {filledCount}/{ENRICH_PLAN.length} fields
              appended
            </div>
          </div>

          <div className="ed-stat-card">
            <div className="ed-stat-head">Reachability score</div>
            <div className="ed-bar">
              <div
                className="ed-bar-fill cobalt"
                style={{ width: reachability + "%" }}
              />
            </div>
            <div className="ed-stat-row">
              <span className="ed-big mono">
                {reachability}
                <em>%</em>
              </span>
              <span className="ed-stat-delta cobalt">
                +{Math.max(0, reachability - 45)}pt
              </span>
            </div>
            <div className="ed-stat-sub">Email + phone + LinkedIn combined</div>
          </div>

          <div className="ed-stat-card">
            <div className="ed-stat-head">Data confidence</div>
            <div className="ed-confidence">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`ed-conf-dot ${i < Math.round(accuracy / 10) ? "on" : ""}`}
                />
              ))}
            </div>
            <div className="ed-stat-row">
              <span className="ed-big mono">
                {accuracy}
                <em>%</em>
              </span>
              <span className="ed-stat-sub" style={{ marginTop: 0 }}>
                Multi-source verified
              </span>
            </div>
          </div>

          <div className="ed-log">
            <div className="ed-log-head">› append.log</div>
            <div className="ed-log-body">
              {filledCount === 0 && (
                <div className="ed-log-line dim">// awaiting input...</div>
              )}
              {ENRICH_PLAN.slice(0, filledCount).map((f) => (
                <div key={f.key} className="ed-log-line">
                  <span className="ed-log-ok">✓</span>
                  <span className="ed-log-key">{f.key}</span>
                  <span className="ed-log-arrow">←</span>
                  <span className="ed-log-src">{f.source}</span>
                </div>
              ))}
              {running && (
                <div className="ed-log-line">
                  <span className="ed-log-cursor">█</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrichDemo;
