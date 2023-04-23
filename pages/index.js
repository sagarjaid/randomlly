import React, { useState } from "react";
import Footer from "@/components/footer";
import Head from "next/head";

const Home = () => {

  return (
    <div>
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
      <main className="m-auto flex max-w-5xl flex-col px-4">
        <nav className="flex row justify-between items-center py-4">
          <a href="/">
            <span className="font-medium smd:text-xl py-2 px-4 text-white bg-black cursor-pointer rounded-full rounded-tl-sm ">
              Randomlly
            </span>
          </a>
          <span>
            <ul className="flex row items-center gap-4 cursor-pointer">
              <li className="hidden sd:inline">
                <a
                  href="https://www.producthunt.com/posts/whois_os?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-whois&#0095;os"
                  target="_blank"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=389333&theme=light"
                    className="w-36"
                  />
                </a>
              </li>
              <li className="hover:font-semibold text-sm px-3 py-1 border border-black cursor-pointer rounded-full">
                I'm Feeling Luck!
              </li>
            </ul>
          </span>
        </nav>
        <div className="flex h-screen flex-col gap-8 pt-2">
          <div className="flex flex-col gap-3">
            <h1 className="text-6xl font-extrabold text-center pt-20">Random.lly</h1>
            <div className="text-xl text-center">words best random generator</div>
          </div>

          <div className="flex flex-col justify-center items-center flex-wrap gap-4">
            <div>
              <a href="/random-number-generator" className="text-blue-500">random number generator</a>
            </div>
            <div>
              <a href="/random-word-generator" className="text-blue-500">random word generator</a>
            </div>
            <div>
              <a href="/random-noun-generator" className="text-blue-500">random noun generator</a>
            </div>
            <div>
              <a href="/random-number" className="text-blue-500">random number between [x] to [x]</a>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
