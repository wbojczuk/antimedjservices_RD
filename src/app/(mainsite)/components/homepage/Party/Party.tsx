"use client"

import styles from './party.module.css';
import Link from 'next/link';

export default function Party(){
return (
 <div className={styles.party}>

    <h2>Let's Get The Party Started<span className="highlight">!</span></h2>
    <p>We’re the vibe-makers, spinning tunes to suit your style. With endless beats, we ignite every event, crafting unforgettable memories.</p>
    <div className={`center ${styles.linkWrapper}`}>
        <Link className='main-link' href='/contact'>Contact</Link>
    </div>
 
    <img src='/img/party.png' alt='Image of people partying' className='bg-img' />
 </div>
)};