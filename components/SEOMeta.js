import React from 'react'
import Head from "next/head";


const SEOMeta = () => {
    return (
        <Head>
            <title>WHOIS_OS</title>
            <meta name="title" content="WHOIS OS - " />
            <meta
                name="description"
                content="WHOIS Domain Lookup, Nameserver Lookup & IP Tools"
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://whoisos.com/" />
            <meta property="og:title" content="WHOIS_OS" />
            <meta
                property="og:description"
                content="WHOIS Domain Lookup, Nameserver Lookup & IP Tools"
            />
            <meta
                property="og:image"
                content="https://whoisos.com/whois-cover.png"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://whoisos.com/" />
            <meta property="twitter:title" content="WHOIS_OS" />
            <meta
                property="twitter:description"
                content="WHOIS Domain Lookup, Nameserver Lookup & IP Tools"
            />
            <meta
                property="twitter:image"
                content="https://whoisos.com/whois-cover.png"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="icon" href="https://whoisos.com/favicon.png" />
        </Head>
    )
}

export default SEOMeta