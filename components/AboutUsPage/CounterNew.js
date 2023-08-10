import React from "react";
import { useRef, useState } from "react";
// import { useCountUp } from "react-countup";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterNew = (props) => {
  // const {
  //   data: { startNum, endNum, duration, delay, decimals },
  // } = props;
  // const countUpRef = useRef(null);

  // const {} = useCountUp({
  //   ref: countUpRef,
  //   start: startNum,
  //   end: endNum,
  //   delay,
  //   duration,
  //   decimals,
  // });

  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      style={{ display: "inline" }}
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      {counterOn && (
        <CountUp
          // ref={countUpRef}
          // start={'startNum'}
          start={1}
          end={5.1}
          duration={2}
          delay={0.4}
          decimals={1}
        />
      )}

      {/* <span ref={countUpRef}></span> */}
    </ScrollTrigger>
  );
};

export default CounterNew;
