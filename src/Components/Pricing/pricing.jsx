import React from "react";
import styles from "./pricing.module.css";
import PricingItem from "../PricingItem/pricing-item";
import { withTranslation } from "react-i18next";

const Pricing = ({ t }) => {
  const pricingData = [
    {
      price: 12,
      productWeight: t("product-weight-title.label"),
      country: t("country-title.label"),
      duration: t("duration-title.label"),
      takeFromHome: t("take-from-title.label"),
    },
    {
      price: 6,
      productWeight: "2lb - 20lb",
      country: t("country-title.label"),
      duration: t("duration-title.label"),
      takeFromHome: t("take-from-title.label"),
    },
    {
      price: 5.5,
      productWeight: "20lb - 40lb",
      country: t("country-title.label"),
      duration: t("duration-title.label"),
      takeFromHome: t("take-from-title.label"),
    },
    {
      price: 5,
      productWeight: t("product2-title.label"),
      country: t("country-title.label"),
      duration: t("duration-title.label"),
      takeFromHome: t("take-from-title.label"),
    },
  ];
  return (
    <div id="pricing" className={styles.pricing}>
      <div className={styles.pricingSubtitle}>
        {t("pricing-title.label")}
        <span className={styles.pricingSubtitleUnderline}> </span>
      </div>
      <div className={styles.pricingContainer}>
        {pricingData.map((item, index) => (
          <PricingItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default withTranslation()(Pricing);
