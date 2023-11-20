import styles from "./Access.module.scss";

export default function Access(){
    return(
        <div className={styles.accessContainer}>
            <div className={styles.AccessTitle}>Access</div>
                <hr></hr>
            <div className={styles.AccessContents}>
                <div className={styles.leftPosition}>
                    <div className={styles.content}>
                        <span className={styles.contentTitle}>ADDRESS</span>
                        <span className={styles.textContent}>〒761-0104</span><br/>
                        <span className={styles.textContent2}>香川県高松市高松町2508-2</span>
                    </div>
                    <div>
                        <span className={styles.contentTitle}>PHONE</span>
                        <span className={styles.textContent}>087-843-3600</span>
                    </div>
                    <div>
                        <span className={styles.contentTitle}>OPEN</span>
                        <span className={styles.textContent}>月~土 9:00~18:00</span>
                    </div>
                    <div>
                        <span className={styles.contentTitle}>CLOSE</span>
                        <span className={styles.textContent}>日曜日</span>
                    </div>
                </div>
                <div className={styles.rightPosition}>
                    <div>MAP</div>
                    <div className={styles.mapDiv}>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.4930999291682!2d134.10531987624054!3d34.33792647305068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35539345ab2fd97d%3A0x122802969820e023!2z44CSNzYxLTAxMDQg6aaZ5bed55yM6auY5p2-5biC6auY5p2-55S677yS77yV77yQ77yY4oiS77yS!5e0!3m2!1sja!2sjp!4v1699355503346!5m2!1sja!2sjp"
                          className={styles.map}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}