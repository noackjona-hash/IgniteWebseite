import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageProvider';
import useSEO from '../hooks/useSEO';
import AnimatedSection from '../components/AnimatedSection';
import StatCounter from '../components/StatCounter';
import './HeroPage.css';

export default function HeroPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  useSEO({
    title: t('seo.home_title'),
    description: t('seo.home_desc'),
    keywords: t('seo.home_keys')
  });

  const screenshots = [
    { key: 'landing', src: '/screenshots/landingpage.png', label: t('preview.tab_landing') },
    { key: 'analysis', src: '/screenshots/programm_usage.png', label: t('preview.tab_analysis') },
    { key: 'steps', src: '/screenshots/schritte.png', label: t('preview.tab_steps') },
    { key: 'results', src: '/screenshots/ergebnissdiagramm.png', label: t('preview.tab_results') },
  ];

  return (
    <main className="hero-page">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero-section">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
          <div className="hero__grid" />
        </div>

        <div className="container hero__content">
          <motion.div
            className="hero__logo-wrapper"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img src="/logo.png" alt="IGNITE Logo" className="hero__logo" />
            <div className="hero__logo-glow" />
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {t('hero.tagline')}
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Link to="/algorithm" className="btn btn--primary btn--large" id="hero-cta-algorithm">
              {t('hero.cta_algorithm')}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link to="/download" className="btn btn--secondary btn--large" id="hero-cta-download">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {t('hero.cta_download')}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-dot" />
          </div>
        </motion.div>
      </section>

      {/* ===== PROBLEM / WARUM ===== */}
      <section className="section section--alt" id="problem-section">
        <div className="container">
          <AnimatedSection>
            <span className="badge">🔬 {t('problem.badge')}</span>
            <h2 className="section-title">{t('problem.title')}</h2>
          </AnimatedSection>

          <div className="problem__grid">
            <AnimatedSection className="problem__text" delay={0.1}>
              <p className="problem__description">{t('problem.description')}</p>
            </AnimatedSection>

            <AnimatedSection className="problem__stats" delay={0.2}>
              <div className="glass-card problem__stat">
                <span className="problem__stat-value">{t('problem.stat1_value')}</span>
                <span className="problem__stat-label">{t('problem.stat1_label')}</span>
              </div>
              <div className="glass-card problem__stat">
                <span className="problem__stat-value">{t('problem.stat2_value')}</span>
                <span className="problem__stat-label">{t('problem.stat2_label')}</span>
              </div>
              <div className="glass-card problem__stat problem__stat--highlight">
                <span className="problem__stat-value">{t('problem.stat3_value')}</span>
                <span className="problem__stat-label">{t('problem.stat3_label')}</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section" id="features-section">
        <div className="container text-center">
          <AnimatedSection>
            <span className="badge">⚙️ {t('features.badge')}</span>
            <h2 className="section-title">{t('features.title')}</h2>
          </AnimatedSection>

          <div className="features__grid">
            <AnimatedSection className="glass-card feature-card" delay={0.1}>
              <div className="feature-card__icon feature-card__icon--fire">🔥</div>
              <h3 className="feature-card__title">{t('features.feature1_title')}</h3>
              <p className="feature-card__desc">{t('features.feature1_desc')}</p>
            </AnimatedSection>

            <AnimatedSection className="glass-card feature-card" delay={0.2}>
              <div className="feature-card__icon feature-card__icon--foot">🦶</div>
              <h3 className="feature-card__title">{t('features.feature2_title')}</h3>
              <p className="feature-card__desc">{t('features.feature2_desc')}</p>
            </AnimatedSection>

            <AnimatedSection className="glass-card feature-card" delay={0.3}>
              <div className="feature-card__icon feature-card__icon--bolt">⚡</div>
              <h3 className="feature-card__title">{t('features.feature3_title')}</h3>
              <p className="feature-card__desc">{t('features.feature3_desc')}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== PERFORMANCE STATS ===== */}
      <section className="section section--alt" id="stats-section">
        <div className="container text-center">
          <AnimatedSection>
            <span className="badge">📊 {t('stats.badge')}</span>
            <h2 className="section-title">{t('stats.title')}</h2>
          </AnimatedSection>

          <div className="stats__grid">
            <StatCounter value={t('stats.stat1_value')} unit={t('stats.stat1_unit')} label={t('stats.stat1_label')} />
            <StatCounter value={t('stats.stat2_value')} unit={t('stats.stat2_unit')} label={t('stats.stat2_label')} />
            <StatCounter value={t('stats.stat3_value')} unit={t('stats.stat3_unit')} label={t('stats.stat3_label')} />
            <StatCounter value={t('stats.stat4_value')} unit={t('stats.stat4_unit')} label={t('stats.stat4_label')} />
          </div>
        </div>
      </section>

      {/* ===== APP PREVIEW ===== */}
      <section className="section" id="preview-section">
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="badge">💻 {t('preview.badge')}</span>
            <h2 className="section-title">{t('preview.title')}</h2>
          </AnimatedSection>

          <AnimatedSection className="preview" delay={0.2}>
            <div className="preview__tabs">
              {screenshots.map((s, i) => (
                <button
                  key={s.key}
                  className={`preview__tab ${activeTab === i ? 'preview__tab--active' : ''}`}
                  onClick={() => setActiveTab(i)}
                  id={`preview-tab-${s.key}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <div className="preview__window">
              <div className="preview__titlebar">
                <div className="preview__dots">
                  <span className="preview__dot preview__dot--red" />
                  <span className="preview__dot preview__dot--yellow" />
                  <span className="preview__dot preview__dot--green" />
                </div>
                <span className="preview__titlebar-text">IGNITE Medical Imaging Suite v2.4.1</span>
              </div>
              <div className="preview__content">
                <motion.img
                  key={activeTab}
                  src={screenshots[activeTab].src}
                  alt={screenshots[activeTab].label}
                  className="preview__image"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section cta-section" id="cta-section">
        <div className="cta-section__bg" />
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="cta-section__title">{t('cta.title')}</h2>
            <p className="cta-section__subtitle">{t('cta.subtitle')}</p>
            <Link to="/download" className="btn btn--download" id="cta-download">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {t('cta.button')}
            </Link>
            <p className="cta-section__version">{t('cta.version')}</p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
