import React from "react";
import styles from "./pricing.module.css";
import PricingItem from "../PricingItem/pricing-item";
import { withTranslation } from "react-i18next";

const Pricing = ({ t }) => {
  const pricingData = [
    {
      price: "12$ / 1lb",
      productWeight: t("product-weight-title.label"),
      country: t("country-title.label"),
      duration: t("duration-title.label"),
      delivery: "airplane",
    },
    {
      price: "6$ / 1lb",
      productWeight: "2lb - 20lb",
      country: t("country-title.label"),
      duration: t("duration-title.label"),
      delivery: "airplane",
    },
    {
      price: "5.5$ / 1lb",
      productWeight: "20lb - 40lb",
      country: t("country-title.label"),
      duration: t("duration-title.label"),
      delivery: "airplane",
    },
    {
      price: "5$ / 1lb",
      productWeight: t("product2-title.label"),
      country: t("country-title.label"),
      duration: t("duration-title.label"),
      delivery: "airplane",
    },
  ];

  const shipData = [
    {
      price: `40$ ${t("ship-price-fixed.label")}`,
      productWeight: t("ship-weight-title.label"),
      country: t("country-title.label"),
      duration: t("duration-title.label"),
      delivery: "ship",
    },
    {
      price: "4$ / 1lb",
      productWeight: t("ship1-weight-title.label"),
      country: t("country-title.label"),
      duration: t("duration-title.label"),
      delivery: "ship",
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

      <div className={styles.pricingContainer}>
        {shipData.map((item, index) => (
          <PricingItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default withTranslation()(Pricing);
