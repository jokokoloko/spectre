import React, { Fragment } from 'react';

const Layout = ({ children }) => (
    <Fragment>
        <header>Header</header>
        <main id="main" role="main">
            <div className="container-fluid">{children}</div>
        </main>
        <footer>Footer</footer>
    </Fragment>
);

export default Layout;
