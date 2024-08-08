"use client"

import Link from 'next/link';
import styles from './find.module.css';

export default function Roadside(){
return (
 <div className={styles.find}>

    <h2>Need Roadside Services?</h2>

    <h3>Check out Anytime Roadside Services, Part of the Anytime family!</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' target='_blank' href={`https://anytimeroadsideservices.net`}>Visit Link</Link>
    </div>
 
    <img src='/img/roadside.webp' alt='Image of car' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};