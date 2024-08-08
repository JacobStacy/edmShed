import Image from "next/image"
import styles from "./topNav.module.scss"







export function TopNav () {
    return (
        <header className={styles.top_nav}>
            <div className={styles.city}>
                ▾ SD
            </div>

            <div className={styles.title}>
                EDM SHED
            </div>

            <div className={styles.profile_pic_container}>
                <Image 
                    src="/profile-place-holder.png" 
                    alt="Profile Picture" 
                    width={35} 
                    height={35}
                    className={styles.profile_pic}
                />
            </div>
        </header>
    )
}