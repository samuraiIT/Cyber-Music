import React from "react";
import { Link } from "react-router-dom";
import { Button } from "ui/Button";

import "./HomePage.scss";

const HomePage: React.FC = () => {
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
          <div className="home-page__hero-content hero">
            Здесь будет картинка и какая-то карточка:)
          </div>
        </div>
      </section>
      <main className="home-page__main">
        <div className="container">
          <div className="home-page__main-section main-section">home-page</div>
        </div>
      </main>
    </div>
  );
};

export { HomePage };
