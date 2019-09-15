import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import NextHead from 'next/head';
import site from '../queries/site';

const SEO = ({ template, title: pageTitle, description: pageDescription, url, ogImage }) => {
    const defaultOGURL = '';
    const defaultOGImage = '';
    const { description, name: title } = site();
    const metaDescription = pageDescription || description;
    return (
        <Fragment>
            <Helmet>
                <html lang="en" />
                <body id="body" className={template} />
            </Helmet>
            <NextHead>
                <meta charSet="utf-8" />
                <title>{pageTitle ? `${pageTitle} - ${title}` : title}</title>
                <meta name="description" content={metaDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
                <link rel="apple-touch-icon" href="/static/touch-icon.png" />
                <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
                <link rel="icon" href="/static/favicon.ico" />
                <meta property="og:url" content={url || defaultOGURL} />
                {pageTitle && <meta property="og:title" content={pageTitle} />}
                <meta property="og:description" content={metaDescription} />
                <meta name="twitter:site" content={url || defaultOGURL} />
                {pageTitle && <meta name="twitter:title" content={pageTitle} />}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content={ogImage || defaultOGImage} />
                <meta property="og:image" content={ogImage || defaultOGImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </NextHead>
        </Fragment>
    );
};

SEO.propTypes = {
    template: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    ogImage: PropTypes.string,
};

SEO.defaultProps = {
    title: undefined,
    description: undefined,
};

export default SEO;
