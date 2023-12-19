import './globals.css';
import Header from './_sections/Header/Header';
import { poorStory } from './fonts';
import { indieFlower } from './fonts';
import { kalam } from './fonts';
import { abhayaLibre } from './fonts';
import { AppProvider } from '@/utils/context';

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  ),
  title: {
    default: 'Tortuga Storytelling',
    template: '%s | Tortuga Storytelling',
    siteName: 'Tortuga Storytelling',
  },
};

/* export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }, { lang: 'de' }];
} */

export default async function RootLayout({ children, params }) {
  return (
    <html className="scroll-smooth" lang={params.lang}>
      <body
        className={`${poorStory.variable} ${indieFlower.variable} ${kalam.variable} ${abhayaLibre.variable}`}
      >
        <AppProvider>
          <Header params={params} />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
