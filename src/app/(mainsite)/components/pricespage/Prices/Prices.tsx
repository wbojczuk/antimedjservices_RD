import styles from './prices.module.css';

export default function Prices(){
return (
 <div className={styles.prices}>
            <div className="center"><h1 style={{color: "white", margin: "4vw 0"}}>Prices are subject to change</h1></div>

			<div className="center">
			<img className={styles.price} src="/img/prices2.jpg" aria-hidden />
			</div>
			 <div className="center"><h1 style={{color: "white", margin: "4vw 0"}}>Prices are subject to change</h1></div>

			<div className="center">
			<img className={styles.price} src="/img/weddingprices.jpg" aria-hidden />
			</div>
 </div>
)};