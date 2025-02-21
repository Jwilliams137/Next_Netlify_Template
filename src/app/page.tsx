import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.intro}>This is a basic Next.js template I created including responsive navigation and footer.
      It's renovated for easy deployment to Netlify.</h2>
      <p className={styles.instructions}>To get started you will need to run npm install and then npm run dev</p>
      <p className={styles.instructions}>&#8226; It also has a contact page setup for free use with Formsubmit.
        All you need to do to get the contact form working is add your email address to the env.local.
        The redirect after the form is submitted is currently setup for http://localhost:3000/thank-you</p>
      <p className={styles.instructions}>&#8226; To change the redirect after form submission you will need to edit this value in the api/contact/route.js
        and also in the app/contact/page.js</p>
      <p className={styles.instructions}>&#8226; Feel free to modify this project for your personal use!</p>
    </div>
  );
}