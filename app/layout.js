import { Inter } from 'next/font/google';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
const notoSansKr = Noto_Sans_KR({
    weight: ['500', '600', '700', '800', '900'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'SOOHWAN PORTPOLIO',
    description: 'KIMSOOHWAN PORTPOLIO',
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body className={notoSansKr.className}>{children}</body>
        </html>
    );
}
