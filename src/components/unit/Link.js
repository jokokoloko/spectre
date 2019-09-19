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

const Link = ({ className, activeClassName, title, rel, to, children }) => (
    <ActiveLink activeClassName={activeClassName} href={to}>
        <a className={className} title={title} rel={rel}>
            {children}
        </a>
    </ActiveLink>
);

Link.propTypes = {
    className: PropTypes.string,
    activeClassName: PropTypes.string,
    title: PropTypes.string,
    rel: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Link.defaultProps = {
    className: 'no-class',
    activeClassName: 'active',
    title: undefined,
    rel: undefined,
    to: path.ROOT,
};

export default Link;
