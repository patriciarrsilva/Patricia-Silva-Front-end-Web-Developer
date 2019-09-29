import React from 'react';
import NavigationLinks from './NavigationLinks';
import MenuIcon from './MenuIcon';
import './css/Shared.css';
import './css/Nav.css';

function Nav(props) {
    const { visible, handleMenuClick } = props;

    return (
        <div className="nav-container">
            <nav className="nav">
                <a href="" className="nav-home">
                    <h1 className="nav-home__title">Patrícia Silva</h1>
                    <h2 className="nav-home__subtitle">Front-end web developer</h2>
                </a>

                <MenuIcon handleMenuClick={handleMenuClick} />

                <NavigationLinks visible={visible} />
            </nav>
        </div>
    )
}


export default Nav