import React from "react";

// styles
import styles from "./Button.module.scss";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, color, ...rest } = props;
  return (
    <button
      {...props}
      style={{
        color: color,
        padding: "14px 20px",
        border: "none",
        borderRadius: "22px 8px 22px 8px",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
