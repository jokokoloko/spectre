import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/function.scss';
import '../styles/theme.scss';
import '../styles/project.scss';
import SEO from './SEO';
import Header from './region/Header';
import Footer from './region/Footer';

const Layout = ({ template, title, description, children }) => (
    <Fragment>
        <SEO template={template} title={title} description={description} />
        <Header />
        <main id="main" role="main">
            <div className="container-fluid">{children}</div>
        </main>
        <Footer />
    </Fragment>
);

Layout.propTypes = {
    template: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
    template: undefined,
    title: undefined,
    description: undefined,
};

export default Layout;
