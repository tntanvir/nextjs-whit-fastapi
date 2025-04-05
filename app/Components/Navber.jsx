'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contect' },
    ];

    return (
        <header className="pb-6 bg-white lg:pb-0">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="Logo" />
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                            </svg>
                        )}
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        {navLinks.map((link) => (
                            <Link key={link.path} href={link.path} className={`text-base font-medium transition-all duration-200 ${pathname === link.path ? 'text-blue-600' : 'text-black hover:text-blue-600'}`}>
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link href="/singin" className="hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md lg:inline-flex hover:bg-blue-700"> Get started now </Link>
                </nav>

                {menuOpen && (
                    <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                        <div className="flow-root">
                            <div className="flex flex-col px-6 -my-2 space-y-1">
                                {navLinks.map((link) => (
                                    <Link key={link.path} href={link.path} className={`inline-flex py-2 text-base font-medium transition-all duration-200 ${pathname === link.path ? 'text-blue-600' : 'text-black hover:text-blue-600'}`}>
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="px-6 mt-6">
                            <Link href="/singin" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700"> Get started now </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;