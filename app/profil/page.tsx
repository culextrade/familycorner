import Image from 'next/image';
import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Profil - Desi Pusparini, S.H. | Ahli Hukum Keluarga Islam',
    description: 'Profil Desi Pusparini, S.H., praktisi hukum keluarga Islam dengan pengalaman dalam konsultasi pernikahan, perceraian, dan hak asuh anak.',
};

export default function ProfilePage() {
    const whatsappNumber = '6281234567890';
    const whatsappMessage = 'Assalamualaikum, saya ingin berkonsultasi mengenai hukum keluarga Islam.';

    const expertise = [
        'Hukum Pernikahan Islam',
        'Perceraian & Talak',
        'Hak Asuh Anak (Hadhanah)',
        'Nafkah & Mut\'ah',
        'Harta Bersama (Gono-Gini)',
        'Waris Islam',
    ];

    const credentials = [
        {
            title: 'Sarjana Hukum (S.H.)',
            institution: 'Universitas Indonesia',
            year: '2015',
        },
        {
            title: 'Sertifikasi Hukum Islam',
            institution: 'Lembaga Kajian Islam',
            year: '2017',
        },
    ];

    return (
        <>
            <Section className="bg-gradient-to-br from-emerald-50 to-cream-50">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        <div className="md:col-span-1">
                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/profile.png"
                                    alt="Desi Pusparini, S.H."
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Desi Pusparini, S.H.
                            </h1>
                            <p className="text-xl text-emerald-600 font-medium mb-6">
                                Praktisi Hukum Keluarga Islam
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Assalamualaikum warahmatullahi wabarakatuh. Saya adalah praktisi hukum keluarga Islam
                                yang berdedikasi untuk memberikan edukasi dan konsultasi hukum kepada masyarakat Indonesia.
                                Dengan pengalaman lebih dari 8 tahun di bidang hukum keluarga, saya berkomitmen untuk membantu
                                Anda memahami hak dan kewajiban dalam kehidupan berkeluarga sesuai syariat Islam dan hukum positif Indonesia.
                            </p>
                            <a
                                href={generateWhatsAppLink(whatsappNumber, whatsappMessage)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg">Konsultasi Sekarang</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </Section>

            <Section pattern>
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                        Bidang Keahlian
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {expertise.map((item, index) => (
                            <Card key={index} className="text-center">
                                <CardContent>
                                    <div className="text-4xl mb-3">⚖️</div>
                                    <p className="font-semibold text-gray-900">{item}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                        Pendidikan & Sertifikasi
                    </h2>
                    <div className="space-y-6">
                        {credentials.map((cred, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{cred.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">
                                        {cred.institution} • {cred.year}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            <Section pattern>
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                        Pengalaman
                    </h2>
                    <Card>
                        <CardContent>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-emerald-600 mr-3 text-xl">✓</span>
                                    <span>Lebih dari 8 tahun pengalaman dalam konsultasi hukum keluarga Islam</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-600 mr-3 text-xl">✓</span>
                                    <span>Menangani ratusan kasus perceraian, hak asuh anak, dan pembagian harta bersama</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-600 mr-3 text-xl">✓</span>
                                    <span>Memberikan edukasi hukum melalui seminar dan workshop di berbagai komunitas</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-600 mr-3 text-xl">✓</span>
                                    <span>Penulis artikel hukum keluarga Islam di berbagai media online</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </Section>

            <Section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                        Siap Membantu Anda
                    </h2>
                    <p className="text-lg md:text-xl mb-8 text-emerald-100">
                        Jangan ragu untuk menghubungi saya jika Anda membutuhkan konsultasi hukum keluarga Islam.
                        Saya siap membantu Anda dengan profesional dan penuh empati.
                    </p>
                    <a
                        href={generateWhatsAppLink(whatsappNumber, whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="secondary" size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                            Hubungi via WhatsApp
                        </Button>
                    </a>
                </div>
            </Section>
        </>
    );
}
