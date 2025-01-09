"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" text-white py-4 px-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Brand Name */}
                <Link href="/" className="text-xl font-bold">
                    Anime Whisper API
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center gap-6">
                    <Link href="/" className="hover:text-yellow-300">
                        Example
                    </Link>
                    <Link href="/DocsPage" className="hover:text-yellow-300">
                        Docs
                    </Link>
                    <Link href="/api" className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-300">

                        Try API

                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4 transition-all delay-250">
                    <Link href="/" className="hover:text-yellow-300">
                        Example
                    </Link>
                    <Link href="/DocsPage" className="hover:text-yellow-300">
                        Docs
                    </Link>
                    <Link href="/api" className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-300">

                        Try API

                    </Link>
                </div>
            )}
        </nav>
    );
}
