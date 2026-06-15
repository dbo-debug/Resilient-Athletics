import { ButtonLink } from './components/ButtonLink';
import { ImagePlaceholder } from './components/ImagePlaceholder';
import { SectionHeading } from './components/SectionHeading';
import { ServiceCard } from './components/ServiceCard';

const services = [
  {
    title: 'Group Classes',
    description:
      'Coach-led training sessions that build strength, work capacity, and consistency in a focused small-group environment.',
  },
  {
    title: 'Private Coaching',
    description:
      'Individual programming and one-on-one support for athletes who want more attention, structure, and accountability.',
  },
  {
    title: 'Strength & Conditioning',
    description:
      'Progressive training built around movement quality, resilience, and measurable performance that carries into daily life.',
  },
];

const galleryItems = [
  'Coached lifting session',
  'Conditioning floor',
  'Team training energy',
];

function App() {
  return (
    <div className="page-shell">
      <header className="hero section section-dark">
        <div className="logo-lockup">
          <img
            className="brand-logo"
            src="/resilient-athletics-logo.png"
            alt="Resilient Athletics"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Premium training gym</p>
          <h1>Resilient Athletics</h1>
          <p className="hero-subheadline">
            Strength. Conditioning. Coaching built for real life.
          </p>
        </div>
        <div className="cta-row">
          <ButtonLink href="#services">View Classes</ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            Book Private Training
          </ButtonLink>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="content-grid content-grid-tight">
            <SectionHeading
              eyebrow="About"
              title="Hard training with a clear purpose."
            />
            <div className="body-copy">
              <p>
                Resilient Athletics is built for people who want serious coaching
                without the noise. Our coaches bring experience, structure, and
                attention to detail so every session has intent.
              </p>
              <p>
                Expect smart programming, challenging work, and a community that
                pushes together. The goal is simple: help you get stronger, move
                better, and stay consistent for the long term.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="services">
          <SectionHeading
            eyebrow="Services"
            title="Training options built around how you train best."
            centered
          />
          <div className="card-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>

        <section className="section" id="gallery">
          <SectionHeading
            eyebrow="Space"
            title="Simple placeholders for future training photography."
          />
          <div className="image-grid">
            {galleryItems.map((label, index) => (
              <ImagePlaceholder
                key={label}
                label={label}
                accent={`0${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="section section-cta" id="contact">
          <div className="cta-panel">
            <SectionHeading
              eyebrow="Contact"
              title="Ready to train?"
            />
            <p className="body-copy single-column">
              Reach out to schedule your first session, ask about class times,
              or talk through the best starting point for your goals.
            </p>
            <div className="cta-row">
              <ButtonLink href="mailto:hello@resilientathletics.com">
                Get Started
              </ButtonLink>
            </div>
            <p className="contact-meta">
              Placeholder contact: hello@resilientathletics.com
              <br />
              123 Training Ave, Suite 100, Your City
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
