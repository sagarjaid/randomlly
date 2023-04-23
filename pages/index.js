import React, { useState } from "react";
import Footer from "@/components/footer";
import Head from "next/head";
import SEOMeta from "@/components/SEOMeta";

const Home = () => {

  return (
    <div>
      <SEOMeta />
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
