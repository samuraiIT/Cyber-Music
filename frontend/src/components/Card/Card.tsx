import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "ui/Button";

import "./Card.scss";

export type Props = { heading: string };

const Card: React.FC<Props> = ({ heading }) => {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("playlist");
  };
  return (
    <div className="card" onClick={handleCardClick}>
      <h1>{heading}</h1>
      <p>some text</p>
      <p>some text</p>
      <Button text={"Перейти"} buttonStyle={"general"} />
    </div>
  );
};

export { Card };
