import Link from 'next/link';
import styles from './servicearea.module.css';

export default function ServiceArea(){
return (
 <div className={styles.serviceArea}>
    
    <div className={styles.mapWrapper}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11898.811553368376!2d-80.9473141502072!3d41.79161639239882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88318e7ce9b876ed%3A0x3721c376d8cd81fd!2s1041%20S%20Broadway%2C%20Geneva%2C%20OH%2044041!5e0!3m2!1sen!2sus!4v1718751067990!5m2!1sen!2sus" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
 </div>
)};