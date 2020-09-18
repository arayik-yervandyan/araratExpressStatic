import React, { useEffect } from "react";
import styles from "./navbar.module.css";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';


const Navbar = ({ t }) => {
  const { i18n } = useTranslation();
  const dropdown = React.createRef();
  
  const onSelectFlag = (countryCode) => {
    i18n.changeLanguage(countryCode.toLowerCase());
  };

  useEffect(() => {
    let defaultCountry = i18n.language.toLocaleUpperCase();
    defaultCountry = defaultCountry === 'EN' ? 'US' : defaultCountry;

    dropdown.current.updateSelected(defaultCountry);
  });

  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <div className={styles.item}>
          <a href="#home" className={`${styles.navLink} ${styles.desktopMenu}`}>
            {t("home.label")}
          </a>
          <a
            href="#pricing"
            className={`${styles.navLink} ${styles.desktopMenu}`}
          >
            {t("pricing.label")}
          </a>
          <a
            href="#about"
            className={`${styles.navLink} ${styles.desktopMenu}`}
          >
            {t("about.label")}
          </a>
          <a
            href="#contact"
            className={`${styles.navLink} ${styles.desktopMenu}`}
          >
            {t("contact.label")}
          </a>
          <a href="#" className={`${styles.navLink} ${styles.desktopMenu}`}>
          <ReactFlagsSelect ref={dropdown} defaultCountry="US"  showSelectedLabel={false} onSelect={onSelectFlag} showOptionLabel={false} countries={["US", "RU", "AM"]} />
          </a>
        </div>
      </nav>
    </div>  
  );
};

export default withTranslation()(Navbar);
