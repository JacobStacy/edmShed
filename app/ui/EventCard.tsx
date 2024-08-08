import Link from "next/link";
import styles from "./eventCard.module.scss";
import Image from "next/image";


export function EventCard({
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
    const day = date.toLocaleString('default', { weekday: "short" });
    const day_num = date.toLocaleString('default', { day: "2-digit" });
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    const dash = (venue && location) ? " - " : "";
    const pipe = age_restriction ? " | " : "";
    const plus = age_restriction ? "+" : "";

    const desc = `${venue}${dash}${location}${pipe}${age_restriction}${plus}`;

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
                <div className={styles.left_side}>
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
                {/* {ticket_link && (
                    <a className={styles.ticket} href={ticket_link}>
                        
                    </a>
                )} */}
            </div>
        </Link>
    );
}