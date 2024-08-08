import Link from "next/link";
import styles from "./smallEventCard.module.scss"
import Image from "next/image";


export function SmallEventCard ({
    title,
    thumbnail,
    link,
    date,
    location
}:{
    title : string;
    thumbnail : string;
    link : string;
    date : Date;
    location : string;
}
) {

    const day = date.toLocaleString('default', { weekday: "long" });
    const day_num = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
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
                <div className={styles.overlay}>
                    <div className={styles.date}>
                        {month} {day_num}
                    </div>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.location}>
                        {location}
                    </div>
                </div>
            </div>
        </Link>
    );
}