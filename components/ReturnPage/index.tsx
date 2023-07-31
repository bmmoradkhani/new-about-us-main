import React, { useState } from "react";
import Image from "next/image";
import LineTo from "react-lineto";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// images
import grow from "../../public/assets/images/integration/grow.png";
import main from "../../public/assets/images/integration/main.png";
import user from "../../public/assets/images/user.png";
import customerImage from "../../public/assets/images/customer.svg";
import line from "../../public/assets/images/lines/line.png";

import firstStep from "../../public/assets/images/first-step.png";
import secondStep from "../../public/assets/images/second-step.png";
import thirdStep from "../../public/assets/images/third-step.png";
import finalStep from "../../public/assets/images/finalStep.png";

import bussines_first_step from "../../public/assets/images/return/bussines_first_step.png";
import bussines_second_step from "../../public/assets/images/return/bussines_second_step.png";

// components
import CallToActionIntegration from "../CallToActionIntegration";

import styles from "./ReturnPage.module.scss";

export default function Return() {
  // 0 > hide all journey
  // 1 => show customer journey
  // 2 => show bussiness journey
  const [activeJourney, setActiveJourney] = useState<Number>(1);

  return (
    <div className={` ${styles.return_page}`}>
      <div className="otherPage my_container">
        <Row className={`${styles.header} mx-0`}>
       
          <Col>
            <p className={styles.header_title}>
              Effortless<span className={styles.return_word}>Return</span> is
              just
              <br /> start of retention.
            </p>
            <p className={styles.description}>
              Say goodbye to complicated return procedures with our
              user-friendly solution.
            </p>
          </Col>
      
          <Col>
            <Image src={main} height={413} width={670} alt="grow"></Image>
          </Col>
      
        </Row>
        <section className={`${styles.return_info} `}>
          <Row>
            <Col md={9}>
              <span className={styles.return_info_description}>
                In 2022, the number of online purchases that were returned
                increased to 22.3% from 20.8% in 2021, which posed a significant
                threat to retailers revenue as it resulted in a 18% decrease.
                This is particularly concerning for retailers as online sales
                are growing at a faster pace than anticipated.
              </span>
            </Col>
            <Col>
              <Image
                src={grow}
                // height={173}
                width={165}
                alt="grow"
              ></Image>
            </Col>
          </Row>
        </section>

        {/* Choose Your Journey section  */}
        <section className={styles.journey}>
          <h2 className={`${styles.journey_title} `}>Choose Your Journey</h2>
          <Row className="mb-5 mt-5">
         
            <Col className="text-center">
              <span
                className={`${styles.journey_button} `}
                style={{
                  background: activeJourney === 1 ? "#737ABA" : "",
                  color: activeJourney === 1 ? "#fff" : "#FFA005",
                }}
                onClick={() => setActiveJourney(1)}
              >
                <div>
                  {/* <Image
                  src={user}
                  height={40}
                  width={33}
                  alt="user"
                  /> */}
                  {/* <Image
        src={user}
        height={40}
        width={33}
        alt="user"
        ></Image> */}
                  <svg
                    width="29"
                    height="31"
                    viewBox="0 0 29 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.2868 12.1589C17.2164 12.1589 19.5913 9.76052 19.5913 6.80194C19.5913 3.84335 17.2164 1.44495 14.2868 1.44495C11.3571 1.44495 8.98218 3.84335 8.98218 6.80194C8.98218 9.76052 11.3571 12.1589 14.2868 12.1589Z"
                      stroke={activeJourney === 1 ? "#fff" : "#FFA005"}
                      stroke-width="2"
                    />
                    <path
                      d="M1.51929 30.4441C1.51929 13.4618 14.6539 12.4956 14.6539 12.4956C14.6539 12.4956 26.9409 13.1926 27.0545 30.4441"
                      stroke={activeJourney === 1 ? "#fff" : "#FFA005"}
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div>Your Customer Journey</div>
              </span>
              {/* <Image
        src={line}
        // height={40}
        // width={33}
        // alt="user"
        ></Image> */}
            </Col>
           
            <Col className="text-center">
              <span
                className={`${styles.journey_button} `}
                style={{
                  background: activeJourney === 2 ? "#737ABA" : "",
                  color: activeJourney === 2 ? "#fff" : "#FFA005",
                }}
                onClick={() => setActiveJourney(2)}
              >
                <div>
                  {/* <Image
                  src={user}
                  height={40}
                  width={33}
                  alt="user"
                  /> */}
                  <svg
                    width="29"
                    height="31"
                    viewBox="0 0 29 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.2868 12.1589C17.2164 12.1589 19.5913 9.76052 19.5913 6.80194C19.5913 3.84335 17.2164 1.44495 14.2868 1.44495C11.3571 1.44495 8.98218 3.84335 8.98218 6.80194C8.98218 9.76052 11.3571 12.1589 14.2868 12.1589Z"
                      stroke={activeJourney === 2 ? "#fff" : "#FFA005"}
                      stroke-width="2"
                    />
                    <path
                      d="M1.51929 30.4441C1.51929 13.4618 14.6539 12.4956 14.6539 12.4956C14.6539 12.4956 26.9409 13.1926 27.0545 30.4441"
                      stroke={activeJourney === 2 ? "#fff" : "#FFA005"}
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div>Your Business Journey</div>
              </span>
            </Col>
       
          </Row>

          {activeJourney === 1 && (
            <>
              <Row className={styles.step_container}>
                <Col className="text-center ">
                  <div
                    className={`${styles.card_left} B`}
                    style={{
                      background:
                        "linear-gradient(130.4deg, rgba(82, 0, 63, 0.6) 5.5%, rgba(103, 5, 139, 0.6) 51.05%, rgba(38, 0, 107, 0.6) 94.66%)",
                    }}
                  >
                    <Image
                      src={firstStep}
                      // height={40}
                      width={304}
                      alt="first step"
                    />
                  </div>
                </Col>
                <Col className="align-self-center">
                  <h2 className={styles.step_title}>
                    No need more than an emaiL...
                  </h2>
                  <p className={styles.step_description}>
                    Customers have the ability to initiate a return at any time
                    and in a convenient manner. All the thing that customers
                    need to do their return is an email that they use when they
                    shop.{" "}
                  </p>
                </Col>
              </Row>

              {/* step 2 */}
              <Row className={styles.step_container}>
                <Col className="align-self-center">
                  <h2 className={styles.step_title}>
                    More convenient for customers than ever before
                  </h2>
                  <p className={styles.step_description}>
                    Customers can select which items to return from a
                    comprehensive list of all their purchases, using various
                    features.{" "}
                  </p>
                </Col>
                <Col className="text-center ">
                  <div
                    className={styles.card_right}
                    style={{
                      background:
                        "linear-gradient(229.52deg, rgba(224, 83, 35, 0.6) 3.55%, rgba(213, 59, 98, 0.6) 97.92%)",
                    }}
                  >
                    <Image
                      src={secondStep}
                      // height={40}
                      width={304}
                      alt="second Step"
                    />
                  </div>
                </Col>
              </Row>

              {/* step 3 */}
              <Row className={styles.step_container}>
                <Col className="text-center ">
                  <div
                    className={styles.card_left}
                    style={{
                      background:
                        "linear-gradient(131.03deg, rgba(29, 53, 169, 0.6) 5.74%, rgba(9, 93, 167, 0.6) 93.6%)",
                    }}
                  >
                    <Image
                      src={thirdStep}
                      // height={40}
                      width={304}
                      alt="third Step"
                    />
                  </div>
                </Col>
                <Col className="align-self-center">
                  <h2 className={styles.step_title}>Multi return solution</h2>
                  <p className={styles.step_description}>
                    Customers are able to choose the option that best suits
                    their needs and schedule, leading to increased satisfaction
                    and a positive customer experience.
                  </p>
                </Col>
              </Row>

              {/* STEP 4 */}
              <Row className={styles.step_container}>
                <Col className="align-self-center">
                  <h2 className={styles.step_title}>Return Complete!</h2>
                  <p className={styles.step_description}>
                    The system automatically places customer return request and
                    send an email with all the information. So easy!
                  </p>
                </Col>
                <Col className="text-center ">
                  <div
                    className={styles.card_left}
                    style={{
                      background:
                        "linear-gradient(229.52deg, rgba(1, 99, 64, 0.7) 3.55%, rgba(29, 136, 51, 0.7) 49.58%, rgba(27, 135, 60, 0.7) 97.92%)",
                    }}
                  >
                    <Image
                      src={finalStep}
                      // height={40}
                      width={304}
                      alt="final Step"
                    />
                  </div>
                </Col>
              </Row>
            </>
          )}

          {activeJourney === 2 && (
            <>
              <Row className={styles.step_container}>
                <Col className="align-self-center">
                  <h2 className={styles.step_title}>Clear dashboard</h2>
                  <p className={styles.step_description}>
                    You can manage all the return requests in one place and no
                    need go out from app. There is no confusion and no extra
                    work.
                  </p>
                </Col>
                <Col className="text-center ">
                  <div
                    className={`${styles.card_left} B`}
                    style={{
                      background:
                        "linear-gradient(130.4deg, rgba(82, 0, 63, 0.6) 5.5%, rgba(103, 5, 139, 0.6) 51.05%, rgba(38, 0, 107, 0.6) 94.66%)",
                    }}
                  >
                    <Image
                      src={bussines_first_step}
                      // height={40}
                      width={420}
                      alt="first step"
                    />
                  </div>
                </Col>
              </Row>

              {/* step 2 */}
              <Row className={styles.step_container}>
                <Col className="text-center ">
                  <div
                    className={styles.card_right}
                    style={{
                      background:
                        "linear-gradient(229.52deg, rgba(224, 83, 35, 0.6) 3.55%, rgba(213, 59, 98, 0.6) 97.92%)",
                    }}
                  >
                    <Image
                      src={bussines_second_step}
                      // height={40}
                      width={420}
                      alt="second Step"
                    />
                  </div>
                </Col>
                <Col className="align-self-center">
                  <h2 className={styles.step_title}>Smart Return solution</h2>
                  <p className={styles.step_description}>
                    With Persifund you can decide how your customer return the
                    items. You have different options{" "}
                  </p>
                </Col>
              </Row>

              {/* step 3 */}
              <Row className={styles.step_container}>
                <Col className="align-self-center">
                  <h2 className={styles.step_title}>Multi return solution</h2>
                  <p className={styles.step_description}>
                    Customers are able to choose the option that best suits
                    their needs and schedule, leading to increased satisfaction
                    and a positive customer experience.
                  </p>
                </Col>
                <Col className="text-center ">
                  <div
                    className={styles.card_left}
                    style={{
                      background:
                        "linear-gradient(131.03deg, rgba(29, 53, 169, 0.6) 5.74%, rgba(9, 93, 167, 0.6) 93.6%)",
                    }}
                  >
                    <Image
                      src={thirdStep}
                      // height={40}
                      width={304}
                      alt="third Step"
                    />
                  </div>
                </Col>
              </Row>
            </>
          )}
        </section>
        <CallToActionIntegration />
      </div>
      {/* <LineTo from="A" to="B" /> */}
    </div>
  );
}
