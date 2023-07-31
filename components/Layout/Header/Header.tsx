import React from "react";
import Link from "next/link";
import Image from "next/image";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// icons
import { BsChevronDown } from "react-icons/bs";

// UI
import Button from "../../UI-Kit/Button/Button";

// images
import topWhiteLogo from "../../../public/assets/images/topWhiteLogo.svg";
import Logo from "../../../public/assets/images/Logo white - short.svg";
import LogoForMobile from "../../../public/assets/images/Logo white - short.svg";
import LoginIcon from "../../../public/assets/images/log-in.png";

// components
import MobileMenu from "./MobileMenu/MobileMenu";

// styles
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="h-100 my_container">
        <Row className="h-100 align-items-center mx-0">
          <Col xs={3} className="d-md-none">
            <MobileMenu />
          </Col>

          {/* logo */}
          <Col md={6} lg={2} xs={5}>
            <Link href="/">
              <Image
                className={styles.logo}
                src={topWhiteLogo}
                alt="Logo"
                width={153}
                height={37}
              />
              <Image
                className={styles.logo_for_mobile}
                src={LogoForMobile}
                alt="Logo"
                // width={100}
                height={30}
              />
            </Link>
          </Col>

          {/* menu */}
          <Col lg={6} className="d-none d-md-none d-lg-inline-block">
            <li>
              {/* <ul className={styles.menu_item_container}><span className={styles.menuItem}>Product <BsChevronDown/></span>
                    
                    
                    
                    <div className={styles.sub_menu}>
                      <Col >
                          <Row className={`${styles.menu_column} mx-0`}>
                              <Col >
                                
                                <span className={styles.sub_menu_title}>BASIC PRODUCTS</span>
                              <div className={styles.line}></div>
                              </Col>
                              <Col className={styles.sub_menu_item_container}><Link href="return"><a className={styles.sub_menu_item}>Return</a></Link></Col>
                              <Col className={styles.sub_menu_item_container}><Link href="exchange"><a className={styles.sub_menu_item}>Exchange</a></Link></Col>
                              <Col className={styles.sub_menu_item_container}><Link href="analytic"><a className={styles.sub_menu_item}>Analytic</a></Link></Col>
                          </Row>
                      </Col>
                       <Col style={{marginLeft:'80px'}}>
                      <Row className={`${styles.menu_column} mx-0`}>
                              <Col className="pe-0">
                                
                               <span className={styles.sub_menu_title}>CUSTOMIZE SERVICES </span> 
                                <div className={styles.line}></div></Col>
                              
                              <Col  className={styles.sub_menu_item_container}><Link href="/"><a className={styles.sub_menu_item}>Instant refund</a></Link></Col>
                              <Col className={styles.sub_menu_item_container}><Link href="/"><a className={styles.sub_menu_item}>Instant Credit</a></Link></Col>
                              <Col className={styles.sub_menu_item_container}><Link href="/"><a className={styles.sub_menu_item}>In-Store Returns</a></Link></Col>
                              <Col className={styles.sub_menu_item_container}><Link href="/"><a className={styles.sub_menu_item}>Auto cancellation</a></Link></Col>
                          </Row>
                      </Col> 
                    </div>


                    </ul> */}

              <ul className={styles.menu_item_container}>
                <Link href="integration" className={styles.menuItem}>
                  Integration
                </Link>
                {/* <Row className={styles.sub_menu}>
                      <Col>
                          <Row className={styles.menu_column}>
                              <Col className={styles.sub_menu_item_container}><Link href="/"><a className={styles.sub_menu_item}>Integrations</a></Link></Col>
                              <Col className={styles.sub_menu_item_container}><Link href="/"><a className={styles.sub_menu_item}>API</a></Link></Col>

                          </Row>
                      </Col>

                      </Row> */}
              </ul>
              {/* <ul className="text-center"><Link href="plan"><a className={styles.menuItem}>Plan</a></Link></ul> */}
              {/* <ul className="text-center"><span className={styles.menuItem}>Resources</span></ul> */}
            </li>
          </Col>
          <Col
            md={6}
            lg={4}
            xs={4}
            className="text-end pe-0 d-flex justify-content-end"
            style={{ zIndex: "1000" }}
          >
            {/* <Image src={LoginIcon}
              className={styles.login_icon}
              width={37}
              height={37}
            alt="login" 
              /> */}
            {/* <button className={`${styles.login_button} d-none d-md-none d-lg-inline-block`} > Login </button>  */}
            <a
              className={` ${styles.request_demo_button} text-decoration-none d-none d-md-none d-lg-inline-block `}
              target="_blank"
              rel="noreferrer"
              href={`https://calendly.com/persifund-support-team/30-minute-meeting`}
            >
              Request demo
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
