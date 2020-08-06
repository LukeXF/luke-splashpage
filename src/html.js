import React from 'react';

export default class HTML extends React.Component {
    render() {
        const title = 'Luke J Brown - Developer and Entrepreneur';
        const description = 'Full Stack JavaScript Developer and Business Owner in London/Ipswich, England.';
        const url = 'https://luke.sx';
        const twitterUsername = 'lukenxf';
        const image = 'https://luke.sx/images/preview.png';
        return (
            <html {...this.props.htmlAttributes} lang="en">
            <head>
                <title>{title}</title>
                <meta name="description" content={description}/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content={url}/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content={image}/>

                <meta name="twitter:url" content={url}/>
                <meta name="twitter:card" content="summary_large_image"/>
                {twitterUsername && <meta name="twitter:creator" content={twitterUsername}/>}
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={image}/>

                <meta charSet="utf-8"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
                <script src="/admin/netlify_redirect.js"/>

                {this.props.headComponents}

                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/images/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#d29600"/>
                <link rel="shortcut icon" href="/images/favicon/favicon.ico"/>
                <meta name="msapplication-TileColor" content="#d29600"/>
                <meta name="msapplication-config" content="/images/favicon/browserconfig.xml"/>
                <meta name="theme-color" content="#d29600"/>
            </head>
            <body {...this.props.bodyAttributes}>
            {this.props.preBodyComponents}
            <div
                key={`body`}
                id="___gatsby"
                dangerouslySetInnerHTML={{ __html: this.props.body }}
            />
            {this.props.postBodyComponents}
            </body>
            </html>
        );
    }
}
