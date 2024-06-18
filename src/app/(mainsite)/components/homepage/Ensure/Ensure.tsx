"use client"
import styles from './ensure.module.css';
import Link from 'next/link';

export default function Ensure(){
return (
 <div className={styles.ensure}>
    
        
    <h2>We ensure every party is a hit<span className="highlight">.</span></h2>
    <p className={styles.p}>Introducing Anytime DJ Services: where passion meets excellence in entertainment. Our skilled team elevates ordinary gatherings into unforgettable experiences, creating lasting memories from intimate weddings to lively bar nights. Celebrate love, achievements, or simply good times with us—every party is a hit</p>

    <div className={styles.itemWrapper}>
        <div className={styles.item}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 3v12.5a3.5 3.5 0 0 1-3.5 3.5a3.5 3.5 0 0 1-3.5-3.5a3.5 3.5 0 0 1 3.5-3.5c.54 0 1.05.12 1.5.34V6.47L9 8.6v8.9A3.5 3.5 0 0 1 5.5 21A3.5 3.5 0 0 1 2 17.5A3.5 3.5 0 0 1 5.5 14c.54 0 1.05.12 1.5.34V6z"></path></svg>
            <h3>Tailored Music</h3>
            <p>From chart-toppers to classics, we curate playlists that match your event’s mood and audience preferences perfectly.</p>  
        </div>

        <div className={styles.item}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 2a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 8 2m2.75 2a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 .75-.75M6 4.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zM13.75 6a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75M3 6.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z"></path></svg>
            <h3>Quality Equipment</h3>
            <p>Our top-of-the-line equipment ensures every beat and lyric is heard with precision, amplifying the excitement of your event.</p>  
        </div>

        <div className={styles.item}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"></path></svg>
            <h3>Customized Lighting</h3>
            <p>From vibrant disco lights to elegant mood lighting, we create visually stunning effects that complement your event’s theme.</p>  
        </div>

        <div className={styles.item}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9"></path></svg>
            <h3>Experienced MC</h3>
            <p>Our experienced hosts engage the crowd, make announcements, and ensure everyone feels included.</p>  
        </div>
    </div>

    <div className={`center ${styles.linkWrapper}`}>
        <Link className='main-link' href='/contact'>Contact</Link>
    </div>

    <div className="bg-img-repeat"></div>
        <div className='shader-gradient'></div>
 </div>
)};