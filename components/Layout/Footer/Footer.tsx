import React from "react";
import Link from "next/link";
import Image from "next/image";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// images
import Logo from "../../../public/assets/images/Logo white - short.svg";
import twitterLogo from "../../../public/assets/images/twitter.png";
import linkdinLogo from "../../../public/assets/images/linkedin-white.svg";
import youtubeLogo from "../../../public/assets/images/youtube-white.svg";

// styles
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="my_container">
        <Row>
          <Col
            lg={3}
            md={6}
            xs={12}
            className="text-center text-md-start mb-md-5 mb-lg-0"
          >
            <Image className={styles.logo} src={Logo} alt="Logo" />
          </Col>
          <Col md={4} lg={3} xs={12} className="mt-5 mt-md-0">
            <div className={styles.title}>
              COMPANY <hr />
            </div>
            <Row className="flex-column">
              {/* <Col className={styles.item}><Link  href="about-us" ><a className={styles.menuItem}>About Us</a></Link></Col> */}
              {/* <Col className={styles.item}><Link href="plan"><a className={styles.menuItem}>Plan</a></Link></Col> */}
              <Col className={styles.item}>
                <Link
                  href="mailto:alireza@persifund.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.menuItem}
                >
                  Contact Us
                </Link>
              </Col>
              <Col className={styles.item}>
                <Link href="integration" className={styles.menuItem}>
                  Integration
                </Link>
              </Col>
            </Row>
          </Col>
          {/* <Col md={4} lg={3} xs={12} className="mt-5 mt-md-0">
          <div className={styles.title}>PRODUCT <hr/></div>
          <Row className="flex-column mx-0" >
              <Col className={styles.item}><Link  href="return" ><a className={styles.menuItem}>Return</a></Link></Col>
              <Col className={styles.item}><Link href="exchange"><a className={styles.menuItem}>Exchange</a></Link></Col>
              <Col className={styles.item}><Link href="analytic"><a className={styles.menuItem}>Analytic</a></Link></Col>
            </Row>
          </Col> */}
          {/* <Col md={4} lg={3} xs={12} className="mt-5 mt-md-0">
          <div className={styles.title}>RESOURCES <hr/></div>
          <Row className="flex-column mx-0">
              <Col className={styles.item}><Link  href="/" ><a className={styles.menuItem}>FAQs</a></Link></Col>
              <Col className={styles.item}><Link href="/"><a className={styles.menuItem}>Compare Us</a></Link></Col>
              <Col className={styles.item}><Link href="/"><a className={styles.menuItem}>Carees</a></Link></Col>
            </Row>
          </Col> */}
        </Row>

        <Row className={`${styles.social_media_section} mt-5 mt-md-0`}>
          <div className={styles.email}>support@persifund.com</div>
          <span className={styles.social_media}>
            <a
              href="https://twitter.com/persifund"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={twitterLogo}
                alt="twitterLogo"
                // width={30}
                height={30}
              />
            </a>
          </span>
          <span className={styles.social_media}>
            <a
              href="https://www.linkedin.com/company/persifund/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={linkdinLogo}
                alt="linkdin Logo"
                // width={30}
                height={30}
              />
            </a>
          </span>
          <span className={styles.social_media}>
            <a
              href="https://www.youtube.com/@persifund3445/featured"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="px-0"
                src={youtubeLogo}
                alt="youtube Logo"
                // width={30}
                height={30}
              />
            </a>
          </span>
        </Row>

        <hr
          className={styles.before_copyright_line}
          style={{ marginTop: "30px" }}
        />
        <div className={styles.copyright}>
          Copyright © {new Date().getFullYear()} Persifund AB (corp. No.
          559335-7865). Headquarters: Jönköping, Sweden. All rights reserved.
          <Link className={styles.privacy} href="privacy-policy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
