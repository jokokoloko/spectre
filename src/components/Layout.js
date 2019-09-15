import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/function.scss';
import '../styles/theme.scss';
import '../styles/project.scss';
import SEO from './SEO';
import Header from './region/Header';
import Footer from './region/Footer';

const Layout = ({ title, description, children }) => (
    <Fragment>
        <SEO title={title} description={description} />
        <Header />
        <main id="main" role="main">
            <div className="container-fluid">{children}</div>
        </main>
        <Footer />
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
