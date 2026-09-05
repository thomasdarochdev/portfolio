const offers = [
  {
    name: "Starter",
    price: "890 EUR",
    detail: "Hero, CTA, 3–4 sections, SEO de base, responsive, déploiement Vercel.",
  },
  {
    name: "Pro",
    price: "1 890 EUR",
    detail: "Copy structurée, formulaire, analytics, perf, itérations design.",
  },
  {
    name: "Premium",
    price: "3 500 EUR",
    detail: "Parcours multi-pages, CMS léger, A/B ready, suivi post-livraison.",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="hero container">
        <p style={{ color: "var(--muted)", marginBottom: "0.5rem" }}>
          Stub public · Next.js App Router
        </p>
        <h1>Landing freelance — preuve de stack, pas de faux client</h1>
        <p>
          Artefact minimal pour montrer la structure d&apos;une landing livrable
          (hero, offres, CTA, contact). Tarifs indicatifs Paris / remote.
          Acompte typique : 40 %.
        </p>
        <a className="cta" href="#contact">
          Demander un devis
        </a>
      </header>

      <section className="container section" aria-labelledby="offers-title">
        <h2 id="offers-title">Offres landing</h2>
        <div className="grid">
          {offers.map((o) => (
            <article className="card" key={o.name}>
              <h3>{o.name}</h3>
              <p className="price">{o.price}</p>
              <p>{o.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section" aria-labelledby="proof-title">
        <h2 id="proof-title">Ce que ce repo prouve</h2>
        <ul>
          <li>Stack Next.js (App Router) + TypeScript</li>
          <li>Structure livrable : layout, page, styles, package.json</li>
          <li>Pas de témoignages inventés — scopes documentés dans CASE-STUDIES.md</li>
        </ul>
      </section>

      <section className="container section" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>
        <p>
          GitHub :{" "}
          <a href="https://github.com/thomasdarochdev" rel="noopener noreferrer">
            thomasdarochdev
          </a>
          <br />
          Repo preuve :{" "}
          <a
            href="https://github.com/thomasdarochdev/portfolio"
            rel="noopener noreferrer"
          >
            thomasdarochdev/portfolio
          </a>
        </p>
      </section>

      <footer className="container">
        Thomas Daroch · Paris freelance · Stub volontairement léger
      </footer>
    </main>
  );
}
