import Link from "next/link";
import styles from "./eventBanner.module.scss";
import Image from "next/image";


export function EventBanner({
    title,
    thumbnail,
    link,
    // ticket_link,
    date,
    venue = "",
    location = "",
    age_restriction = "",
}: {
    title: string;
    thumbnail: string;
    link: string;
    ticket_link?: string;
    date: Date;
    venue?: string;
    location?: string;
    age_restriction?: string;
}){
    const day = date.toLocaleString('default', { weekday: "long" });
    const day_num = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const dash = (venue && location) ? " - " : "";
    const pipe = age_restriction ? " | " : "";
    const plus = age_restriction ? "+" : "";

    const desc = `${venue}${dash}${location}${pipe}${age_restriction}${plus}`;

    return (
        <Link href={link} className={styles.event_banner}>
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
                <div className={styles.details}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.description}>
                        {desc}
                    </div>
                    <div className={styles.date}>
                        {month} {day_num}
                    </div>
                </div>
            </div>
        </Link>
    );
}