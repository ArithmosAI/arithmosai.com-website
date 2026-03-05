import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

// app/page.tsx
// IP-safe public site copy: avoids “token/tokenization” language.
// Uses dark deep-tech hero, subtle animated data-flow SVG, cards, hover effects, and a credibility logo bar.
// (Optional) For best typography, add Inter/Space Grotesk via next/font in app/layout.tsx later.

export default function Home() {
  return (
    <main className="page">
      <style>{css}</style>

      {/* Top nav */}
      <header className="nav">
        <div className="brand">
          <TokenDotsIcon />
          <div className="brandText">
            <div className="brandName">Arithmos AI</div>
            <div className="brandSub">LLC</div>
          </div>
        </div>

        <nav className="navLinks">
          <a href="#what">What</a>
          <a href="#applications">Applications</a>
          <a href="#credibility">Credibility</a>
          <a className="navCta" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero" aria-label="Hero">
        <div className="heroBg" />
        <div className="heroGrid" />
        <div className="heroGlow" />

        <div className="heroInner">
          <div className="heroLeft">
            <div className="kicker">AI infrastructure for industrial systems</div>

            <h1 className="heroTitle">
              Foundation AI for heterogeneous sensor streams in semiconductor and advanced manufacturing.
            </h1>

            <p className="heroSub">
              We build scalable deep learning architectures that learn from high-frequency, multi-modal sensor data to enable
              forecasting, anomaly detection, drift monitoring, and inferred metrics—designed for real-world deployment.
            </p>

            <div className="heroCtas">
              <a className="btnPrimary" href="#contact">
                Request a conversation
              </a>
              <a className="btnSecondary" href="mailto:contact@arithmosai.com">
                contact@arithmosai.com
              </a>
            </div>

            <div className="pillRow">
              <Pill>Heterogeneous sensor fusion</Pill>
              <Pill>Time-series deep learning</Pill>
              <Pill>LLM-compatible workflows</Pill>
              <Pill>Vendor-agnostic integration</Pill>
            </div>
          </div>

          <div className="heroRight" aria-label="Animated data stream visualization">
            <div className="vizCard">
              <div className="vizHeader">
                <div className="vizTitle">Real-time sensor intelligence</div>
                <div className="vizMeta">Streaming · Multi-modal · Scalable</div>
              </div>

              <DataFlowViz />

              <div className="vizLegend">
                <div className="legendItem">
                  <span className="dot dotA" /> Inputs
                </div>
                <div className="legendItem">
                  <span className="dot dotB" /> Model
                </div>
                <div className="legendItem">
                  <span className="dot dotC" /> Outputs
                </div>
              </div>
            </div>

            <div className="miniStats">
              <MiniStat title="Inputs" value="High-rate sensor streams" />
              <MiniStat title="Outputs" value="Forecasts · Alerts · Inferred metrics" />
              <MiniStat title="Deployment" value="Pilot-ready integrations" />
            </div>
          </div>
        </div>

        <div className="heroDivider" />
      </section>

      {/* What we do */}
      <section id="what" className="section">
        <div className="sectionHeader">
          <h2>What we do</h2>
          <p>
            Manufacturing environments produce massive, heterogeneous sensor data across tools, processes, and sites—often noisy,
            high-dimensional, and hard to standardize. Arithmos AI builds modern architectures that transform raw streams into structured
            intelligence for monitoring and decision support.
          </p>
        </div>

        <div className="featureGrid">
          <FeatureCard
            icon={<IconLayers />}
            title="Heterogeneous sensor fusion"
            body="Learn jointly from multiple modalities and time scales to capture system behavior under real operating conditions."
          />
          <FeatureCard
            icon={<IconWave />}
            title="Foundation-model architectures"
            body="Reusable backbones for industrial time-series data, with task-specific heads where needed."
          />
          <FeatureCard
            icon={<IconSpark />}
            title="LLM-compatible workflows"
            body="Outputs that support analysis, summarization, and operational reasoning pipelines without exposing internal IP."
          />
        </div>

        <div className="sectionDivider" />
      </section>

      {/* Applications */}
      <section id="applications" className="section">
        <div className="sectionHeader">
          <h2>Applications</h2>
          <p>Designed to plug into existing data pipelines and deliver measurable outcomes for pilot partners.</p>
        </div>

        <div className="cardsGrid">
          <AppCard
            icon={<IconPulse />}
            title="Tool health monitoring"
            body="Detect early signals of degradation and reliability risk using multi-sensor context."
          />
          <AppCard
            icon={<IconAlert />}
            title="Drift & anomaly investigation"
            body="Identify distribution shifts and anomalous episodes across time and operating regimes."
          />
          <AppCard
            icon={<IconGauge />}
            title="Virtual metrology"
            body="Infer difficult-to-measure quality or process metrics from sensor data in near real-time."
          />
          <AppCard
            icon={<IconMap />}
            title="Cross-tool / cross-site analysis"
            body="Compare performance patterns across tools, chambers, or sites with consistent analytics."
          />
        </div>

        <div className="sectionDivider" />
      </section>

      {/* Simple “flow diagram” section */}
      <section className="section">
        <div className="sectionHeader">
          <h2>How it fits</h2>
          <p>A simple, deployment-friendly flow—built to integrate with existing logging and sensor infrastructure.</p>
        </div>

        <div className="flow">
          <div className="flowNode">
            <div className="flowTitle">Sensor Streams</div>
            <div className="flowSub">multi-modal · high-rate · heterogeneous</div>
          </div>

          <div className="flowArrow" aria-hidden="true">
            <span />
          </div>

          <div className="flowNode accent">
            <div className="flowTitle">Arithmos AI</div>
            <div className="flowSub">deep learning architecture · scalable inference</div>
          </div>

          <div className="flowArrow" aria-hidden="true">
            <span />
          </div>

          <div className="flowNode">
            <div className="flowTitle">Outputs</div>
            <div className="flowSub">forecasts · alerts · inferred metrics</div>
          </div>
        </div>

        <div className="sectionDivider" />
      </section>

      {/* Credibility / logo bar */}
      <section id="credibility" className="section">
        <div className="sectionHeader">
          <h2>Credibility</h2>
          <p>
            We collaborate with research and industry stakeholders to ensure practical requirements, integration constraints, and pilot
            success criteria are reflected from day one.
          </p>
        </div>

        <div className="logoBar" aria-label="Partner / affiliation placeholders">
          <div className="logoPill">Pilot Partner</div>
          <div className="logoPill">Research Affiliation</div>
          <div className="logoPill">Industry Collaboration</div>
          <div className="logoPill">Manufacturing AI</div>
          <div className="logoPill">Semiconductor Systems</div>
        </div>

        <div className="teamRow">
          <div className="teamCard">
            <div className="avatar" aria-hidden="true" />
            <div>
              <div className="teamName">Founder / PI</div>
              <div className="teamRole">Architecture · Applications · Commercialization</div>
            </div>
          </div>
          <div className="teamCard">
            <div className="avatar" aria-hidden="true" />
            <div>
              <div className="teamName">Engineering</div>
              <div className="teamRole">Algorithms · Pipelines · Validation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="contactInner">
          <div>
            <h2>Contact</h2>
            <p>Reach out for pilots, research collaborations, or infrastructure partnerships.</p>
            <div className="contactMeta">
              <div className="contactEmail">contact@arithmosai.com</div>
              <div className="contactLoc">Boston, MA</div>
            </div>
          </div>
          <div className="contactActions">
            <a className="btnPrimary" href="mailto:contact@arithmosai.com">
              Email us
            </a>
            <a className="btnSecondary" href="#what">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Arithmos AI LLC</footer>
    </main>
  );
}

