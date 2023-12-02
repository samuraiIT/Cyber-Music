import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "ui/Button";

import "./Card.scss";

export type Props = { heading: string; image: any };

const Card: React.FC<Props> = ({ heading, image }) => {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("playlist");
  };
  return (
    <div className="card" onClick={handleCardClick}>
      <img src={image} className="card__image" />
      <h1 className="card__heading">{heading}</h1>
      <p className="card__subtitle">some text</p>
      <p className="card__text">some text</p>
      <Button text={"Перейти"} buttonStyle={"general"} />
    </div>
  );
};

export { Card };
