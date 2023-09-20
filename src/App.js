import './App.css';
import styles from './App.module.scss';
import footerImage from './images/footerImage.png';
import aiImage from './images/heroImage.png';
import { ReactComponent as Logo } from './images/Logo.svg';
import macInterface from './images/macInterface.png';
import { ReactComponent as Direction } from './images/mainButtonDirection.svg';
import { ReactComponent as BainCompanyLogo } from './images/partner/bainCompanyLogo.svg';
import { ReactComponent as CreditSuisseLogo } from './images/partner/creditSuisseLogo.svg';
import { ReactComponent as GartnerLogo } from './images/partner/gartnerLogo.svg';
import { ReactComponent as HarvardLogo } from './images/partner/harvardLogo.svg';
import { ReactComponent as McKinseyLogo } from './images/partner/mcKinseyLogo.svg';
import { ReactComponent as MorgenStanleyLogo } from './images/partner/morgenStanleyLogo.svg';
import { ReactComponent as MorningStartLogo } from './images/partner/morningStartLogo.svg';
import { ReactComponent as TheNewYorkTimesLogo } from './images/partner/theNewYorkTimesLogo.svg';

export default function App() {
  return (
    <>
      <main>
        <section className={styles.topSection}>
          <div>
            <header>
              <nav>
                <div>
                  <a href="/#" className={styles.brandLogo}>
                    <Logo />
                  </a>
                </div>
                <ul>
                  <li>
                    <a href="/#">Features</a>
                  </li>
                  <li>
                    <a href="/#">Twitter</a>
                  </li>
                  <li>
                    <a href="/#">Blog</a>
                  </li>
                </ul>
              </nav>
            </header>
          </div>

          <div className={styles.container}>
            <div className={styles.heroSection}>
              <div className={styles.imageConnect}>
                <h1 className={styles.heroH1}>Your</h1>
                <div className={styles.imageContainer}>
                  <img
                    src={aiImage}
                    alt="Image cannot be loaded"
                    className={styles.heroImage}
                  />
                </div>
              </div>
              <div>
                <h1 className={styles.heroH1}>knowledge assistant</h1>
              </div>
            </div>

            <div className={styles.subHeroSection}>
              <p className={styles.subHeroText}>
                Get ready-to-use answers from all your knowledge <br /> and quit
                manual organization for good.
              </p>
              <div className={styles.heroButton}>
                <a href="/#" alt="not shown" className={styles.buttonBorder}>
                  GET STARTED FOR FREE
                  <Direction />
                </a>
              </div>
            </div>

            <div className={styles.imageBackground}>
              <img
                src={macInterface}
                alt="Image cannot be loaded"
                className={styles.hugeImage}
              />
              <p className={styles.introducePTag}>
                Loved by professionals from <br /> companies such as
              </p>
            </div>

            <div className={styles.logoList}>
              <BainCompanyLogo />
              <CreditSuisseLogo />
              <GartnerLogo />
              <HarvardLogo />
              <McKinseyLogo />
              <MorgenStanleyLogo />
              <MorningStartLogo />
              <TheNewYorkTimesLogo />
              <div className={styles.emptyPlace}>
                <div className={styles.blur}>
                  <img
                    src={footerImage}
                    alt="not loaded"
                    className={styles.headerFooterImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section></section>
      </main>
    </>
  );
}
