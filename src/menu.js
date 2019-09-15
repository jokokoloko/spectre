import * as path from './path';

// Dropdown
export const DROPDOWN = [
    {
        label: 'One',
        to: path.POST,
    },
    {
        label: 'Two',
        to: `${path.POST}/2`,
    },
    {
        label: 'Three',
        to: `${path.POST}/3`,
    },
];

// Main
export const MAIN = [
    {
        label: 'Dropdown',
        children: DROPDOWN,
    },
    {
        label: 'Archive',
        to: path.POST,
    },
    {
        label: 'Overview',
        to: path.OVERVIEW,
    },
    {
        label: 'Simple',
        to: path.ABOUT,
    },
];

// Account - Log In
export const ACCOUNT_LOG_IN = [
    {
        label: 'Google',
        to: path.GOOGLE,
        external: true,
    },
    {
        label: 'Yahoo',
        to: path.YAHOO,
        external: true,
    },
];
