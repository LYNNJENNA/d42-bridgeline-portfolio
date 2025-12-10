'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import styles from './Hero.module.css'

const slides = [
    {
        image: '/hero/people-mover.webp',
        alt: 'LAX Automated People Mover',
        caption: 'LAX\'s Automated People Mover'
    },
    {
        image: '/hero/mixed-use-dev.webp',
        alt: 'Modern Urban Development',
        caption: 'Downtown Mixed-Use Development'
    },
    {
        image: '/hero/luxury-residential.webp',
        alt: 'Luxury Residential Complex',
        caption: 'Waterfront Luxury Residences'
    }
]

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}>
                <div className={`${styles.content} fade-in-up`}>
                    <h1 className={styles.title}>Building communities,<br />growing futures</h1>
                    <div className={styles.divider}></div>
                </div>
            </div>

            <div className={styles.swiperContainer}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={800}
                    className={styles.swiper}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.slideWrapper}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={slide.image}
                                        alt={slide.alt}
                                        fill
                                        priority={index === 0}
                                        className={styles.heroImage}
                                        unoptimized
                                    />
                                </div>
                                <p className={styles.caption}>Feature Project: {slide.caption}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
