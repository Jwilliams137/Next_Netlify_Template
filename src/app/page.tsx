import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.intro}>Next.js template modified for easy deployment to Netlify including responsive navigation and footer.</h2>
      <div className={styles.info}>
        <p className={styles.instructions}>Get started editing this project for your personal use!</p>
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
