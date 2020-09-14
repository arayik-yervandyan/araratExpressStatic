import React from "react";
import styles from "./contact-us.module.css";
import { withTranslation } from "react-i18next";

const ContactUs = ({ t }) => {
  return (
    <div id="contact" className={styles.contactUs}>
      <div className={styles.contactUsContainer}>
        <div className={styles.Subtitle}>
          <h2>{t("contact.label")}</h2>
          <span></span>
        </div>
        <div className={styles.info}>
          <div className={styles.adress}>
            <div className={styles.adressContainer}>
              <h3>{t("address.label")}</h3>
              <p>{t("address-title.label")}</p>
              <h3> {t("phone.label")}</h3>
              <p>+1 732 425 15 35</p>
              <h3>{t("email.label")}</h3>
              <p>araratexpress@yahoo.com</p>
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              className={styles.mapIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.0825921063965!2d-74.36682468524181!3d40.296125070890746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3d0d38aa42b07%3A0x715e3584d6a7bfcd!2sStamford%20Square%20LLC!5e0!3m2!1sru!2s!4v1599652040439!5m2!1sru!2s"
              width="600"
              height="450"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(ContactUs);
