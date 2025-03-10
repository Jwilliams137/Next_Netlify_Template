import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import styles from './Footer.module.css';
import footerData from './footerData.json';
import Link from 'next/link';

const iconMapping = {
  faGithub: faGithub,
  faFacebook: faFacebook,
  faXTwitter: faXTwitter,
  faInstagram: faInstagram
};

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.githubLink}>
          <Link href="https://github.com/Jwilliams137/Next_Netlify_Template" target="_blank">Click here to fork from GitHub</Link>
        </div>
      <div className={styles.links}>
        {footerData.socialLinks.map(({ href, icon }) => (
          <a
            key={href}
            href={href}
            className={styles.navlink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={styles.socialLink}
              icon={iconMapping[icon]}
              size="xl"
            />
          </a>
        ))}
      </div>
      <span className={styles.copyright}>{footerData.copyright.replace("{year}", new Date().getFullYear())}</span>
    </footer>
  );
}

export default Footer;