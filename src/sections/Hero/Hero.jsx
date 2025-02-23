import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";

function Hero() {
  return (
    <section id="hero" className={styles.Container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Limz profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
    </section>
  );
}

export default Hero;
