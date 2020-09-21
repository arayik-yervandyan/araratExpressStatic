import React, { Suspense } from "react";
import styles from "./main.module.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Pricing from "../Pricing/pricing";
import Step from "../Step/step";
import HeroBaner from "../HeroBanner/hero-baner";
import AboutUs from "../AboutUs/about-us";
import ContactUs from "../ContactUs/contact-us";
import ServiceInfo from "../ServiceInfo/service-info";
import "../../i18n";
import SideBar from "../SideBar/side-bar";

const Main = () => {
  return (
    <Suspense fallback={null}>
      <div className={styles.main}>
        <Header />
        <SideBar />
        <HeroBaner />
        <Step />
        <AboutUs />
        <ServiceInfo />
        <Pricing />
        <ContactUs />
        <Footer />
      </div>
    </Suspense>
  );
};

export default Main;
