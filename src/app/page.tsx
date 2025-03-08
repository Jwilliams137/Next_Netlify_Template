import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.intro}>Next.js template renovated for easy deployment to Netlify including responsive navigation and footer.</h2>
      <div className={styles.info}>
        <p className={styles.instructions}>Includes contact page setup for free use with Formsubmit. Just add your address</p>
        <p className={styles.instructions}>Get started modifying this project for your personal use!</p>
        <div className={styles.link}>
          <Link href="https://github.com/Jwilliams137/Next_Netlify_Template" target="_blank">Click here to fork from GitHub</Link>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/NextlifySharing.jpg"
          alt="Nextlify Starter"
          className={styles.image}
          width={1281}
          height={720}
          priority
        />
      </div>
    </div>
  );
}
