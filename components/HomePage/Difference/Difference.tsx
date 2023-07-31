import React, { useRef, useState } from "react";
import Image from "next/image";

import Slide from "./Slide/Slide";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// images
import image1 from "../../../public/assets/images/image 53.png";
import image2 from "../../../public/assets/images/image 49.png";
import image3 from "../../../public/assets/images/image 48.png";
import carouselMobile from "../../../public/assets/images/carousel-mobile.png";
import customerIcon from "../../../public/assets/images/customer.svg";
import storeIcon from "../../../public/assets/images/store.svg";

import { StaticImageData } from "next/image";
// funcs
import { handleScroll } from "./DiffrenceFunc";

// lifecycles
import { useEffectDifference } from "./lifecycleMethods";
// styles
import styles from "./Difference.module.scss";

export interface Istate {
  title: string;
  forCustomer: string;
  forStore: string;
  image: StaticImageData;
  backgroundColor: string;
}

const Difference = () => {
  const slidersContainerRef = useRef<HTMLInputElement>(null);
  const slidersRef = useRef<any>();
  const [sliderStep, setSliderStep] = useState<any>(1);

  const containerTopOffset = slidersContainerRef;

  // lifecycles
  useEffectDifference(setSliderStep, containerTopOffset);

  const handleScroll2 = () => {
    console.log(containerTopOffset.current?.offsetTop);
    console.log(window.pageYOffset);
  };

  const sliders: Istate[] = [
    {
      title: "Fully automated cancelation",
      forCustomer:
        "Have possibility to cancel or change the order before fulfillment",
      forStore:
        "Save money, time, and energy and lower the impact on the environment",
      image: image1,
      backgroundColor:
        "radial-gradient(97.24% 398.18% at 1.3% 100%, #2D64A3 0%, #1B3263 31.49%, #0E1742 52.07%, #0B1039 69.17%, #412D57 98.96%)",
    },
    {
      title: "Give shoppers clear carbon footprint information for each return",
      forCustomer:
        "Increase awareness about the environmental impact of their return in order to decrease unnecessary returns",
      forStore:
        "Fewer return shipment and less time and labor dedicated toward return management",
      image: image2,
      backgroundColor:
        "radial-gradient(97.24% 398.18% at 1.3% 100%, #2D64A3 0%, #1B3263 31.49%, #0E1742 52.07%, #0B1039 69.17%, #412D57 98.96%)",
    },
    {
      title: "Multiple returns in one request",
      forCustomer:
        "Less complexity and a simpler return process to create a delightful return experience",
      forStore:
        "Eliminate unnecessary tasks and streamline the return & exchange process",
      image: image3,
      backgroundColor:
        "radial-gradient(97.24% 398.18% at 1.3% 100%, #2D64A3 0%, #1B3263 31.49%, #0E1742 52.07%, #0B1039 69.17%, #412D57 98.96%)",
    },
  ];

  const handleSlideImageBackgroundColor = () => {
    switch (sliderStep) {
      case 1:
        return {
          background: `radial-gradient(47.46% 50% at 50% 50%, #FDBFBD 0%, #F48886 100%)`,
        };
      case 2:
        return {
          background: `radial-gradient(47.46% 50% at 50% 50%, #BJHGRD 0%, #LIJDSD 100%)`,
        };
      default:
        return {
          background: `radial-gradient(47.46% 50% at 50% 50%, #FDBFBD 0%, #F48886 100%)`,
        };
    }
  };

  return (
    <div className={styles.difference}>
      <div className={styles.title}>
        Feel the <span className={styles.difference}>difference</span>
      </div>
      <div
        id="differenceContainer"
        className={`${styles.difference_container}  d-none d-md-block`}
        ref={slidersContainerRef}
        onScroll={(e) => {
          handleScroll2();
        }}
        onClick={handleScroll2}
      >
        <div className={`my_fluid_container`} style={{ height: "100%" }}>
          <div className={`my_container`}></div>

          <Row className={` ${styles.difference_row} mx-0`}>
            <Col lg={1} md={0} xs={0} className={`${styles.circle_box} `}>
              <div
                className={`${
                  sliderStep === 1 ? styles.activeCircle : styles.circle
                }`}
                onClick={() => {
                  slidersRef.current.scrollTo(0, 0);
                }}
              ></div>
              <div
                className={`${
                  sliderStep === 2 ? styles.activeCircle : styles.circle
                }`}
                onClick={() => {
                  slidersRef.current.scrollTo(0, 500);
                }}
              ></div>
              <div
                className={`${
                  sliderStep === 3 ? styles.activeCircle : styles.circle
                }`}
                onClick={() => {
                  slidersRef.current.scrollTo(0, 1000);
                }}
              ></div>
            </Col>
            <Col md={6} lg={5} className={styles.text_section}>
              <div
                className={styles.slide_description}
                // style={{
                //   opacity: sliderStep === 1 ? "100" : "0",
                //   transform:
                //     sliderStep === 1 ? "translateY(-50px)" : "null",
                // }}
              >
                {/* Fully branded and customizeable return center */}
                {sliders[sliderStep - 1].title}
              </div>

              <div
                className={`${styles.slide_title} ${styles.slide_title_for_customer}`}
              >
                <span className={styles.slide_icon}>
                  {" "}
                  <Image
                    src={customerIcon}
                    alt="customer Icon"
                    width={30}
                    height={30}
                  />
                </span>
                <span className={styles.great_title}>
                  Great For Your Customer
                </span>{" "}
              </div>

              <div
                className={`${styles.slide_sub_title} ${styles.slide_sub_title_for_customer}`}
                // style={{
                //   opacity: sliderStep === 1 ? "100" : "0",
                //   transform:
                //     sliderStep === 1 ? "translateY(-50px)" : "null",
                // }}
              >
                {sliders[sliderStep - 1].forCustomer}
              </div>

              <div>
                <span
                  className={`${styles.slide_title} ${styles.slide_title_for_store}`}
                >
                  <span className={styles.slide_icon}>
                    {" "}
                    <Image
                      src={storeIcon}
                      alt="customer Icon"
                      width={30}
                      height={30}
                    />
                  </span>{" "}
                  <span className={styles.great_title}>
                    Great For Your Business
                  </span>{" "}
                </span>
              </div>

              <div
                className={`${styles.slide_sub_title} ${styles.slide_sub_title_for_store}`}
                // style={{
                //   opacity: sliderStep === 1 ? "100" : "0",
                //   transform:
                //     sliderStep === 1 ? "translateY(-50px)" : "null",
                // }}
              >
                {sliders[sliderStep - 1].forStore}
              </div>
            </Col>
            <Col md={6} lg={5} className={styles.image_column}>
              <>
                {/* <div        className={styles.slide_image_background}> */}
                <Image
                  src={sliders[sliderStep - 1].image}
                  alt="main image"
                  width={432}
                  height={455}
                  className={styles.slide_image}
                  // style={{
                  //   opacity: sliderStep === 1 ? "100" : "0",
                  //   transform:
                  //     sliderStep === 1 ? "translateY(-50px)" : "null",
                  // }}
                />
                {/* </div> */}
              </>
            </Col>
          </Row>

          <span>
            <div
              className={`${styles.slide_image_background} ${styles.slide_image_background_after_first_item} `}
              style={handleSlideImageBackgroundColor()}
            >
              <Image
                src={image2}
                alt="main image"
                width={344}
                height={250}
                className={styles.slide_image}
                // style={{
                //   opacity: sliderStep === 1 ? "100" : "0",
                //   transform:
                //     sliderStep === 1 ? "translateY(-50px)" : "null",
                // }}
              />
            </div>

            <div
              className={`${styles.slide_image_background} ${styles.slide_image_background_after_first_item} `}
              style={handleSlideImageBackgroundColor()}
            >
              <Image
                src={image3}
                alt="main image"
                width={344}
                height={250}
                className={styles.slide_image}
                // style={{
                //   opacity: sliderStep === 1 ? "100" : "0",
                //   transform:
                //     sliderStep === 1 ? "translateY(-50px)" : "null",
                // }}
              />
            </div>
          </span>
        </div>
      </div>
      <span className={`d-block d-md-none`}>
        <Slide {...sliders[0]} />
        <Slide {...sliders[1]} />
        <Slide {...sliders[2]} />
        {/* <Slide {...sliders[3]} />
              <Slide {...sliders[4]} /> */}
      </span>
    </div>
  );
};

