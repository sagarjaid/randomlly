import React, { useState } from "react";
import Footer from "@/components/footer";
import Head from "next/head";
import { faker } from '@faker-js/faker';
import { useEffect } from "react";
import SEOMeta from "@/components/SEOMeta";
import Nav from "@/components/nav";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("x-x");
  const [numbers, setNumbers] = useState();
  // const [numberOfNumbers, setNumberOfNumbers] = useState(1);
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(1000);
  const [digit, setDigit] = useState(3);
  const [textCopy, setTextCopy] = useState(false);



  useEffect(() => {
    handleGenerateRandomNumber()
  }, [])

  // const handleNumberOfNumbers = (e) => {
  //   setNumberOfNumbers(e.target.value)
  // }

  const handleDigitNumber = (e) => {
    setDigit(e.target.value)
  }

  const handleMinNumber = (e) => {
    setMinNumber(e.target.value)
  }

  const handleMaxNumber = (e) => {
    setMaxNumber(e.target.value)
    if (e.target.value > 0) {
      setDigit(e.target.value.toString().length)
    }
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleGenerateRandomNumber = () => {

    switch (selectedOption) {
      case "x-x":
        if (maxNumber > minNumber) {
          setNumbers(faker.datatype.number({ min: minNumber, max: maxNumber }))
        }
        break;
      case "x-digit":

        const createRandomNumber = (digits) => {
          let min = 10 ** (digits - 1);
          let max = 10 ** digits - 1;
          return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let n = digit
        let randomNumber = createRandomNumber(n);

        setNumbers(randomNumber)
        break;
      case "1-10":
        setNumbers(faker.datatype.number({ min: 1, max: 10 }))
        break;
      case "1-100":
        setNumbers(faker.datatype.number({ min: 1, max: 100 }))
        break;
      case "1-1000":
        setNumbers(faker.datatype.number({ min: 1, max: 1000 }))
        break;
      case "1-10000":
        setNumbers(faker.datatype.number({ min: 1, max: 10000 }))
        break;
      case "1-100000":
        setNumbers(faker.datatype.number({ min: 1, max: 100000 }))
        break;
      case "negative":
        setNumbers(faker.datatype.number({ min: -100000, max: -1 }))
        break;
      default:
        setNumbers(faker.datatype.number())
    }

  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(numbers);
    setTextCopy(true);
    setTimeout(() => {
      setTextCopy(false);
    }, 3500);
  };

  return (
    <div>
      <SEOMeta title="Random Number Generator" description="Random Number Generator" />
      <main className="m-auto flex max-w-5xl flex-col px-4">
        <Nav />
        <div className="flex flex-col gap-8 pt-2">
          <h1 className="text-3xl">Random Number Generator</h1>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between">
            <div className="sm:w-1/2 flex flex-col gap-3">
              {/* <div className="flex gap-2">
                <span>Numbers to show</span>
                <input
                  type="number"
                  value={numberOfNumbers}
                  className="border border-black rounded-md px-2 w-20"
                  onChange={handleNumberOfNumbers}
                />
              </div> */}

              <div className="flex gap-3">
                <input
                  type="radio"
                  value="x-x"
                  checked={selectedOption === "x-x"}
                  onChange={handleOptionChange}
                />
                <div className="flex gap-2">
                  <span>Numbers between</span>
                  <input
                    type="number"
                    value={minNumber}
                    className="border border-black rounded-md px-2 w-20"
                    onChange={handleMinNumber}
                  />
                  <span>to</span>
                  <input
                    type="number"
                    value={maxNumber}
                    className="border border-black rounded-md px-2 w-20"
                    onChange={handleMaxNumber}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <input
                  type="radio"
                  value="x-digit"
                  checked={selectedOption === "x-digit"}
                  onChange={handleOptionChange}
                />
                <div className="flex gap-2">
                  <span>Random</span>
                  <input
                    type="number"
                    value={digit}
                    className="border border-black rounded-md px-2 w-20"
                    onChange={handleDigitNumber}
                  />
                  <span>digit Number</span>
                </div>
              </div>

              <div className="flex gap-3">
                <input
                  type="radio"
                  value="1-10"
                  checked={selectedOption === "1-10"}
                  onChange={handleOptionChange}
                />
                <div>Random number between 1 and 10</div>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value="1-100"
                  checked={selectedOption === "1-100"}
                  onChange={handleOptionChange}
                />
                <div>Random number between 1 and 100</div>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value="1-1000"
                  checked={selectedOption === "1-1000"}
                  onChange={handleOptionChange}
                />
                <div>Random number between 1 and 1000</div>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value="1-10000"
                  checked={selectedOption === "1-10000"}
                  onChange={handleOptionChange}
                />
                <div>Random number between 1 and 10000</div>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value="1-100000"
                  checked={selectedOption === "1-100000"}
                  onChange={handleOptionChange}
                />
                <div>Random number between 1 and 100000</div>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value="negative"
                  checked={selectedOption === "negative"}
                  onChange={handleOptionChange}
                />
                <div>Random negative (-) number</div>
              </div>
              <button onClick={handleGenerateRandomNumber} className="p-2 flex gap-3 px-3 mt-3 items-center bg-blue-500 text-white rounded-md w-fit ">
                Generate Random Number
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center gap-4 border h-80 sm:h-none justify-center sm:w-1/2">
              <span onClick={handleCopyToClipboard} className=" cursor-pointer flex gap-2 justify-center items-center">
                <span className="text-4xl font-extrabold">{numbers}</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                </svg>
              </span>
              {textCopy && <div className="text-xs">number copied to clipbord</div>}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
