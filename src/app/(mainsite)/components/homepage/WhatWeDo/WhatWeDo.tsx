"use client"
import styles from './whatwedo.module.css';
import Link from 'next/link';

export default function WhatWeDo(){
return (
 <div className={styles.ensure}>
    
        
    <h2>What We Do<span className="highlight">.</span></h2>
    <p className={styles.p}>Delivering unforgettable beats for weddings, corporate events, parties, and more. Expert music and entertainment to set the mood and keep the party going all night long.</p>

    <div className={styles.itemWrapper}>
        <Link href="/contact" className={styles.item}>
       <img src="/img/whatwedo1.png" alt="people partying" />
            <h3>Karaoke Services</h3>
            <p>Elevate any event with our professional Karaoke Services! Enjoy a wide selection of songs, high-quality equipment, and expert hosts—perfect for any gathering.</p>  
        </Link>

        <Link href="/contact" className={styles.item}>
        <img src="/img/whatwedo2.png" alt="people partying" />
            <h3>Wedding Parties</h3>
            <p>Elevate your special day with our Wedding DJ Services. From romantic first dances to lively dance floors, our skilled DJs curate the perfect soundtrack for your love story.</p>  
        </Link>

        <Link href="/contact" className={styles.item}>
        <img src="/img/whatwedo3.png" alt="people partying" />
            <h3>School Events</h3>
            <p>We match tunes to your school vibe, keeping energy high. From proms to homecomings, we make every event unforgettable.</p>  
        </Link>

        <Link href="/contact" className={styles.item}>
        <img src="/img/whatwedo4.png" alt="people partying" />
            <h3>Private Parties</h3>
            <p>We match music to your vibe, keeping the party going with diverse tunes. From intimate gatherings to lavish soirées, we ensure every guest has a fantastic time!</p>  
        </Link>
    </div>

    <div className={`center ${styles.linkWrapper}`}>
        <Link className='main-link' href='/contact'>Contact</Link>
    </div>

    <div className="bg-img-repeat"></div>
        <div className='shader-gradient'></div>
 </div>
)};