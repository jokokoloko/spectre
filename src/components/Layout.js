import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/theme.scss';
import SEO from './SEO';
import Header from './region/Header';

const Layout = ({ title, description, children }) => (
    <Fragment>
        <SEO title={title} description={description} />
        <Header />
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
