import React from "react";
import styles from "./AboutUsPage.module.scss";
import Image from "next/image";
// import Link from "next/link";

import point from "../../public/assets/images/about-us/Group 670.png";

import energyIcon from "../../public/assets/images/about-us/energy 1.png";
import integration from "../../public/assets/images/about-us/integration 1.png";
import save_Money from "../../public/assets/images/about-us/save-money 1.png";
import fuel from "../../public/assets/images/about-us/fuel 2.png";
import handshake from "../../public/assets/images/about-us/handshake 1.png";

// import wave from "../../public/assets/images/about-us/wave.png";
// import wave1 from "../../public/assets/images/about-us/wave1.png";
// import wave2 from "../../public/assets/images/about-us/wave2.png";

// import persifindLine from "../../public/assets/images/about-us/Persifund line.png";

// import shopify from "../../public/assets/images/about-us/unnamed.png";
// // import shopify from "../../public/assets/images/about-us/shopify.png";
// import vector from "../../public/assets/images/about-us/Vector.png";

// import CountUp from "react-countup";
import CounterNew from "./CounterNew";

const data_hours = [
  {
    startNum: 1,
    endNum: 50,
    duration: 4,
    delay: 2,
  },
];

const data_reduce = [
  {
    startNum: 1,
    endNum: 70,
    duration: 4,
    delay: 2,
  },
];

const data_save_Logistics = [
  {
    startNum: 1,
    endNum: 3.1,
    duration: 4,
    delay: 2,
    decimals: 1,
  },
];

const data_Return = [
  {
    startNum: 1,
    endNum: 30,
    duration: 4,
    delay: 2,
  },
];

