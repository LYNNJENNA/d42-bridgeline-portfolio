import styles from './page.module.css'

export default function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Get in Touch</h1>
                <p className={styles.subtitle}>Interested in our developments? We'd love to hear from you.</p>
            </div>

            <form className={styles.form}>
                <div className={styles.group}>
                    <label className={styles.label}>Name</label>
                    <input type="text" className={styles.input} placeholder="John Doe" />
                </div>

                <div className={styles.group}>
                    <label className={styles.label}>Email</label>
                    <input type="email" className={styles.input} placeholder="john@example.com" />
                </div>

                <div className={styles.group}>
                    <label className={styles.label}>Message</label>
                    <textarea className={styles.textarea} placeholder="Tell us about your inquiry..."></textarea>
                </div>

                <button type="submit" className={styles.submit}>Send Inquiry</button>
            </form>
        </div>
    )
}
