import styles from './gallerycontent.module.css';
import galleryImgs from '@/app/(mainsite)/data/galleryimgs';

export default function GalleryContent(){
    const galleryElems = galleryImgs.reverse().map((data, i)=>{
        return(
            <a key={i} href={data.url} target='_blank' className={styles.item}>
                <img src={data.img} aria-hidden />
                <h3 className={styles.title}>{data.title}</h3>
                <div className={`center ${styles.linkWrapper}`}>
                    <button className='main-link' >Click For More</button>
                </div>
            </a>
        )
    })
return (
 <div className={styles.galleryContent}>
    {galleryElems}
 </div>
)};