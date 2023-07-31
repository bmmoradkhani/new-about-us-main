import Link from "next/link";
import Image from "next/image";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// images
import arrowRightCircle from "../../../public/assets/images/arrow-right-circle.svg";
import loptop from "../../../public/assets/images/loptop.png";
import brands from "../../../public/assets/images/brands.png";
import integrationBrandsForMobile from "../../../public/assets/images/integration-brands-for mobile.png";
import integrationMainForMobile from "../../../public/assets/images/integration-main-for-mobile.png";

// styles
import styles from "./Integrates.module.scss";

const Integrates = () => {
  return (
    <div className={`${styles.integrates} my_fluid_container`}>
      <div className={styles.content}>
        <div className="my_container">
          <Row>
            <Col md={4}>
              {" "}
              <h1>Integrates with leading platforms </h1>
              <p>
                We work with the best tech, agencies, and service providers in
                the industry to create an all-in-one seamless returns solution
                for scaling your brands.
              </p>
            </Col>

            <div>
              {" "}
              <span
                className={` ${styles.all_brands} d-flex align-items-center`}
              >
                See All Brands{" "}
              </span>{" "}
              <Link href="/integration">
                <Image
                  className={styles.arrow}
                  src={arrowRightCircle}
                  alt="Green Process"
                  width={46.7}
                  height={46.7}
                />
              </Link>
            </div>

            <Col>
              <Image
                src={loptop}
                className={`${styles.loptop} d-md-inline-block d-none`}
                alt="loptop"
                // width={1100}
                // height={582.62}
              />

              {/* show in mobile */}
              <Image
                src={integrationBrandsForMobile}
                className={`${styles.integration_brands_for_mobile} d-md-none`}
                alt="brands"
                width={342}
                height={159}
              />

              {/* <Image
    src={integrationMainForMobile}
    className={`${styles.integration_main_for_mobile} d-md-none`}
    alt="brands"
    // width={419}
    // height={324}
  /> */}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Integrates;
