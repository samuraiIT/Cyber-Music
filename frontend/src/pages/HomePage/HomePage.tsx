import React from "react";
import { Link } from "react-router-dom";

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
                      Главная
                    </Link>
                  </li>
                  <li className="menu__item menu__item--active">
                    <Link to="services" className="menu__link">
                      Услуги
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="reviews" className="menu__link">
                      Плейлисты
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="reviews" className="menu__link">
                      Профиль
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="reviews" className="menu__link">
                      Отзывы
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="home-page__login-buttons">
                <button className="button white-btn">Войти</button>
                <button className="button ">Зарегистрироваться</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="home-page__hero-section">
        <div className="container"></div>
      </section>
      <main className="home-page__content">
        <div className="container">home-page</div>
      </main>
    </div>
  );
};

export { HomePage };
