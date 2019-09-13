import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import content from '../content';

const SEO = ({ title: pageTitle, description: pageDescription, url, ogImage }) => {
    const defaultOGURL = '';
    const defaultOGImage = '';
    const { title, description } = content.site;
    const metaDescription = pageDescription || description;
    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{pageTitle || title}</title>
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
        </Head>
    );
};

SEO.propTypes = {
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
