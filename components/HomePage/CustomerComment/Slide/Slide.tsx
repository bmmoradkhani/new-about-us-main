import React, { FC } from "react";

import { Istate as Iprops } from "../CustomerComment";
import Image from "next/image";

// styles
import styles from "./Slide.module.scss";

const Slide: FC<Iprops> = (slide: Iprops) => {
  return (
    <div className={styles.customer_comment_slide}>
      <div
        className={styles.card}
        style={{ backgroundColor: slide.backgroundColor }}
      >
        <span className={styles.comment}>{slide.comment} </span>
        {/* <span className={styles.customer_pic}> */}

        <Image
          src={slide.image}
          className={styles.customer_pic}
          alt="customer pic"
          // width={112}
          // height={112}
          // style={{border: '10px solid #fff !important'}}
        />
        {/* </span> */}

        <div className={styles.job}>{slide.job}</div>
        <div className={styles.name}>{slide.name}</div>

        <Image
          src={slide.commaImage}
          className={styles.comma_image}
          alt="comma"
        />
      </div>
    </div>
  );
};

export default Slide;
