import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className="min-h-screen flex justify-center items-center  text-white py-20 px-8">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Unlock the World of Anime Quotes with <span className="text-yellow-300">Anime Whisper API</span>
                </h1>
                <p className="text-lg md:text-2xl mb-6">
                    Fetch random quotes from your favorite anime characters with ease and speed.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/api/random" className="bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300">
                        Try API
                    </Link>
                    <Link href="/documentation" className="bg-white text-indigo-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200">
                        View Docs
                    </Link>
                </div>
                <div className="mt-10">
                    <blockquote className="italic text-lg">
                        &quot;Fear is not evil. It tells you what your weakness is.&quot; – Gildarts Clive, Fairy Tail
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default Header