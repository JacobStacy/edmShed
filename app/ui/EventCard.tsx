import styles from "./eventCard.module.scss"
import Image from "next/image";


export function Event_Card ({
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
    venue : string;
    location : string;
    age_restiction? : string;
}
) {

    const day = date.toLocaleString('default', { weekday: "short" });
    const day_num = date.getDate()
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear()

    return (
        <div className={styles.event_card}>


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
                </div>
            </div>
        </div>
    );
}