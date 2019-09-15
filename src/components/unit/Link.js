import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import * as path from '../../path';

const Link = ({ className, title, rel, to, children }) => (
    <NextLink href={to}>
        <a className={className} title={title} rel={rel}>
            {children}
        </a>
    </NextLink>
);

Link.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    rel: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Link.defaultProps = {
    className: 'no-class',
    title: undefined,
    rel: undefined,
    to: path.ROOT,
};

export default Link;
