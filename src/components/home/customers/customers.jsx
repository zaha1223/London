import React from "react";
import { Customer } from "../../customer/customer";
import css from "./customers.module.css";
import smlLogo from "../../../assets/imgs/quote.svg";

export const Customers = () => {
  return (
    <section className={css.customer_section}>
      <div className="container">
        <p className={css.customer_subtitle}>Testimony</p>
        <h5 className={css.customer_title}>Happy customers</h5>
        <div className={css.customers_list}>
          <Customer />
          <Customer />
          <Customer />
          <img className={css.bottom_img} src={smlLogo} alt="small_logo" />
        </div>
      </div>
    </section>
  );
};
