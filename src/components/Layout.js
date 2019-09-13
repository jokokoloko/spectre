import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from './SEO';

const Layout = ({ title, description, children }) => (
    <Fragment>
        <SEO title={title} description={description} />
        <header>Header</header>
        <main id="main" role="main">
            <div className="container-fluid">{children}</div>
        </main>
        <footer>Footer</footer>
    </Fragment>
);

Layout.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
    title: undefined,
    description: undefined,
};

export default Layout;
