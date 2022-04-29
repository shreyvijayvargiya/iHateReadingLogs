import React from "react";

interface ButtonInterface {
  type?: "primary" | "secondary";
  value: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = (props: ButtonInterface) => (
  <div className={`button ${props.type} ${props.disabled ? "disabled" : ""}`}>
    <button onClick={props.onClick} disabled={props.disabled}>
      {props.value}
    </button>
  </div>
);

export default Button;
