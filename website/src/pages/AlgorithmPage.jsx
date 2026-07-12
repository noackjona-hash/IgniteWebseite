import { useLanguage } from '../i18n/LanguageProvider';
import useSEO from '../hooks/useSEO';
import AnimatedSection from '../components/AnimatedSection';
import './AlgorithmPage.css';

export default function AlgorithmPage() {
  const { t } = useLanguage();

  useSEO({
    title: t('seo.algo_title'),
    description: t('seo.algo_desc'),
    keywords: t('seo.algo_keys')
  });

  const steps = [
    {
      num: 1,
      title: t('algorithm.step1_title'),
      desc: t('algorithm.step1_desc'),
      formula: t('algorithm.step1_formula'),
      image: '/pipeline/step1_original.png',
      color: 'var(--thermal-cold)',
    },
    {
      num: 2,
      title: t('algorithm.step2_title'),
      desc: t('algorithm.step2_desc'),
      formula: t('algorithm.step2_formula'),
      image: '/pipeline/step2_mask.png',
      color: 'var(--accent)',
    },
    {
      num: 3,
      title: t('algorithm.step3_title'),
      desc: t('algorithm.step3_desc'),
      formula: t('algorithm.step3_formula'),
      image: '/pipeline/step3_heat_diff.png',
      color: 'var(--thermal-warm)',
    },
    {
      num: 4,
      title: t('algorithm.step4_title'),
      desc: t('algorithm.step4_desc'),
      formula: t('algorithm.step4_formula'),
      image: null,
      color: 'var(--thermal-hot)',
    },
    {
      num: 5,
      title: t('algorithm.step5_title'),
      desc: t('algorithm.step5_desc'),
      formula: t('algorithm.step5_formula'),
      image: '/pipeline/step4_hotspots.png',
      color: '#22c55e',
    },
  ];

  return (
    <main className="algorithm-page">
      <section className="algo-hero">
        <div className="algo-hero__bg" />
        <div className="container">
          <AnimatedSection className="algo-hero__content text-center">
            <span className="badge">🧮 {t('algorithm.title')}</span>
            <h1 className="section-title algo-hero__title">{t('algorithm.title')}</h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>{t('algorithm.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="pipeline">
            <div className="pipeline__line" />

            {steps.map((step, i) => (
              <AnimatedSection
                key={step.num}
                className="pipeline__step"
                delay={i * 0.1}
              >
                <div className="pipeline__marker" style={{ '--step-color': step.color }}>
                  <span className="pipeline__num">{step.num}</span>
                </div>

                <div className="pipeline__card glass-card">
                  <div className="pipeline__card-header">
                    <span className="pipeline__step-label" style={{ color: step.color }}>
                      Feature {String.fromCharCode(64 + step.num)}
                    </span>
                    <h3 className="pipeline__title">{step.title}</h3>
                  </div>

                  <p className="pipeline__desc">{step.desc}</p>

                  <div className="pipeline__formula">
                    <code>{step.formula}</code>
                  </div>

                  {step.image && (
                    <div className="pipeline__image-wrapper">
                      <img src={step.image} alt={step.title} className="pipeline__image" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
