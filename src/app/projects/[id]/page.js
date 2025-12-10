import Image from 'next/image'
import styles from './page.module.css'

const projects = {
    1: {
        title: "The Zenith Collection",
        location: "Downtown Metropolis",
        category: "Residential",
        year: "2024",
        client: "Private Equity Group",
        description: "The Zenith Collection represents the pinnacle of urban living. Situated in the heart of the metropolis, this 45-story residential tower redefines luxury with its striking glass façade and bespoke interiors. Each residence is a sanctuary of calm, offering panoramic views of the city skyline.",
        images: ["https://picsum.photos/seed/zenith/1920/1080", "https://picsum.photos/seed/zenith-detail/800/600"]
    },
    2: {
        title: "Bridgeline Tower",
        location: "Financial District",
        category: "Commercial",
        year: "2023",
        client: "Bridgeline Corp",
        description: "A landmark commercial development designed to foster innovation and collaboration. Bridgeline Tower features state-of-the-art office spaces, sustainable energy systems, and a vibrant ground-level retail plaza. It stands as a testament to modern architectural engineering.",
        images: ["https://picsum.photos/seed/bridge/1920/1080", "https://picsum.photos/seed/bridge-detail/800/600"]
    }
}

export async function generateStaticParams() {
    return Object.keys(projects).map((id) => ({
        id: id,
    }))
}

export default async function ProjectPage({ params }) {
    const { id } = await params
    const project = projects[id] || projects[1] // Fallback

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    priority
                    className={styles.heroImage}
                />
            </div>

            <article className={styles.details}>
                <h1 className={styles.title}>{project.title}</h1>

                <div className={styles.meta}>
                    <div className={styles.metaItem}>
                        <strong>Location</strong>
                        <span>{project.location}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <strong>Category</strong>
                        <span>{project.category}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <strong>Year</strong>
                        <span>{project.year}</span>
                    </div>
                </div>

                <div className={styles.content}>
                    <p>{project.description}</p>
                </div>

                <div className={styles.gallery}>
                    {project.images.map((img, i) => (
                        <div key={i} className={styles.galleryImage}>
                            <Image
                                src={img}
                                alt="Gallery"
                                fill
                                className={styles.galleryImg}
                            />
                        </div>
                    ))}
                </div>
            </article>
        </div>
    )
}
