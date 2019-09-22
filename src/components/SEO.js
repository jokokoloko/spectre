import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import useSite from '../queries/useSite';

const SEO = ({ template, title: pageTitle, description: pageDescription, url, ogImage }) => {
    const defaultOGImage = '';
    const { pathname } = useRouter();
    const { description, name: title } = useSite();
    const currentURL = pathname;
    const metaDescription = pageDescription || description;
    return (
        <Fragment>
            <Helmet>
                <html lang="en" />
                <body id="body" className={template} />
            </Helmet>
            <NextHead>
                <title>{pageTitle ? `${pageTitle} - ${title}` : title}</title>
                <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
                <link rel="apple-touch-icon" href="/static/touch-icon.png" />
                <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
                <link rel="icon" href="/static/favicon.ico" />
                <link rel="canonical" href={currentURL} />
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content={metaDescription} />
                <meta property="og:url" content={currentURL} />
                <meta property="og:site_name" content={title} />
                {pageTitle && <meta property="og:title" content={pageTitle} />}
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content={template.includes('single') ? 'article' : 'website'} />
                {false && <meta property="og:image" content={ogImage || defaultOGImage} />}
                {false && <meta property="og:image:width" content="1200" />}
                {false && <meta property="og:image:height" content="630" />}
                <meta name="twitter:site" content={currentURL} />
                <meta name="twitter:creator" content={title} />
                {pageTitle && <meta name="twitter:title" content={pageTitle} />}
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:card" content="summary_large_image" />
                {false && <meta name="twitter:image" content={ogImage || defaultOGImage} />}
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
