import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <div className="c-header">
                <div className="c-header__profile-part">
                    <div className="c-header__logo">
                        <img src="../../images/webtheory.png" alt="Logotype"/>
                        <p>Бесплатные уроки</p>                    
                    </div>
                    <div className="c-header__cabinet">
                        <div className="c-header__avatar-name">
                            <h4>Никита Архипов</h4>
                            <p>Новых сообщений: 0</p>
                        </div>
                        <div className="c-header__avatar-icon">
                            <img src="../../images/avatar.png" alt="Avatar icon"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <button className="o-button">
                                <img src="../../images/file.png" alt="File"/>
                                Правила на сайте
                            </button>
                            <button className="o-button">
                                <img src="../../images/box.png" alt="Box"/>
                                Добавить материал
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
