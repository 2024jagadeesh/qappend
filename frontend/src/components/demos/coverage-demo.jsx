import React, { useState, useEffect, useRef } from "react";

function useRunOnView(ref, run) {
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
      { threshold: 0.4 },
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
}

const COVERAGE = [
  { label: "Email Append", rate: 94, color: "var(--hot)" },
  { label: "Phone & Direct Dial", rate: 87, color: "var(--cobalt)" },
  { label: "Job Title", rate: 91, color: "var(--hot)" },
  { label: "Social Profile", rate: 83, color: "var(--cobalt)" },
  { label: "Firmographic", rate: 96, color: "var(--hot)" },
  { label: "Postal Address", rate: 89, color: "var(--cobalt)" },
  { label: "Company / Org", rate: 97, color: "var(--hot)" },
  { label: "Skills & Education", rate: 78, color: "var(--cobalt)" },
];

const LIST_SIZE = 50000;
const AVG_RATE = Math.round(
  COVERAGE.reduce((s, c) => s + c.rate, 0) / COVERAGE.length,
);
const TOTAL_FIELDS = Math.round(
  COVERAGE.reduce((s, c) => s + (c.rate / 100) * LIST_SIZE, 0),
);

function CoverageDemo() {
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);
  const rafRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  function start() {
    cancelAnimationFrame(rafRef.current);
    setRunning(true);

    const dur = 1400;
    const t0 = performance.now();

    function tick(now) {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);

      setProgress(eased);

      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setRunning(false);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
  }

  useRunOnView(rootRef, start);

  const avgNow = Math.round(AVG_RATE * progress);
  const fieldsNow = Math.round(TOTAL_FIELDS * progress);

  return (
    <div className="cov-wrap" ref={rootRef}>
      <div className="cov-head">
        <div>
          <div className="cov-eyebrow">
            Typical match rates · sample 50k list
          </div>
          <div className="cov-title">
            How much will we <em>actually find?</em>
          </div>
        </div>

        <button
          className="apd-btn apd-btn-primary"
          onClick={start}
          disabled={running}
        >
          {progress === 0
            ? "▶ Run match"
            : running
              ? "Matching…"
              : "▶ Run again"}
        </button>
      </div>

      <div className="cov-grid">
        <div className="cov-summary">
          <div className="cov-flow">
            <div className="cov-flow-item">
              <div className="cov-flow-num mono">
                {LIST_SIZE.toLocaleString()}
              </div>
              <div className="cov-flow-lbl">partial records in</div>
            </div>

            <div className="cov-flow-arrow">→</div>

            <div className="cov-flow-item">
              <div className="cov-flow-num mono accent">
                {fieldsNow.toLocaleString()}
              </div>
              <div className="cov-flow-lbl">fields recovered</div>
            </div>
          </div>

          <div className="cov-avg">
            <div className="cov-avg-num mono">
              {avgNow}
              <em>%</em>
            </div>
            <div className="cov-avg-lbl">
              average match rate
              <br />
              across eight append types
            </div>
          </div>

          <div className="cov-note">
            Rates reflect a representative B2B file. Your sample audit returns
            exact, list-specific coverage before you commit.
          </div>
        </div>

        <div className="cov-bars">
          {COVERAGE.map((c) => {
            const shown = Math.round(c.rate * progress);

            return (
              <div className="cov-bar-row" key={c.label}>
                <div className="cov-bar-label">{c.label}</div>

                <div className="cov-bar-track">
                  <div
                    className="cov-bar-fill"
                    style={{
                      width: `${c.rate * progress}%`,
                      background: c.color,
                    }}
                  />
                </div>

                <div className="cov-bar-val mono">
                  {shown}
                  <em>%</em>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CoverageDemo;
