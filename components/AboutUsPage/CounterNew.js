import { useRef } from "react";
import { useCountUp } from "react-countup";

const CounterNew = (props) => {
  const {
    data: { startNum, endNum, duration, delay, decimals },
  } = props;
  const countUpRef = useRef(null);

  const {} = useCountUp({
    ref: countUpRef,
    start: startNum,
    end: endNum,
    delay,
    duration,
    decimals,
  });

  return (
    <>
      <span ref={countUpRef}></span>
    </>
  );
};

export default CounterNew;
