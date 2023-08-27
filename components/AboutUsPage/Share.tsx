import React from "react";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import styles from "./AboutUsPage.module.scss";

import CounterNew from "./CounterNew";

const data = [
  {
    startNum: "1",
    endNum: "50",
    duration: "4",
    delay: "0.7",
    suffix: " hours",
    text: "saved on return handling a month",
  },

  {
    startNum: "1",
    endNum: "70",
    duration: "4",
    delay: "0.7",
    suffix: "%",
    text: "reduce complained messages",
  },

  {
    startNum: "1",
    endNum: "3.1",
    duration: "4",
    delay: "0.7",
    suffix: " $",
    decimals: "1",
    text: "save logistics costs per RMA",
  },

  {
    startNum: "1",
    endNum: "30",
    duration: "4",
    delay: "0.7",
    suffix: "%",
    text: "Return rate reduction",
  },
];

const Share = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section
    // style={{
    //   display: "grid",
    //   gridTemplateColumns: "1fr 1fr 1fr 1fr",
    // }}
    >
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(true)}
      >
        {counterOn && (
          <section className={`${styles.dGrid} `}>
            {data.map((data) => (
              <section className={`${styles.numberBox_Title} ${styles.brNone}`}>
                <CounterNew data={data} />
                <section className={`${styles.counter_Text_Content}`}>
                  {data.text}
                </section>
                {/* <div className={`${styles.borderStyleCounter}`}></div> */}
              </section>
            ))}
            {/* {data.map((text) => ( */}
            {/* <section className={`${styles.numberBox_Title_span} `}> */}
            {/* <span>{text.text}</span> */}
            {/* </section> */}
            {/* ))} */}
          </section>
        )}
        {/*  */}
        {/* <section
          className={` `}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        >
          {data.map((text, i) => (
            <section className={`${styles.numberBox_Title_span} `} key={i}>
              {text.text}
              <section className={`${styles.numberLine}`}></section>
            </section>
          ))}
        </section> */}

        {/* <Row style={{ display: "flex" }}>
          {data.map((t, i) => (
            <Col
              style={{
                fontSize: "14px",
                // padding: "10px 0",
              }}
            >
              {t.text}
            </Col>
          ))}{" "}
        </Row> */}
      </ScrollTrigger>
    </section>
  );
};

export default Share;
