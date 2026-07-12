import { useLanguage } from '../i18n/LanguageProvider';
import useSEO from '../hooks/useSEO';
import AnimatedSection from '../components/AnimatedSection';
import './ArchitecturePage.css';

export default function ArchitecturePage() {
  const { t } = useLanguage();

  useSEO({
    title: t('seo.arch_title'),
    description: t('seo.arch_desc'),
    keywords: t('seo.arch_keys')
  });

  const backends = [
    {
      title: t('architecture.gpu_title'),
      tech: t('architecture.gpu_tech'),
      speed: t('architecture.gpu_speed'),
      desc: t('architecture.gpu_desc'),
      icon: '🟢',
      color: '#22c55e',
      barWidth: '95%',
    },
    {
      title: t('architecture.rust_title'),
      tech: t('architecture.rust_tech'),
      speed: t('architecture.rust_speed'),
      desc: t('architecture.rust_desc'),
      icon: '🟡',
      color: '#f59e0b',
      barWidth: '70%',
    },
    {
      title: t('architecture.python_title'),
      tech: t('architecture.python_tech'),
      speed: t('architecture.python_speed'),
      desc: t('architecture.python_desc'),
      icon: '🔵',
      color: '#3b82f6',
      barWidth: '40%',
    },
  ];

  const optimizations = [
    { title: t('architecture.opt1_title'), desc: t('architecture.opt1_desc'), icon: '⚡' },
    { title: t('architecture.opt2_title'), desc: t('architecture.opt2_desc'), icon: '🔢' },
    { title: t('architecture.opt3_title'), desc: t('architecture.opt3_desc'), icon: '🧵' },
    { title: t('architecture.opt4_title'), desc: t('architecture.opt4_desc'), icon: '💾' },
    { title: t('architecture.opt5_title'), desc: t('architecture.opt5_desc'), icon: '🎛️' },
  ];

  const techStack = [
    { name: 'Python', desc: 'CustomTkinter GUI', color: '#3776AB' },
    { name: 'Rust', desc: 'Rayon + PyO3 Core', color: '#CE422B' },
    { name: 'PyTorch', desc: 'CUDA GPU Backend', color: '#EE4C2C' },
    { name: 'OpenCV', desc: 'CPU Fallback', color: '#5C3EE8' },
  ];

  return (
    <main className="arch-page">
      <section className="arch-hero">
        <div className="arch-hero__bg" />
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="badge">🚀 {t('architecture.title')}</span>
            <h1 className="section-title arch-hero__title">{t('architecture.title')}</h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>{t('architecture.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Backend Decision */}
      <section className="section" id="backend-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">{t('architecture.backend_title')}</h2>
            <p className="section-subtitle">{t('architecture.backend_desc')}</p>
          </AnimatedSection>

          <div className="arch__flow">
            <AnimatedSection className="arch__flow-node arch__flow-node--start" delay={0.1}>
              <span>🖼️</span>
              <span>{t('architecture.backend_title')}</span>
            </AnimatedSection>

            <div className="arch__flow-arrow">→</div>

            <div className="arch__backends">
              {backends.map((b, i) => (
                <AnimatedSection key={i} className="glass-card arch__backend" delay={0.2 + i * 0.1}>
                  <div className="arch__backend-header">
                    <span className="arch__backend-icon">{b.icon}</span>
                    <div>
                      <h3 className="arch__backend-title">{b.title}</h3>
                      <span className="arch__backend-tech">{b.tech}</span>
                    </div>
                    <span className="arch__backend-speed" style={{ color: b.color }}>{b.speed}</span>
                  </div>
                  <p className="arch__backend-desc">{b.desc}</p>
                  <div className="arch__backend-bar">
                    <div className="arch__backend-bar-fill" style={{ width: b.barWidth, background: b.color }} />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section section--alt" id="tech-section">
        <div className="container">
          <AnimatedSection className="text-center">
            <h2 className="section-title">{t('architecture.tech_title')}</h2>
          </AnimatedSection>

          <div className="tech__grid">
            {techStack.map((tech, i) => (
              <AnimatedSection key={i} className="glass-card tech__card" delay={i * 0.1}>
                <div className="tech__color-dot" style={{ background: tech.color }} />
                <h3 className="tech__name">{tech.name}</h3>
                <p className="tech__desc">{tech.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Optimizations */}
      <section className="section" id="optimizations-section">
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="badge">⚡ {t('architecture.opt_title')}</span>
            <h2 className="section-title">{t('architecture.opt_title')}</h2>
          </AnimatedSection>

          <div className="opt__grid">
            {optimizations.map((opt, i) => (
              <AnimatedSection key={i} className="glass-card opt__card" delay={i * 0.08}>
                <span className="opt__icon">{opt.icon}</span>
                <h3 className="opt__title">{opt.title}</h3>
                <p className="opt__desc">{opt.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
