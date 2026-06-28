import { useState } from 'react';
import { Send } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import ContactChannels from '../components/ContactChannels';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { content } = useLanguage();
  const { meta, contact, common } = content;
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageMeta title={meta.contact.title} description={meta.contact.description} />

      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <p className="eyebrow">{common.nav.contact}</p>
          <h1>{contact.headline}</h1>
          <p>{contact.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-layout__channels">
            <h2>{common.connectDirectly}</h2>
            <p className="prose">{contact.availability}</p>
            <ContactChannels />
          </div>

          <div className="contact-form-panel">
            {sent ? (
              <div className="contact-sent">
                <Send size={28} strokeWidth={1.5} />
                <h3>{common.messageReceived}</h3>
                <p>{common.messageThanks}</p>
              </div>
            ) : (
              <>
                <h2>{common.sendMessage}</h2>
                <form
                  className="contact-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="form-field">
                    <label htmlFor="name">{common.form.name}</label>
                    <input id="name" required placeholder={common.form.namePlaceholder} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">{common.form.email}</label>
                    <input id="email" type="email" required placeholder={common.form.emailPlaceholder} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="company">{common.form.company}</label>
                    <input id="company" placeholder={common.form.companyPlaceholder} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="message">{common.form.message}</label>
                    <textarea id="message" rows={5} required placeholder={common.form.messagePlaceholder} />
                  </div>
                  <button type="submit" className="btn btn--primary btn--full">
                    {contact.cta}
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
