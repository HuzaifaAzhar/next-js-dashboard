import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Admin Panel',
    default: 'Admin Panel 210982',
  },
  description: 'Admin Panel by 210982.',
  metadataBase: new URL('https://github.com/HuzaifaAzhar/'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
