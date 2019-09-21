import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ name, label, alignment, caret, children }) => {
    const [toggle, setToggle] = useState(false);
    const isDropdown = useRef();
    const onClick = () => setToggle(!toggle);
    const onBlur = useCallback((event) => !isDropdown.current.contains(event.target) && setToggle(false), [isDropdown]);
    useEffect(() => {
        toggle && document.addEventListener('click', onBlur);
        return () => {
            toggle && document.removeEventListener('click', onBlur);
        };
    }, [toggle, onBlur]);
    return (
        <li className={`nav-item dropdown ${toggle ? `show` : `hide`}`} ref={isDropdown}>
            <button
                type="button"
                id={`${name}-dropdown`}
                className={`nav-btn btn dropdown-toggle ${caret ? 'caret' : 'no-caret'}`}
                aria-haspopup="true"
                aria-expanded={toggle}
                onClick={onClick}
            >
                {label}
            </button>
            {toggle && (
                <div className={`dropdown-menu dropdown-menu-${alignment} show`} aria-labelledby={`${name}-dropdown`}>
                    {children}
                </div>
            )}
        </li>
    );
};

Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    alignment: PropTypes.string,
    caret: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

Dropdown.defaultProps = {
    label: 'Dropdown',
    alignment: 'left',
    caret: false,
};

export default Dropdown;
