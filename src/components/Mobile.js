import React, {Component} from 'react';

export default class Mobile extends Component {

    constructor() {
        super();
        this.state = {
            search: true, inputState: 'hidden',
            mobileNav: true, navBar: 'hidden'
        };
    }
    
    inputSearch() {
        this.setState({search: !this.state.search});
        (this.state.search) ?  this.setState({inputState: 'shown'}) : this.setState({inputState: 'hidden'});
    }
    
    navHandle() {
        this.setState({mobileNav: !this.state.mobileNav});
        (this.state.mobileNav) ?  this.setState({navBar: 'shown'}) : this.setState({navBar: 'hidden'});
    }

    handleClick() {
        this.setState({inputState: 'hidden', search: !this.state.search});
    }

    render() {
        return (
            <div>
                <nav className="c-mobile">
                    <ul className={"c-mobile__list"+ " " + this.state.navBar}>
                        <li className="c-mobile__item">
                            <a className="c-mobile__link" href="#">Главная</a>
                        </li>
                        <li className="c-mobile__item">
                            <a className="c-mobile__link" href="#">Новости</a>
                        </li>
                        <li className="c-mobile__item">
                            <a className="c-mobile__link" href="#">Статьи</a>
                        </li>
                        <li className="c-mobile__item">
                            <a className="c-mobile__link" href="#">Халява</a>
                        </li>
                        <li className="c-mobile__item">
                            <a className="c-mobile__link" href="#">Смешно</a>
                        </li>
                        <li className="c-mobile__item">
                            <a className="c-mobile__link" href="#">Сообщества</a>
                        </li>
                        <li className="c-mobile__item">
                            <a className="c-mobile__link" href="#">Спорт</a>
                        </li>
                        <li className="c-mobile__item">
                            <a className="c-mobile__link" href="#">Погода</a>
                        </li>
                        <div className="c-mobile__poll">
                            <h4 className="poll">Как ваши дела?</h4>
                            <label>
                                <input type="checkbox" name="good"/>
                                Хорошо
                            </label>
                            <label>
                                <input type="checkbox" name="norm"/>
                                Нормально
                            </label>
                            <label>
                                <input type="checkbox" name="so-so"/>
                                Так себе
                            </label>
                            <button className="o-button">Я готов проголосовать сейчас!</button>
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
                    </ul>
                    <div>
                        <div className={"c-mobile__search " + this.state.inputState}>
                            <input type="text" placeholder="Ищем что-то?"
                            className={"c-mobile__input" + ' ' + this.state.inputState}/>
                            <div className="cross" onClick={this.handleClick.bind(this)}>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="c-mobile__find">
                                <button className={this.state.navBar + " " + "o-button"}>Найти</button>
                            </div>
                        </div>
                        <button className="c-mobile__search-button" onClick={this.inputSearch.bind(this)}>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className={"c-mobile__burger" + " " + this.state.navBar} onClick={this.navHandle.bind(this)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        );
    }
}