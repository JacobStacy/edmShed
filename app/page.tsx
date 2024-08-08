import styles from "./page.module.scss";
import Image from "next/image";
import { EventCard } from "./ui/EventCard";
import { SmallEventCard } from "./ui/SmallEventCard";
import { Heading } from "./ui/Heading";

export default function Home() {
  return (
      <>

        <div className={styles.coming_soon}>
          <EventCard
            title="The Big Night"
            thumbnail="/posters/mock1.png"
            link="https://www.google.com"
            ticket_link="https://youtube.com"
            date={new Date(2024, 8, 2)}
            venue="Weird Warehouse"
            location="San Diego, CA"
            age_restriction="21"
          /> 
          <EventCard
            title="The Big Night"
            thumbnail="/posters/mock2.png"
            link="https://www.google.com"
            date={new Date(2024, 8, 2)}
            location="San Diego, CA"
          /> 
          <EventCard
            title="Rock the Boat"
            thumbnail="/posters/mock3.png"
            link="https://www.google.com"
            date={new Date(2025, 3, 25)}
            venue="Sketchy Boat"
            age_restriction="18"
          />
        </div>
        
        <div className={styles.out_of_area} >
          <Heading>Further Away</Heading>
          <div className={styles.cards}>
            <SmallEventCard
              title="The Far Night"
              thumbnail="/promos/dj-promo1.png"
              link=""
              date={new Date(2024, 8, 2)}
              location="Las Vegas, NV"
            />
            <SmallEventCard
              title="The Very Far Night"
              thumbnail="/promos/crowd-promo1.png"
              link=""
              date={new Date(2024, 9, 24)}
              location="Lansing, MI"
            />
            <SmallEventCard
              title="The Really Far Night"
              thumbnail="/promos/stage-promo1.png"
              link=""
              date={new Date(2024, 11, 14)}
              location="Paris, FR"
            />
            <SmallEventCard
              title="The Really Far Night"
              thumbnail="/promos/stage-promo1.png"
              link=""
              date={new Date(2024, 11, 14)}
              location="Paris, FR"
            />
          </div>
        </div>
        {/* <div className={styles.more_near_you}>
          <Heading> More Near You </Heading>

        </div> */}
        
      </>
  );
}
