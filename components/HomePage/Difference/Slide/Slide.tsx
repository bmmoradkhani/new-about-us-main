import React, { FC } from "react";
import Image from "next/image";

import { Istate as Iprops } from "../Difference";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// images
import customerIcon from "../../../../public/assets/images/customer.svg";
import storeIcon from "../../../../public/assets/images/store.svg";

import styles from "./Slide.module.scss";

const Slide: FC<Iprops> = (slide: Iprops) => {
  // console.log(slide);
  return (
    <Row
      className={`${styles.slide} my_container`}
      style={{ background: `${slide.backgroundColor}` }}
    >
      <Col>
        <div className={styles.description}>{slide.title}</div>
        <div className={styles.title}>
          <span className={styles.icon}>
            {" "}
            <Image
              src={customerIcon}
              className={styles.icon}
              alt="customer Icon"
              width={30}
              height={30}
            />
          </span>
          <span>Great For Your Customer</span>{" "}
        </div>
        <div className={styles.sub_title}>{slide.forCustomer}</div>
        <div>
          <span className={styles.title}>
            <span className={styles.icon}>
              {" "}
              <Image
                src={storeIcon}
                className={styles.icon}
                alt="customer Icon"
                width={30}
                height={30}
              />
            </span>{" "}
            <span>Great For Your Business</span>{" "}
          </span>
          <div
            className={`${styles.sub_title} ${styles.sub_title_for_business}`}
          >
            {slide.forStore}
          </div>
        </div>
      </Col>
      {/* <Col className=" d-flex justify-content-center"> */}
      {/* <div className={styles.slide_image_background}> */}
      {/* <Image src={slide.image} alt="main image" width={344} height={250} /> */}
      {/* </div> */}
      {/* </Col> */}

      <div
        className={styles.slide_image_background_mobile}
        // style={handleSlideImageBackgroundColor()}
      >
        <Image
          src={slide.image}
          alt="main image"
          // width={388}
          // height={299}
          className={styles.slide_image}
        />
      </div>
    </Row>
  );
};

export default Slide;
