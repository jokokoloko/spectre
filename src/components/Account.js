import React from 'react';
import { generateID } from '../function';
import * as menu from '../menu';
import useSite from '../queries/useSite';
import Button from './unit/Button';
import Dropdown from './unit/Dropdown';
import Link from './unit/Link';

const Account = () => {
    const { action, link } = useSite();
    const loopChildren = menu.ACCOUNT_LOG_IN.map(({ label, to, external }) =>
        external ? (
            <a key={generateID()} className="dropdown-item" title={label} href={to} target="_blank" rel="noopener noreferrer">
                {label}
            </a>
        ) : (
            <Link key={generateID()} className="dropdown-item" title={label} to={to}>
                {label}
            </Link>
        ),
    );
    return (
        <ul className="navbar-action ml-auto account account-guest">
            <li className="nav-item">
                <Button label={action} to={`/${link.slug}`} />
            </li>
            <Dropdown name="log-in" label="Log in" alignment="right" caret>
                {loopChildren}
            </Dropdown>
        </ul>
    );
};

export default Account;
