import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.instructions}>
        <p>Nextlify Starter is a Next.js template modified to deploy to Netlify</p>
        <p>Layout includes responsive nav/footer</p>
        <p>Edit navData.json to add/remove pages</p>
        <p>Contact page setup for use with Formsubmit (free). Just add your email addres</p>
      </div>
      <div className={styles.imagesContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/Netlify.png"
            alt="Netlify Logo"
            className={styles.image}
            width={1280}
            height={720}
            priority
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/Nextjs.jpg"
            alt="Next.js Logo"
            className={styles.image}
            width={650}
            height={366}
            priority
          />
        </div>
      </div>
      <div className={styles.formsubmitContainer}>
      <div className={styles.formsubmitWrapper}>
          <Image
            src="/Formsubmit.png"
            alt="Formsubmit Logo"
            className={styles.formsubmit}
            width={1160}
            height={235}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default AboutPage