import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.intro}>Next.js template renovated for easy deployment to Netlify including responsive navigation and footer.</h2>
      <div className={styles.info}>
        <p className={styles.instructions}>Includes contact page setup for use with Formsubmit (free). Just add your address</p>
        <p className={styles.instructions}>Get started modifying this project for your personal use!</p>
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
