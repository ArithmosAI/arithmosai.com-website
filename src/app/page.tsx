import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="product" style={{ padding: "48px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
            <h2>Product</h2>
            <p>Describe what Arithmos AI does in 2–3 sentences.</p>
          </div>
        </section>

        <section id="use-cases" style={{ padding: "48px 0", background: "#fafafa" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
            <h2>Use Cases</h2>
            <ul>
              <li>Drift & fault early warning</li>
              <li>Virtual metrology</li>
              <li>Recipe/tool transfer (few-shot)</li>
              <li>Predictive maintenance support</li>
            </ul>
          </div>
        </section>

        <section id="how" style={{ padding: "48px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
            <h2>How it works</h2>
            <ol>
              <li>Ingest heterogeneous signals</li>
              <li>Tokenize (sample + event streams)</li>
              <li>Predict drift/quality and adapt across tools</li>
            </ol>
          </div>
        </section>

        <section id="contact" style={{ padding: "48px 0", background: "#fafafa" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
            <h2>Contact</h2>
            <p>Email: <a href="mailto:info@arithmosai.com">info@arithmosai.com</a></p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
