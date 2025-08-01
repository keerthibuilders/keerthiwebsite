import { useEffect, useState } from "react";
import bannerPhone from "../../../public/assets/images/bannerPhone.webp"
import bannerWebsite from "../../../public/assets/images/bannerWebsite.webp"
import styles from './Banner.module.css'

function LoadingBanner() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
        setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className={styles?.container}>
                <div className={styles.imageBox}>
                            <img
                              src={width > 420 ? bannerWebsite : bannerPhone}
                              alt="Project Visual"
                              className={styles.image}
                            />
                          </div>

                <div className={styles.buttonGroup}>
                    <a href="tel:+919902876666" className={`${styles.button} ${styles.outline}`}> Call Now </a>
                    <a href="https://wa.me/919902876666?text=Hello%20I%20would%20like%20more%20information%20" target="_blank"  className={`${styles.button} ${styles.filled}`}>Whatsapp us</a>
                </div>
            </div>
        </>
    )
}

export default LoadingBanner;