import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Desi Pusparini, S.H. - Hukum Keluarga Islam Indonesia",
    description: "Edukasi dan konsultasi hukum keluarga Islam oleh Desi Pusparini, S.H. Memahami hak dan kewajiban dalam pernikahan, perceraian, hak asuh anak, dan harta bersama.",
    keywords: "hukum islam, hukum keluarga, perceraian islam, talak, hak asuh anak, nafkah, harta bersama, konsultasi hukum",
    authors: [{ name: "Desi Pusparini, S.H." }],
    openGraph: {
        title: "Desi Pusparini, S.H. - Hukum Keluarga Islam",
        description: "Edukasi dan konsultasi hukum keluarga Islam Indonesia",
        type: "website",
        locale: "id_ID",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <body className="antialiased">
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
