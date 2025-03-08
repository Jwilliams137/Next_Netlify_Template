import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.intro}>Next.js template renovated for easy deployment to Netlify including responsive navigation and footer.</h2>
      <p className={styles.instructions}>&#8226; Includes contact page setup for free use with Formsubmit.</p>
      <p className={styles.instructions}>&#8226; To change the redirect after form submission you will need to edit the api/contact/route.js
        and also in the app/contact/page.js</p>
      <p className={styles.instructions}>&#8226; Feel free to modify this project for your personal use!</p>
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