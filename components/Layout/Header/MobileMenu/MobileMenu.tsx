import React, { useState, useRef } from "react";
import Link from "next/link";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as menu from "../../../../shared/constants/layout";

// icons
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

// styles
import styles from "./MobileMenu.module.scss";

export default function MobileMenu() {
  const [menuState, setMenuState] = useState({
    product: false,
    Integrations: false,
  });

  const [openMenu, setOpenMenu] = useState(false);

  const checkboxRef = useRef<any>();

  const handleClickOnMenu = () => {
    setMenuState({ ...menuState, product: !menuState.product });
  };

  const setCheckbox = () => {
    if (checkboxRef.current) {
      console.log(checkboxRef.current.checked);
      checkboxRef.current.checked = false;
    }
  };

  return (
    <nav
      className={`${styles.nav} my_container `}
      onClick={() => setOpenMenu(false)}
    >
      <div className={styles.navbar}>
        <div className={`${styles.container} ${styles.nav_container}`}>
          <input
            ref={checkboxRef}
            className={styles.checkbox}
            type="checkbox"
            name=""
            id=""
          />
          <div className={`${styles.hamburger_lines}`}>
            <span className={`${styles.line} ${styles.line1}`}></span>
            <span className={`${styles.line} ${styles.line2}`}></span>
            <span className={`${styles.line} ${styles.line3}`}></span>
          </div>

          <div className={`${styles.menu_items}`}>
            {/* <li className={styles.menu_item}>
              <Row onClick={()=>handleClickOnMenu()}>
                <Col>
                  <Link href="/" >
                    <a className={styles.menu_title}>{menu.product}</a>
                  </Link>
                </Col>{" "}
                <Col className={` ${styles.arrow} text-end`}>
                  {" "}
                  <BsChevronDown
                    style={
                      menuState.product == false
                        ? { display: "none" }
                        : { display: "initial" }
                    }
                  />
                                    <BsChevronUp
                    style={
                      menuState.product == true
                        ? { display: "none" }
                        : { display: "initial" }
                    }
                  />
                </Col>
              </Row>{" "}
              <hr className={styles.menu_line} />
              <ul
                style={
                  menuState.product == true
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <ul className="">
                  <li className={styles.menuItem}>
                    <Link href="/">
                      <a>{menu.basicProducts}</a>
                    </Link>
                  </li>
                  <hr className={styles.menu_line} />
                  <ul>
                    <li className={styles.menuItem}>
                      <Link href="/">
                        <a>{menu.returns}</a>
                      </Link>
                    </li>
                    <hr className={styles.menu_line} />
                    <li className={styles.menuItem}>
                      <Link href="/">
                        <a>{menu.exchange}</a>
                      </Link>
                    </li>
                    <hr className={styles.menu_line} />
                    <li className={styles.menuItem}>
                      <Link href="/">
                        <a>{menu.analytic}</a>
                      </Link>
                    </li>
                    <hr className={styles.menu_line} />
                    <li className={styles.menuItem}>
                      <Link href="/">
                        <a>{menu.tracking}</a>
                      </Link>
                    </li>
                    <hr className={styles.menu_line} />
                  </ul>
                </ul>

                <ul>
                  <li className={styles.menuItem}>
                    <Link href="/">
                      <a>{menu.customizeServices}</a>
                    </Link>
                  </li>
                  <hr className={styles.menu_line} />
                  <ul>
                    <li className={styles.menuItem}>
                      <Link href="/">
                        <a>{menu.instantRefund}</a>
                      </Link>
                    </li>
                    <hr className={styles.menu_line} />
                    <li className={styles.menuItem}>
                      <Link href="/">
                        <a>{menu.instantCredit}</a>
                      </Link>
                    </li>
                    <hr className={styles.menu_line} />
                    <li className={styles.menuItem}>
                      <Link href="/">
                        <a>{menu.inStoreReturns}</a>
                      </Link>
                    </li>
                    <hr className={styles.menu_line} />
                    <li className={styles.menuItem}>
                      <Link href="/">
                        <a>{menu.autoCancellation}</a>
                      </Link>
                    </li>
                    <hr className={styles.menu_line} />
                  </ul>
                </ul>
              </ul>
            </li> */}

            {/* <hr className={styles.menu_line} /> */}
            <li className={styles.menuItem} onClick={() => setCheckbox()}>
              <Link href="integration">{menu.integration}</Link>
            </li>
            {/* <hr className={styles.menu_line} />
            <li className={styles.menuItem}>
              <Link href="/">
                <a>{menu.plan}</a>
              </Link>
            </li> */}
            {/* <hr className={styles.menu_line} />
            <li className={styles.menuItem}>
              <Link href="/">
                <a>{menu.resources}</a>
              </Link>
            </li> */}
            <hr className={styles.menu_line} />

            {/* <li><a href="#">about</a></li>
          <li><a href="#">blogs</a></li>
          <li><a href="#">portfolio</a></li>
          <li><a href="#">contact</a></li> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
