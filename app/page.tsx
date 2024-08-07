import styles from "./page.module.scss";
import Image from "next/image";
import { Event_Card } from "./ui/EventCard";

export default function Home() {
  return (
      <>

        <div className={styles.coming_soon}>
          <Event_Card
            title="The Big Night"
            thumbnail="/posters/mock1.png"
            link="https://www.google.com"
            date={new Date(2024, 8, 2)}
            venue="Weird Warehouse"
            location="San Diego, CA"
            age_restiction="21"
          /> 
          <Event_Card
            title="The Big Night"
            thumbnail="/posters/mock2.png"
            link="https://www.google.com"
            date={new Date(2024, 8, 2)}
            venue="Weird Warehouse"
            location="San Diego, CA"
            age_restiction="21"
          /> 
          <Event_Card
            title="Rock the Boat"
            thumbnail="/posters/mock3.png"
            link="https://www.google.com"
            date={new Date(2025, 3, 25)}
            venue="Sketchy Boat"
            location="San Diego, CA"
            age_restiction="18"
          />
        </div>
      
      
      </>
  );
}
