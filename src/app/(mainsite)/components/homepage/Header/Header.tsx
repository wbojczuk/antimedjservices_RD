"use client"
import InfiniteRibbon from '../InfiniteRibbon2/InfiniteRibbon';
import styles from './header.module.css';
import Link from 'next/link';

export default function Header(){
return (
 <header className={styles.header}>
    <h2>No Power<span className="highlight">?</span> No worries<span className="highlight">!</span> We carry a generator so you can always have a good time</h2>
    <h1>The Sound of Your Event<span className="highlight">.</span></h1>
<div className="center">
<InfiniteRibbon content={<><span>Whatever the occasion we offer professional service at affordable prices</span><span>Whatever the occasion we offer professional service at affordable prices</span><span>Whatever the occasion we offer professional service at affordable prices</span><span>Whatever the occasion we offer professional service at affordable prices</span><span>Whatever the occasion we offer professional service at affordable prices</span><span>Whatever the occasion we offer professional service at affordable prices</span></>} />
</div>
    
    <p><strong>We are fully licensed and insured, able to add your event to our insurance</strong>, and we can travel up to 60 miles from our location at {process.env.NEXT_PUBLIC_BUSINESS_CITY_STATE}.
        {/* <br /> <strong>Soon to be an LLC, trademarked and registered with the BBB!</strong> */}
    </p>

    <div className={`center ${styles.linkWrapper}`}>
        <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_TOLL_NUM}`}>Call Now</Link>
        <Link className='main-link' target='_blank' href={`https://square.link/u/ZbsLsexX`}>Pay Now</Link>
    </div>
    <div className="center"><h2 className={styles.installment} style={{fontSize: "2rem"}}>We offer payment in installments to make a good time affordable to everyone!</h2></div>
 
 <video controls={false} className='bg-img' loop autoPlay muted>
       <source src={"/img/header-vid.mp4"} type="video/mp4" />
</video>

 </header>
)};