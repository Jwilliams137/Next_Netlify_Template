import React from "react";
import styles from "./not-found.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>404 - Page Not Found</h2>
      <p className={styles.text}>Oops! We couldn&apos;t find that page.</p>
      <p className={styles.text}>There are several pages in the navigation that don&apos;t exist because this is a template.</p>
      <p className={styles.text}>Please create the pages you need, then add them by modifying the navData.json.</p>
      <Link href="/" className={styles.button}>Go Home</Link>
    </div>
  );
}
