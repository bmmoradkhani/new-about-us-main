import React from "react";
import styles from "./AboutUsPage.module.scss";
import Image from "next/image";

import point from "../../public/assets/images/about-us/Group 670.png";

import energyIcon from "../../public/assets/images/about-us/energy 1.png";
import integration from "../../public/assets/images/about-us/integration 1.png";
import save_Money from "../../public/assets/images/about-us/save-money 1.png";
import fuel from "../../public/assets/images/about-us/fuel 2.png";
import handshake from "../../public/assets/images/about-us/handshake 1.png";

import wave from "../../public/assets/images/about-us/wave.png";
import wave1 from "../../public/assets/images/about-us/wave1.png";
import wave2 from "../../public/assets/images/about-us/wave2.png";

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

export default function index() {
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
      endNum: 70,
      duration: 4,
      delay: 1,
      suffix: "%",
      text: "reduce complained messages",
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

  return (
    <div className={` ${styles.main}`}>
      <div className={` ${styles.ourMission}`}>
        <h1 className={` ${styles.ourMission_Text}`}>Our Mission</h1>
      </div>
      <div className={`${styles.storeTitle} d-flex justify-content-center`}>
        <div className={`${styles.storeTitle_Text}`}>
          <p>We enable stores to build wonderful return experience</p>
        </div>
      </div>
      <div className={`${styles}`}>
        <Image src={point} className="" alt="point" />
      </div>
      <div className={`${styles.numberTitle}`}>
        <p>We're backed by incredible Numbers</p>
      </div>
      <Share users={data} />
      <div className={`${styles.my_Container} ${styles.row_Title} row`}>
        <div
          className={`${styles.about_Persifund} col-12 col-md-6 col-lg-5 my-3 my-md-0 p-0`}
        >
          <div>
            <h2 className="d-flex justify-content-center">
              {"About"}
              <span className={`${styles.about_Persifund_span} ps-3`}>
                {"Persifund"}
              </span>
            </h2>
            <div
              className={`${styles.about_Persifund_underline} d-flex justify-content-center`}>
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
        </div>
        <div
          className={`${styles.about_Persifund_Context} col-12 col-md-6 col-lg-5 p-0`}
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
      <div className={`${styles.center_Box}`}>
        <div className={`${styles.efficiency} m-0`}>
          <div
            className={`${styles.efficiency_Title} p-0 col-12 col-sm-5 text-center text-sm-end`}
          >
            <h2>Efficiency</h2>
          </div>
          <div className={`${styles.icon} p-0  d-none d-md-inline`}>
            <div className={`${styles.lineIcon_Energy}`}>{""}</div>
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
        <div className={`${styles.seamless} m-0 `}>
          <div className={`${styles.seamless_context} p-0 col-12 col-sm-5`}>
            <p>
              Our seamless integration enables you to effortlessly integrate our
              return management system into your existing workflow, ensuring a
              smooth and cohesive experience for both you and your customers.
            </p>
          </div>
          <div className={`${styles.icon_seamless} p-0 d-none d-md-inline`}>
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
        <div className={`${styles.costSavings} m-0`}>
          <div
            className={`${styles.costSavings_Title} p-0 col-12 col-sm-5 text-center text-sm-end`}
          >
            <h2>Cost Savings</h2>
          </div>
          <div className={`${styles.icon} p-0  d-none d-md-inline`}>
            <div className={`${styles.lineIcon_Energy}`}>{""}</div>
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
            className={`${styles.icon_environmental} p-0 d-none d-md-inline`}
          >
            <div className={`${styles.lineIcon_Energy_environmental}`}>{""}</div>

            <div className={`${styles.Icon_Energy_environmental}`}>
              <Image src={fuel} alt="fuel" />
            </div>
          </div>
          <div
            className={`${styles.environmental_Title} p-0 col-12 col-sm-5 text-center text-sm-start`}
          >
            <h2>Environmental Responsibility</h2>
          </div>
        </div>
        <div className={`${styles.dedicated} m-0`}>
          <div
            className={`${styles.dedicated_Title} p-0 col-12 col-sm-5 text-center text-sm-end`}
          >
            <h2>Dedicated Support</h2>
          </div>
          <div className={`${styles.icon} p-0 d-none d-md-inline`}>
            <div className={`${styles.lineIcon_Energy}`}>{""}</div>
            <div className={`${styles.Icon_Energy}`}>
              <Image src={handshake} alt="Picture of the " />
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
      <div
        className={`${styles.centerTitle_Together} d-flex justify-content-center`}
      >
        <h1>
          Together, we can improve your customer experience, boost loyalty, and
          make returns a hassle-free process for you and your valued customers.
        </h1>
      </div>
      <div
        className={`${styles} row mx-0 `}
        style={{ position: "relative", height: "600px" }}
      >
        <div
          className={`${styles.delight_Background}`}
          style={{
            position: "absolute",
            bottom: "0",
            padding: "0",
          }}
        >
          <Image
            alt=""
            src={wave2}
            style={{ width: "100%", height: "600px" }}
          />
        </div>
        <div
          className={`${styles.delight_Background}`}
          style={{
            position: "absolute",
            bottom: "-11px",
            padding: "0",
          }}
        >
          <Image
            alt=""
            src={wave1}
            style={{ width: "100%", height: "580px" }}
          />
        </div>
        <div
          className={`${styles.delight_Background}`}
          style={{
            position: "absolute",
            bottom: "-21px",
            padding: "0",
          }}
        >
          <Image alt="" src={wave} style={{ width: "100%", height: "555px" }} />
        </div>

        <div
          className={`${styles.delight} ${styles} col-12 col-lg-6 col-xl-7 p-0`}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "120px",
            zIndex: 10,
          }}
        >
          <h2 style={{ width: "721px" }}>
            Get Started and Delight Your Customers with ZERO cost NOW!
          </h2>
        </div>
      </div>
    </div>
  );
}
