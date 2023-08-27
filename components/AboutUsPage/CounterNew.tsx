import React from "react";
import { useRef } from "react";
import { useCountUp } from "react-countup";
import styles from "./AboutUsPage.module.scss";

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

export default CounterNew;

//

// import { isVisible } from "@testing-library/user-event/dist/utils";

// import React, { useState } from "react";
// import CountUp from "react-countup";
// import ReactVisibilitySensor from "react-visibility-sensor";

// function Counter({ className, ...rest }) {
//   const [viewPortEntered, setViewPortEntered] = useState(false);

//   return (
//     <>
//       <style jsx>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: Arial, Helvetica, sans-serif;
//         }

//         .hero {
//           width: 100%;
//           height: 800px;
//           color: #c4dfe6;
//           background-color: #07575b;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .hero h1 {
//           font-size: 5rem;
//         }

//         .title {
//           font-size: 2rem;
//           display: flex;
//           justify-content: center;
//           color: #003b46;
//           text-transform: capitalize;
//           margin-bottom: 5rem;
//         }

//         .title h1 {
//           border-bottom: 1px solid #003b46;
//         }

//         .counter {
//           padding: 5rem 3rem 5rem 3rem;
//           background: #c4dfe6;
//         }

//         .counter-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr 1fr 1fr;
//         }

//         .counter-column {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding-left: 1rem;
//           padding-right: 1rem;
//           border-right: 1px solid #003b46;
//         }
//         .counter-column:last-child {
//           border-right: none;
//         }

//         .counter-column .number {
//           font-weight: 600;
//           font-size: 50px;
//           color: #003b46;
//         }

//         .counter-column span {
//           display: block;
//           font-size: 18px;
//           color: rgba(0, 0, 0, 0.7);
//           line-height: 1.2;
//           padding-left: 15px;
//         }

//         .counter-column .percentage {
//           font-style: 3rem;
//           font-weight: 400;
//           color: #003b46;
//         }

//         .footer {
//           width: 100%;
//           height: 500px;
//           background-color: #07575b;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//       `}</style>

//       <section className="counter">
{
  /* <div className="title">
          <h1>our achievements</h1>
        </div> */
}

// <div className="counter-row">
//   <div className="counter-column">
//     <strong data-number="310">
//       <CountUp
//         {...rest}
//         start={viewPortEntered ? null : 1}
//         end={310}
//         delay={2}
//         duration={3}
//         suffix="%"
//       >
//         {({ countUpRef }) => {
//           return (
//             <ReactVisibilitySensor
//               active={!viewPortEntered}
//               onChange={(isVisible) => {
//                 if (isVisible) {
//                   setViewPortEntered(true);
//                 }
//               }}
//               delayedCall
//             >
//               <span className="number" ref={countUpRef} />
//             </ReactVisibilitySensor>
//           );
//         }}
//       </CountUp>
//     </strong>

//     <span>
//       Some text <br />
//       Goes here
//     </span>
//   </div>

{
  /* <div className="counter-column">
            <strong data-number="1250">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={1250}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span>
              Some text <br />
              Goes here
            </span>
          </div>

          <div className="counter-column">
            <strong data-number="125">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={125}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span>
              Some text <br />
              Goes here
            </span>
          </div>

          <div className="counter-column">
            <strong data-number="24">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={24}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span>
              Some text <br />
              Goes here
            </span>
          </div> */
}
//         </div>
//       </section>
//     </>
//   );
// }

// export default Counter;
