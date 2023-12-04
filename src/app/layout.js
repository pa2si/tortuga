import './globals.css';
import Header from './_sections/Header/Header';
import { poorStory } from './fonts';
import { indieFlower } from './fonts';
import { kalam } from './fonts';
import { abhayaLibre } from './fonts';
import { AppProvider } from '@/utils/context';

export const metadata = {
  title: 'Tortuga Storytelling',
  description: 'Tortuga Storytolling',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${poorStory.variable} ${indieFlower.variable} ${kalam.variable} ${abhayaLibre.variable}`}
      >
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
