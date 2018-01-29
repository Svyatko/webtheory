import React from "react";

import Mobile from "./Mobile";
import MobileFooter from "./MobileFooter";
import Navi from "./Navi";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <div className="o-container">
                    <Mobile />
                    <Navi />
                    <Header />
                </div>
                <div className="o-container">
                    <div className="o-wrapper">
                        <Sidebar />
                        <Content />
                    </div>
                    <MobileFooter />
                </div>
            </div>
        );
    }
}
