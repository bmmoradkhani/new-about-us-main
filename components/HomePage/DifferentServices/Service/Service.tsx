import React, { FC } from "react";
import Image from "next/image";

import { Istate as Iprops } from "../DifferentServices";

// styles
import styles from "./Service.module.scss";

const Service: FC<Iprops> = (service: Iprops) => {
  return (
    <div className={styles.service}>
      <Image src={service.image} alt="main image" width={100} height={100} />
      <div className={styles.title}>{service.title}</div>
      <div>{service.subTitle}</div>
    </div>
  );
};

export default Service;
