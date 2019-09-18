import React, { Component, Fragment } from 'react';
import OffCanvas from 'react-aria-offcanvas';
import { Events } from 'react-scroll';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/function.scss';
import '../styles/theme.scss';
import '../styles/project.scss';
import SEO from './SEO';
import Menu from './Menu';
import Header from './region/Header';
import Footer from './region/Footer';
import Scroll from './widget/Scroll';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            showScroll: false,
        };
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        Events.scrollEvent.register('end', () => this.onClose());
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
        Events.scrollEvent.remove('end');
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
    onScroll() {
        const { showScroll } = this.state;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const offset = 210;
        showScroll &&
            scrollTop <= offset &&
            this.setState({
                showScroll: false,
            });
        !showScroll &&
            scrollTop >= offset &&
            this.setState({
                showScroll: true,
            });
    }
    render() {
        const { location, template, title, description, children } = this.props;
        const { isOpen, showScroll } = this.state;
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
                <SEO location={location} template={template} title={title} description={description} />
                <OffCanvas position="right" width="80%" height="100%" labelledby="menu-button" style={style} isOpen={isOpen} onClose={this.onClose}>
                    <nav id="menu-offcanvas" className="offcanvas-menu">
                        <Menu offcanvas />
                    </nav>
                </OffCanvas>
                <Header offcanvasPush={offcanvasPush} isOpen={isOpen} onOpen={this.onOpen} />
                <main id="main" className={offcanvasPush} role="main">
                    <div className="container-fluid">{children}</div>
                </main>
                <Footer offcanvasPush={offcanvasPush} />
                {showScroll && <Scroll position="fixed" up top />}
            </Fragment>
        );
    }
}

Layout.propTypes = {
    location: PropTypes.object,
    template: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
    location: undefined,
    template: undefined,
    title: undefined,
    description: undefined,
};

export default Layout;