export default function index() {
  return (
    <div className={` ${styles.main} `}>
      <div className={` ${styles.ourMission} `}>
        <h1 className={` ${styles.ourMission_Text} `}>Our Mission</h1>
      </div>

      <div className={`${styles.storeTitle} d-flex justify-content-center`}>
        <div className={`${styles.storeTitle_Text} `}>
          <p>We enable stores to build wonderful return experience</p>
        </div>
      </div>

      <div className={`${styles} my-4`}>
        <Image src={point} className="" alt="point" />
      </div>

      <div className={`${styles.numberTitle}`}>
        <p>We're backed by incredible Numbers</p>
      </div>

      <div
        className={`${styles.numberBox} d-flex justify-content-center align-items-center`}
      >
        <section className={`${styles.numberBox_Title}`}>
          {/* {data_hours.map((data, i) => (
            <CounterNew data={data} key={i} />
          ))}{" "} */}
          <CounterNew end={100} start={10} duration={1} />
          {/* <CountUp /> */}
          <span className={`${styles.numberBox_Title_Hours}`}>hours</span>
          <span className={`${styles.numberBox_Title_span}`}>
            saved on return handling a month
          </span>
        </section>

        <section className={`${styles.numberLine}`}></section>

        {/* /// */}
        <section className={`${styles.numberBox_Title}`}>
          {/*  */}
          <div className={`${styles}`}>
            {data_reduce.map((data, i) => (
              <CounterNew data={data} key={i} />
            ))}
            <span>%</span>
          </div>

          <span className={`${styles.numberBox_Title_span}`}>
            reduce complained messages
          </span>
        </section>

        <section className={`${styles.numberLine}`}></section>
        {/* /// */}

        <section className={`${styles.numberBox_Title}`}>
          {/*  */}
          <div className={`${styles}`}>
            {data_save_Logistics.map((data, i) => (
              <CounterNew data={data} key={i} />
            ))}{" "}
            <span>$</span>
          </div>

          <span className={`${styles.numberBox_Title_span}`}>
            save logistics costs per RMA
          </span>
        </section>

        <section className={`${styles.numberLine}`}></section>

        {/* /// */}
        <section className={`${styles.numberBox_Title}`}>
          <div className={`${styles}`}>
            {data_Return.map((data, i) => (
              <CounterNew data={data} key={i} />
            ))}
            <span>%</span>
          </div>

          <span className={`${styles.numberBox_Title_span}`}>
            Return rate reduction
          </span>
        </section>
      </div>

      <div className={`${styles.my_Container} row mt-5`}>
        <div
          className={`${styles.about_Persifund} col-12 col-md-6 my-3 my-md-0 p-0`}
        >
          <div className="">
            <h2 className="d-flex justify-content-center">
              About{" "}
              <span className={`${styles.about_Persifund_span}`}>
                Persifund
              </span>
            </h2>{" "}
            <div
              className={`${styles.about_Persifund_underline} d-flex justify-content-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="285"
                height="14"
                viewBox="0 0 285 14"
                fill="none"
              >
                <path
                  d="M2.80176 11.056C28.618 8.49995 93.3559 2.90848 145.784 2.90845C197.7 2.90841 232.169 2.90845 282.383 7.99891"
                  stroke="url(#paint0_linear_578_1361)"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_578_1361"
                    x1="0.247981"
                    y1="13.531"
                    x2="282.383"
                    y2="11.056"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2A438F" />
                    <stop offset="1" stop-color="#2A438F" stop-opacity="0.87" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* <div className="col-11 text-end">
            <Image alt="persifindLine" src={persifindLine} />
          </div> */}
        </div>

        <div
          className={`${styles.about_Persifund_Context} col-12 col-md-6 p-0`}
        >
          <p>
            Welcome to Persifund, a leading provider of innovative return
            management solutions for e-commerce businesses. Our mission is to
            revolutionize the return process, making it smarter, more efficient,
            and environmentally friendly. We are proud to be among the very
            first SaaSs, offering seamless integration to enhance your return
            experience.
            <br />
            <br />
            At Persifund, we understand the challenges that e-commerce retailers
            face when it comes to handling returns. That's why we have developed
            a comprehensive return management system that saves you time, cost,
            and contributes to a sustainable future. Our solution automates
            manual tasks, streamlines processes, and ensures smooth and speedy
            return handling, all while reducing your carbon footprint.
          </p>
        </div>
      </div>

      <div className={`${styles.centerTitle}`}>
        <h1>Why we are here</h1>
      </div>

      {/* /////////////////////////////////////   /////////////////////////////////////// */}

      <div className={`${styles.center_Box}`}>
        {/* //////////////////////////////      1       ///////////////////////////////// */}

        <div className={`${styles.efficiency} m-0`}>
          <div
            className={`${styles.efficiency_Title} p-0 col-12 col-sm-5 text-center text-sm-end`}
          >
            <h2>Efficiency</h2>
          </div>

          <div className={`${styles.icon} p-0  d-none d-sm-inline`}>
            <div className={`${styles.lineIcon_Energy}`}></div>

            <div className={`${styles.Icon_Energy}`}>
              <Image src={energyIcon} className="" alt="energyIcon" />
            </div>
          </div>

          <div className={`${styles.efficiency_context} p-0 col-12 col-sm-5 `}>
            <p>
              Our return management system is designed to optimize your
              operations. By automating tasks and eliminating manual processes,
              we help you handle returns quickly and efficiently, saving you
              valuable time and resources.
            </p>
          </div>
        </div>

        {/* //////////////////////////////      2        ////////////////////////////////////// */}

        <div className={`${styles.seamless} m-0 `}>
          <div className={`${styles.seamless_context} p-0 col-12 col-sm-5`}>
            <p>
              Our seamless integration enables you to effortlessly integrate our
              return management system into your existing workflow, ensuring a
              smooth and cohesive experience for both you and your customers.
            </p>
          </div>

          <div className={`${styles.icon_seamless} p-0 d-none d-sm-inline`}>
            <div className={`${styles.lineIcon_Energy_seamless}`}></div>

            <div className={`${styles.Icon_Energy_seamless}`}>
              <Image src={integration} className="" alt="Picture of the " />
            </div>
          </div>

          <div
            className={`${styles.seamless_Title} p-0 col-12 col-sm-5 text-center text-sm-start`}
          >
            <h2>Seamless Integration</h2>
          </div>
        </div>

        {/* //////////////////////////////      3        ///////////////////////////////////////////// */}

        <div className={`${styles.costSavings} m-0`}>
          <div
            className={`${styles.costSavings_Title} p-0 col-12 col-sm-5 text-center text-lg-end`}
          >
            <h2>Cost Savings</h2>
          </div>

          <div className={`${styles.icon} p-0  d-none d-sm-inline`}>
            <div className={`${styles.lineIcon_Energy}`}></div>

            <div className={`${styles.Icon_Energy}`}>
              <Image src={save_Money} alt="save Money" />
            </div>
          </div>

          <div className={`${styles.costSavings_context} p-0 col-12 col-sm-5`}>
            <p>
              Our solution is built to help you save money. By streamlining your
              return processes, reducing errors, and optimizing resource
              allocation, we help you minimize costs associated with returns,
              ultimately improving your bottom line.
            </p>
          </div>
        </div>

        {/* /////////////////////////////       4       ////////////////////////////////////////////// */}

        <div
          className={`${styles.environmental} justify-content-center m-0 d-flex flex-column-reverse flex-sm-row`}
        >
          <div
            className={`${styles.environmental_context} p-0 col-12 col-sm-5`}
          >
            <p>
              We believe in sustainability. By digitizing and automating the
              return process, we contribute to reducing paper waste and
              unnecessary transportation, making a positive impact on the
              environment
            </p>
          </div>

          <div
            className={`${styles.icon_environmental} p-0  d-none d-sm-inline`}
          >
            <div className={`${styles.lineIcon_Energy_environmental}`}></div>

            <div className={`${styles.Icon_Energy_environmental}`}>
              <Image src={fuel} className="" alt="fuel" />
            </div>
          </div>

          <div
            className={`${styles.environmental_Title} p-0 col-12 col-sm-5 text-center text-sm-start`}
          >
            <h2>Environmental Responsibility</h2>
          </div>
        </div>

        {/* ////////////////////////////       5       /////////////////////////////////////////////// */}

        <div className={`${styles.dedicated} m-0`}>
          <div
            className={`${styles.dedicated_Title} p-0 col-12 col-sm-5 text-center text-sm-end`}
          >
            <h2>Dedicated Support</h2>
          </div>

          <div className={`${styles.icon} p-0 d-none d-sm-inline`}>
            <div className={`${styles.lineIcon_Energy}`}></div>

            <div className={`${styles.Icon_Energy}`}>
              <Image src={handshake} className="" alt="Picture of the " />
            </div>
          </div>

          <div className={`${styles.dedicated_context} p-0 col-12 col-sm-5`}>
            <p>
              We are committed to your success. Our team of dedicated experts is
              always ready to assist you, providing exceptional customer support
              and guidance throughout your journey with our return management
              system.
            </p>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////// */}

      <div
        className={`${styles.centerTitle_Together} d-flex justify-content-center`}
      >
        <h1>
          Together, we can improve your customer experience, boost loyalty, and
          make returns a hassle-free process for you and your valued customers.
        </h1>
      </div>

      {/* ////////////////////////////////////////////// */}

      <div className={`${styles} mt-5 pt-5 row`}>
        <div
          className={`${styles.delight} ${styles}  col-12 col-lg-6 col-xl-7 mb-5 mb-lg-0 p-0`}
        >
          <h2>Get Started and Delight Your Customers with ZERO cost NOW!</h2>
        </div>

        {/* <div className={`${styles.links} d-flex col-12 col-lg-6 col-xl-5 p-0`}>
          <div
            className={`d-flex justify-content-center justify-lg-content-end`}
          >
            <div className={`${styles.shopify}`}>
              <Link className={`${styles.shopify_link}`} href="#">
                Find us on Shopify
                <span>
                  <Image alt="shopify" src={shopify} />
                </span>
              </Link>
            </div>

            <div className={`${styles.demo}`}>
              <Link className={`${styles.demo_link}`} href="#">
                Book a demo
              </Link>
            </div>
          </div> */}

        {/* <div className={`${styles.try}`}>
            <h3>Try it free</h3>

            <section className={`${styles.try_Image}`}>
              <Image src={vector} alt="vector"></Image>
            </section>

          </div> */}
        {/* ///// */}

        {/* <div className={`${styles.try}`}>
            <div className={`${styles} col-1 col-xxl-2 invisible`}>
              <section></section>
            </div>

            <div className="col d-flex">
              <h3>Try it free</h3>

              <section className={`${styles.try_Image}`}>
                <Image src={vector} alt="vector"></Image>
              </section>
            </div>

            <div className={` ${styles} col invisible`}>
              <section></section>
            </div>
          </div>

          {/* //////// */}
        {/* </div> */}
      </div>

      {/*  */}
      {/*  */}
    </div>
  );
}
