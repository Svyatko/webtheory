import React from "react";

export default class Navi extends React.Component {
    render() {
        return (
                <nav className="c-nav">
                    <ul className="c-nav__list">
                        <li className="c-nav__list-item">
                            <a href="#" className="c-nav__list-link">Главная</a>
                        </li>
                        <li className="c-nav__list-item">
                            <a href="#" className="c-nav__list-link">Новости</a>
                        </li>
                        <li className="c-nav__list-item">
                            <a href="#" className="c-nav__list-link">Статьи</a>
                        </li>
                        <li className="c-nav__list-item">
                            <a href="#" className="c-nav__list-link">Халява</a>
                        </li>
                        <li className="c-nav__list-item">
                            <a href="#" className="c-nav__list-link">Смешно</a>
                        </li>
                        <li className="c-nav__list-item">
                            <a href="#" className="c-nav__list-link">Сообщества</a>
                        </li>
                        <li className="c-nav__list-item">
                            <a href="#" className="c-nav__list-link">Спорт</a>
                        </li>
                        <li className="c-nav__list-item">
                            <a href="#" className="c-nav__list-link">Погода</a>
                        </li>
                    </ul>
                    <div className="c-nav__search">
                        <input type="text" className="c-nav__search-input" placeholder="Ищем что-то?"/>
                        <button className="c-nav__search-btn">
                            <img src="../../images/icon-search.png" alt="Find!"/>
                        </button>
                    </div>
                </nav>
        );
    }
}
