import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./PlanPage.module.scss";
// Images :: ==>

import diagram from "../../public/assets/images/plan/new img/diagram.svg";
import diagram_Mobile from "../../public/assets/images/plan/new img/Diagram Mobile.svg";

import customerIcon from "../../public/assets/images/plan/customer icon.svg";
import customerIcon2 from "../../public/assets/images/plan/customer icon2.svg";
import leftCustomer from "../../public/assets/images/plan/left customer.svg";

import businessIcon from "../../public/assets/images/plan/business icon.svg";
import businessIcon2 from "../../public/assets/images/plan/business icon2.svg";
import rightBusiness from "../../public/assets/images/plan/right Business.svg";

import centerLine_Rightcurve from "../../public/assets/images/plan/new img/center line right curve.svg";
import centerLine_Leftcurve from "../../public/assets/images/plan/new img/center line left curve.svg";
import centerLinecurve_Icon_Box from "../../public/assets/images/plan/new img/center line curve icon box.svg";

import centerLine_Curve2 from "../../public/assets/images/plan/new img/center line curve 2 .svg";
import centerLine_Curve3 from "../../public/assets/images/plan/new img/center line  curve 3.svg";

import manageReturns from "../../public/assets/images/plan/manage returns.png";
import payment from "../../public/assets/images/plan/payment.png";
import factor from "../../public/assets/images/plan/factor.png";
import exchange from "../../public/assets/images/plan/Business/Return And Exchange.png";
import brandName from "../../public/assets/images/plan/Business/Ruturn in Brand Name.png";
import businessFactor from "../../public/assets/images/plan/Business/Business factor.png";
import shopifyAppStore from "../../public/assets/images/plan/Business/shopifyAppStore.png";

import arrowButton from "../../public/assets/images/plan/arrow button.svg";

import vectorCenter1 from "../../public/assets/images/plan/Business/Vector center 1.png";
import vectorCenter2 from "../../public/assets/images/plan/Business/Vector center 2.png";
import vectorCenter3 from "../../public/assets/images/plan/Business/Vector center 3.png";
import Share from "../Share/Share";

export interface Istate {
  startNum: Number;
  endNum: Number;
  duration: Number;
  decimals?: Number;
  suffix: String;
  text: String;
}

