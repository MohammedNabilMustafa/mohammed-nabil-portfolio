import { useState } from 'react';
import { Send } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Hero from '../components/Hero';
import ContactChannels from '../components/ContactChannels';
import { contactContent, siteConfig } from '../data/site';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageMeta
        title={`Contact — ${siteConfig.name}`}
        description="Get in touch for custom ERP, CRM, commerce platforms, consulting engagements, or remote opportunities."
      />

      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <p className="eyebrow">Contact</p>
          <h1>{contactContent.headline}</h1>
          <p>{contactContent.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-layout__channels">
            <h2>Connect Directly</h2>
            <p className="prose">Available for consulting, platform development, and remote opportunities.</p>
            <ContactChannels />
          </div>

          <div className="contact-form-panel">
            {sent ? (
              <div className="contact-sent">
                <Send size={28} strokeWidth={1.5} />
                <h3>Message Received</h3>
                <p>Thank you for reaching out. Connect the form to your email backend to enable live submissions.</p>
              </div>
            ) : (
              <>
                <h2>Send a Message</h2>
                <form
                  className="contact-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="form-field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" required placeholder="Your name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" required placeholder="you@company.com" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input id="company" placeholder="Company name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="message">Business Requirements</label>
                    <textarea id="message" rows={5} required placeholder="Describe your business challenges and what you need built..." />
                  </div>
                  <button type="submit" className="btn btn--primary btn--full">
                    {contactContent.cta}
                    <Send size={17} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
