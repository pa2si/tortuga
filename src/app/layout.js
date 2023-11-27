import './globals.css';
import Header from './_components/Header/Header';
import { poorStory } from './fonts';
import { AppProvider } from '@/utils/context';

export const metadata = {
  title: 'Tortuga',
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
    <html lang="en">
      <body className={poorStory.variable}>
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
