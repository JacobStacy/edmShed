import Link from "next/link";
import styles from "./eventCard.module.scss"
import Image from "next/image";


export function EventCard ({
    title,
    thumbnail,
    link,
    date,
    venue,
    location,
    age_restiction
}:{
    title : string;
    thumbnail : string;
    link : string;
    date : Date;
    venue? : string;
    location? : string;
    age_restiction? : string;
}
) {

    const day = date.toLocaleString('default', { weekday: "short" });
    const day_num = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    venue = venue === undefined ? "" : venue;
    age_restiction = age_restiction === undefined ? "" : age_restiction;
    location = location === undefined ? "" : location;

    const dash = (venue != "" && location != "")  ? " - " : "";
    const pipe = age_restiction != "" ? " | " : "";
    const plus = age_restiction != "" ? "+" : "";


    const desc = `${venue}${dash}${location}${pipe}${age_restiction}${plus}`;

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