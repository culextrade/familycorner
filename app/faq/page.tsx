'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import { faqData } from '@/data/faq-data';
import { cn } from '@/lib/utils';

export default function FAQPage() {
    const [openId, setOpenId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const categories = Array.from(new Set(faqData.map((item) => item.category)));

    const filteredFAQ = faqData.filter(
        (item) =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleFAQ = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <>
            <Section className="bg-gradient-to-br from-emerald-50 to-cream-50">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Pertanyaan yang Sering Diajukan
                    </h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Temukan jawaban untuk pertanyaan umum seputar hukum keluarga Islam
                    </p>
                    <input
                        type="text"
                        placeholder="Cari pertanyaan..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>
            </Section>

            <Section pattern>
                <div className="max-w-4xl mx-auto">
                    {categories.map((category) => {
                        const categoryItems = filteredFAQ.filter((item) => item.category === category);

                        if (categoryItems.length === 0) return null;

                        return (
                            <div key={category} className="mb-12">
                                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-emerald-700 mb-6">
                                    {category}
                                </h2>
                                <div className="space-y-4">
                                    {categoryItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="bg-white rounded-lg shadow-md overflow-hidden transition-smooth hover:shadow-lg"
                                        >
                                            <button
                                                onClick={() => toggleFAQ(item.id)}
                                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-emerald-50 transition-smooth"
                                            >
                                                <span className="font-semibold text-gray-900 pr-4">
                                                    {item.question}
                                                </span>
                                                <svg
                                                    className={cn(
                                                        'w-5 h-5 text-emerald-600 transition-transform flex-shrink-0',
                                                        openId === item.id && 'rotate-180'
                                                    )}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                className={cn(
                                                    'overflow-hidden transition-all duration-300',
                                                    openId === item.id ? 'max-h-96' : 'max-h-0'
                                                )}
                                            >
                                                <div className="px-6 py-4 bg-emerald-50 text-gray-700 leading-relaxed">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {filteredFAQ.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600 text-lg">
                                Tidak ada pertanyaan yang cocok dengan pencarian Anda.
                            </p>
                        </div>
                    )}
                </div>
            </Section>
        </>
    );
}
