
import { HomeIcon, DjIcon, PlusIcon } from "./SVGS"
import styles from "./bottomNav.module.scss"



export function BottomNav() {

    return (
        <footer className={styles.bottom_nav}>
            <nav>
                <div className={styles.home}>
                    <HomeIcon/>
                </div>
                <div className={styles.add_post}>
                    <PlusIcon/>
                </div>
                <div className={styles.profile}>
                    <DjIcon/>
                </div>
            </nav>
        </footer>
    )
}