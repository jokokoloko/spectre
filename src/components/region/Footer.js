import React from 'react';
import content from '../../content';
import Basic from '../section/Basic';
import Link from '../unit/Link';

const Footer = () => {
    const { title } = content.site;
    return (
        <footer id="footer" role="contentinfo">
            <div className="container-fluid">
                <Basic id="footer-default" space="space-none">
                    <div className="case style-border-top-grey">
                        <p className="copyright">
                            <Link className="navbar-link" title={title} rel="home">
                                {title}
                            </Link>{' '}
                            &copy; {new Date().getFullYear()}
                        </p>
                    </div>
                </Basic>
            </div>
        </footer>
    );
};

export default Footer;