export default Difference;

// <Row className={`${styles.slider_section} mx-0 `} >
// <Col md={1} xs={0} className={`${styles.circle_box} `}>
//   <div
//     className={`${
//       sliderStep === 1 ? styles.activeCircle : styles.circle
//     }`}
//     onClick={() => {
//       slidersRef.current.scrollTo(0, 0);
//     }}
//   ></div>
//   <div
//     className={`${
//       sliderStep === 2 ? styles.activeCircle : styles.circle
//     }`}
//     onClick={() => {
//       slidersRef.current.scrollTo(0, 500);
//     }}
//   ></div>
//   <div
//     className={`${
//       sliderStep === 3 ? styles.activeCircle : styles.circle
//     }`}
//     onClick={() => {
//       slidersRef.current.scrollTo(0, 1000);
//     }}
//   ></div>
//   <div
//     className={`${
//       sliderStep === 4 ? styles.activeCircle : styles.circle
//     }`}
//     onClick={() => {
//       slidersRef.current.scrollTo(0, 1500);
//     }}
//   ></div>
// </Col>
// <Col
// xs={12}
//   className={styles.sliders}
//   id="sliders"
//   ref={slidersRef}
//   onScroll={(e) => {
//     handleScroll(e, setSliderStep, slidersRef);
//   }}
// >
//   <div >
//   <div
//     className={`${styles.slide_title} ${styles.slide_title_for_customer}`}
//   >
//     <span className={styles.slide_icon}>
//       {" "}
//       <Image
//         src={customerIcon}
//         alt="customer Icon"
//         width={30}
//         height={30}
//       />
//     </span>
//     <span className={styles.great_title}>
//       Great For Your Customer
//     </span>{" "}
//   </div>
//   <div >
//     <span
//       className={`${styles.slide_title} ${styles.slide_title_for_store}`}
//     >
//       <span className={styles.slide_icon}>
//         {" "}
//         <Image
//           src={storeIcon}
//           alt="customer Icon"
//           width={30}
//           height={30}
//         />
//       </span>{" "}
//       <span className={styles.great_title}>
//         Great For Your Business
//       </span>{" "}
//     </span>
//   </div>

