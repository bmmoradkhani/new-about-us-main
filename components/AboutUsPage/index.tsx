import React from "react";
import styles from "./AboutUsPage.module.scss";
import Image from "next/image";

import energyIcon from "../../public/assets/images/about-us/energy 1.png";

export default function index() {
  return (
    <div className={` ${styles.main} `}>
      <div className={` ${styles.ourMission} `}>
        <h1 className={` ${styles.ourMission_Text} `}>Our Mission</h1>
      </div>

      <div className={`${styles.storeTitle} d-flex justify-content-center`}>
        <div className={`${styles.storeTitle_Text} `}>
          <p>We enable stores to build</p>
          <p>wonderful return experience</p>
        </div>
      </div>

      <div className={`${styles.numberTitle}`}>
        <p>We're backed by incredible Numbers</p>
      </div>

      <div
        className={`${styles.numberBox} d-flex justify-content-center align-items-center`}
      >
        <section className={`${styles.numberBox_Title}`}>
          50 <span className={`${styles.numberBox_Title_Hours}`}>hours</span>
          <span>saved on return handling a month</span>
        </section>

        <span className={`${styles.numberLine}`}></span>

        <section className={`${styles.numberBox_Title}`}>
          70%
          <span>reduce complained messages</span>
        </section>

        <span className={`${styles.numberLine}`}></span>

        <section className={`${styles.numberBox_Title}`}>
          301 $<span>save logistics costs per RMA</span>
        </section>

        <span className={`${styles.numberLine}`}></span>

        <section className={`${styles.numberBox_Title}`}>
          30%
          <span>Return rate reduction</span>
        </section>
      </div>

      <div className={`${styles.my_container} row mt-5`}>
        <div
          className={`${styles.about_Persifund} col-12 col-md-6 my-3 my-md-0 p-0`}
        >
          <h2>
            About{" "}
            <span className={`${styles.about_Persifund_span}`}>Persifund</span>
          </h2>{" "}
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

      {/* //////////////////////////////      1       ///////////////////////////////// */}

      <div className={`${styles.efficiency} row justify-content-center m-0`}>
        <div className={`${styles.efficiency_Title} p-0 col-5`}>
          <h2>Efficiency</h2>
        </div>

        <div className={`${styles.icon} p-0 col-2`}>
          <div className={`${styles.lineIcon_Energy}`}></div>

          <div className={`${styles.Icon_Energy}`}>
            <Image src={energyIcon} className="" alt="Picture of the " />
          </div>
        </div>

        <div className={`${styles.efficiency_context} p-0 col-5`}>
          <p>
            Our return management system is designed to optimize your
            operations. By automating tasks and eliminating manual processes, we
            help you handle returns quickly and efficiently, saving you valuable
            time and resources.
          </p>
        </div>
      </div>

      {/* //////////////////////////////      2        ////////////////////////////////////// */}

      {/* <div className={`${styles.seamless} row  justify-content-center m-0`}>
        <div className={`${styles.seamless_context} p-0 col-8`}>
          <p>
            Our seamless integration enables you to effortlessly integrate our
            return management system into your existing workflow, ensuring a
            smooth and cohesive experience for both you and your customers.
          </p>
        </div>

        <div className={`${styles.icon_seamless} p-0 col-1`}>
          <div className={`${styles.lineIcon_Energy_seamless}`}></div>

          <div className={`${styles.Icon_Energy_seamless}`}>
            <Image src={energyIcon} className="" alt="Picture of the " />
          </div>
        </div>

        <div className={`${styles.seamless_Title} p-0 col-3`}>
          <h2>Seamless Integration</h2>
        </div>
      </div> */}

      {/* //////////////////////////////      3        ///////////////////////////////////////////// */}

      <div className={`${styles.efficiency} row justify-content-center m-0`}>
        <div className={`${styles.efficiency_Title} p-0 col-5`}>
          <h2>Cost Savings</h2>
        </div>

        <div className={`${styles.icon} p-0 mt-5 col-2`}>
          <div className={`${styles.lineIcon_Energy}`}></div>

          <div className={`${styles.Icon_Energy}`}>
            <Image src={energyIcon} className="" alt="Picture of the " />
          </div>
        </div>

        <div className={`${styles.efficiency_context} p-0 col-5`}>
          <p>
            Our solution is built to help you save money. By streamlining your
            return processes, reducing errors, and optimizing resource
            allocation, we help you minimize costs associated with returns,
            ultimately improving your bottom line.
          </p>
        </div>
      </div>

      {/* /////////////////////////////       4       ////////////////////////////////////////////// */}

      {/* <div className={`${styles.efficiency} row justify-content-center m-0`}>
        <div className={`${styles.efficiency_Title} col-5`}>
          <h2>Environmental Responsibility</h2>
        </div>

        <div className={`${styles.icon} col-2`}>
          <div className={`${styles.lineIcon_Energy}`}></div>

          <div className={`${styles.Icon_Energy}`}>
            <Image src={energyIcon} className="" alt="Picture of the " />
          </div>
        </div>

        <div className={`${styles.efficiency_context} p-0 col-5`}>
          <p>
            We believe in sustainability. By digitizing and automating the
            return process, we contribute to reducing paper waste and
            unnecessary transportation, making a positive impact on the
            environment
          </p>
        </div>
      </div> */}

      {/* ////////////////////////////       5       /////////////////////////////////////////////// */}

      <div className={`${styles.efficiency} row justify-content-center m-0`}>
        <div className={`${styles.efficiency_Title} p-0 col-5`}>
          <h2>Dedicated Support</h2>
        </div>

        <div className={`${styles.icon} p-0 mt-5 col-2`}>

          <div className={`${styles.lineIcon_Energy}`}></div>

          <div className={`${styles.Icon_Energy}`}>
            <Image src={energyIcon} className="" alt="Picture of the " />
          </div>

        </div>

        <div className={`${styles.efficiency_context} p-0 col-5`}>
          <p>
            We are committed to your success. Our team of dedicated experts is
            always ready to assist you, providing exceptional customer support
            and guidance throughout your journey with our return management
            system.
          </p>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////////////// */}

      <div className={`${styles.centerTitle} d-flex justify-content-center`}>
        <h1 style={{ width: "905.723px" }}>
          Together, we can improve your customer experience, boost loyalty, and
          make returns a hassle-free process for you and your valued customers.
        </h1>
      </div>

      {/*  */}
      {/*  */}
    </div>
  );
}
