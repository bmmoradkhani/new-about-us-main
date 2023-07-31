import React from "react";
import Image from "next/image";

import { Istate } from "../../IntegrationPage/index";

// images
import arrowRightCircle from "../../../public/assets/images/arrow-right-circle.svg";

// styles
import styles from "./Integrate.module.scss";

export default function index({ data }: { data: Istate }) {
  return (
    <div
      className={`d-flex flex-column align-items-center ${styles.integrate_card}`}
    >
      <Image
        className={styles.logo}
        src={data.image}
        alt="Logo"
        // width={82}
        // height={93}
      />
      <div className={styles.title}>{data.title}</div>
      <div className={styles.sub_title}>{data.subTitle}</div>
      <div className="flex-grow-1" />
      <div className={styles.category}>{data.category}</div>
      <div className={styles.arrow_container}>
        <a href={data.link} target="_blank" rel="noreferrer">
          <Image src={arrowRightCircle} alt="" width={35} height={35} />
        </a>
      </div>
    </div>
  );
}
