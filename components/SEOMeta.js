import React from 'react'
import Head from "next/head";


const SEOMeta = ({ title, description, url }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta
                name="description"
                content={description}
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://randomlly.com/" />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content={description}
            />
            <meta
                property="og:image"
                content="https://randomlly.com/cover.png"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://randomlly.com/" />
            <meta property="twitter:title" content={title} />
            <meta
                property="twitter:description"
                content={description}
            />
            <meta
                property="twitter:image"
                content="https://randomlly.com/cover.png"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="icon" href="https://randomlly.com/favicon.png" />
        </Head>
    )
}

export default SEOMeta