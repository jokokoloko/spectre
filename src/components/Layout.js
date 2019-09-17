import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/function.scss';
import '../styles/theme.scss';
import '../styles/project.scss';
import SEO from './SEO';
import Header from './region/Header';
import Footer from './region/Footer';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    onOpen() {
        this.setState({
            isOpen: true,
        });
    }
    onClose() {
        this.setState({
            isOpen: false,
        });
    }
    render() {
        const { template, title, description, children } = this.props;
        const { isOpen } = this.state;
        const offcanvasPush = isOpen ? 'offcanvas-push offcanvas-push-out' : 'offcanvas-push';
        const style = {
            overlay: {
                background: 'rgba(34, 34, 34, 0.5)',
                zIndex: 9999,
            },
            content: {
                background: '#222',
            },
        };
        return (
            <Fragment>
                <SEO template={template} title={title} description={description} />
                <Header offcanvasPush={offcanvasPush} isOpen={isOpen} onOpen={this.onOpen} />
                <main id="main" className={offcanvasPush} role="main">
                    <div className="container-fluid">{children}</div>
                </main>
                <Footer offcanvasPush={offcanvasPush} />
            </Fragment>
        );
    }
}

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
