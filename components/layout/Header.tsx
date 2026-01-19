'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Beranda' },
        { href: '/blog', label: 'Blog' },
        { href: '/faq', label: 'FAQ' },
        { href: '/profil', label: 'Profil' },
        { href: '/kontak', label: 'Kontak' },
    ];

    return (
        <header className="sticky top-0 z-50 glass shadow-sm">
            <nav className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center transition-smooth group-hover:scale-110">
                            <span className="text-white font-playfair font-bold text-xl">D</span>
                        </div>
                        <div className="hidden md:block">
                            <p className="font-playfair font-semibold text-gray-900 text-lg">Desi Pusparini</p>
                            <p className="text-xs text-gray-600">Hukum Keluarga Islam</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-emerald-600 font-medium transition-smooth relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-smooth"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        'md:hidden overflow-hidden transition-all duration-300',
                        isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
                    )}
                >
                    <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-700 hover:text-emerald-600 font-medium transition-smooth px-2 py-1"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}
