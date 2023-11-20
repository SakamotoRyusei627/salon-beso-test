import styles from "./DetailContainer.module.scss";
import icon from "./cornerIcon.png"
import Image from "next/image";
type Props = {
    title:string;
}
export default function DetailMenu({title}:Props) {
    return (
        <div className={styles.detailContainer}>
            <Image className={styles.icon1} src={icon} alt={'角アイコン'} />
            <div className={styles.menuTitle}>{`${title} MENU`}</div>
            <div className={styles.detailTextContainer}>
                <div className={styles.leftText}>テキストテキストテキストテキストテキストテキスト</div>
                <div className={styles.rightText}>テキストテキストテキストテキストテキストテキスト</div>
            </div>
            <Image className={styles.icon2} src={icon} alt={'角アイコン'} />
        </div>
    )
}

