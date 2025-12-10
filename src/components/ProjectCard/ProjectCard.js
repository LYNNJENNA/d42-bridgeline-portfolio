import Image from 'next/image'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
    const { title, location, description, image, status } = project

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={styles.image}
                    unoptimized
                />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <p className={styles.location}>{location}</p>
                    <h3 className={styles.title}>{title}</h3>
                </div>
                <p className={styles.description}>{description}</p>
                <div className={styles.footer}>
                    {status && (
                        <span className={styles.statusBadge}>{status}</span>
                    )}
                    <span className={styles.linkText}>View Project <span className={styles.arrow}>→</span></span>
                </div>
            </div>
        </div>
    )
}
