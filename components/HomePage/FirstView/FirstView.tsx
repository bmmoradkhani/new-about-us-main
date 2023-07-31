import React from "react";
import Image from "next/image";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// UI
import Button from "../../UI-Kit/Button/Button";

// images
import PersifundLogo from "../../../public/assets/images/PersifundLogo.jpg";
import mainImage from "../../../public/assets/images/main-image.png";
import persifundCircle from "../../../public/assets/images/persifund-circle.svg";

// brands
import hermandLogo from "../../../public/assets/images/brands/hermand.svg";
import fanaticsLogo from "../../../public/assets/images/brands/fanatics.png";
import koioLogo from "../../../public/assets/images/brands/koio.png";
import supergoopLogo from "../../../public/assets/images/brands/supergoop.png";
import thirdLoveLogo from "../../../public/assets/images/brands/thirdLove.svg";
import untuckITLogo from "../../../public/assets/images/brands/untuckIT.svg";

// styles
import styles from "./FirstView.module.scss";

const FirstView = () => {
  return (
    <>
      <div className={styles.first_view}>
        <div className="h-100 my_container">
          <Row className="h-100 align-items-center mx-0">
            <Col xs={12} md={6} className={styles.main_content}>
              <h1 className={`${styles.title} text-sm-start text-center `}>
                Empower Customers <br /> Win Loyalty
              </h1>

              <p className={`${styles.sub_title} text-sm-start text-center`}>
                Persifund makes returns & exchanges{" "}
                <br className="d-none d-md-block" /> extremely easy to ensure
                your <br className="d-none d-md-block" /> customers keep coming
                back{" "}
              </p>

              <a
                className={`text-decoration-none ${styles.connect_store_button}`}
                color="#fff"
                target="_blank"
                rel="noreferrer"
                href={`https://apps.shopify.com/persifund-returns-exchanges?search_id=b7d4ea69-4e1c-4e4c-9adf-29c2a0d29cf5&surface_detail=persifund&surface_inter_position=1&surface_intra_position=1&surface_type=search`}
              >
                Connect your store
              </a>
            </Col>
            <Col xs={12} md={6} className="text-end pe-0 ">
              <Image
                className={styles.main_image}
                src={mainImage}
                alt="main image"
                width={754}
                height={540}
              />
            </Col>
          </Row>

          <div className={styles.persifund_circle_container}>
            <Image
              src={persifundCircle}
              alt="persifund Circle image"
              width={135}
              height={132}
            />
          </div>
        </div>
      </div>

      <div className={styles.brand_section}>
        <div className="my_container">
          <div className={`text-center ${styles.title}`}>
            Trusted by shopify brands worldwide
          </div>

          <div className={styles.brands_box}>
            {/* <div
              className={` align-items-center justify-content-center mx-0 `}
            > */}
            <Row style={{ textAlign: "center" }}>
              <Col md={3} xs={6} className={`text-center ${styles.category}`}>
                <Image
                  src={hermandLogo}
                  className={styles.brands_logo}
                  alt="hermand Logo"
                  // width={45}
                  // height={45}
                />
              </Col>
              <Col xs={6} md={3} className={`text-center ${styles.category}`}>
                <Image
                  className={styles.brands_logo}
                  src={fanaticsLogo}
                  alt="fanatics Logo"
                  // width={60}
                  // height={60}
                />
              </Col>
              <Col xs={6} md={3} className={`text-center ${styles.category}`}>
                <Image
                  src={koioLogo}
                  className={styles.brands_logo}
                  alt="koio Logo"
                  // width={116}
                  // height={56}
                />
              </Col>
              <Col xs={6} md={3} className={`text-center ${styles.category}`}>
                <Image
                  src={supergoopLogo}
                  className={styles.brands_logo}
                  alt="supergoop Logo"
                  // width={125}
                  // height={125}
                />
              </Col>
              {/* <h3 className={`text-center ${styles.category}`}>
                        <Image
    src={thirdLoveLogo}
    alt="thirdLove Logo"
    width={140}
    height={45}
  />
        </h3> */}
              {/* <h3 className={`text-center ${styles.category}`}>
                        <Image
    src={untuckITLogo}
    alt="untuckIT Logo"
    width={120}
    height={45}
  />
        </h3> */}
            </Row>

            {/* <div>
        <h3 className={`text-center ${styles.category}`}>    
        <Image
    src={hermandLogo}
    alt="hermand Logo"
    width={45}
    height={45}
  />
  </h3>
        <h3 className={`text-center ${styles.category}`}>
        <Image
    src={fanaticsLogo}
    alt="fanatics Logo"
    width={140}
    height={45}
  />
        </h3>
        <h3 className={`text-center ${styles.category}`}>
                        <Image
    src={koioLogo}
    alt="koio Logo"
    width={75}
    height={75}
  />
        </h3>
        <h3 className={`text-center ${styles.category}`}>
                        <Image
    src={supergoopLogo}
    alt="supergoop Logo"
    width={120}
    height={45}
  />
        </h3> */}
            {/* <h3 className={`text-center ${styles.category}`}>
                        <Image
    src={thirdLoveLogo}
    alt="thirdLove Logo"
    width={140}
    height={45}
  />
        </h3> */}
            {/* <h3 className={`text-center ${styles.category}`}>
                        <Image
    src={untuckITLogo}
    alt="untuckIT Logo"
    width={120}
    height={45}
  />
        </h3> */}

            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstView;
