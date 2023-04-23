import React, { useState } from "react";
import Footer from "@/components/footer";
import Head from "next/head";
import SEOMeta from "@/components/SEOMeta";
import Nav from "@/components/nav";

const Home = () => {

  return (
    <div>
      <SEOMeta title="Randomlly" description="Randomlly" />
      <main className="m-auto flex max-w-5xl flex-col px-4">
        <Nav />
        <div className="flex h-screen flex-col gap-8 pt-2">
          <div className="flex flex-col gap-3">
            <h1 className="text-6xl font-extrabold text-center pt-20">Random.lly</h1>
            <div className="text-xl text-center">words best random generator</div>
          </div>

          <div className="flex flex-col justify-center items-center flex-wrap gap-4">
            <div>
              <a href="/random-first-name-generator" className="text-blue-500">random first name generator</a>
            </div>
            <div>
              <a href="/random-last-name-generator" className="text-blue-500">random last name generator</a>
            </div>
            <div>
              <a href="/random-letter-generator" className="text-blue-500">random letter generator</a>
            </div>
            <div>
              <a href="/random-name-generator" className="text-blue-500">random name generator</a>
            </div>
            <div>
              <a href="/random-noun-generator" className="text-blue-500">random noun generator</a>
            </div>
            <div>
              <a href="/random-number-generator" className="text-blue-500">random number generator</a>
            </div>
            <div>
              <a href="/random-verb-generator" className="text-blue-500">random verb generator</a>
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
