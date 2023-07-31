import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NewPage.module.scss";
// Images :: =>>
import brands from "../../public/assets/images/brands.png";
import laptop from "../../public/assets/images/loptop2.png";
import shopify from "../../public/assets/images/shopify.png";
import shopifyplus from "../../public/assets/images/shopifyplus2.png";
import postnord from "../../public/assets/images/postnord.png";

export default function index() {
  return (
    <div className={` ${styles.main} pb-5`}>
      <div className={` ${styles.topMain} `}>
        <div className={` ${styles.test} `}>
          <div className="row m-0">
            <div className={` ${styles.topMainCenter} col-12 text-center`}>
              <Image
                src={brands}
                className="col-9 col-sm-8 col-md-6 col-lg-5 col-xxl-4 h-100"
                alt="Picture of the author"
              />
            </div>
          </div>

          <div className="row m-0 justify-content-end">
            <div
              className={` ${styles.topMainTitleBox} text-start  col-12 col-sm-7 col-md-8 mt-sm-4`}
            >
              <div
                className={` ${styles.topMainTitle} col-12 text-lg-start p-0`}
              >
                <h1>Find an Integration</h1>
              </div>

              <div className={` ${styles.topMainSubTitle} col-12 mt-5`}>
                <p className="col-11 col-md-8">
                  Persifund integrates with the leading platforms, apps, and
                  services to create and run your online business.
                </p>
              </div>
            </div>

            <div
              className={` ${styles.topMainRight} col-12 col-sm-5 col-md-4 text-md-end p-0`}
            >
              <Image
                className="col-12 text-end h-100"
                alt="laptop"
                src={laptop}
                width={500}
                height={460}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row my_container">
        <div className={` ${styles.searchBox} col-12 my-3 `}>
          <span className={` ${styles.searchBoxIcon} `}>
            {" "}
            <span className={` ${styles.searchIcon} `}></span>
            <span className={` ${styles.searchIconLine} `}></span>
          </span>
          <input type="text" placeholder="Search ..." name="" id="" />
        </div>
      </div>

      <div className={` ${styles.centerMain} row my_container`}>
        <div className="text col-12 col-lg-3 my-3 my-md-5 my-lg-0 d-md-flex d-lg-block">
          <h6 className="me-2 me-md-3 me-lg-0 my-3">Ecommerce</h6>
          <h6 className="me-2 me-md-3 me-lg-0 my-3">CRM</h6>
          <h6 className="me-2 me-md-3 me-lg-0 my-3">ERP</h6>
          <h6 className="me-2 me-md-3 me-lg-0 my-3">Shipping</h6>
          <h6 className="me-2 me-md-3 me-lg-0 my-3">3PL</h6>
        </div>

        <div className={` ${styles.cardBox} col-md-12 col-lg-9 text-md-center`}>
          <div className={` ${styles.cardBoxRow} row`}>
            <div
              className={` ${styles.cardBoxShopify} col-10 col-md-6 col-lg-12 col-xl-3 text-center mb-md-3  me-lg-3 mx-xl-0`}
            >
              <Image className="mt-4" alt="shopify" src={shopify} />

              <h3 className={` ${styles.cardBoxTitleShopify} mt-2`}>Shopify</h3>

              <p className={` ${styles.cardBoxComment} mt-3 mx-auto`}>
                An omni-channel enterprise platform where you can start, grow,
                and scale your business.
              </p>

              <h6 className={` ${styles.cardBoxBtn} `}>Ecommerce</h6>

              {/* <div className="arrowBox arrowBox1">
              {" "}
              <Link className="" href="#">
                <section className="arrowBoxSpan"></section>
              </Link>
            </div> */}
            </div>

            <div
              className={` ${styles.cardBoxShopifyplus} col-10 col-lg-12 col-xl-3 text-center mx-md-4 mx-lg-0 mx-xl-4 my-3 my-md-0 my-xl-0`}
            >
              <Image className="mt-3" alt="shopifyplus" src={shopifyplus} />

              <p className={` ${styles.cardBoxComment} mt-3 mx-auto`}>
                An omni-channel enterprise platform where you can start, grow,
                and scale your business.
              </p>
              <h6 className={` ${styles.cardBoxBtn} `}>Ecommerce</h6>

              {/* <div>
              {" "}
              <Link className="arrowBox arrowBox2" href="#">
                <section className="arrowBoxSpan"></section>
              </Link>
            </div> */}
            </div>

            <div
              className={` ${styles.cardBoxPostnord} col-10 col-lg-12 col-xl-3 text-center mx-xl-0`}
            >
              <Image className="mt-4" alt="postnord" src={postnord} />

              <h3 className={` ${styles.cardBoxTitlePostnord} `}>Postnord</h3>

              <p className={` ${styles.cardBoxComment} mt-3 mx-auto`}>
                PostNord is a provider of postal services operating mainly in
                the Nordic countries.
              </p>

              <h6 className={` ${styles.cardBoxBtn} `}>Shipping</h6>

              {/* <div>
              {" "}
              <Link className="arrowBox arrowBox3" href="#">
                <section className="arrowBoxSpan"></section>
              </Link>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className={` ${styles.bottomMain} row my_container mt-5`}>
        <div className={` ${styles.bottomMainBox} text-center col-12 d-flex`}>
          <div className={` ${styles.bottomMainBg}col-12 `}>
            <h2
              className={` ${styles.bottomMainTitle}col-12 text-center my-5 `}
            >
              Let’s talk about integrations!
            </h2>

            <p className={` ${styles.bottomMainContext} col-12 mb-5 mx-auto`}>
              Interested in building an integration? We’d love to connect to
              help you get started.
            </p>

            <div className={` ${styles.bottomMainLink} my-5`}>
              <Link href="#">Book a Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
