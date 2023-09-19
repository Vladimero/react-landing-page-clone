import './App.css';
import styles from './App.module.scss';
import heroImage from './images/heroImage.png';
import { ReactComponent as Logo } from './images/Logo.svg';

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
            <div>
              <h1>Your</h1>
              <img src={heroImage} alt="Image cannot be loaded" />
            </div>
            <div>
              <h1>knowledge assistant</h1>
            </div>

            <div>
              <p>
                Get ready-to-use answers from all your knowledge and quit manual
                organization for good.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
