import styles from "./heading.module.scss"



export function Heading (
    { children } : {children? : React.ReactNode;}
) {

    return (        
        <div className={styles.heading}>
        <div className={styles.divider_line_container}>
          <div className={styles.divider_line}></div>
        </div>
        {children}
        <div className={styles.divider_line_container}>
          <div className={styles.divider_line}></div>
        </div>
      </div>
    )
}