/* ---------- Small components ---------- */

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="featureCard">
      <div className="featureIcon">{icon}</div>
      <div className="featureTitle">{title}</div>
      <div className="featureBody">{body}</div>
    </div>
  );
}

function AppCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="appCard">
      <div className="appTop">
        <div className="appIcon">{icon}</div>
        <div className="appTitle">{title}</div>
      </div>
      <div className="appBody">{body}</div>
    </div>
  );
}

function MiniStat({ title, value }: { title: string; value: string }) {
  return (
    <div className="miniStat">
      <div className="miniStatTitle">{title}</div>
      <div className="miniStatValue">{value}</div>
    </div>
  );
}

/* ---------- Icons (simple inline SVGs; no dependency) ---------- */

function IconLayers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3 2 8l10 5 10-5-10-5Zm0 10L2 8v4l10 5 10-5V8l-10 5Zm0 6L2 14v4l10 5 10-5v-4l-10 5Z"
        fill="currentColor"
      />
    </svg>
  );
}
function IconWave() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M2 12c3.5 0 3.5-6 7-6s3.5 6 7 6 3.5-6 7-6v3c-3.5 0-3.5 6-7 6s-3.5-6-7-6-3.5 6-7 6V12Z"
        fill="currentColor"
      />
    </svg>
  );
}
function IconSpark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M13 2 3 14h7l-1 8 12-15h-7l-1-5Z"
        fill="currentColor"
      />
    </svg>
  );
}
function IconPulse() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 13h4l2-7 4 14 2-7h6v-2h-4l-2 7-4-14-2 7H3v2Z"
        fill="currentColor"
      />
    </svg>
  );
}
function IconAlert() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2 1 21h22L12 2Zm1 14h-2v-5h2v5Zm0 4h-2v-2h2v2Z"
        fill="currentColor"
      />
    </svg>
  );
}
function IconGauge() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 4a10 10 0 0 0-10 10c0 3.3 1.6 6.2 4 8h12c2.4-1.8 4-4.7 4-8A10 10 0 0 0 12 4Zm0 4 1.5 6.5L18 12l-6 8-6-8 4.5 2.5L12 8Z"
        fill="currentColor"
      />
    </svg>
  );
}
function IconMap() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 2v10l6 2V8L9 6Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ---------- Logo icon (muted, low saturation) ---------- */

function TokenDotsIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 36 36" aria-label="Arithmos icon">
      <circle cx="10" cy="18" r="6.2" fill="#7D8AA3" />
      <circle cx="21.0" cy="10.0" r="3.1" fill="#8E9F8A" />
      <circle cx="26.0" cy="18.0" r="2.6" fill="#B39B86" />
      <circle cx="21.0" cy="24.2" r="2.9" fill="#8EA2B6" />
      <circle cx="16.6" cy="27.4" r="2.2" fill="#9AA3AD" />
      <circle cx="17.6" cy="14.8" r="2.0" fill="#A795B1" />
    </svg>
  );
}

/* ---------- Subtle animated data-flow viz ---------- */

function DataFlowViz() {
  return (
    <svg className="viz" viewBox="0 0 640 240" role="img" aria-label="Abstract data stream visualization">
      {/* background grid lines */}
      <g opacity="0.22">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1={40} y1={25 + i * 20} x2={600} y2={25 + i * 20} stroke="rgba(255,255,255,0.14)" />
        ))}
      </g>

      {/* flowing paths */}
      <path
        className="flowPath flowA"
        d="M60 70 C 160 20, 260 120, 360 70 S 520 40, 600 90"
        fill="none"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        className="flowPath flowB"
        d="M60 125 C 180 190, 250 60, 360 120 S 510 160, 600 130"
        fill="none"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        className="flowPath flowC"
        d="M60 180 C 170 140, 270 210, 360 170 S 520 110, 600 170"
        fill="none"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* pulsing nodes */}
      <g>
        <circle className="pulseNode" cx="120" cy="70" r="5" />
        <circle className="pulseNode" cx="240" cy="110" r="5" style={{ animationDelay: "0.2s" }} />
        <circle className="pulseNode" cx="360" cy="120" r="5" style={{ animationDelay: "0.4s" }} />
        <circle className="pulseNode" cx="480" cy="150" r="5" style={{ animationDelay: "0.6s" }} />
        <circle className="pulseNode" cx="580" cy="130" r="5" style={{ animationDelay: "0.8s" }} />
      </g>

      {/* “system” block */}
      <g transform="translate(272,78)">
        <rect x="0" y="0" width="96" height="84" rx="14" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.16)" />
        <text x="48" y="36" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="12" fontFamily="ui-sans-serif, system-ui">
          AI System
        </text>
        <text x="48" y="56" textAnchor="middle" fill="rgba(255,255,255,0.60)" fontSize="11" fontFamily="ui-sans-serif, system-ui">
          inference · monitoring
        </text>
      </g>
    </svg>
  );
}

/* ---------- CSS (single-file, no Tailwind required) ---------- */

