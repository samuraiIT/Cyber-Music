import React from "react";

import "./Button.scss";

type Props = {
  text: string;
  buttonStyle: "general" | "white";
  onClick?: (e: React.MouseEvent) => void;
  style?: Record<string, string | Record<string, string>>;
};

const Button: React.FC<Props> = ({
  text,
  buttonStyle,
  onClick = () => {},
  style
}) => {
  const className = buttonStyle === "white" ? "white-btn" : "";
  return (
    <button className={`button ${className}`} onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export { Button };
