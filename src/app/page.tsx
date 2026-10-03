import Image from "next/image";
import SchoolExperience from "@/components/sections/SchoolExperience";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ThemeToggle from "@/components/layout/ThemeToggle";
import HomeHighlights from "@/components/sections/HomeHighlights";
import HeroVisual from "@/components/sections/HeroVisual";

const admissionsUrl = "https://admission.tis.edu.in/";
const officialMedia = "https://tis.edu.in/_next/static/media/";

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>;
}

export default function HomePage() {
  return (
    <div className="page-shell">
      <div className="notice-bar">
        <span>Co-educational boarding & day school</span>
        <a href="tel:+919837983791">Admissions · +91 98379 83791</a>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Tula's International School home">
          <Image className="wordmark-symbol" src={`${officialMedia}schoolLogo.95f6e121.png`} alt="" width={42} height={42} unoptimized />
          <span className="wordmark-copy"><strong>TULAS</strong><small>THE MODERN GURUKUL</small></span>
        </a>
        <nav className="primary-nav" aria-label="Main navigation">
          <a href="#school">The school</a>
          <a href="#learning">Learning</a>
          <a href="#campus">Campus</a>
          <a href="#sports">Sports</a>
          <a href="#voices">Stories</a>
          <a href="#visit">Visit</a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="header-apply" href={admissionsUrl} target="_blank" rel="noreferrer">Admissions <ArrowIcon /></a>
        </div>
      </header>

      <main>
      <section id="home" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> The Modern Gurukul · Dehradun</p>
          <h1>LET’S DO <em>it</em><br />with Tulas.</h1>
          <p className="hero-intro">A co-educational CBSE school for Classes IV–XII, where students find opportunities to learn, take part and grow.</p>
          <div className="hero-actions">
            <a className="button-primary" href={admissionsUrl} target="_blank" rel="noreferrer">Explore admissions <ArrowIcon /></a>
            <a className="text-link" href="#school">Get to know Tula’s <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-note"><span className="note-dot" /> CBSE curriculum <span className="note-divider">/</span> Boarding & day school</div>
        </div>

        <HeroVisual />
        <div className="hero-index" aria-hidden="true">TIS&nbsp; / &nbsp;DHOOLKOT</div>
      </section>

      <ScrollReveal><section id="school" className="intro-section section-pad">
        <div className="section-kicker"><span>01</span><span>The school</span></div>
        <div className="intro-grid">
          <h2>Good education<br />makes room <em>to become.</em></h2>
          <div className="intro-copy">
            <p>Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust. Today, the co-educational CBSE school welcomes students from Class IV to XII for boarding and day school.</p>
            <a className="underlined-link" href="https://tis.edu.in/about-tis/" target="_blank" rel="noreferrer">More about Tula’s <ArrowIcon /></a>
          </div>
        </div>
        <div className="fact-row" aria-label="School information">
          <div><span className="fact-label">Curriculum</span><strong>CBSE</strong></div>
          <div><span className="fact-label">Classes</span><strong>IV–XII</strong></div>
          <div><span className="fact-label">School life</span><strong>Boarding & day</strong></div>
          <div><span className="fact-label">Location</span><strong>Dehradun, India</strong></div>
        </div>
      </section></ScrollReveal>

      <div className="school-marquee" aria-label="Academics, sport, music, art, drama and curiosity">
        <div className="school-marquee-track" aria-hidden="true">
          <span>ACADEMICS</span><i>✳</i><span>SPORT</span><i>✳</i><span>MUSIC</span><i>✳</i><span>ART & DRAMA</span><i>✳</i><span>CURIOSITY</span><i>✳</i><span>ACADEMICS</span><i>✳</i><span>SPORT</span><i>✳</i><span>MUSIC</span><i>✳</i><span>ART & DRAMA</span><i>✳</i><span>CURIOSITY</span><i>✳</i>
        </div>
      </div>

      <ScrollReveal><section id="learning" className="learning-section section-pad">
        <div className="section-kicker section-kicker-light"><span>02</span><span>Learning</span></div>
        <div className="learning-heading">
          <h2>Think deeply.<br /><em>Try something new.</em></h2>
          <p>The school follows the CBSE course structure. Learning continues beyond the classroom through sport, creative pursuits and opportunities to explore.</p>
        </div>
        <div className="learning-cards">
          <article className="learning-card learning-card-feature">
            <span className="card-number">01</span>
            <div><p className="card-label">In the classroom</p><h3>Build understanding,<br />one question at a time.</h3><a href="https://tis.edu.in/academics/affilation/" target="_blank" rel="noreferrer" aria-label="Read about the CBSE curriculum">Explore academics <ArrowIcon /></a></div>
            <span className="card-mark" aria-hidden="true">?</span>
          </article>
          <article className="learning-card learning-card-quiet">
            <span className="card-number">02</span>
            <div><p className="card-label">Beyond academics</p><h3>Find a practice<br />that feels like yours.</h3><a href="#life">See school life <ArrowIcon /></a></div>
            <span className="card-mark card-mark-sun" aria-hidden="true">✳</span>
          </article>
        </div>
      </section></ScrollReveal>

      <ScrollReveal><SchoolExperience /></ScrollReveal>

      <HomeHighlights />

      <ScrollReveal><section id="visit" className="visit-section">
        <div className="visit-copy">
          <div className="section-kicker section-kicker-light"><span>11</span><span>Come see for yourself</span></div>
          <h2>Some things<br />are best <em>experienced.</em></h2>
          <p>Talk to the admissions team or plan a visit to the school in Dhoolkot, Dehradun.</p>
          <div className="visit-actions"><a className="button-light" href={admissionsUrl} target="_blank" rel="noreferrer">Admissions portal <ArrowIcon /></a><a className="visit-phone" href="tel:+919837983791">+91 98379 83791</a></div>
        </div>
        <div className="visit-address">
          <span className="address-label">Find Tula’s</span>
          <address>Dhoolkot, P.O. Selaqui,<br />Chakrata Road, Dehradun<br />Uttarakhand 248011, India</address>
          <p className="visit-phones"><a href="tel:+919837983791">Admissions · +91 98379 83791</a><br /><a href="tel:+911352699444">Landline · 0135 2699444</a><br /><a href="tel:+911352699666">0135 2699666</a><br /><a href="mailto:info@tis.edu.in">info@tis.edu.in</a></p>
          <a href="https://maps.app.goo.gl/maBF8syXueQkw31E6" target="_blank" rel="noreferrer">Open map <ArrowIcon /></a>
        </div>
        <div className="visit-orbit" aria-hidden="true">T</div>
      </section></ScrollReveal>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#home"><Image className="wordmark-symbol" src={`${officialMedia}schoolLogo.95f6e121.png`} alt="" width={42} height={42} unoptimized /><span className="wordmark-copy"><strong>TULAS</strong><small>INTERNATIONAL SCHOOL</small></span></a>
        <p>Dhoolkot, Selaqui · Dehradun, Uttarakhand</p>
        <div className="footer-links"><a href="mailto:info@tis.edu.in">Email</a><a href="tel:+919837983791">Call</a><a href="https://tis.edu.in/cbse-documents/" target="_blank" rel="noreferrer">Mandatory disclosure</a></div>
        <span className="copyright">© {new Date().getFullYear()} Tula’s International School</span>
      </footer>
    </div>
  );
}