const css = `
  :root{
    --bg0:#070812;
    --bg1:#05060a;
    --card:#0b1020;
    --card2:#0a0f1c;
    --border: rgba(255,255,255,0.10);
    --muted: rgba(255,255,255,0.72);
    --muted2: rgba(255,255,255,0.58);
    --text: rgba(255,255,255,0.92);
    --accent:#3b82f6; /* electric blue */
    --accent2:#14b8a6; /* teal */
    --shadow: 0 18px 60px rgba(0,0,0,0.45);
  }

  *{ box-sizing:border-box; }
  html,body{ margin:0; padding:0; background: linear-gradient(180deg, var(--bg0), var(--bg1)); color: var(--text); }
  a{ color: inherit; text-decoration:none; }
  a:hover{ opacity:0.92; }

  .page{
    min-height:100vh;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
    letter-spacing: -0.01em;
  }

  /* NAV */
  .nav{
    position: sticky;
    top: 0;
    z-index: 30;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 18px 22px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    background: rgba(5,6,10,0.72);
    backdrop-filter: blur(10px);
  }
  .brand{ display:flex; align-items:center; gap:12px; }
  .brandName{ font-weight: 650; font-size: 14px; }
  .brandSub{ font-size: 11px; letter-spacing: 0.18em; color: rgba(255,255,255,0.62); margin-top: 3px; }
  .navLinks{ display:flex; align-items:center; gap:18px; font-size: 13px; color: rgba(255,255,255,0.78); }
  .navLinks a{ padding: 8px 10px; border-radius: 999px; }
  .navLinks a:hover{ background: rgba(255,255,255,0.06); }
  .navCta{
    border: 1px solid rgba(255,255,255,0.14);
    background: rgba(255,255,255,0.06);
  }

  /* HERO */
  .hero{
    position: relative;
    overflow: hidden;
    padding: 86px 22px 44px;
  }
  .heroBg{
    position:absolute; inset:-80px;
    background:
      radial-gradient(900px 520px at 18% 18%, rgba(59,130,246,0.25), transparent 60%),
      radial-gradient(700px 420px at 78% 12%, rgba(20,184,166,0.18), transparent 65%),
      linear-gradient(135deg, rgba(10,20,56,0.85), rgba(0,0,0,0.72));
    filter: saturate(1.05);
  }
  .heroGrid{
    position:absolute; inset:0;
    background-image:
      radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
    background-size: 22px 22px;
    mask-image: radial-gradient(ellipse at 50% 30%, black 35%, transparent 70%);
    opacity: 0.65;
    pointer-events:none;
  }
  .heroGlow{
    position:absolute; inset:0;
    background: radial-gradient(420px 220px at 50% 16%, rgba(255,255,255,0.07), transparent 70%);
    pointer-events:none;
  }
  .heroInner{
    position: relative;
    max-width: 1120px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 26px;
    align-items: start;
  }
  @media (max-width: 980px){
    .heroInner{ grid-template-columns: 1fr; }
    .navLinks{ display:none; }
  }

  .kicker{
    display:inline-flex;
    align-items:center;
    gap:10px;
    font-size: 12px;
    color: rgba(255,255,255,0.70);
    border: 1px solid rgba(255,255,255,0.12);
    background: rgba(255,255,255,0.05);
    padding: 8px 12px;
    border-radius: 999px;
    margin-bottom: 14px;
  }

  .heroTitle{
    font-size: 56px;
    line-height: 1.05;
    margin: 0;
    font-weight: 720;
    letter-spacing: -0.03em;
  }
  @media (max-width: 540px){
    .heroTitle{ font-size: 40px; }
  }

  .heroSub{
    margin-top: 16px;
    font-size: 18px;
    line-height: 1.75;
    color: rgba(255,255,255,0.74);
    max-width: 740px;
  }

  .heroCtas{ display:flex; gap: 12px; flex-wrap: wrap; margin-top: 22px; }
  .btnPrimary{
    display:inline-flex; align-items:center; justify-content:center;
    padding: 12px 16px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(59,130,246,1), rgba(20,184,166,0.95));
    color: rgba(10,10,15,0.96);
    font-weight: 700;
    font-size: 13px;
    box-shadow: 0 10px 26px rgba(59,130,246,0.18);
  }
  .btnPrimary:hover{ transform: translateY(-1px); transition: 140ms ease; }
  .btnSecondary{
    display:inline-flex; align-items:center; justify-content:center;
    padding: 12px 16px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.16);
    background: rgba(255,255,255,0.06);
    color: rgba(255,255,255,0.88);
    font-weight: 600;
    font-size: 13px;
  }
  .btnSecondary:hover{ background: rgba(255,255,255,0.08); }

  .pillRow{ display:flex; gap:10px; flex-wrap: wrap; margin-top: 18px; }
  .pill{
    font-size: 12px;
    padding: 8px 10px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.10);
    color: rgba(255,255,255,0.70);
    background: rgba(255,255,255,0.04);
  }

  /* Right side hero cards */
  .vizCard{
    border: 1px solid rgba(255,255,255,0.14);
    background: linear-gradient(180deg, rgba(11,16,32,0.88), rgba(10,15,28,0.78));
    border-radius: 18px;
    box-shadow: var(--shadow);
    padding: 16px;
    overflow:hidden;
  }
  .vizHeader{ display:flex; align-items: baseline; justify-content: space-between; gap: 10px; }
  .vizTitle{ font-weight: 700; font-size: 13px; }
  .vizMeta{ font-size: 12px; color: rgba(255,255,255,0.58); }
  .viz{
    width: 100%;
    height: auto;
    margin-top: 10px;
    border-radius: 14px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
  }
  .vizLegend{ display:flex; gap: 14px; margin-top: 12px; color: rgba(255,255,255,0.62); font-size: 12px; }
  .legendItem{ display:flex; align-items:center; gap: 8px; }
  .dot{ width: 10px; height:10px; border-radius: 999px; display:inline-block; }
  .dotA{ background: rgba(59,130,246,0.92); }
  .dotB{ background: rgba(20,184,166,0.88); }
  .dotC{ background: rgba(255,255,255,0.70); }

  .miniStats{ display:grid; gap: 10px; margin-top: 12px; }
  .miniStat{
    border: 1px solid rgba(255,255,255,0.10);
    background: rgba(255,255,255,0.04);
    border-radius: 14px;
    padding: 12px 14px;
  }
  .miniStatTitle{ font-size: 12px; color: rgba(255,255,255,0.60); }
  .miniStatValue{ margin-top: 6px; font-size: 13px; font-weight: 650; color: rgba(255,255,255,0.88); }

  .heroDivider{
    position: relative;
    max-width: 1120px;
    margin: 44px auto 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
  }

  /* Sections */
  .section{
    max-width: 1120px;
    margin: 0 auto;
    padding: 64px 22px 10px;
  }
  .sectionHeader h2{
    margin: 0;
    font-size: 26px;
    letter-spacing: -0.02em;
  }
  .sectionHeader p{
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.75;
    color: rgba(255,255,255,0.72);
    max-width: 860px;
  }

  .featureGrid{
    margin-top: 22px;
    display:grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }
  @media (max-width: 980px){
    .featureGrid{ grid-template-columns: 1fr; }
  }
  .featureCard{
    border: 1px solid rgba(255,255,255,0.10);
    background: rgba(255,255,255,0.04);
    border-radius: 18px;
    padding: 18px;
    transition: transform 140ms ease, background 140ms ease, border-color 140ms ease;
  }
  .featureCard:hover{
    transform: translateY(-2px);
    background: rgba(255,255,255,0.06);
    border-color: rgba(255,255,255,0.16);
  }
  .featureIcon{
    width: 36px;
    height: 36px;
    border-radius: 12px;
    display:flex; align-items:center; justify-content:center;
    background: rgba(59,130,246,0.16);
    color: rgba(255,255,255,0.90);
  }
  .featureTitle{
    margin-top: 12px;
    font-size: 14px;
    font-weight: 720;
  }
  .featureBody{
    margin-top: 8px;
    font-size: 13px;
    line-height: 1.7;
    color: rgba(255,255,255,0.68);
  }

  .cardsGrid{
    margin-top: 22px;
    display:grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
  @media (max-width: 760px){
    .cardsGrid{ grid-template-columns: 1fr; }
  }
  .appCard{
    border: 1px solid rgba(255,255,255,0.10);
    background: rgba(255,255,255,0.04);
    border-radius: 18px;
    padding: 18px;
    transition: transform 140ms ease, background 140ms ease, border-color 140ms ease;
  }
  .appCard:hover{
    transform: translateY(-2px);
    background: rgba(255,255,255,0.06);
    border-color: rgba(59,130,246,0.28);
  }
  .appTop{ display:flex; align-items:center; gap: 12px; }
  .appIcon{
    width: 38px;
    height: 38px;
    border-radius: 14px;
    display:flex; align-items:center; justify-content:center;
    background: rgba(20,184,166,0.16);
    color: rgba(255,255,255,0.90);
  }
  .appTitle{ font-size: 14px; font-weight: 740; }
  .appBody{
    margin-top: 10px;
    font-size: 13px;
    line-height: 1.7;
    color: rgba(255,255,255,0.68);
  }

  .flow{
    margin-top: 22px;
    display:grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;
    gap: 12px;
    align-items: center;
  }
  @media (max-width: 980px){
    .flow{ grid-template-columns: 1fr; }
    .flowArrow{ display:none; }
  }
  .flowNode{
    border: 1px solid rgba(255,255,255,0.10);
    background: rgba(255,255,255,0.04);
    border-radius: 18px;
    padding: 16px 16px;
  }
  .flowNode.accent{
    border-color: rgba(59,130,246,0.28);
    background: linear-gradient(180deg, rgba(59,130,246,0.12), rgba(20,184,166,0.06));
  }
  .flowTitle{ font-size: 14px; font-weight: 760; }
  .flowSub{ margin-top: 6px; font-size: 12px; color: rgba(255,255,255,0.62); line-height: 1.6; }
  .flowArrow{
    width: 62px;
    height: 12px;
    position: relative;
  }
  .flowArrow span{
    position:absolute; inset: 0;
    background: linear-gradient(90deg, rgba(59,130,246,0.0), rgba(59,130,246,0.65), rgba(20,184,166,0.65), rgba(20,184,166,0.0));
    border-radius: 999px;
    animation: shimmer 1.6s linear infinite;
  }

  .sectionDivider{
    margin-top: 52px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent);
  }

  /* Credibility */
  .logoBar{
    margin-top: 18px;
    display:flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .logoPill{
    border: 1px solid rgba(255,255,255,0.10);
    background: rgba(255,255,255,0.04);
    border-radius: 999px;
    padding: 10px 12px;
    font-size: 12px;
    color: rgba(255,255,255,0.68);
  }
  .teamRow{
    margin-top: 18px;
    display:grid;
    grid-template-columns: repeat(2, minmax(0,1fr));
    gap: 14px;
  }
  @media (max-width: 760px){
    .teamRow{ grid-template-columns: 1fr; }
  }
  .teamCard{
    border: 1px solid rgba(255,255,255,0.10);
    background: rgba(255,255,255,0.04);
    border-radius: 18px;
    padding: 14px;
    display:flex;
    gap: 12px;
    align-items:center;
  }
  .avatar{
    width: 44px;
    height: 44px;
    border-radius: 16px;
    background:
      radial-gradient(circle at 30% 30%, rgba(59,130,246,0.28), transparent 60%),
      radial-gradient(circle at 70% 70%, rgba(20,184,166,0.20), transparent 60%),
      rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.10);
  }
  .teamName{ font-size: 13px; font-weight: 760; }
  .teamRole{ margin-top: 4px; font-size: 12px; color: rgba(255,255,255,0.64); }

  /* Contact */
  .contact{
    max-width: 1120px;
    margin: 0 auto;
    padding: 56px 22px 66px;
  }
  .contactInner{
    border: 1px solid rgba(255,255,255,0.12);
    background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03));
    border-radius: 22px;
    padding: 22px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  @media (max-width: 760px){
    .contactInner{ flex-direction: column; align-items: flex-start; }
  }
  .contactInner h2{ margin: 0; font-size: 22px; }
  .contactInner p{ margin-top: 10px; margin-bottom: 0; font-size: 14px; line-height: 1.7; color: rgba(255,255,255,0.70); max-width: 760px; }
  .contactMeta{ margin-top: 12px; }
  .contactEmail{ font-size: 14px; font-weight: 740; }
  .contactLoc{ margin-top: 4px; font-size: 12px; color: rgba(255,255,255,0.58); }
  .contactActions{ display:flex; gap: 10px; flex-wrap: wrap; }

  .footer{
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 22px 34px;
    font-size: 12px;
    color: rgba(255,255,255,0.46);
  }

  /* Animations */
  @keyframes dashMove {
    from { stroke-dashoffset: 0; }
    to { stroke-dashoffset: -220; }
  }
  .flowPath{
    stroke-dasharray: 8 10;
    animation: dashMove 2.6s linear infinite;
    opacity: 0.95;
  }
  .flowA{ stroke: rgba(59,130,246,0.85); }
  .flowB{ stroke: rgba(20,184,166,0.75); animation-duration: 3.1s; }
  .flowC{ stroke: rgba(255,255,255,0.35); animation-duration: 3.6s; }

  @keyframes pulse {
    0% { transform: scale(0.95); opacity: 0.55; }
    50% { transform: scale(1.08); opacity: 0.95; }
    100% { transform: scale(0.95); opacity: 0.55; }
  }
  .pulseNode{
    fill: rgba(255,255,255,0.65);
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%{ opacity: 0.55; transform: translateX(-10px); }
    50%{ opacity: 0.95; transform: translateX(10px); }
    100%{ opacity: 0.55; transform: translateX(-10px); }
  }
`;
