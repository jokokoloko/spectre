import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => (
    <Fragment>
        <header>Header</header>
        <main id="main" role="main">
            <div className="container-fluid">{children}</div>
        </main>
        <footer>Footer</footer>
    </Fragment>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
