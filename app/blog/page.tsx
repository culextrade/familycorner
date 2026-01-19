import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { blogPosts } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Blog - Hukum Keluarga Islam | Desi Pusparini, S.H.',
    description: 'Artikel edukasi hukum keluarga Islam: pernikahan, perceraian, hak asuh anak, nafkah, dan harta bersama.',
};

export default function BlogPage() {
    return (
        <>
            <Section className="bg-gradient-to-br from-emerald-50 to-cream-50">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Blog Hukum Keluarga Islam
                    </h1>
                    <p className="text-lg text-gray-700">
                        Artikel edukasi untuk memahami hak dan kewajiban dalam kehidupan berkeluarga
                    </p>
                </div>
            </Section>

            <Section pattern>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
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
            </Section>
        </>
    );
}
