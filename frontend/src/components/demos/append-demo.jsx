import React, { useState, useEffect, useRef } from 'react';

/* ============================================================
   Shared: run-once-on-view hook
   ============================================================ */
function useRunOnView(ref, run) {
  const fired = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          run();
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
}

/* ============================================================
   1. AppendDemo — live record append
   ============================================================ */
const APPEND_RECORD = { name: 'Sarah McGrath', company: 'Helix Logistics', domain: 'helixlogistics.io' };

const APPEND_PLAN = [
  { key: 'email',    label: 'Email',          tag: 'EMAIL',    value: 's.mcgrath@helixlogistics.io',     source: 'verified · deliverable' },
  { key: 'phone',    label: 'Direct dial',    tag: 'PHONE',    value: '+1 (415) 555 · 0428',            source: 'line-type verified' },
  { key: 'title',    label: 'Job title',      tag: 'TITLE',    value: 'VP, Revenue Operations',         source: 'refreshed 4d ago' },
  { key: 'linkedin', label: 'LinkedIn',       tag: 'SOCIAL',   value: 'linkedin.com/in/smcgrath-ops',    source: 'profile match · 0.97' },
  { key: 'firmo',    label: 'Firmographics',  tag: 'FIRMO',    value: '410 staff · $80M–$120M',         source: 'revenue & headcount' },
  { key: 'postal',   label: 'Postal address', tag: 'POSTAL',   value: '500 Brannan St, San Francisco',  source: 'standardized · CASS' },
];

const APPEND_TAG_COLOR = {
  EMAIL:   'var(--hot)',
  PHONE:   'var(--hot)',
  TITLE:   'var(--cobalt)',
  SOCIAL:  'var(--cobalt)',
  FIRMO:   '#7a52d6',
  POSTAL:  '#7a52d6',
  COMPANY: 'var(--hot)',
};

function AppendDemo() {
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
      if (i < APPEND_PLAN.length) timerRef.current = setTimeout(next, 280);
      else setRunning(false);
    }
    timerRef.current = setTimeout(next, 360);
  }
  function reset() {
    clearTimeout(timerRef.current);
    setStep(0);
    setRunning(false);
  }

  useRunOnView(rootRef, start);

  const filled = step;
  const total = APPEND_PLAN.length + 2; // 2 base fields (name, company) count toward completeness
  const completeness = Math.round(((filled + 2) / total) * 100);
  const recovered = filled;

  return (
    <div className="apd-wrap" ref={rootRef}>
      <div className="apd-head">
        <div>
          <div className="apd-eyebrow">Live demo · Real schema</div>
          <div className="apd-title">Watch a record get <em>appended</em>.</div>
        </div>
        <div className="apd-controls">
          <button className="apd-btn apd-btn-primary" onClick={start} disabled={running}>
            {step === 0 ? '▶ Run append' : running ? 'Appending…' : '▶ Run again'}
          </button>
          <button className="apd-btn apd-btn-ghost" onClick={reset} disabled={step === 0 || running}>Reset</button>
        </div>
      </div>

      <div className="apd-grid">
        {/* Record card */}
        <div className="apd-card">
          <div className="apd-card-head">
            <div className="apd-avatar">SM</div>
            <div>
              <div className="apd-name">{APPEND_RECORD.name}</div>
              <div className="apd-sub">{APPEND_RECORD.company} · {APPEND_RECORD.domain}</div>
            </div>
            <div className="apd-status">
              <span className="apd-status-dot" data-running={running} />
              <span>{running ? 'Appending' : filled === APPEND_PLAN.length ? 'Complete' : 'Ready'}</span>
            </div>
          </div>

          <div className="apd-fields">
            {APPEND_PLAN.map((f, i) => {
              const isFilled = i < filled;
              const just = i === filled - 1 && running;
              return (
                <div key={f.key} className={`apd-field ${isFilled ? 'filled' : ''} ${just ? 'just' : ''}`}>
                  <div className="apd-field-label">
                    <span className="apd-tag" style={{ color: APPEND_TAG_COLOR[f.tag], borderColor: APPEND_TAG_COLOR[f.tag] + '33' }}>{f.tag}</span>
                    <span>{f.label}</span>
                  </div>
                  <div className="apd-field-value">
                    {isFilled ? (
                      <>
                        <span className="apd-val">{f.value}</span>
                        <span className="apd-src">{f.source}</span>
                      </>
                    ) : (
                      <span className="apd-empty">not set</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Side: progress + log */}
        <div className="apd-side">
          <div className="apd-stat-card">
            <div className="apd-stat-head">Record completeness</div>
            <div className="apd-bar"><div className="apd-bar-fill" style={{ width: completeness + '%' }} /></div>
            <div className="apd-stat-row">
              <span className="apd-big mono">{completeness}<em>%</em></span>
              <span className="apd-delta">+{Math.max(0, completeness - 22)}pt</span>
            </div>
            <div className="apd-stat-sub">Started at 22% · {recovered}/{APPEND_PLAN.length} fields appended</div>
          </div>

          <div className="apd-stat-card">
            <div className="apd-stat-head">Source verification</div>
            <div className="apd-conf">
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`apd-conf-dot ${filled > 0 && i < Math.round((recovered / APPEND_PLAN.length) * 10) ? 'on' : ''}`} />
              ))}
            </div>
            <div className="apd-stat-row">
              <span className="apd-big mono">{filled > 0 ? 98 : 0}<em>%</em></span>
              <span className="apd-stat-sub" style={{ marginTop: 0 }}>Multi-source verified</span>
            </div>
          </div>

          <div className="apd-log">
            <div className="apd-log-head">› append.log</div>
            <div className="apd-log-body">
              {filled === 0 && <div className="apd-log-line dim">// awaiting input…</div>}
              {APPEND_PLAN.slice(0, filled).map((f) => (
                <div key={f.key} className="apd-log-line">
                  <span className="apd-log-ok">✓</span>
                  <span className="apd-log-key">{f.key}</span>
                  <span className="apd-log-arrow">←</span>
                  <span className="apd-log-src">{f.source}</span>
                </div>
              ))}
              {running && <div className="apd-log-line"><span className="apd-log-cursor">█</span></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AppendDemo;
