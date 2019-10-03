import React, { Children } from 'react';
import { Link as ScrollTo } from 'react-scroll';
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

const Link = ({ className, activeClassName, to, dynamic, title, rel, scroll, external, children }) =>
    external ? (
        <a className={className} href={to} title={title} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    ) : scroll ? (
        <ScrollTo className={className} to={to} duration={500} offset={30} spy smooth>
            {children}
        </ScrollTo>
    ) : (
        <ActiveLink activeClassName={activeClassName} href={dynamic ? `${dynamic}/[slug]` : to} as={dynamic && to}>
            <a className={className} title={title} rel={rel}>
                {children}
            </a>
        </ActiveLink>
    );

Link.propTypes = {
    className: PropTypes.string,
    activeClassName: PropTypes.string,
    to: PropTypes.string,
    dynamic: PropTypes.string,
    title: PropTypes.string,
    rel: PropTypes.string,
    scroll: PropTypes.bool,
    external: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

Link.defaultProps = {
    className: 'no-class',
    activeClassName: 'active',
    to: path.ROOT,
    dynamic: undefined,
    title: undefined,
    rel: undefined,
    scroll: false,
    external: false,
};

export default Link;
