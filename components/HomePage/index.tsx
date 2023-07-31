import React from "react";

// components
import FirstView from "./FirstView/FirstView";
import Difference from "./Difference/Difference";
import DifferentServices from "./DifferentServices/DifferentServices";
import Integrates from "./Integrates/Integrates";
import CustomerComment from "./CustomerComment/CustomerComment";

// styles
import styles from "./HomePage.module.scss";

const Home = () => {
  return (
    <div className={styles.home_page}>
      <FirstView />
      <Difference />
      <DifferentServices />
      <Integrates />
      <CustomerComment />
    </div>
  );
};

export default Home;
