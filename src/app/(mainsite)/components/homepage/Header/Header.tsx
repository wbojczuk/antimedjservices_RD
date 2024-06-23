"use client"
import styles from './header.module.css';
import Link from 'next/link';

export default function Header(){
return (
 <header className={styles.header}>

    <h1>The Sound of Your Event<span className="highlight">.</span></h1>
    <p>We are fully licensed and insured, and we can travel up to 60 miles from our location at 1041 South Broadway Street #894, Geneva, Ohio 44041. <br /> <strong>Soon to be an LLC and registered with the BBB!</strong>
    </p>

    <div className={`center ${styles.linkWrapper}`}>
        <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Us</Link>
    </div>
 
 <video controls={false} className='bg-img' loop autoPlay muted>
       <source src={"/img/header-vid.mp4"} type="video/mp4" />
</video>

 </header>
)};