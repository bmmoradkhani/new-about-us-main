import React, { FC } from "react";
import Image from "next/image";
import styles from "../AboutUsPage.module.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { IcenterMain as Iprops } from "../index";

export interface MainContentProps {
  content: Iprops[];
}

const CenterMain: FC<MainContentProps> = (data: MainContentProps) => {
  return (
    <>
      <Row
        className={`${styles.efficiency} ${styles.center_Box}  my_container`}
      >
        {Object.values(data.content).map((item: Iprops, index) => (
          <section
            key={index}
            className={`${styles.flexDirection} p-0 d-lg-flex justify-content-between mx-0 row`}
          >
            <div className={`${styles.efficiency_Title} col-lg-5 p-0`}>
              <h2 key={index}>{item.title}</h2>
            </div>

            <div className={`${styles.icon} d-none d-lg-inline p-0 w-auto`}>
              <div className={`${styles.lineIcon_Energy}`}></div>
              <div className={`${styles.Icon_Energy} `}>
                <Image key={index} src={item.image} alt="Icon" />
              </div>
            </div>

            <div className={`${styles.efficiency_context} p-0 col-12 col-lg-5`}>
              <p key={index}>{item.description}</p>
            </div>
          </section>
        ))}
      </Row>
    </>
  );
};

export default CenterMain;
