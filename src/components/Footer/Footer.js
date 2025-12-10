import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3 className={styles.brandName}>BRIDGELINE</h3>
                        <p className={styles.brandTagline}>Development Group</p>
                        <p className={styles.description}>
                            Building communities, growing futures through sustainable development.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Company</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/#about">About Us</Link></li>
                            <li><Link href="/#projects">Projects</Link></li>
                            <li><Link href="/#contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Contact</h4>
                        <ul className={styles.linkList}>
                            <li>6060 Manchester Ave</li>
                            <li>Westchester, CA 90045</li>
                            <li><a href="tel:4242613272">424 261-3272</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Bridgeline Development Group. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
