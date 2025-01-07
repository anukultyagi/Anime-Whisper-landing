import React from 'react'

const Header = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center p-4">
            <h1 className="text-5xl font-bold">Anime Whisper API</h1>
            <p className="mt-4 text-lg">
                Generate Anime Quotes and turn them into audio-visual experiences!
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-200 transition">
                Get Started
            </button>
        </div>
    )
}

export default Header