import React from "react";
import classes from "./modal.module.css";
import Aux from "../../../containers/hoc/auxillary";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => (

  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default React.memo(Modal);
