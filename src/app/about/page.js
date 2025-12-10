import styles from '../page.module.css'

export default function About() {
    return (
        <div style={{ padding: '160px 24px 80px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className={styles.title}>About D42 Bridgeline</h1>
            <p style={{ marginTop: '24px', lineHeight: 1.6, color: 'var(--primary)' }}>
                We are a premier real estate development firm dedicated to creating spaces that inspire.
                With a focus on sustainable design and luxury living, we have been shaping skylines for over a decade.
            </p>
        </div>
    )
}
