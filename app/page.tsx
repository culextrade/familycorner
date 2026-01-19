import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { blogPosts } from '@/data/blog-posts';
import { formatDate, generateWhatsAppLink } from '@/lib/utils';

export default function HomePage() {
    const whatsappNumber = '6281234567890';
    const whatsappMessage = 'Assalamualaikum, saya ingin berkonsultasi mengenai hukum keluarga Islam.';

    const featuredTopics = [
        {
            title: 'Pernikahan',
            description: 'Syarat, rukun, dan ketentuan pernikahan dalam Islam',
            icon: '💍',
        },
        {
            title: 'Perceraian',
            description: 'Prosedur, hak, dan kewajiban dalam perceraian',
            icon: '⚖️',
        },
        {
            title: 'Hak Asuh Anak',
            description: 'Ketentuan hadhanah dan nafkah anak',
            icon: '👨‍👩‍👧',
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <Section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-cream-50 to-rose-50">
                <div className="absolute inset-0 islamic-pattern opacity-30"></div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Memahami Hukum Keluarga Islam dengan{' '}
                            <span className="text-emerald-600">Jelas & Mudah</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                            Edukasi dan konsultasi hukum keluarga Islam oleh{' '}
                            <span className="font-semibold">Desi Pusparini, S.H.</span> untuk membantu Anda
                            memahami hak dan kewajiban dalam pernikahan, perceraian, dan kehidupan berkeluarga.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/blog">
                                <Button size="lg">Baca Artikel</Button>
                            </Link>
                            <a
                                href={generateWhatsAppLink(whatsappNumber, whatsappMessage)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" size="lg">Konsultasi Sekarang</Button>
                            </a>
                        </div>
                    </div>
                    <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/profile.png"
                            alt="Desi Pusparini, S.H."
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </Section>

            {/* About Section */}
            <Section pattern>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Tentang Kami
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Kami hadir untuk memberikan edukasi hukum keluarga Islam yang mudah dipahami
                        oleh masyarakat umum. Dengan pendekatan yang ramah dan profesional, kami membantu
                        Anda memahami hak dan kewajiban dalam kehidupan berkeluarga sesuai syariat Islam
                        dan hukum positif Indonesia.
                    </p>
                    <Link href="/profil">
                        <Button variant="secondary">Lihat Profil Lengkap</Button>
                    </Link>
                </div>
            </Section>

            {/* Featured Topics */}
            <Section className="bg-white">
                <div className="text-center mb-12">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Topik Utama
                    </h2>
                    <p className="text-lg text-gray-600">
                        Pelajari berbagai aspek hukum keluarga Islam
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredTopics.map((topic, index) => (
                        <Card key={index} hover className="text-center">
                            <div className="text-5xl mb-4">{topic.icon}</div>
                            <CardHeader>
                                <CardTitle>{topic.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">{topic.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Latest Blog Posts */}
            <Section pattern>
                <div className="text-center mb-12">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Artikel Terbaru
                    </h2>
                    <p className="text-lg text-gray-600">
                        Baca artikel edukasi hukum keluarga Islam
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(0, 3).map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <Card hover>
                                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardHeader>
                                    <div className="text-sm text-emerald-600 font-medium mb-2">
                                        {post.category}
                                    </div>
                                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>{formatDate(post.date)}</span>
                                        <span>{post.readingTime} menit baca</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href="/blog">
                        <Button size="lg">Lihat Semua Artikel</Button>
                    </Link>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                        Butuh Konsultasi Hukum Keluarga Islam?
                    </h2>
                    <p className="text-lg md:text-xl mb-8 text-emerald-100">
                        Hubungi kami untuk konsultasi profesional mengenai pernikahan, perceraian,
                        hak asuh anak, dan masalah hukum keluarga lainnya.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={generateWhatsAppLink(whatsappNumber, whatsappMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="secondary" size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                                Konsultasi via WhatsApp
                            </Button>
                        </a>
                        <Link href="/kontak">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-emerald-700">
                                Hubungi Kami
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}
