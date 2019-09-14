import React from 'react';
import Link from 'next/link';
import content from '../../content';
import * as path from '../../path';
import Logo from '../unit/Logo';

const Header = () => {
    const { title } = content.site;
    const type = 'fixed';
    const container = 'container';
    return (
        <header id="header" className={`navbar navbar-expand-lg navbar-${type}-top ${type}-top`} role="banner">
            <div className={container}>
                <Link href={path.ROOT}>
                    <a className="navbar-brand" title={title} rel="home">
                        <Logo alternate={title} />
                    </a>
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
