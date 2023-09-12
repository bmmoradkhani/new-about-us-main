import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./PlanPage.module.scss";
// Images :: ==>
// import vectorCustomer from "../../public/assets/images/plan/Persifund landing page/Vector customer.png";
// import vectorBusiness from "../../public/assets/images/plan/Business/Vector business.png";
// import persifund1 from "../../public/assets/images/plan/Persifund landing page/Rectangle 473.png";
// import persifund2 from "../../public/assets/images/plan/Persifund landing page/Rectangle 472.png";
// import persifund3 from "../../public/assets/images/plan/Persifund landing page/Rectangle 471.png";
// import persifund4 from "../../public/assets/images/plan/Persifund landing page/Rectangle 470.png";
// import persifund5 from "../../public/assets/images/plan/Persifund landing page/Rectangle 469.png";
// import persifundBusiness from "../../public/assets/images/plan/Business/Rectangle 474.png";

import diagram from "../../public/assets/images/plan/new img/diagram.svg";

import customerIcon from "../../public/assets/images/plan/customer icon.svg";
import customerIcon2 from "../../public/assets/images/plan/customer icon2.svg";
import leftCustomer from "../../public/assets/images/plan/left customer.svg";

import businessIcon from "../../public/assets/images/plan/business icon.svg";
import businessIcon2 from "../../public/assets/images/plan/business icon2.svg";
import rightBusiness from "../../public/assets/images/plan/right Business.svg";

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
  delay: Number;
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
      delay: 1,
      suffix: " hours",
      text: "saved on return handling a month",
    },

    {
      startNum: 1,
      endNum: 3.1,
      duration: 4,
      delay: 1,
      suffix: " $",
      decimals: 1,
      text: "save logistics costs per RMA",
    },
    {
      startNum: 1,
      endNum: 30,
      duration: 4,
      delay: 1,
      suffix: "%",
      text: "Return rate reduction",
    },
  ];

  const [activeJourney, setActiveJourney] = useState<Number>(1);

  return (
    <div className={`${styles.paddingTop} mx-0 row`}>
      <div className={`${styles} col-10 col-lg-11 col-xl-12 mx-auto`}>
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

      {/* {activeJourney === 2 && (
        <>
          <div className={` ${styles.shopifyAppStoreBox} `}>
            <section className={` ${styles.shopifyAppStore} mx-auto `}>
              <section className={` ${styles.shopifyAppStoreTitle} `}>
                FIND US ON THE
              </section>
              <section className={` ${styles.shopifyAppStoreImg} `}>
                <Image alt="shopifyAppStore" src={shopifyAppStore} />
              </section>
            </section>
          </div>
        </>
      )} */}
      <div className={` ${styles.rankText} mx-auto p-0`}>
        <div className="row p-0" style={{}}>
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

        {/* <div className={` ${styles.vector} `}> */}
        {/* {activeJourney === 1 && (
            <>
              <Image
                className={` ${styles.vectorImg} `}
                src={vectorCustomer}
                alt="vector"
              />
            </>
          )} */}

        {/* {activeJourney === 2 && ( */}
        {/* <> */}
        {/* <Image
            className={` ${styles.vectorBusinessImg} col-12`}
            src={vectorBusiness}
            alt="vector"
          /> */}
        {/* </> */}
        {/* )} */}
        {/* </div> */}

        {/* <div className={` ${styles.barChartBusiness} text-end col-11`}>
          {
            <Image
              src={persifund1}
              className={` ${styles.persifund1} `}
              alt="Persifund"
            />
          }

          {
            <Image
              src={persifund2}
              className={` ${styles.persifund2} `}
              alt="Persifund"
            />
          }

          {
            <Image
              src={persifund3}
              className={` ${styles.persifund3} `}
              alt="Persifund"
            />
          }

          {
            <Image
              src={persifund4}
              className={` ${styles.persifund4} `}
              alt="Persifund"
            />
          }

          {
            <Image
              src={persifundBusiness}
              className={` ${styles.persifundBusiness} `}
              alt="Persifund"
            />
          }
        </div> */}
      </div>
      {/* {activeJourney === 2 && (
        <>
          <div className={`${styles.percent} col-12`}>
            <section className={`${styles.rowTitle}`}>
              50% less
              <span>return-related messages</span>
            </section>
            <span className={`${styles.percentLine}`}></span>
            <section className={`${styles.rowTitle}`}>
              37%
              <span>return rate reduction</span>
            </section>
            <span className={`${styles.percentLine}`}></span>
            <section className={`${styles.rowTitle}`}>
              10 times
              <span>faster at processing returns</span>
            </section>
            <span className={`${styles.percentLine}`}></span>
            <section className={`${styles.rowTitle}`}>
              30%
              <span>of return value retained</span>
            </section>
          </div>
        </>
      )} */}
      <Share users={data} />

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

      {activeJourney === 1 && (
        <>
          <div
            className={` ${styles.CenterMain} ${styles.firstRow} col-12 d-md-flex `}
          >
            <div className={`${styles} mx-auto `}>
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
              className={`${styles.exchange} mx-auto text-center mt-5 mt-lg-0`}
            >
              <Image src={exchange} alt="exchange"></Image>
            </div>
          </div>

          <div
            className={` ${styles.CenterMain} ${styles.brandName} ${styles.marginTop} col-12 d-flex `}
          >
            <div
              className={`${styles.brandNameImg} mx-auto d-flex mt-5 mt-lg-0`}
            >
              <Image src={brandName} alt="brand"></Image>
            </div>
            <div className={`${styles} mx-auto `}>
              <h2 className={`${styles.twoTitleBusiness} my-5`}>
                More convenient for <br /> customers than ever <br /> before
              </h2>
              <p className={`${styles.twoCommentBusiness} d-flex `}>
                Customers can select which items to <br /> return from a
                comprehensive list of all <br /> their purchases, using various
                features.
              </p>
            </div>
          </div>
          <div
            className={` ${styles.CenterMain} ${styles.marginBottom} ${styles.marginTop} col-12 d-md-flex `}
          >
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
          </div>
        </>
      )}

      {activeJourney === 2 && (
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
              {/* <p className={`${styles.oneComment} d-flex`}></p> */}

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
              {/* <p className={`${styles.twoComment} d-flex d-xl-block `}></p> */}

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
              {/* <p className={`${styles.oneComment} d-flex`}></p> */}

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
              {/* <p className={`${styles.twoComment} d-flex d-xl-block `}></p> */}

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
              {/* <p className={`${styles.oneComment} d-flex`}></p> */}

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
      )}
    </div>
  );
}
