import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./ReturnPage1.module.scss";
// Images :: ==>
import vectorCustomer from "../../public/assets/images/return1/Persifund landing page/Vector customer.png";
import vectorBusiness from "../../public/assets/images/return1/Business/Vector business.png";
import persifund1 from "../../public/assets/images/return1/Persifund landing page/Rectangle 473.png";
import persifund2 from "../../public/assets/images/return1/Persifund landing page/Rectangle 472.png";
import persifund3 from "../../public/assets/images/return1/Persifund landing page/Rectangle 471.png";
import persifund4 from "../../public/assets/images/return1/Persifund landing page/Rectangle 470.png";
import persifundBusiness from "../../public/assets/images/return1/Business/Rectangle 474.png";
import customerIcon from "../../public/assets/images/return1/customer icon.png";
import leftCustomer from "../../public/assets/images/return1/left customer.png";
import businessIcon from "../../public/assets/images/return1/business icon.png";
import rightBusiness from "../../public/assets/images/return1/right business.png";
import manageReturns from "../../public/assets/images/return1/manage returns.png";
import payment from "../../public/assets/images/return1/payment.png";
import factor from "../../public/assets/images/return1/factor.png";
import exchange from "../../public/assets/images/return1/Business/Return And Exchange.png";
import brandName from "../../public/assets/images/return1/Business/Ruturn in Brand Name.png";
import businessFactor from "../../public/assets/images/return1/Business/Business factor.png";
import shopifyAppStore from "../../public/assets/images/return1/Business/shopifyAppStore.png";

import vectorCenter1 from "../../public/assets/images/return1/Business/Vector center 1.png";
import vectorCenter2 from "../../public/assets/images/return1/Business/Vector center 2.png";
import vectorCenter3 from "../../public/assets/images/return1/Business/Vector center 3.png";

