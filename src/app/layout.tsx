import { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import styles from "./layout.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import UnderConstruction from "../components/UnderConstruction/UnderConstruction";

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
        width: 1281,
        height: 720,
        alt: "A starter template for Next.js ready for deployment on Netlify",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextlify Starter",
    description: "Next.js template renovated for easy deployment on Netlify including responsive navigation and footer",
    images: ["https://nextlify-starter.netlify.app/NextlifySharing.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Nextlify Starter" />
        <meta property="og:description" content="Next.js template renovated for easy deployment on Netlify including responsive navigation and footer" />
        <meta property="og:image" content="https://nextlify-starter.netlify.app/NextlifySharing.jpg" />
        <meta property="og:url" content="https://nextlify-starter.netlify.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nextlify Starter" />
        <meta name="twitter:description" content="Next.js template renovated for easy deployment on Netlify including responsive navigation and footer" />
        <meta name="twitter:image" content="https://nextlify-starter.netlify.app/NextlifySharing.jpg" />
      </Head>
      <body className={styles.wrapper}>
        <Nav />
        <UnderConstruction />
        <div className={styles.children_container}>{children}</div>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </body>
    </html>
  );
}