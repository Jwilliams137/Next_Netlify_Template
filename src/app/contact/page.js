import React from 'react'
import styles from './page.module.css'

function page() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
      <p className={styles.info}>This contact form is not currently accepting submissions</p>
      <p className={styles.info}>To accept messages add your address to the form on app/contact/page.js</p>
      </div>
      <form action="https://formsubmit.co/YOUR_EMAIL" method="POST" className={styles.form}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          required 
          className={styles.inputField} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          required 
          className={styles.inputField} 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          required 
          className={styles.textarea}
        ></textarea>
        <input type="hidden" name="_next" value="https://nextlify-starter.netlify.app/thank-you" className={styles.hidden} />
        <input type="hidden" name="_subject" value="New message from your website visitor" className={styles.hidden} />
        <input type="hidden" name="_honey" className={styles.hidden} />
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </div>
  )
}

export default page