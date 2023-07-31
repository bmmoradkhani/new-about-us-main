import React, { useState, useRef, useMemo } from "react";
import Image, { StaticImageData } from "next/image";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// functions
import { handleScroll } from "./functions/CustomerCommentFunc";

// images
import image1 from "../../../public/assets/images/main-image.png";
import customer1 from "../../../public/assets/images/customers/customer1.png";
import customer2 from "../../../public/assets/images/customers/customer2.png";

import commaRed from "../../../public/assets/images/comment-icon-red.png";

import Slide from "./Slide/Slide";

// styles
import styles from "./CustomerComment.module.scss";

export interface Istate {
  slideNumber: number;
  comment: string;
  job: string;
  name: string;
  image: StaticImageData;
  backgroundColor: string;
  commaImage: StaticImageData;
}

const CustomerComment = () => {
  const slidersRef = useRef<any>();
  const [sliderStep, setSliderStep] = useState<Number>(1);

  const sliders: Istate[] = [
    {
      slideNumber: 1,
      comment:
        "The Persifund platform is awesome. Compare to the terribly expencive return app in the market it has great, great value. One more thing, it support Swedish Krona!!!",
      job: "CEO, Hermand",
      name: "Brenna",
      image: customer1,
      backgroundColor: "#CEF2E9",
      commaImage: commaRed,
    },
    {
      slideNumber: 2,
      comment:
        "Transform refunds into something worth hopping about! Free up your customer service team, wow your customers, and retain more revenue without lifting a finger.",
      job: "Sales manager, Rocker",
      name: "Johan",
      image: customer2,
      backgroundColor: "#F0C2C3",
      commaImage: commaRed,
    },
  ];

  return (
    <div>
      {/* <Container> */}

      <Row className={`my_fluid_container   ${styles.customer_comment}`}>
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <div className={styles.title}>
            We couldn’t <br className="d-none d-md-block" />
            say it better <br className="d-none d-md-block" /> ourselves
          </div>
        </Col>
        <Col md={8}>
          <Col
            md={12}
            className={styles.slides}
            ref={slidersRef}
            onScroll={(e) => {
              handleScroll(e, setSliderStep, slidersRef);
            }}
            style={{ overflowX: "auto", whiteSpace: "nowrap" }}
          >
            {/* <div> */}
            {sliders.map((slide: Istate) => {
              return <Slide key={slide.name} {...slide} />;
            })}
            {/* </div> */}
          </Col>
          <Col
            md={12}
            className={` ${styles.circle_box} d-flex justify-content-center`}
          >
            <div
              className={`${
                sliderStep === 1 ? styles.activeCircle : styles.circle
              }`}
              onClick={() => {
                slidersRef.current.scrollTo(0, 0);
                // setSliderStep(1);
              }}
            ></div>

            <div
              className={`${
                sliderStep === 2 ? styles.activeCircle : styles.circle
              }`}
              onClick={() => {
                slidersRef.current.scrollTo(370, 0);
                // setSliderStep(2);
              }}
            ></div>
          </Col>
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
};

export default CustomerComment;
