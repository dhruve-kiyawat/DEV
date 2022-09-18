import React from "react";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <>
      <div className={styles.head}>
        <b>What we are providing ?</b>
      </div>
      <div className={styles.sub}>Connecting You With The Right Person</div>
      <div className={styles.parent}>
        <div className={styles.box}>
          <div className={styles.heading}>
            <b>Farmers</b>
          </div>
          <div className={styles.subhead}>
            Design to me is something magical - I am lucky that it lets me get
            creative and build new projects.
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.heading}>
            <b>Industrialist</b>
          </div>
          <div className={styles.subhead}>
            {
              "Even single project is a challenge that I accept eagerly. Let's implement innovative ideas together."
            }
          </div>
        </div>
      </div>
      <div className={styles.parent2}>
        <div className={styles.box}>
          <div className={styles.heading}>
            <b>Wastage Uses</b>
          </div>
          <div className={styles.subhead}>
            I am willing to solve any inquiry that comes from your side within
            minutes.
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.heading}>
            <b>Enviroment Friendly</b>
          </div>
          <div className={styles.subhead}>
            I will deliver my best in each and every project given to me. So you
            can trust me with everything.
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
