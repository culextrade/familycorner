'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { sendContactEmail, type ContactFormData } from '@/lib/email';
import { generateWhatsAppLink } from '@/lib/utils';

export default function ContactPage() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const whatsappNumber = '62895394408100';
    const whatsappMessage = 'Assalamualaikum, saya ingin berkonsultasi mengenai hukum keluarga Islam.';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        const result = await sendContactEmail(formData);

        setIsSubmitting(false);
        setSubmitStatus({
            type: result.success ? 'success' : 'error',
            message: result.message,
        });

        if (result.success) {
            setFormData({ name: '', email: '', subject: '', message: '' });
        }
    };

    return (
        <>
            <Section className="bg-gradient-to-br from-emerald-50 to-cream-50">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Hubungi Kami
                    </h1>
                    <p className="text-lg text-gray-700">
                        Ada pertanyaan atau ingin berkonsultasi? Kami siap membantu Anda
                    </p>
                </div>
            </Section>

            <Section pattern>
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Kirim Pesan</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nama Lengkap *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            placeholder="Nama Anda"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            placeholder="email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subjek *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            placeholder="Topik konsultasi"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Pesan *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                                            placeholder="Tuliskan pertanyaan atau kebutuhan konsultasi Anda..."
                                        />
                                    </div>

                                    {submitStatus.type && (
                                        <div
                                            className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                                ? 'bg-emerald-50 text-emerald-700'
                                                : 'bg-rose-50 text-rose-700'
                                                }`}
                                        >
                                            {submitStatus.message}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full"
                                        size="lg"
                                    >
                                        {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Konsultasi via WhatsApp</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-4">
                                    Untuk konsultasi yang lebih cepat, Anda dapat menghubungi kami langsung via WhatsApp.
                                </p>
                                <a
                                    href={generateWhatsAppLink(whatsappNumber, whatsappMessage)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="secondary" className="w-full">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Chat via WhatsApp
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Jam Konsultasi</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center">
                                        <span className="text-emerald-600 mr-2">📅</span>
                                        <span>Senin - Jumat: 09:00 - 17:00 WIB</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-emerald-600 mr-2">📅</span>
                                        <span>Sabtu: 09:00 - 13:00 WIB</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-emerald-600 mr-2">📅</span>
                                        <span>Minggu & Libur: Tutup</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Catatan Penting</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Untuk konsultasi yang lebih mendalam, kami menyarankan untuk membuat janji terlebih dahulu
                                    via WhatsApp. Semua konsultasi bersifat rahasia dan profesional.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>
        </>
    );
}
