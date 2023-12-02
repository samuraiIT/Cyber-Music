import React from "react";
import { Link } from "react-router-dom";
import { Button } from "ui/Button";
import { Card } from "components/Card";
import piano from "assets/images/piano.png";
import harp from "assets/images/harp.png";
import violin from "assets/images/violin.png";
import micro from "assets/images/micro.png";
import micro2 from "assets/images/micro2.png";

import "./HomePage.scss";

const HomePage: React.FC = () => {
  const cards = [
    { title: "Пианино", image: piano },
    { title: "Арфа", image: harp },
    { title: "Скрипка", image: violin },
    { title: "Поп", image: micro },
    { title: "Live", image: micro2 }
  ];

  return (
    <div className="home-page">
      <header className="home-page__header">
        <div className="container">
          <div className="home-page__header-content">
            <div className="home-page__header-col">
              <div className="home-page__logo">Solana</div>
            </div>
            <div className="home-page__header-col">
              <nav className="home-page__menu menu">
                <ul className="menu__list">
                  <li className="menu__item">
                    <Link to="/" className="menu__link">
                      <div className="menu__label">Главная</div>
                    </Link>
                  </li>
                  <li className="menu__item menu__item--active">
                    <Link to="services" className="menu__link">
                      <div className="menu__label">Услуги</div>
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="reviews" className="menu__link">
                      <div className="menu__label">Плейлисты</div>
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="reviews" className="menu__link">
                      <div className="menu__label">Профиль</div>
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="reviews" className="menu__link">
                      <div className="menu__label">Отзывы</div>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="home-page__login-buttons">
                <Button text={"Войти"} buttonStyle={"white"} />
                <Button text={"Зарегистрироваться"} buttonStyle={"general"} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="home-page__hero-section">
        <div className="container">
          <div className="home-page__hero-content hero"></div>
        </div>
      </section>
      <main className="home-page__main">
        <div className="container">
          <div className="home-page__main-section main-section">
            <ul className="main-section__list">
              {cards.length
                ? cards.map((card) => {
                    return (
                      <li key={card.title} className="main-section__item">
                        <Card heading={card.title} image={card.image} />
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export { HomePage };
