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
          “Cultivators are the most valuable citizens…they are tied to their country.”
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.heading}>
            <b>Organizations</b>
          </div>
          <div className={styles.subhead}>
            {
              "Natural gas from fossil fuel sources is used in the biogas, is made by Organizations in the form of energy, including the production of heat and power."
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
          Wastages convert into beneficial resource like, bio-fuels, green energy.
            
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.heading}>
            <b>Enviroment Friendly</b>
          </div>
          <div className={styles.subhead}>
          Syngas is created by heating biomass to remove impurities, which results in a mixture of hydrogen and carbon monoxide,To generate electricity.
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
