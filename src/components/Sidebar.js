import React from "react";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="c-sidebar">
                <nav className="c-sidebar__nav">
                    <div className="o-sidebar-title">
                        <div>
                            <img src="../../images/sidebar-menu.png" alt="Burger in sidebar"/>
                        </div>
                        <h4>Навигация</h4>
                    </div>
                    <ul className="c-sidebar__nav-list">
                        <li className="c-sidebar__nav-item">
                            <a href="#" className="c-sidebar__nav-link">
                                <img src="../../images/sidebar__nav-img/mouse.png" alt="Mouse"/>
                                Главная
                            </a>
                        </li>
                        <li className="c-sidebar__nav-item">
                            <a href="#" className="c-sidebar__nav-link">
                                <img src="../../images/sidebar__nav-img/files.png" alt="Files"/>
                                Новости
                            </a>
                        </li>
                        <li className="c-sidebar__nav-item">
                            <a href="#" className="c-sidebar__nav-link">
                                <img src="../../images/sidebar__nav-img/file.png" alt="File"/>
                                Статьи
                            </a>
                        </li>
                        <li className="c-sidebar__nav-item">
                            <a href="#" className="c-sidebar__nav-link">
                                <img src="../../images/sidebar__nav-img/cloud.png" alt="Cloud"/>
                                Халява
                            </a>
                        </li>
                        <li className="c-sidebar__nav-item">
                            <a href="#" className="c-sidebar__nav-link">
                                <img src="../../images/sidebar__nav-img/glasses.png" alt="Glasses"/>
                                Смешно
                            </a>
                        </li>
                        <li className="c-sidebar__nav-item">
                            <a href="#" className="c-sidebar__nav-link">
                                <img src="../../images/sidebar__nav-img/microphone.png" alt="Microphone"/>
                                Сообщества
                            </a>
                        </li>
                        <li className="c-sidebar__nav-item">
                            <a href="#" className="c-sidebar__nav-link">
                                <img src="../../images/sidebar__nav-img/award.png" alt="Award"/>
                                Спорт</a>
                        </li>
                        <li className="c-sidebar__nav-item">
                            <a href="#" className="c-sidebar__nav-link">
                                <img src="../../images/sidebar__nav-img/weather.png" alt="Weather"/>
                                Погода</a>
                        </li>
                    </ul>
                </nav>
                <div className="c-sidebar__poll">
                    <div className="o-sidebar-title">
                        <div>
                            <img src="../../images/diagram.png" alt="Burger in sidebar"/>
                        </div>
                        <h4>Опрос</h4>
                    </div>
                    <div className="c-sidebar__poll">
                        <h4 className="poll">Как ваши дела?</h4>
                        <label>
                            <input type="checkbox"/>
                            Хорошо
                        </label>
                        <label>
                            <input type="checkbox"/>
                            Нормально
                        </label>
                        <label>
                            <input type="checkbox"/>
                            Так себе
                        </label>
                        <button>Я готов проголосовать сейчас!</button>
                    </div>
                </div>
                <div className="c-sidebar__stats">
                    <div className="o-sidebar-title">
                        <div>
                            <img src="../../images/graph.png" alt="Burger in sidebar"/>
                        </div>
                        <h4>Статистика</h4>
                    </div>
                    <ul className="c-sidebar__stats-list">
                        <li className="c-sidebar__stats-item">Рейтинг Alexa: <span>171,811</span></li>
                        <li className="c-sidebar__stats-item">PR: <span>0/10</span></li>
                        <li className="c-sidebar__stats-item">Наличие в DMOZ: <span>Нет</span></li>
                        <li className="c-sidebar__stats-item">Наличие в ЯК: <span>Нет</span></li>
                        <li className="c-sidebar__stats-item">Ссылок на сай: <span>8,912</span></li>
                        <li className="c-sidebar__stats-item">В индексе GOOGLE: <span>2,050</span></li>
                        <li className="c-sidebar__stats-item">Стоимость сайта: <span>100,200$</span></li>
                    </ul>
                </div>
                <div className="c-sidebar__footer">
                    <p>Designed by webtheory.net</p>
                </div>
            </div>
        )
    }
}