import React, { FC } from "react";

// components
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// styles
import styles from "./Layout.module.scss";

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
