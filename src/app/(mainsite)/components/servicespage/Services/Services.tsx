"use client"
import styles from './services.module.css';
import Link from 'next/link';

export default function Services(){
return (
 <div className={styles.ensure}>
    
        
    <h2>Our Services<span className="highlight">.</span></h2>
    <p className={styles.p}>Drawing on 15+ years of DJ expertise, Anytime DJ Services promises exceptional entertainment. Our stellar Google reviews speak volumes about our dedication to customer satisfaction. Fully insured and serving within a 60-mile radius of our base at 1041 South Broadway Street # 894 Geneva Ohio 44041, we specialize in corporate events, weddings, private parties, and more.</p>

    <div className={styles.itemWrapper}>
        <div  className={styles.item}>
       <img src="/img/whatwedo1.png" alt="people partying" />
           <div>
           <h3>Private Parties</h3>
           <p>Turn your private parties into unforgettable events with Anytime DJ Services. Our dynamic DJs bring the energy and excitement, ensuring every guest has a fantastic time.
            <br /><br />
            &bull; Diverse music selection spanning genres.<br />
            &bull; Interactive entertainment options.<br />
            &bull; Professional approach for a memorable experience</p>  
           </div>
        </div>

        <div className={styles.item}>
        <img src="/img/whatwedo2.png" alt="people partying" />
        <div>
           <h3>Wedding Parties</h3>
           <p>Make your special day unforgettable with Anytime DJ Services. From romantic ceremonies to lively receptions, our DJs create the perfect soundtrack for your love story.
            <br /><br />
            &bull; Personalized playlists tailored to your love story.<br />
            &bull; Smooth transitions for key moments.<br />
            &bull; Professional emceeing for a seamless celebration.</p>   
           </div>
        </div>

        <div className={styles.item}>
        <img src="/img/whatwedo3.png" alt="people partying" />
        <div>
           <h3>School Events DJ Services</h3>
           <p>Elevate your school events with Anytime DJ Services. Our DJs bring the right vibe, ensuring students enjoy every moment of the occasion.
            <br /><br />
            &bull; Age-appropriate music selections.<br />
            &bull; Engaging interactive entertainment options.<br />
            &bull; Professional approach for a safe and enjoyable experience.</p>  
           </div>
        </div>

        <div className={styles.item}>
        <img src="/img/whatwedo4.png" alt="people partying" />
        <div>
           <h3>Bar Events</h3>
           <p>Take your bar events to the next level with Anytime DJ Services. Our DJs set the mood, keeping patrons entertained and the party going all night long.
            <br /><br />
            &bull; Versatile music selection to suit diverse tastes.<br />
            &bull; Interactive entertainment options to engage the crowd.<br />
            &bull; Professional sound management for a vibrant atmosphere.</p>  
           </div>
        </div>
    </div>

    <div className={`center ${styles.linkWrapper}`}>
        <Link className='main-link' href='/contact'>Contact</Link>
    </div>

    <div className="bg-img-repeat"></div>
        <div className='shader-gradient'></div>
 </div>
)};