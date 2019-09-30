import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ className, source, alternate }) => <img className={className} src={source} alt={alternate} />;

Image.propTypes = {
    className: PropTypes.string,
    source: PropTypes.string.isRequired,
    alternate: PropTypes.string.isRequired,
};

Image.defaultProps = {
    className: 'no-class',
};

export default Image;
