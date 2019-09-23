import React, { Children } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import * as path from '../../path';

const ActiveLink = ({ activeClassName, children, ...props }) => {
    const { pathname } = useRouter();
    const child = Children.only(children);
    const className = pathname === props.href ? `${child.props.className} ${activeClassName}` : child.props.className;
    return <NextLink {...props}>{React.cloneElement(child, { className })}</NextLink>;
};

ActiveLink.propTypes = {
    activeClassName: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

const Link = ({ className, activeClassName, to, title, rel, external, children }) =>
    external ? (
        <a className={className} href={to} title={title} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    ) : (
        <ActiveLink activeClassName={activeClassName} href={to}>
            <a className={className} title={title} rel={rel}>
                {children}
            </a>
        </ActiveLink>
    );

Link.propTypes = {
    className: PropTypes.string,
    activeClassName: PropTypes.string,
    to: PropTypes.string,
    title: PropTypes.string,
    rel: PropTypes.string,
    external: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

Link.defaultProps = {
    className: 'no-class',
    activeClassName: 'active',
    to: path.ROOT,
    title: undefined,
    rel: undefined,
    external: false,
};

export default Link;