export default function Return1() {
  const [activeJourney, setActiveJourney] = useState<Number>(1);

  return (
    <div className={`${styles.paddingTop} mx-0 row`}>
      {/*  */}

      <div className={`${styles} col-10 col-lg-11 col-xl-12 mx-auto`}>
        {" "}
        <h1
          className={`${styles.titleH1} col-lg-12 col-xl-9 col-xxl-7 text-center`}
        >
          Effortless <span>Return</span> Is Just Start Of Retention.
        </h1>
      </div>
      {/*  */}
      <div className={` ${styles.SubTitle} col-12 py-5`}>
        <p className={`${styles.SubTitleText} col-10 col-lg-10 col-xxl-5`}>
          Say goodbye to complicated return procedures <br /> with our
          user-friendly solution.
        </p>
      </div>

      {/*  */}

      {activeJourney === 2 && (
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
      )}

      <div className={` ${styles.rankText} mx-auto `}>
        <p>
          In 2022, the number of online purchases that were returned increased
          to 22.3% <br /> from 20.8% in 2021, which posed a significant threat
          to retailers' revenue <br /> as it resulted in a 18% decrease. This is
          particularly concerning <br /> for retailers as online sales are
          growing at a faster <br /> pace than anticipated.
        </p>

        <div className={` ${styles.vector} `}>
          {/* vectorImg */}
          {activeJourney === 1 && (
            <>
              <Image
                className={` ${styles.vectorImg} `}
                src={vectorCustomer}
                alt="vector"
              />{" "}
            </>
          )}

          {activeJourney === 2 && (
            <>
              <Image
                className={` ${styles.vectorBusinessImg} col-12`}
                src={vectorBusiness}
                alt="vector"
              />{" "}
            </>
          )}
        </div>

        {activeJourney === 1 && (
          <>
            <div className={` ${styles.barChart} text-end col-11`}>
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
            </div>
          </>
        )}

        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}

        {activeJourney === 2 && (
          <>
            <div className={` ${styles.barChartBusiness} text-end col-11`}>
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
            </div>
          </>
        )}
        {/*  */}
        {/*  */}
      </div>

      {/* / */}

      {activeJourney === 2 && (
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
          {/*  */}
          <div className={`${styles.explore}`}>Explore Your Journey</div>
        </>
      )}

      {/*  */}
      <div
        className={` ${activeJourney === 1 && styles.CenterMain} ${
          activeJourney === 1 && styles.firstRow
        }  col-12 d-flex`}
      >
        <div
          className={` ${activeJourney === 1 && styles.customer} ${
            activeJourney === 2 && styles.customer2
          } mx-auto`}
        >
          <h2>
            {" "}
            {activeJourney === 1 && "Customer Journey"}
            {activeJourney === 2 && "CUSTOMER"}
          </h2>

          <section className={`${styles.customerBox} mx-auto my-4 `}>
            <section
              onClick={() => setActiveJourney(1)}
              className={`${styles.customerIcon}`}
            >
              <Image src={customerIcon} alt="customerIcon" />
            </section>

            <section className={` ${styles.leftCustomer} `}>
              <Image src={leftCustomer} alt="customer" />
            </section>
          </section>
        </div>
        {/*  */}
        <div
          className={` ${activeJourney === 1 && styles.business} ${
            activeJourney === 2 && styles.business2
          } mx-auto`}
        >
          <h2>
            {" "}
            {activeJourney === 1 && "Your Business Journey"}
            {activeJourney === 2 && "BUSINESS"}
          </h2>

          <section
            className={`${activeJourney === 1 && styles.businessBox} ${
              activeJourney === 2 && styles.businessBoxStyle
            } mx-auto my-4 `}
          >
            <section
              onClick={() => setActiveJourney(2)}
              className={`${styles.businessIcon}`}
            >
              <Image src={businessIcon} alt="businessIcon" />
            </section>

            <section className={` ${styles.rightBusiness} `}>
              <Image src={rightBusiness} alt="Business" />
            </section>
          </section>
        </div>
      </div>

      {/*  customer  */}

      {activeJourney === 1 && (
        <>
          <div
            className={` ${styles.CenterMain} ${styles.firstRow} ${styles.row} col-12 d-md-flex `}
          >
            <div className={`${styles} mx-auto `}>
              <h2 className={`${styles.oneTitle} d-flex d-lg-block`}>
                Clear dashboard
              </h2>

              <p className={`${styles.oneComment} d-flex`}>
                You can manage all the return requests in one place <br /> and
                no need go out from app. There is no confusion and <br /> no
                extra work.
              </p>
            </div>

            <div
              className={`${styles.manageReturns} mx-auto text-center mt-5 mt-lg-0`}
            >
              <Image src={manageReturns} alt="manageReturns"></Image>
            </div>
          </div>

          {/* customer  2  */}

          <div
            className={` ${styles.CenterMain} ${styles.payment} ${styles.marginTop} col-12 d-lg-flex `}
          >
            <div className={`${styles.paymentImg} mx-auto d-flex mt-5 mt-lg-0`}>
              <Image src={payment} alt="payment"></Image>
            </div>

            <div className={`${styles} mx-auto `}>
              <h2 className={`${styles.twoTitle}`}>
                Easy and Fast, But Powerful
              </h2>

              <p className={`${styles.twoComment} d-flex d-xl-block `}>
                You can handle each return Just by some simple <br />
                clicks. on the other side, you have a full power to <br />
                control everything from choosing RMA and accepting <br />
                or rejecting request to sending message to customer <br />
                and handle deduction fees.
              </p>
            </div>
          </div>

          {/* customer  3   */}

          <div
            className={` ${styles.CenterMain} ${styles.marginTop} ${styles.row} col-12 d-md-flex `}
          >
            <div className={`${styles} mx-auto `}>
              <h2 className={`${styles.threeTitle} d-flex d-md-block`}>
                Smart Return solution
              </h2>

              <p className={`${styles.threeComment} d-flex `}>
                With Persifund you can decide how your customer return the{" "}
                <br /> items. You have different options
              </p>
            </div>

            <div
              className={`${styles.factor} ${styles.marginBottom} mx-auto d-flex mt-5 mt-lg-0`}
            >
              <Image src={factor} alt="factor"></Image>
            </div>
          </div>
        </>
      )}

      {/*  business */}

      {activeJourney === 2 && (
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

            <div className="">
              <Image
                style={{ position: "absolute", bottom: "200px", right: "80px" }}
                src={vectorCenter1}
                alt="vectorCenter1"
              ></Image>
            </div>

            <div
              className={`${styles.exchange} mx-auto text-center mt-5 mt-lg-0`}
            >
              <Image src={exchange} alt="exchange"></Image>
            </div>
          </div>

          {/* business 2  */}

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

          {/* business 3   */}

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

      {/*  */}
    </div>
  );
}
