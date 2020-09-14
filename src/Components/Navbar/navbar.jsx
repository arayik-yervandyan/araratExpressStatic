import React, { useState } from "react";
import styles from "./navbar.module.css";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

const Navbar = ({ t }) => {
  const [lang, setLang] = useState("us");
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = lang === "us" ? "am" : "us";
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <div className={styles.item}>
          <a href="#home" className={styles.navLink}>
            {t("home.label")}
          </a>
          <a href="#pricing" className={styles.navLink}>
            {t("pricing.label")}
          </a>
          <a href="#about" className={styles.navLink}>
            {t("about.label")}
          </a>
          <a href="#contact" className={styles.navLink}>
            {t("contact.label")}
          </a>
          <a href="#" className={styles.navLink}>
            <span className={styles.languageIcon} onClick={changeLanguage}>
              <img src={lang === "us" ? "/img/hy.svg" : "/img/en.svg"} alt="" />
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default withTranslation()(Navbar);
