"use client"

import styles from './party.module.css';
import Link from 'next/link';

export default function BounceHouse(){
return (
 <div className={styles.party}>

    <h2>Need A Bounce House<span className="highlight">?</span></h2>
    <p>We’ve got you covered! Ask us about getting a bounce house to make your party an unforgettable experience!</p>
    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call / Text</Link>
    </div>
    <div className="shader-dark-2" ></div>
    <img src='/img/bouncehouse.png' alt='Image of people partying' className='bg-img' />
 </div>
)};