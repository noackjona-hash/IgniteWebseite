import { useLanguage } from '../i18n/LanguageProvider';
import useSEO from '../hooks/useSEO';
import AnimatedSection from '../components/AnimatedSection';
import './AboutPage.css';

export default function AboutPage() {
  const { t } = useLanguage();

  useSEO({
    title: t('seo.about_title'),
    description: t('seo.about_desc'),
    keywords: t('seo.about_keys')
  });

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__bg" />
        <div className="container text-center">
          <AnimatedSection>
            <span className="badge">👋 {t('about.title')}</span>
            <h1 className="section-title about-hero__title">{t('about.title')}</h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>{t('about.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section" id="developer-section">
        <div className="container">
          <div className="about__grid">
            <AnimatedSection className="about__developer">
              <div className="glass-card about__dev-card">
                <div className="about__dev-avatar">
                  <span className="about__dev-avatar-placeholder">JN</span>
                </div>
                <h2 className="about__dev-name">{t('about.dev_name')}</h2>
                <p className="about__dev-age">{t('about.dev_age')}</p>
                <div className="about__jufo-badge">
                  <span>🏆</span>
                  <span>{t('about.jufo_badge')}</span>
                </div>
              </div>
            </AnimatedSection>

            <div className="about__content">
              <AnimatedSection delay={0.1}>
                <div className="glass-card about__section-card">
                  <h3 className="about__card-title">
                    <span>👨‍💻</span> {t('about.dev_title')}
                  </h3>
                  <p className="about__card-text">{t('about.dev_bio')}</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="glass-card about__section-card">
                  <h3 className="about__card-title">
                    <span>🔬</span> {t('about.project_title')}
                  </h3>
                  <p className="about__card-text">{t('about.project_desc')}</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="glass-card about__section-card">
                  <h3 className="about__card-title">
                    <span>💡</span> {t('about.motivation_title')}
                  </h3>
                  <p className="about__card-text">{t('about.motivation_desc')}</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="glass-card about__section-card about__contact">
                  <h3 className="about__card-title">
                    <span>📧</span> {t('about.contact_title')}
                  </h3>
                  <p className="about__card-text">{t('about.contact_desc')}</p>
                  <a href="mailto:jona@ignite-project.de" className="btn btn--primary about__email-btn" id="contact-email" style={{ marginRight: 'var(--space-4)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {t('about.contact_email')}
                  </a>
                  <a href="https://github.com/noackjona-hash/JonaNoackIgnite" className="btn btn--secondary about__github-btn" target="_blank" rel="noopener noreferrer" id="contact-github">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    {t('about.contact_github')}
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
