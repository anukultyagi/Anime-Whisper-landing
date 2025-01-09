import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="p-6 flex justify-between items-center">
            <div>
                Built with ❤️ for anime lovers.
            </div>
            <div className='flex gap-5'>
                <Link href={"/"}>
                    Privacy policy
                </Link>
            </div>
        </footer>
    )
}

export default Footer