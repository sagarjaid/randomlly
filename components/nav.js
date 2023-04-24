import React from 'react'

const Nav = () => {
    return (
        <nav className="flex row justify-between items-center py-4">

            <a href="/" className="font-medium smd:text-xl py-2 px-4 text-white bg-black cursor-pointer rounded-full rounded-tl-sm ">
                Randomlly
            </a>

            <span className="flex row gap-4 items-center">
                <a href="/random-word-generator" className="hover:font-semibold text-sm  cursor-pointer rounded-full">
                    word
                </a>
                <a href="/random-name-generator" className="hover:font-semibold text-sm  cursor-pointer rounded-full">
                    name
                </a>
                <a href="/random-number-generator" className="hover:font-semibold text-sm  cursor-pointer rounded-full">
                    number
                </a>
                <a href="/random-letter-generator" className="hover:font-semibold text-sm  cursor-pointer rounded-full">
                    letter
                </a>
                <a href="/" className="hover:font-semibold hidden sm:lnline text-sm  cursor-pointer rounded-full">
                    more
                </a>
            </span>
        </nav>

    )
}

export default Nav