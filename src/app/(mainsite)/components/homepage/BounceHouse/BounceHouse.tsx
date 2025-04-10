"use client"

import styles from './party.module.css';
import Link from 'next/link';

export default function BounceHouse(){
return (
 <div className={styles.party}>

    <h2>Request A Song<span className="highlight">!</span></h2>
    <p>Scan to request a song!</p>
    <div className={`center ${styles.linkWrapper}`}>
    <img src="/img/qrcode.webp" alt="qr code to scan" className={styles.img} />
    </div>
    <div className="shader-dark-2" ></div>
    <img src='/img/whatwedo1.webp' alt='Image of people partying' className='bg-img' />
 </div>
)};