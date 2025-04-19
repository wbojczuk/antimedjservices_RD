import Link from 'next/link';
import styles from './servicearea.module.css';

export default function ServiceArea(){
return (
 <div className={styles.serviceArea}>
    
    <div className={styles.mapWrapper}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4925.434663625484!2d-81.0509694!3d41.75962339999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883190e7cdf958df%3A0xbf4ac543ddb85a8b!2s201%20Water%20Tower%20Dr%2C%20Madison%2C%20OH%2044057!5e1!3m2!1sen!2sus!4v1745063407271!5m2!1sen!2sus" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
 </div>
)};