'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className={styles.header}>
            <div className={`${styles.headerBackground} glass`}></div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logoSection}>
                        <Link href="/" onClick={() => setIsMenuOpen(false)}>
                            <Image
                                src="/logo.png?v=2"
                                alt="Bridgeline Development Group"
                                width={240}
                                height={100}
                                className={styles.logoImage}
                                priority
                                unoptimized
                            />
                            <div className={styles.logoTextContainer}>
                                <span className={styles.logoText}>BRIDGELINE</span>
                                <span className={styles.logoSubtext}>Development Group</span>
                            </div>
                        </Link>
                    </div>

                    <button
                        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`${styles.nav} ${isMenuOpen ? styles.menuOpen : ''}`}>
                        <Link href="/#projects" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Projects</Link>
                        <Link href="/#about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link href="/#contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </nav>

                    <div className={styles.rightSection}>
                        <div className={styles.contactInfo}>
                            <a href="tel:4242613272" className={styles.phone}>424 261-3272</a>
                        </div>
                        <div className={styles.certifications}>
                            <Image
                                src="/certifications.webp"
                                alt="Certifications"
                                width={180}
                                height={58}
                                className={styles.certImage}
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
