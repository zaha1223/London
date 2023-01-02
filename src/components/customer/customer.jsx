import React from "react";
import style from "./customer.module.css";

export const Customer = () => {
  return (
    <div className={style.customer_card}>
      <h6 className={style.customer_name}>Maria</h6>
      <p className={style.customer_text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit
        iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla
        scelerisque scelerisq...
      </p>
      <div className={style.customer_dates}>
        <p className={style.customer_date}>06/02/2022</p>
        <p className={style.customer_date}>11:15</p>
        <p className={style.customer_date}>222</p>
      </div>
    </div>
  );
};
