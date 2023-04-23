import React, { useState } from "react";
import Footer from "@/components/footer";
import Head from "next/head";
import { faker } from '@faker-js/faker';
import { useEffect } from "react";
import SEOMeta from "@/components/SEOMeta";

const Home = () => {
  const [numbers, setNumbers] = useState();
  const [textCopy, setTextCopy] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(numbers);
    setTextCopy(true);
    setTimeout(() => {
      setTextCopy(false);
    }, 3500);
  };

  useEffect(() => {
    handleGenerateRandomNumber()
  }, [])


  const handleGenerateRandomNumber = () => {
    setNumbers(faker.datatype.number({ min: 1, max: 100000 }))
  }

  return (
    <div>
      <SEOMeta title="Random Number Generator" description="Random Number Generator" />
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
        <div className="flex flex-col gap-8 pt-2">
          <h1 className="text-3xl">Random Number Generator</h1>
          <div className="flex flex-col gap-4 items-center border h-80 sm:h-none justify-center sm:w-1/2">
            <span onClick={handleCopyToClipboard} className="flex gap-2 justify-center items-center">
              <span className="text-4xl font-extrabold">{numbers}</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
              </svg>
            </span>
            {textCopy && <div className="text-xs">copied to clipbord</div>}
            <button onClick={handleGenerateRandomNumber} className="p-2 flex gap-3 px-3 mt-3 items-center bg-blue-500 text-white rounded-md w-fit ">
              Generate Random Number
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </button>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
