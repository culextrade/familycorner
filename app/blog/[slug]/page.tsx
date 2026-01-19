import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { blogPosts } from '@/data/blog-posts';
import { formatDate, generateWhatsAppLink } from '@/lib/utils';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Artikel Tidak Ditemukan',
        };
    }

    return {
        title: `${post.title} | Desi Pusparini, S.H.`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const whatsappNumber = '62895394408100';
    const whatsappMessage = `Assalamualaikum, saya ingin berkonsultasi mengenai ${post.title}`;

    return (
        <>
            {/* Hero */}
            <Section className="bg-gradient-to-br from-emerald-50 to-cream-50">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                        <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 font-medium">
                            ← Kembali ke Blog
                        </Link>
                    </div>
                    <div className="text-sm text-emerald-600 font-medium mb-4">
                        {post.category}
                    </div>
                    <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-gray-600 mb-8">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <span>{post.readingTime} menit baca</span>
                    </div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </Section>

            {/* Content */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <article className="prose prose-lg prose-emerald max-w-none">
                        <div
                            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
                            className="whitespace-pre-wrap"
                        />
                    </article>

                    {/* Share & CTA */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="bg-gradient-to-br from-emerald-50 to-rose-50 rounded-xl p-8 text-center">
                            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                                Butuh Konsultasi Lebih Lanjut?
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Hubungi kami untuk konsultasi profesional mengenai hukum keluarga Islam
                            </p>
                            <a
                                href={generateWhatsAppLink(whatsappNumber, whatsappMessage)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg">Konsultasi via WhatsApp</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
