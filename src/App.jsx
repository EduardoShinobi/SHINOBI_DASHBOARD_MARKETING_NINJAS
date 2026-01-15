import React, { useEffect, useRef, useState } from "react";

const automationCards = [
  {
    title: "Event Orchestration",
    detail: "Webhook, queue, and scheduler routing with deterministic retries and dead-letter handling.",
    tags: ["Stable", "2024"],
  },
  {
    title: "Process Automation",
    detail: "RPA-ready task chains with audit trails, approval gates, and rollback-safe checkpoints.",
    tags: ["Stable", "Enterprise"],
  },
  {
    title: "Integration Hub",
    detail: "API-first connectors for CRM, ERP, CDP, and marketing tools with schema mapping.",
    tags: ["Stable", "Latest"],
  },
  {
    title: "Data Pipelines",
    detail: "ETL/ELT syncs, incremental loads, and change data capture for real-time dashboards.",
    tags: ["Stable", "Secure"],
  },
  {
    title: "Governance",
    detail: "Role-based controls, secrets vaulting, compliance logs, and versioned workflows.",
    tags: ["Stable", "SOC2"],
  },
  {
    title: "Observability",
    detail: "SLO dashboards, alerting, and performance tracing for every automation path.",
    tags: ["Stable", "Ops"],
  },
];

const workflowRows = [
  {
    name: "Unified Sync Pipeline",
    status: "Active",
    detail: "Bi-directional sync with conflict resolution and scheduled checkpoints.",
  },
  {
    name: "Realtime Webhook Mesh",
    status: "Active",
    detail: "Guaranteed delivery with dedupe and backpressure control.",
  },
  {
    name: "Bulk Data Refresh",
    status: "Scheduled",
    detail: "Nightly ETL with validation, alerting, and recovery staging.",
  },
];

const toolItems = [
  "Quick Sync",
  "Workflow Composer",
  "Connector Library",
  "Audit Logs",
  "Environment Switch",
];

export default function App() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [position, setPosition] = useState({ x: 32, y: 32 });
  const dragState = useRef({ active: false, offsetX: 0, offsetY: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      if (!dragState.current.active) return;
      const nextX = Math.max(16, event.clientX - dragState.current.offsetX);
      const nextY = Math.max(16, event.clientY - dragState.current.offsetY);
      setPosition({ x: nextX, y: nextY });
    };

    const handleUp = () => {
      dragState.current.active = false;
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, []);

  const startDrag = (event) => {
    dragState.current.active = true;
    dragState.current.offsetX = event.clientX - position.x;
    dragState.current.offsetY = event.clientY - position.y;
  };

  return (
    <div className="app">
      <div className="background-glow" />
      <header className="hero">
        <div>
          <p className="eyebrow">Master Shinobi Dashboard</p>
          <h1>One hub. Every system. Fully synchronized.</h1>
          <p className="subtitle">
            A single-page command center for stable, pre-AI automation workflows, fully up to date and
            production-ready.
          </p>
        </div>
        <div className="status-card">
          <h2>Live Sync Health</h2>
          <div className="status-grid">
            <div>
              <span className="stat">99.98%</span>
              <span className="label">Uptime</span>
            </div>
            <div>
              <span className="stat">142</span>
              <span className="label">Active Links</span>
            </div>
            <div>
              <span className="stat">0.6s</span>
              <span className="label">Avg Latency</span>
            </div>
          </div>
        </div>
      </header>

      <main className="grid">
        <section className="card">
          <h3>Automation Capabilities</h3>
          <p className="section-sub">
            Latest stable automation stack before AI models, focused on resilience, governance, and auditability.
          </p>
          <div className="card-grid">
            {automationCards.map((card) => (
              <article key={card.title} className="mini-card">
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.detail}</p>
                </div>
                <div className="tags">
                  {card.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="card">
          <h3>Unified Workflow Matrix</h3>
          <p className="section-sub">Centralized operations with deterministic outcomes.</p>
          <div className="workflow-list">
            {workflowRows.map((row) => (
              <div key={row.name} className="workflow-row">
                <div>
                  <h4>{row.name}</h4>
                  <p>{row.detail}</p>
                </div>
                <span className={`pill ${row.status.toLowerCase()}`}>{row.status}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section className="card full">
        <h3>Synchronization Fabric</h3>
        <p className="section-sub">
          Every app connects to a single fabric with bi-directional rules, conflict management, and audit-safe
          rollback.
        </p>
        <div className="fabric">
          <div>
            <h4>Applications</h4>
            <ul>
              <li>CRM + Service Desk</li>
              <li>ERP + Finance</li>
              <li>Marketing + Growth</li>
              <li>Data Warehouse</li>
            </ul>
          </div>
          <div>
            <h4>Sync Rules</h4>
            <ul>
              <li>Schema validation</li>
              <li>Conflict resolution</li>
              <li>Change data capture</li>
              <li>Role-based access</li>
            </ul>
          </div>
          <div>
            <h4>Operations</h4>
            <ul>
              <li>Live failover</li>
              <li>Replay queues</li>
              <li>Rate-limit guardrails</li>
              <li>Real-time alerts</li>
            </ul>
          </div>
        </div>
      </section>

      <button
        type="button"
        className="tool-orb"
        onPointerDown={startDrag}
        onClick={() => setPanelOpen(true)}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        <span>Tools</span>
        <div className="tool-orb-ring" />
      </button>

      {panelOpen && (
        <div className="overlay" onClick={() => setPanelOpen(false)}>
          <div className="bottom-sheet" onClick={(event) => event.stopPropagation()}>
            <div className="sheet-header">
              <div>
                <h4>Command Tool Panel</h4>
                <p>Always-on-top quick actions that slide up like an iPhone keyboard.</p>
              </div>
              <button type="button" className="close" onClick={() => setPanelOpen(false)}>
                ✕
              </button>
            </div>
            <div className="tool-list">
              {toolItems.map((item) => (
                <button key={item} type="button" className="tool-item">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
