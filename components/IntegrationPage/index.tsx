import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Image, { StaticImageData } from "next/image";

// components
import Integrate from "./Integrate";

// images
import postnord from "../../public/assets/images/postnord.png";
import shopify from "../../public/assets/images/shopify.png";
import loptop from "../../public/assets/images/loptop.png";
// import brands from "../../public/assets/images/brands.png"
import integrationBrandsForMobile from "../../public/assets/images/integration-brands-for mobile.png";

// styles
import styles from "../IntegrationPage/IntegrationPage.module.scss";

export interface Istate {
  image: StaticImageData;
  title: string;
  subTitle: string;
  category: string;
  link: string;
}

export default function index() {
  const integrationList: Istate[] = [
    {
      image: shopify,
      title: "Shopify",
      subTitle:
        "Shopify is a complete commerce platform that lets you start, grow, and manage a business.",
      category: "Ecommerce",
      link: "https://www.shopify.com",
    },
    {
      image: postnord,
      title: "Postnord",
      subTitle:
        "PostNord is a provider of postal services operating mainly in the Nordic countries.",
      category: "Shipping",
      link: "https://www.postnord.com",
    },
  ];
  return (
    <>
      <div className="otherPage ">
        <div className={`${styles.content} `}>
          <div className="">
            <Row className="mx-0">
              <Col md={6}>
                {" "}
                <h1>
                  Connect to <br /> leaders Platforms.{" "}
                </h1>
                <p>
                  Persifund integrates with the leading platforms, apps, and
                  services to create and run your online business.
                </p>
              </Col>

              <Col md={6}>
                <Image
                  src={loptop}
                  className={`${styles.loptop} d-md-inline-block d-none`}
                  alt="loptop"
                  width={1100}
                  height={582.62}
                />

                {/* show in mobile */}
                {/* <Image
    src={integrationBrandsForMobile}
    className={`${styles.integration_brands_for_mobile} d-md-none`}
    alt="brands"
    width={342}
    height={159}
  /> */}

                {/* <Image
    src={integrationMainForMobile}
    className={`${styles.integration_main_for_mobile} d-md-none`}
    alt="brands"
    // width={419}
    // height={324}
  /> */}
              </Col>
            </Row>
          </div>
        </div>

        <div className="my_container">
          <Row
            className={`d-flex justify-content-center align-items-stretch mx-0 ${styles.integrates_container}`}
          >
            {integrationList.map((integrate) => (
              <Col
                style={{ maxWidth: "400px" }}
                key={integrate.title}
                className="d-flex align-items-stretch m-2"
              >
                <Integrate data={integrate} />
              </Col>
            ))}
          </Row>

          <section className={styles.call_to_action}>
            <div className={styles.title}>Let’s talk about integrations!</div>
            <div className={styles.description}>
              Interested in building an integration? We’d love to connect to
              help you get started.
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://calendly.com/persifund-support-team/30-minute-meeting`}
              className={`text-decoration-none ${styles.connect_store_button}`}
            >
              Book a Demo
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
