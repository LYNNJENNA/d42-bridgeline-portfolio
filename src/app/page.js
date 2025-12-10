import Hero from '@/components/Hero/Hero'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import styles from './page.module.css'

// Project data based on design mockup
const projects = [
    {
        id: 1,
        title: "Multi Unit Residential Project",
        location: "Los Angeles, CA",
        description: "First of many citywide ecological dwelling developments",
        image: "/hero/luxury-residential.webp",
        status: "Investment Opp"
    },
    {
        id: 2,
        title: "LAX Airport Police Facility",
        location: "Los Angeles, CA",
        description: "Construction partner for underground infrastructure at police facility",
        image: "/projects/lax-police-facility.webp",
        status: "Complete"
    },
    {
        id: 3,
        title: "Altadena Fire Rebuilds",
        location: "Altadena, CA",
        description: "Expertise with ground-up construction and tenant improvement projects",
        image: "/projects/fire-rebuild.webp",
        status: "Investment Opp"
    }
]

export default function Home() {
    return (
        <>
            <Hero />

            {/* Projects Section */}
            <section className={styles.projectsSection}>
                <div className="container">
                    <div className={styles.projectsGrid}>
                        {projects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={styles.aboutSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>About Bridgeline</h2>
                    <p className={styles.aboutText}>
                        Bridgeline focuses on sustainable, community-driven development specializing in
                        residential, mixed-use, workforce housing, and commercial projects.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={styles.contactSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Contact</h2>
                    <form className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                placeholder="Your name"
                                className={styles.input}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                placeholder="Your email"
                                className={styles.input}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="tel"
                                placeholder="Your phone"
                                className={styles.input}
                            />
                        </div>
                        <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                            <textarea
                                placeholder="Your message"
                                className={styles.textarea}
                                rows={4}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