export default function Plan() {
  const data: Istate[] = [
    {
      startNum: 1,
      endNum: 50,
      duration: 4,
      suffix: " hours",
      text: "saved on return handling a month",
    },

    {
      startNum: 1,
      endNum: 3.1,
      duration: 4,
      suffix: " $",
      decimals: 1,
      text: "save logistics costs per RMA",
    },
    {
      startNum: 1,
      endNum: 30,
      duration: 4,
      suffix: "%",
      text: "Return rate reduction",
    },
  ];

  const [activeJourney, setActiveJourney] = useState<Number>(1);

  return (
    <div className={`${styles.paddingTop} mx-0 row`}>
      <div className={`${styles} col-12 my_container m-0 p-0`}>
        <h1
          className={`${styles.titleH1} col-lg-12 col-xl-9 col-xxl-7 text-center`}
        >
          Effortless <span>Return</span> Is Just Start Of Retention.
        </h1>
      </div>
      <div className={` ${styles.SubTitle} col-12 py-5`}>
        <p className={`${styles.SubTitleText} col-10 col-lg-10 col-xxl-5`}>
          Say goodbye to complicated return procedures <br /> with our
          user-friendly solution.
        </p>
      </div>

      {/* desktop */}
      <div
        className={` ${styles.rankText_Desktop} d-none d-lg-inline mx-auto p-0`}
      >
        <div className="row p-0 my-0 mx-5" style={{}}>
          <p className="col p-0 m-0">
            In 2022, the number of online purchases that were returned increased
            to 22.3% <br /> from 20.8% in 2021, which posed a significant threat
            to retailers' revenue <br /> as it resulted in a 18% decrease. This
            is particularly concerning <br /> for retailers as online sales are
            growing at a faster <br /> pace than anticipated.
          </p>
        </div>

        <div
          className="row p-0"
          style={{ position: "relative", bottom: "130px", right: "25px" }}
        >
          <Image
            className={` ${styles.vectorImg} col p-0`}
            src={diagram}
            alt="diagram"
          />
        </div>
      </div>

      {/* Mobile */}

      <div
        className={` ${styles.rankText_Mobile} row d-lg-none p-0 m-0`}
        style={{
          textAlign: "center",
          justifyContent: "center",
          height: "auto",
        }}
      >
        <div
          className="col-12 col-sm-10 col-md-9 p-0 m-0"
          style={{ textAlign: "center" }}
        >
          <p className="my_container" style={{}}>
            In 2022, the number of online purchases that were returned increased
            to 22.3% from 20.8% in 2021, which posed a significant threat to
            retailers' revenue as it resulted in a 18% decrease. This is
            particularly concerning for retailers as online sales are growing at
            a faster pace than anticipated.
          </p>
        </div>

        <div
          className="col-12 col-sm-10 col-md-9 p-0 "
          style={{ padding: "0 25px !important", marginTop: "15px" }}
        >
          <Image
            className={` ${styles.diagram_Mobile} col p-0`}
            src={diagram_Mobile}
            alt="diagram"
            style={{ width: "-webkit-fill-available", height: "auto" }}
          />
        </div>
      </div>

      <Share users={data} />

      {/* --- main --- */}

      <div className={`${styles.explore}`}>Explore Your Journey</div>

      <div className={`${styles} col-12 d-flex p-0`}>
        {/*  customer */}

        <div className={` ${styles} mx-auto `}>
          <h2
            className={`${activeJourney === 1 && styles.customer} ${
              activeJourney === 2 && styles.customer2
            }`}
          >
            CUSTOMER
          </h2>

          <section
            className={`${activeJourney === 1 && styles.customerBox} ${
              activeJourney === 2 && styles.customerBox2
            } mx-auto  `}
          >
            <section
              onClick={() => setActiveJourney(1)}
              className={`${styles.customerIcon}`}
            >
              <Image
                src={
                  (activeJourney === 1 && customerIcon) ||
                  (activeJourney === 2 && customerIcon2)
                }
                alt="customerIcon"
              />
            </section>

            {activeJourney === 1 && (
              <>
                <section className={` ${styles.leftCustomer} `}>
                  <Image src={leftCustomer} alt="customer" />
                </section>
              </>
            )}
          </section>
        </div>

        {/* business */}

        <div className={`${styles} mx-auto`}>
          <h2
            className={`${activeJourney === 1 && styles.business} ${
              activeJourney === 2 && styles.business2
            }`}
          >
            BUSINESS
          </h2>

          <section
            className={`${activeJourney === 1 && styles.businessBox} ${
              activeJourney === 2 && styles.businessBox2
            } mx-auto  `}
          >
            <section
              onClick={() => setActiveJourney(2)}
              className={`${styles.businessIcon}`}
            >
              <Image
                src={
                  (activeJourney === 1 && businessIcon) ||
                  (activeJourney === 2 && businessIcon2)
                }
                alt="businessIcon"
              />
            </section>

            {activeJourney === 2 && (
              <>
                <section className={` ${styles.rightBusiness} `}>
                  <Image src={rightBusiness} alt="Business" />
                </section>
              </>
            )}
          </section>
        </div>
      </div>

      {/* customer main */}

      {activeJourney === 1 && (
        <>
          <div
            className={` ${styles.CenterMain} ${styles.firstRow} row mx-0 p-0 justify-content-center `}
          >
            <div className={`${styles} col-md-12 col-lg-5 p-0`}>
              <h2 className={`${styles.oneTitleBusiness} my-5`}>
                No need more <br /> than an emaiL...
              </h2>

              <p className={`${styles.oneCommentBusiness} d-flex`}>
                Customers have the ability to initiate a return <br /> at any
                time and in a convenient manner. All the <br /> thing that
                customers need to do their return is <br /> an email that they
                use when they shop.
              </p>
            </div>

            <div
              className="p-0 d-none d-lg-inline"
              style={{
                width: "auto",
                position: "relative",
                bottom: "121px",
                right: "50px",
              }}
            >
              <div className="">
                <Image src={centerLine_Leftcurve} alt="centerLinecurve"></Image>
              </div>

              <div
                className=""
                style={{
                  position: "relative",
                  left: "22px",
                  bottom: "2px",
                  display: "grid",
                  justifyContent: "end",
                }}
              >
                <div className="">
                  <Image
                    src={centerLinecurve_Icon_Box}
                    className={`${styles.centerLinecurve_Icon_Box}`}
                    alt="centerLinecurve_Icon_Box"
                  ></Image>
                </div>

                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    bottom: "35px",
                    right: "0.5px",
                  }}
                >
                  <h3 className="m-0 ">1</h3>
                </div>
              </div>
            </div>

            <div
              className={`${styles.exchange} col-md-12 col-lg-5 text-center mt-5 mt-lg-0`}
            >
              <Image src={exchange} alt="exchange"></Image>
            </div>
          </div>

          <div
            className={` ${styles.CenterMain} ${styles.firstRow} row mx-0 p-0 justify-content-center flex-md-row-reverse`}
          >
            <div className={`${styles} col-md-12 col-lg-5 p-0`}>
              <h2 className={`${styles.oneTitleBusiness} my-5`}>
                No need more <br /> than an emaiL...
              </h2>

              <p className={`${styles.oneCommentBusiness} d-flex`}>
                Customers have the ability to initiate a return <br /> at any
                time and in a convenient manner. All the <br /> thing that
                customers need to do their return is <br /> an email that they
                use when they shop.
              </p>
            </div>

            <div
              className="p-0 d-none d-lg-inline"
              style={{
                width: "auto",
                textAlign: "center",
                position: "relative",
                bottom: "121px",
              }}
            >
              {/* 

                      این مقادیر چن خط برای تگ بالاست
                  width: auto;
                  position: relative;
                  bottom: 121px;
                  left: 50px;
                  margin: 55px 0 117px 0;
                  position: unset;
              ////////////////////////////

                  <svg width="49" height="89" viewBox="0 0 49 89" fill="none">
                   <circle cx="24.9966" cy="64.6044" r="24" fill="#35498B"></circle>
                  <line x1="24.9966" y1="49.009" x2="24.9966" y2="0.142456" stroke="#2A438F" stroke-width="2"></line>
                  </svg>
                  <h2 style="display: flex;justify-content: center;margin: 0;position: relative;bottom: 37px;color: #FFF;text-align: center;font-family: Roboto;font-size: 25px;font-style: normal;font-weight: 600;line-height: 25px;">1</h1>


              */}

              <div className="">
                <Image src={centerLine_Curve2} alt="centerLinecurve"></Image>
              </div>

              <div
                className=""
                style={{
                  position: "relative",
                  // left: "22px",
                  bottom: "2px",
                  display: "grid",
                  justifyContent: "end",
                }}
              >
                <div className="">
                  <Image
                    src={centerLinecurve_Icon_Box}
                    className={`${styles.centerLinecurve_Icon_Box}`}
                    alt="centerLinecurve_Icon_Box"
                  ></Image>
                </div>

                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    bottom: "35px",
                    right: "0.5px",
                  }}
                >
                  <h3 className="m-0 ">1</h3>
                </div>
              </div>
            </div>

            <div
              className={`${styles.exchange} col-md-12 col-lg-5 text-center mt-5 mt-lg-0`}
            >
              <Image src={exchange} alt="exchange"></Image>
            </div>
          </div>

          <div
            className={` ${styles.CenterMain} ${styles.firstRow} row mx-0 p-0 justify-content-center `}
          >
            <div className={`${styles} col-md-12 col-lg-5 p-0`}>
              <h2 className={`${styles.oneTitleBusiness} my-5`}>
                No need more <br /> than an emaiL...
              </h2>

              <p className={`${styles.oneCommentBusiness} d-flex`}>
                Customers have the ability to initiate a return <br /> at any
                time and in a convenient manner. All the <br /> thing that
                customers need to do their return is <br /> an email that they
                use when they shop.
              </p>
            </div>

            <div
              className="p-0 d-none d-lg-inline"
              style={{
                width: "auto",
                textAlign: "center",
                position: "relative",
                bottom: "121px",
                // left: "50px",
              }}
            >
              <div className="">
                <Image src={centerLine_Curve3} alt="centerLinecurve"></Image>
              </div>

              <div
                className=""
                style={{
                  position: "relative",
                  // left: "22px",
                  bottom: "2px",
                  display: "grid",
                  justifyContent: "end",
                }}
              >
                <div className="">
                  <Image
                    src={centerLinecurve_Icon_Box}
                    className={`${styles.centerLinecurve_Icon_Box}`}
                    alt="centerLinecurve_Icon_Box"
                  ></Image>
                </div>

                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    bottom: "35px",
                    right: "0.5px",
                  }}
                >
                  <h3 className="m-0 ">1</h3>
                </div>
              </div>
            </div>

            <div
              className={`${styles.exchange} col-md-12 col-lg-5 text-center mt-5 mt-lg-0`}
            >
              <Image src={exchange} alt="exchange"></Image>
            </div>
          </div>

          {/*  */}

          {/* <div className={` ${styles.CenterMain} ${styles.marginBottom} ${styles.marginTop} col-12 d-md-flex `} >
            <div className={`${styles} mx-auto `}>
              <h2
                className={`${styles.threeTitleBusiness} d-flex d-md-block mb-5`}
              >
                Multi return solution
              </h2>
              <p className={`${styles.threeCommentBusiness}  d-flex `}>
                Customers are able to choose the option <br /> that best suits
                their needs and schedule, <br /> leading to increased
                satisfaction and a <br /> positive customer experience.
              </p>
            </div>
            <div className={`${styles.businessFactor} mx-auto d-flex mt-lg-0`}>
              <div className={`${styles.businessFactorImg}`}>
                <Image src={businessFactor} alt="businessFactor"></Image>
              </div>
            </div>
          </div> */}
          {/*  */}
        </>
      )}

      {/* business */}

      {activeJourney === 2 && (
        <>
          <div
            className={` ${styles.CenterMain} ${styles.firstRow} row mx-0 p-0 justify-content-center `}
          >
            <div className={`${styles} col-md-12 col-lg-5 p-0`}>
              <h2 className={`${styles.oneTitleBusiness} my-5`}>
                No need more <br /> than an emaiL...
              </h2>

              <p className={`${styles.oneCommentBusiness} d-flex`}>
                Customers have the ability to initiate a return <br /> at any
                time and in a convenient manner. All the <br /> thing that
                customers need to do their return is <br /> an email that they
                use when they shop.
              </p>
            </div>

            <div
              className="p-0 d-none d-lg-inline"
              style={{
                width: "auto",
                position: "relative",
                bottom: "121px",
                left: "50px",
              }}
            >
              <div className="">
                <Image
                  src={centerLine_Rightcurve}
                  alt="centerLinecurve"
                ></Image>
              </div>

              <div
                className=""
                style={{
                  position: "relative",
                  right: "22px",
                  bottom: "2px",
                  display: "grid",
                  justifyContent: "start",
                }}
              >
                <div className="">
                  <Image
                    src={centerLinecurve_Icon_Box}
                    className={`${styles.centerLinecurve_Icon_Box}`}
                    alt="centerLinecurve_Icon_Box"
                  ></Image>
                </div>

                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    bottom: "35px",
                    right: "0.5px",
                  }}
                >
                  <h3 className="m-0 ">1</h3>
                </div>
              </div>
            </div>

            <div
              className={`${styles.exchange} col-md-12 col-lg-5 text-center mt-5 mt-lg-0`}
            >
              <Image src={exchange} alt="exchange"></Image>
            </div>
          </div>

          <div
            className={` ${styles.CenterMain} ${styles.firstRow} row mx-0 p-0 justify-content-center flex-md-row-reverse`}
          >
            <div className={`${styles} col-md-12 col-lg-5 p-0`}>
              <h2 className={`${styles.oneTitleBusiness} my-5`}>
                No need more <br /> than an emaiL...
              </h2>

              <p className={`${styles.oneCommentBusiness} d-flex`}>
                Customers have the ability to initiate a return <br /> at any
                time and in a convenient manner. All the <br /> thing that
                customers need to do their return is <br /> an email that they
                use when they shop.
              </p>
            </div>

            <div
              className="p-0 d-none d-lg-inline"
              style={{
                width: "auto",
                position: "relative",
                bottom: "121px",
                left: "28px",
              }}
            >
              <div className="">
                <Image src={centerLine_Curve2} alt="centerLinecurve"></Image>
              </div>

              <div
                className=""
                style={{
                  position: "relative",
                  right: "22px",
                  bottom: "2px",
                  display: "grid",
                  justifyContent: "end",
                }}
              >
                <div className="">
                  <Image
                    src={centerLinecurve_Icon_Box}
                    className={`${styles.centerLinecurve_Icon_Box}`}
                    alt="centerLinecurve_Icon_Box"
                  ></Image>
                </div>

                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    bottom: "35px",
                    right: "0.5px",
                  }}
                >
                  <h3 className="m-0 ">1</h3>
                </div>
              </div>
            </div>

            <div
              className={`${styles.exchange} col-md-12 col-lg-5 text-center mt-5 mt-lg-0`}
            >
              <Image src={exchange} alt="exchange"></Image>
            </div>
          </div>

          <div
            className={` ${styles.CenterMain} ${styles.firstRow} row mx-0 p-0 justify-content-center `}
          >
            <div className={`${styles} col-md-12 col-lg-5 p-0`}>
              <h2 className={`${styles.oneTitleBusiness} my-5`}>
                No need more <br /> than an emaiL...
              </h2>

              <p className={`${styles.oneCommentBusiness} d-flex`}>
                Customers have the ability to initiate a return <br /> at any
                time and in a convenient manner. All the <br /> thing that
                customers need to do their return is <br /> an email that they
                use when they shop.
              </p>
            </div>

            <div
              className="p-0 d-none d-lg-inline"
              style={{
                width: "auto",
                position: "relative",
                bottom: "121px",
                left: "28px",
              }}
            >
              <div className="">
                <Image src={centerLine_Curve3} alt="centerLinecurve"></Image>
              </div>

              <div
                className=""
                style={{
                  position: "relative",
                  right: "22px",
                  bottom: "2px",
                  display: "grid",
                  justifyContent: "end",
                }}
              >
                <div className="">
                  <Image
                    src={centerLinecurve_Icon_Box}
                    className={`${styles.centerLinecurve_Icon_Box}`}
                    alt="centerLinecurve_Icon_Box"
                  ></Image>
                </div>

                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    bottom: "35px",
                    right: "0.5px",
                  }}
                >
                  <h3 className="m-0 ">1</h3>
                </div>
              </div>
            </div>

            <div
              className={`${styles.exchange} col-md-12 col-lg-5 text-center mt-5 mt-lg-0`}
            >
              <Image src={exchange} alt="exchange"></Image>
            </div>
          </div>
        </>
      )}

      {/* {activeJourney === 2 && (
        <>
          <div
            className={` ${styles.CenterMain} ${styles.firstRow} ${styles.row} col-12 d-md-flex p-0`}
          >
            <div
              className={`${styles} mx-auto `}
              style={{ visibility: "hidden" }}
            ></div>

            <div
              className={`${styles.manageReturns} mx-auto text-center mt-5 mt-lg-0`}
            >
              <h2 className={`${styles.oneTitle} d-flex d-lg-block`}>
                Unlock Efficiency with Automation:
              </h2>

              <ul className={`${styles.ulList}`}>
                <li>
                  Enhance Customer Support with Collaborative Return Ticketing
                </li>
                <li>Monitor Return Shipping Status with Ease</li>
                <li>Access Customer Information and History in One Place</li>
              </ul>

              <div
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <h3 style={{ paddingRight: "20px" }}>Explore More</h3>
                <a href="#">
                  <Image
                    src={arrowButton}
                    alt="arrowButton"
                    style={{ width: "46.75px", height: "46.75px" }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            className={` ${styles.CenterMain} ${styles.payment} ${styles.marginTop} col-12 d-lg-flex p-0 `}
          >
            <div className={`${styles} mx-auto `}>
              <h2 className={`${styles.twoTitle_new}`}>
                Smooth Return Experience
              </h2>

              <ul className={`${styles.ulList}`}>
                <li>
                  Create a Smooth Return Experience - a seamless path for your
                  customer to return product
                </li>

                <li>
                  Decide when to charge shipping for returns. You can improve
                  retention by simply charging for refunds and not for store
                  credit.
                </li>
              </ul>
              <div
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <h3 style={{ paddingRight: "20px" }}>Explore More</h3>
                <a href="#">
                  <Image
                    src={arrowButton}
                    alt="arrowButton"
                    style={{ width: "46.75px", height: "46.75px" }}
                  />
                </a>
              </div>
            </div>

            <div
              className={`${styles.paymentImg} mx-auto d-flex mt-5 mt-lg-0`}
              style={{ visibility: "hidden" }}
            ></div>
          </div>

          <div
            className={` ${styles.CenterMain} ${styles.firstRow} ${styles.row} col-12 d-md-flex p-0`}
          >
            <div
              className={`${styles} mx-auto `}
              style={{ visibility: "hidden" }}
            ></div>

            <div
              className={`${styles.manageReturns} mx-auto text-center mt-5 mt-lg-0`}
            >
              <h2 className={`${styles.oneTitle} d-flex d-lg-block`}>
                Unlock Efficiency with Automation:
              </h2>

              <ul className={`${styles.ulList}`}>
                <li>
                  Enhance Customer Support with Collaborative Return Ticketing
                </li>
                <li>Monitor Return Shipping Status with Ease</li>
                <li>Access Customer Information and History in One Place</li>
              </ul>

              <div
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <h3 style={{ paddingRight: "20px" }}>Explore More</h3>
                <a href="#">
                  <Image
                    src={arrowButton}
                    alt="arrowButton"
                    style={{ width: "46.75px", height: "46.75px" }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            className={` ${styles.CenterMain} ${styles.payment} ${styles.marginTop} col-12 d-lg-flex p-0 `}
          >
            <div className={`${styles} mx-auto `}>
              <h2 className={`${styles.twoTitle_new}`}>
                Smooth Return Experience
              </h2>

              <ul className={`${styles.ulList}`}>
                <li>
                  Create a Smooth Return Experience - a seamless path for your
                  customer to return product
                </li>

                <li>
                  Decide when to charge shipping for returns. You can improve
                  retention by simply charging for refunds and not for store
                  credit.
                </li>
              </ul>
              <div
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <h3 style={{ paddingRight: "20px" }}>Explore More</h3>
                <a href="#">
                  <Image
                    src={arrowButton}
                    alt="arrowButton"
                    style={{ width: "46.75px", height: "46.75px" }}
                  />
                </a>
              </div>
            </div>

            <div
              className={`${styles.paymentImg} mx-auto d-flex mt-5 mt-lg-0`}
              style={{ visibility: "hidden" }}
            ></div>
          </div>

          <div
            className={` ${styles.CenterMain} ${styles.firstRow} ${styles.row} col-12 d-md-flex p-0`}
          >
            <div
              className={`${styles} mx-auto `}
              style={{ visibility: "hidden" }}
            ></div>

            <div
              className={`${styles.manageReturns} mx-auto text-center mt-5 mt-lg-0`}
            >
              <h2 className={`${styles.oneTitle} d-flex d-lg-block`}>
                Unlock Efficiency with Automation:
              </h2>

              <ul className={`${styles.ulList}`}>
                <li>
                  Enhance Customer Support with Collaborative Return Ticketing
                </li>
                <li>Monitor Return Shipping Status with Ease</li>
                <li>Access Customer Information and History in One Place</li>
              </ul>

              <div
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <h3 style={{ paddingRight: "20px" }}>Explore More</h3>
                <a href="#">
                  <Image
                    src={arrowButton}
                    alt="arrowButton"
                    style={{ width: "46.75px", height: "46.75px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </>
      )} */}
    </div>
  );
}
