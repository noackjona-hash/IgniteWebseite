import { useLanguage } from '../i18n/LanguageProvider';
import './Footer.css';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <img src="/logo.webp" alt="IGNITE" className="footer__logo" />
            <div>
              <h3 className="footer__title">IGNITE</h3>
              <p className="footer__tagline">{t('hero.subtitle')}</p>
            </div>
          </div>
          <div className="footer__info">
            <p className="footer__copyright">{t('footer.copyright')}</p>
            <p className="footer__disclaimer">{t('footer.disclaimer')}</p>
          </div>
          <div className="footer__made">
            <p>{t('footer.made_with')} <span className="footer__heart">❤️</span> {lang === 'de' ? 'in Pforzheim' : 'in Pforzheim, Germany'}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
