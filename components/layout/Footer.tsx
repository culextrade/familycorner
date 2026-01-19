'use client';

import React from 'react';
import Link from 'next/link';
import { generateWhatsAppLink } from '@/lib/utils';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const whatsappNumber = '6281234567890'; // Replace with actual number
    const whatsappMessage = 'Assalamualaikum, saya ingin berkonsultasi mengenai hukum keluarga Islam.';

    return (
        <footer className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="font-playfair font-semibold text-xl mb-4">Desi Pusparini, S.H.</h3>
                        <p className="text-emerald-100 text-sm leading-relaxed">
                            Praktisi hukum keluarga Islam yang berdedikasi memberikan edukasi dan konsultasi
                            hukum untuk masyarakat Indonesia.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-playfair font-semibold text-xl mb-4">Navigasi</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-emerald-100 hover:text-white transition-smooth text-sm">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-emerald-100 hover:text-white transition-smooth text-sm">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-emerald-100 hover:text-white transition-smooth text-sm">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/profil" className="text-emerald-100 hover:text-white transition-smooth text-sm">
                                    Profil
                                </Link>
                            </li>
                            <li>
                                <Link href="/kontak" className="text-emerald-100 hover:text-white transition-smooth text-sm">
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-playfair font-semibold text-xl mb-4">Hubungi Kami</h3>
                        <p className="text-emerald-100 text-sm mb-4">
                            Konsultasi via WhatsApp atau email untuk informasi lebih lanjut.
                        </p>
                        <a
                            href={generateWhatsAppLink(whatsappNumber, whatsappMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-white text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-smooth text-sm font-medium"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-emerald-700 mt-8 pt-8 text-center">
                    <p className="text-emerald-200 text-sm">
                        &copy; {currentYear} Desi Pusparini, S.H. Hak Cipta Dilindungi.
                    </p>
                    <p className="text-emerald-300 text-xs mt-2 font-playfair italic">
                        "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan dari jenismu sendiri..." (QS. Ar-Rum: 21)
                    </p>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href={generateWhatsAppLink(whatsappNumber, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-smooth z-50"
                aria-label="Chat via WhatsApp"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </a>
        </footer>
    );
}
