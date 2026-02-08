const streamlitUrl =
  process.env.NEXT_PUBLIC_RENTPREDICTOR_STREAMLIT_URL || "";

export default function RentPredictorPage() {
  const hasDemo = streamlitUrl.trim().length > 0;

  return (
    <main className="page-shell">
      <section className="section">
        <h1>RentPredictor Demo</h1>
        <p className="hero-copy">
          Streamlit app for Swiss rent estimation.
        </p>
      </section>

      {hasDemo ? (
        <section className="section">
          <div className="demo-frame-wrap">
            <iframe
              src={streamlitUrl}
              title="RentPredictor Streamlit Demo"
              className="demo-frame"
            />
          </div>
          <p className="hero-copy">
            Open directly:{" "}
            <a href={streamlitUrl} target="_blank" rel="noreferrer">
              {streamlitUrl}
            </a>
          </p>
        </section>
      ) : (
        <section className="section">
          <p className="hero-copy">
            Demo URL not configured yet. Set{" "}
            <code>NEXT_PUBLIC_RENTPREDICTOR_STREAMLIT_URL</code> in your
            environment to embed the app here.
          </p>
          <p className="hero-copy">
            Repository:{" "}
            <a
              href="https://github.com/Dimi20cen/RentPredictor"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Dimi20cen/RentPredictor
            </a>
          </p>
        </section>
      )}
    </main>
  );
}
