import Link from "next/link";
import styles from "./eventCard.module.scss"
import Image from "next/image";


export function SmallEventCard ({
    title,
    thumbnail,
    link,
    date
}:{
    title : string;
    thumbnail : string;
    link : string;
    date : Date;
}
) {

    const day = date.toLocaleString('default', { weekday: "short" });
    const day_num = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    

    return (
        <Link href={link} className={styles.event_card}>


            <div className={styles.thumbnail}>
                <Image 
                    src={thumbnail} 
                    alt="event_thumbnail"
                    sizes="100vw"
                    width={846}
                    height={846}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                />
            </div>

            <div className={styles.info}>
                <div className={styles.date}>
                    <div className={styles.day}>
                        {day}
                    </div>
                    <div className={styles.month_date}>
                        {month} {day_num}
                    </div>
                    <div className={styles.background}></div>
                </div>
                <div className={styles.details}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.description}>
                        {desc}
                    </div>
                </div>
            </div>
        </Link>
    );
}