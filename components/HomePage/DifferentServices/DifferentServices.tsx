import React from "react";
import Image, { StaticImageData } from "next/image";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// components
import Service from "./Service/Service";

// images
import image1 from "../../../public/assets/images/main-image.png";
import GreenProcessService from "../../../public/assets/images/GreenProcessService.svg";
import arrowRightCircle from "../../../public/assets/images/arrow-right-circle.svg";
import AutomatedProcessService from "../../../public/assets/images/AutomatedProcessService.svg";
import SaleBoostService from "../../../public/assets/images/SaleBoostService.svg";
import LoyaltyReinforceService from "../../../public/assets/images/LoyaltyReinforceService.svg";

// styles
import styles from "./DifferentServices.module.scss";

export interface Istate {
  image: StaticImageData;
  title: string;
  subTitle: string;
}

const DifferentServices = () => {
  const services: Istate[] = [
    {
      image: image1,
      title: "DEDICATED ONBOARDING",
      subTitle:
        "from day 1, we ensure you're set up for success to see fast value.",
    },
    {
      image: image1,
      title: "DEDICATED ONBOARDING",
      subTitle:
        "from day 1, we ensure you're set up for success to see fast value.",
    },
    {
      image: image1,
      title: "DEDICATED ONBOARDING",
      subTitle:
        "from day 1, we ensure you're set up for success to see fast value.",
    },
    {
      image: image1,
      title: "DEDICATED ONBOARDING",
      subTitle:
        "from day 1, we ensure you're set up for success to see fast value.",
    },
    {
      image: image1,
      title: "DEDICATED ONBOARDING",
      subTitle:
        "from day 1, we ensure you're set up for success to see fast value.",
    },
    {
      image: image1,
      title: "DEDICATED ONBOARDING",
      subTitle:
        "from day 1, we ensure you're set up for success to see fast value.",
    },
  ];
  return (
    <div className={styles.different_services}>
      {/* <Container className="text-center">  */}
      <div className={styles.title}>How We Are Different</div>
      <div className={`${styles.sub_title} my_container`}>
        Transform more refunds into exchanges! Free up your customer service
        team, create a pleasant <br className="d-none d-md-block" />
        customer experience, and retain more revenue without even lifting a
        finger.
      </div>

      <Row className={`${styles.service_row} my_fluid_container`}>
        {/* {services.map((service:Istate)=>{return <Col key={service.title}  md={4}> <Service  {...service}/></Col>    })} */}
        <Col md={4} xs={12} className="px-0 ">
          <div className={`${styles.card} ${styles.green_process_service}`}>
            <Image
              className={`${styles.service_image} ${styles.green_process_service_image}`}
              src={GreenProcessService}
              alt="Green Process"
              width={146.2}
              height={146.2}
            />

            <div className={styles.service_title}>Green Process</div>
            <div className={styles.content}>
              Saving our green planet for future generation by using a green
              return process in order to decrease customer carbon footprint.
            </div>
            <div className={styles.arrow_container}>
              {/* <Image
    src={arrowRightCircle}
    alt="Green Process"
    width={35}
    height={35}
  /> */}
            </div>
          </div>
        </Col>
        <Col md={8} className="px-0 px-md-4">
          <Row className={styles.automated_services}>
            <Col>
              <div
                className={`${styles.card} ${styles.automated_process_service}`}
              >
                <Image
                  className={styles.service_image}
                  src={AutomatedProcessService}
                  alt="Automated Process"
                  width={70}
                  height={70}
                />

                <div className={styles.service_title}>Automated Process</div>
                <div className={styles.content}>
                  Save time by automating your entire return & exchange process.
                </div>
                <div className={styles.arrow_container}>
                  {/* <Image
    src={arrowRightCircle}
    alt="Green Process"
    width={35}
    height={35}
  /> */}
                </div>
              </div>
            </Col>
            <Col>
              <div
                className={`${styles.card} ${styles.automated_process_service}`}
              >
                <Image
                  className={styles.service_image}
                  src={SaleBoostService}
                  alt="Sale Boost"
                  width={70}
                  height={70}
                />

                <div className={styles.service_title}>Sale Boost</div>
                <div className={styles.content}>
                  Skyrocket your sales and retain more customers by simplifying
                  your return process.
                </div>
                <div className={styles.arrow_container}>
                  {/*
                   <Image
                    src={arrowRightCircle}
                    alt="Green Process"
                    width={35}
                    height={35}
                  /> */}
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-md-4">
            <Col>
              <div
                className={`${styles.card} ${styles.loyalty_reinforce_service}`}
              >
                <Row>
                  <Col md={8} className="px-0 px-md-1">
                    <div className={styles.service_title}>
                      Loyalty Reinforcement
                    </div>
                    <div className={styles.content}>
                      Customer request no longer burns out your customer
                      service. Improve trust and increase your customer
                      satisfaction by more than 30%.
                    </div>
                  </Col>
                  <Col md={4} className="order-first">
                    <Image
                      className={styles.service_image}
                      src={LoyaltyReinforceService}
                      alt="Loyalty Reinforce Service"
                      width={172}
                      height={172}
                    />

                    <div className={styles.arrow_container}>
                      {/* 
                      <Image
                        src={arrowRightCircle}
                        alt="Green Process"
                        width={35}
                        height={35}
                      /> 
                      */}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* </Container> */}
    </div>
  );
};

export default DifferentServices;
