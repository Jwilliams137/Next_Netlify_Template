import { Metadata } from "next";
import "./globals.css";
import styles from './layout.module.css';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import UnderConstruction from '../components/UnderConstruction/UnderConstruction'

export const metadata: Metadata = {
  title: "Nextlify Starter Template",
  description: "Next.js template renovated for easy deployment on Netlify including responsive navigation and footer",
  openGraph: {
    title: "Nextlify Starter",
    description: "Next.js template renovated for easy deployment on Netlify including responsive navigation and footer",
    url: "https://nextlify-starter.netlify.app",
    siteName: "Nextlify",
    images: [
      {
        url: "https://nextlify-starter.netlify.app/NextlifySharing.jpg",
        width: 1200,
        height: 630,
        alt: "A starter template for Next.js ready for deployment on Netlify",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.wrapper}>
        <Nav />
        <UnderConstruction />
        <div className={styles.children_container}>
          {children}
        </div>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </body>
    </html>
  );
}