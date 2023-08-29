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

export interface UsersListProps {
  users: Iprops[];
}

const CounterNew = (props: any) => {
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

const Share: FC<UsersListProps> = (data: UsersListProps) => {
  const [counterOn, setCounterOn] = useState(false);
  console.log(data.users);
  return (
    <section>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(true)}
      >
        {counterOn && (
          <Row className="d-grid d-sm-flex m-0">
            {Object.values(data.users).map((item: Iprops, index) => (
              <Col
                className={`${styles.numberBox_Title} ${styles.brNone}`}
                key={index}
              >
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
