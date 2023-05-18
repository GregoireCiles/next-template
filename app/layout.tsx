import '@/styles/main.scss';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import GridHelper from '@/components/grid-helper';
import Header from '@/components/header';
import RealViewport from '@/components/real-viewport';
import TailwindIndicator from '@/components/tailwind-indicator';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn('bg-light text-primary-500', fontSans.variable)}>
      <head />
      <body>
        <Header />
        <main className="site-container">{children}</main>
        <GridHelper />
        <TailwindIndicator />
        <RealViewport />
      </body>
    </html>
  );
}
