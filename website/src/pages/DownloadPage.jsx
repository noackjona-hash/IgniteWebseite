import { useLanguage } from '../i18n/LanguageProvider';
import useSEO from '../hooks/useSEO';
import AnimatedSection from '../components/AnimatedSection';
import './DownloadPage.css';

export default function DownloadPage() {
  const { t } = useLanguage();

  useSEO({
    title: t('seo.dl_title'),
    description: t('seo.dl_desc'),
    keywords: t('seo.dl_keys')
  });

  const steps = [
    { num: 1, title: t('download.install_step1'), desc: t('download.install_step1_desc'), icon: '📥' },
    { num: 2, title: t('download.install_step2'), desc: t('download.install_step2_desc'), icon: '⚙️' },
    { num: 3, title: t('download.install_step3'), desc: t('download.install_step3_desc'), icon: '🚀' },
  ];

  return (
    <main className="download-page">
      <section className="dl-hero">
        <div className="dl-hero__bg">
          <div className="dl-hero__orb" />
        </div>
        <div className="container text-center">
          <AnimatedSection>
            <span className="badge">📦 {t('download.version')}</span>
            <h1 className="section-title dl-hero__title">{t('download.title')}</h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>{t('download.subtitle')}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="dl-hero__cta">
              <a
                href="https://github.com/noackjona-hash/JonaNoackIgnite/releases/tag/Release"
                className="btn btn--download"
                id="download-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                {t('download.button')}
              </a>
              <p className="dl-hero__size">{t('download.size')}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Requirements */}
      <section className="section section--alt" id="requirements-section">
        <div className="container">
          <div className="dl__grid">
            <AnimatedSection className="glass-card dl__requirements">
              <h2 className="dl__section-title">{t('download.req_title')}</h2>
              <ul className="dl__req-list">
                <li className="dl__req-item">
                  <span className="dl__req-icon">💻</span>
                  <span>{t('download.req_os')}</span>
                </li>
                <li className="dl__req-item">
                  <span className="dl__req-icon">🐍</span>
                  <span>{t('download.req_python')}</span>
                </li>
                <li className="dl__req-item dl__req-item--optional">
                  <span className="dl__req-icon">🎮</span>
                  <span>{t('download.req_gpu')}</span>
                </li>
                <li className="dl__req-item dl__req-item--optional">
                  <span className="dl__req-icon">🦀</span>
                  <span>{t('download.req_rust')}</span>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="dl__install" delay={0.1}>
              <h2 className="dl__section-title">{t('download.install_title')}</h2>
              <div className="dl__steps">
                {steps.map((step, i) => (
                  <div key={i} className="glass-card dl__step">
                    <div className="dl__step-header">
                      <span className="dl__step-icon">{step.icon}</span>
                      <span className="dl__step-num">{step.num}</span>
                    </div>
                    <h3 className="dl__step-title">{step.title}</h3>
                    <p className="dl__step-desc">{step.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="dl__disclaimer" delay={0.3}>
            <p>⚠️ {t('download.disclaimer')}</p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
