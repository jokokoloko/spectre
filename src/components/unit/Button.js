import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import * as path from '../../path';

const Button = ({ label, kind, size, display, className, to, disabled }) => (
    <NextLink href={to}>
        <a className={`btn btn-${kind} btn-${size} btn-${display} ${className}`} disabled={disabled}>
            {label}
        </a>
    </NextLink>
);

Button.propTypes = {
    label: PropTypes.string,
    kind: PropTypes.string,
    size: PropTypes.string,
    display: PropTypes.string,
    className: PropTypes.string,
    to: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    label: 'Submit',
    kind: 'default',
    size: 'lg',
    display: 'initial',
    className: 'no-class',
    to: path.ROOT,
    disabled: false,
};

export default Button;