//   <Row className="mx-0">
//     <Col>
//       <div
//         className={styles.slide_description}
//         style={{
//           opacity: sliderStep === 1 ? "100" : "0",
//           transform:
//             sliderStep === 1 ? "translateY(-50px)" : "null",
//         }}
//       >
//         Fully branded and customizeable return center
//       </div>
//       <div
//         className={`${styles.slide_sub_title} ${styles.slide_sub_title_for_customer}`}
//         style={{
//           opacity: sliderStep === 1 ? "100" : "0",
//           transform:
//             sliderStep === 1 ? "translateY(-50px)" : "null",
//         }}
//       >
//         Persifund makes returns & exchanges extremely
//       </div>
//       <div
//         className={`${styles.slide_sub_title} ${styles.slide_sub_title_for_store}`}
//         style={{
//           opacity: sliderStep === 1 ? "100" : "0",
//           transform:
//             sliderStep === 1 ? "translateY(-50px)" : "null",
//         }}
//       >
//         makes returns
//       </div>
//     </Col>
//     <Col className=" d-md-flex justify-content-center align-items-center d-none">
//       <div
//         className={styles.slide_image_background}
//         style={handleSlideImageBackgroundColor()}
//       ></div>
//       <Image
//         src={image1}
//         alt="main image"
//         width={344}
//         height={250}
//         className={styles.slide_image}
//         style={{
//           opacity: sliderStep === 1 ? "100" : "0",
//           transform:
//             sliderStep === 1 ? "translateY(-50px)" : "null",
//         }}
//       />

//     </Col>

//     {/* show in mobile */}
//     <Col className=" d-md-none justify-content-center align-items-center ">
//       <div
//         className={styles.slide_image_background_mobile}
//         style={handleSlideImageBackgroundColor()}
//       ></div>

//     </Col>

//   </Row>

//   <Row className="mx-0">
//     <Col>
//       <div
//         className={styles.slide_description}
//         style={{
//           opacity: sliderStep === 2 ? "100" : "0",
//           transform:
//             sliderStep === 2 ? "translateY(-50px)" : "null",
//         }}
//       >
//         Fully branded and customizeable return center 2
//       </div>
//       <div
//         className={`${styles.slide_sub_title} ${styles.slide_sub_title_for_customer}`}
//         style={{
//           opacity: sliderStep === 2 ? "100" : "0",
//           transform:
//             sliderStep === 2 ? "translateY(-50px)" : "null",
//         }}
//       >
//         Persifund makes returns & exchanges extremely
//       </div>
//       <div
//         className={`${styles.slide_sub_title} ${styles.slide_sub_title_for_store}`}
//         style={{
//           opacity: sliderStep === 2 ? "100" : "0",
//           transform:
//             sliderStep === 2 ? "translateY(-50px)" : "null",
//         }}
//       >
//         makes returns
//       </div>
//     </Col>
//     <Col className=" d-md-flex d-none justify-content-center align-items-center">

//       <Image
//         src={image1}
//         alt="main image"
//         width={344}
//         height={250}
//         className={styles.slide_image}
//         style={{
//           opacity: sliderStep === 2 ? "100" : "0",
//           transform:
//             sliderStep === 2 ? "translateY(-50px)" : "null",
//         }}
//       />
//     </Col>
//   </Row>

