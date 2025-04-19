"use client"
import styles from './aboutcontent.module.css';
import Link from 'next/link';

export default function AboutContent(){
return (
 <div className={styles.ensure}>
    
        
    <h2>About Us<span className="highlight">.</span></h2>
    <p className={styles.p}>Drawing on 15+ years of DJ expertise, Anytime DJ Services promises exceptional entertainment. Our stellar Google reviews speak volumes about our dedication to customer satisfaction. Fully insured and serving within a 60-mile radius of our base at {process.env.NEXT_PUBLIC_BUSINESS_CITY_STATE}, we specialize in corporate events, weddings, private parties, and more.</p>

    <div className={styles.itemWrapper}>
        <div className={styles.item}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M9.5 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m14-3.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M2 17.25A2.25 2.25 0 0 1 4.25 15h10.5q.298.001.573.074A7.48 7.48 0 0 0 13 20.5c0 .665.086 1.309.249 1.922c-.975.355-2.203.578-3.749.578C2 23 2 17.75 2 17.75zm25 3.25a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-5.786-3.96a.742.742 0 0 0-1.428 0l-.716 2.298h-2.318c-.727 0-1.03.97-.441 1.416l1.875 1.42l-.716 2.298c-.225.721.567 1.32 1.155.875l1.875-1.42l1.875 1.42c.588.446 1.38-.154 1.155-.875l-.716-2.298l1.875-1.42c.588-.445.286-1.416-.441-1.416H21.93z"></path></svg>
            <h3>Customer Satisfaction</h3>
            <p>At Anytime DJ Services, customer satisfaction is our priority for every party. With stellar Google reviews, we provide professional, personalized service to ensure each event is memorable.</p>  
        </div>

        <div className={styles.item}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 21H5q-.825 0-1.412-.587T3 19v-7q0-1.875.713-3.512t1.924-2.85t2.85-1.925T12 3t3.513.713t2.85 1.924t1.925 2.85T21 12v7q0 .825-.587 1.413T19 21h-4v-8h4v-1q0-2.925-2.037-4.962T12 5T7.038 7.038T5 12v1h4z"></path></svg>
            <h3>Experienced DJs</h3>
            <p>With 15+ years of DJ experience, our team ensures unforgettable events. From playlist perfection to seamless transitions, our skilled DJs keep the dance floor packed and the energy high.</p>  
        </div>

        <div className={styles.item}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0M12 15a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0-2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></path></svg>
            <h3>Competitive Pricing</h3>
            <p>Our competitive rates maintain quality, ensuring top-notch DJ services at reasonable prices. Enjoy professional entertainment without breaking the bank.</p>  
        </div>

        <div className={styles.item}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4ZM32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3H35a3 3 0 0 0-3 3Zm344-208a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24"></path></svg>
            <h3>Versatile Event Coverage</h3>
            <p>Anytime DJ Services covers all events, ensuring each occasion is a resounding success with the perfect soundtrack tailored to your needs.</p>  
        </div>
    </div>

    <div className={`center ${styles.linkWrapper}`}>
        <Link className='main-link' href='/contact'>Contact</Link>
    </div>

    <div className="bg-img-repeat"></div>
        <div className='shader-gradient'></div>
 </div>
)};