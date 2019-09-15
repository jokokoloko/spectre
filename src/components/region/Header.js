import React from 'react';
import site from '../../queries/site';
import Link from '../unit/Link';
import Logo from '../unit/Logo';

const Header = () => {
    const { name: title } = site();
    const type = 'fixed';
    const container = 'container';
    return (
        <header id="header" className={`navbar navbar-expand-lg navbar-${type}-top ${type}-top`} role="banner">
            <div className={container}>
                <Link className="navbar-brand" title={title} rel="home">
                    <Logo alternate={title} />
                </Link>
                <button type="button" id="menu-button" className="navbar-menu navbar-toggler" aria-label="Menu" aria-controls="menu-offcanvas">
                    <span className="icon-text sr-only">Menu</span>
                    <span className="icon-bar">&#9472;</span>
                    <span className="icon-bar">&#9472;</span>
                    <span className="icon-bar">&#9472;</span>
                </button>
                <nav id="menu" className="navbar-collapse collapse">
                    Collapse
                </nav>
            </div>
        </header>
    );
};

export default Header;