//   <Row className="mx-0">
//     <Col>
//       <div
//         className={styles.slide_description}
//         style={{
//           opacity: sliderStep === 3 ? "100" : "0",
//           transform:
//             sliderStep === 3 ? "translateY(-50px)" : "null",
//         }}
//       >
//         Fully branded and customizeable return center 3
//       </div>
//       <div
//         className={`${styles.slide_sub_title} ${styles.slide_sub_title_for_customer}`}
//         style={{
//           opacity: sliderStep === 3 ? "100" : "0",
//           transform:
//             sliderStep === 3 ? "translateY(-50px)" : "null",
//         }}
//       >
//         Persifund makes returns & exchanges extremely
//       </div>
//       <div
//         className={`${styles.slide_sub_title} ${styles.slide_sub_title_for_store}`}
//         style={{
//           opacity: sliderStep === 3 ? "100" : "0",
//           transform:
//             sliderStep === 3 ? "translateY(-50px)" : "null",
//         }}
//       >
//         makes returns
//       </div>
//     </Col>
//     <Col className=" d-md-flex d-none justify-content-center align-items-center">
//       <Image
//         src={image1}
//         alt="main image"
//         width={344}
//         height={250}
//         className={styles.slide_image}
//         style={{
//           opacity: sliderStep === 3 ? "100" : "0",
//           transform:
//             sliderStep === 3 ? "translateY(-50px)" : "null",
//         }}
//       />
//     </Col>
//   </Row>

//   <Row className="mx-0">
//     <Col>
//       <div
//         className={styles.slide_description}
//         style={{
//           opacity: sliderStep === 4 ? "100" : "0",
//           transform:
//             sliderStep === 4 ? "translateY(-50px)" : "null",
//         }}
//       >
//         Fully branded and customizeable return center 4
//       </div>
//       <div
//         className={`${styles.slide_sub_title} ${styles.slide_sub_title_for_customer}`}
//         style={{
//           opacity: sliderStep === 4 ? "100" : "0",
//           transform:
//             sliderStep === 4 ? "translateY(-50px)" : "null",
//         }}
//       >
//         Persifund makes returns & exchanges extremely
//       </div>
//       <div
//         className={`${styles.slide_sub_title} ${styles.slide_sub_title_for_store}`}
//         style={{
//           opacity: sliderStep === 4 ? "100" : "0",
//           transform:
//             sliderStep === 4 ? "translateY(-50px)" : "null",
//         }}
//       >
//         makes returns
//       </div>
//     </Col>
//     <Col className="d-md-flex d-none justify-content-center align-items-center">
//       <Image
//         src={image1}
//         alt="main image"
//         width={344}
//         height={250}
//         className={styles.slide_image}
//         style={{
//           opacity: sliderStep === 4 ? "100" : "0",
//           transform:
//             sliderStep === 4 ? "translateY(-50px)" : "null",
//         }}
//       />
//     </Col>
//   </Row>

//   <Row className="mx-0">
//     <Col>
//       <div
//         className={styles.slide_description}
//         style={{
//           opacity: sliderStep === 5 ? "100" : "0",
//           transform:
//             sliderStep === 5 ? "translateY(-50px)" : "null",
//         }}
//       >
//         Fully branded and customizeable return center 5
//       </div>
//       <div
//         className={`${styles.slide_sub_title} ${styles.slide_sub_title_for_customer}`}
//         style={{
//           opacity: sliderStep === 5 ? "100" : "0",
//           transform:
//             sliderStep === 5 ? "translateY(-50px)" : "null",
//         }}
//       >
//         Persifund makes returns & exchanges extremely
//       </div>
//       <div
//         className={`${styles.slide_sub_title} ${styles.slide_sub_title_for_store}`}
//         style={{
//           opacity: sliderStep === 5 ? "100" : "0",
//           transform:
//             sliderStep === 5 ? "translateY(-50px)" : "null",
//         }}
//       >
//         makes returns
//       </div>
//     </Col>
//     <Col className=" d-md-flex d-none justify-content-center align-items-center">
//       <Image
//         src={image1}
//         alt="main image"
//         width={344}
//         height={250}
//         className={styles.slide_image}
//         style={{
//           opacity: sliderStep === 5 ? "100" : "0",
//           transform:
//             sliderStep === 5 ? "translateY(-50px)" : "null",
//         }}
//       />
//     </Col>
//   </Row>

//   <span style={{opacity:'0'}}>
//   <Slide {...sliders[0]} />
//   <Slide {...sliders[1]} />
//   <Slide {...sliders[2]} />
//   <Slide {...sliders[3]} />
//   <Slide {...sliders[4]} />
//   </span>

//   </div>
// </Col>
// </Row>
