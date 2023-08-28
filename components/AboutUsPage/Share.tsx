import React, { FC } from "react";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./AboutUsPage.module.scss";
import { Istate as Iprops } from "./index";

// import CounterNew from "./CounterNew";

import { useRef } from "react";
import { useCountUp } from "react-countup";

const CounterNew = (props) => {
  const {
    data: { startNum, endNum, duration, delay, decimals, suffix },
  } = props;
  const countUpRef = useRef(null);

  const {} = useCountUp({
    ref: countUpRef,
    start: startNum,
    end: endNum,
    delay,
    duration,
    decimals,
    suffix,
  });

  return (
    <section className={`${styles.counter_Text}`} ref={countUpRef}></section>
  );
};

const Share: FC<Iprops> = (data: Iprops) => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(true)}
      >
        {counterOn && (
          <Row>
            {data.map((item: Iprops) => (
              <Col className={`${styles.numberBox_Title} ${styles.brNone}`}>
                <CounterNew data={item} />
                <section className={`${styles.counter_Text_Content}`}>
                  {item.text}
                </section>
              </Col>
            ))}
          </Row>
        )}
      </ScrollTrigger>
    </section>
  );
};

export default Share;
