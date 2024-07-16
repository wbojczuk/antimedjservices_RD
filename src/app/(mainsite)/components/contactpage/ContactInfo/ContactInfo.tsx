import styles from "./contactinfo.module.css"
import FreeEstimateForm from "../FreeEstimateForm/FreeEstimateForm"

export default function ContactInfo() {
  return (
    <section className={styles.contactInfo}>
        <div className={styles.stuffWrapper}>
        <div className={styles.textContent}>
          <p>At Anytime DJ Service, we’re fully insured and ready to bring the party to you! Our coverage spans a 60-mile radius from 1041 South Broadway Street # 894 Geneva Ohio 44041. Whether your event is local or requires a bit of travel, we’re ready to provide exceptional DJ services wherever your venue may be.</p>

          <a href={`tel:8882505519}`} className={styles.contactItem}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>
            <span>TOLL FREE: (888) 250-5519</span>
          </a>

          <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`} className={styles.contactItem}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>
            <span>{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</span>
          </a>

          <a href={"sms:" + process.env.NEXT_PUBLIC_TEXT_NUM} target="_blank" className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm6-11q.425 0 .713-.288T9 10t-.288-.712T8 9t-.712.288T7 10t.288.713T8 11m4 0q.425 0 .713-.288T13 10t-.288-.712T12 9t-.712.288T11 10t.288.713T12 11m4 0q.425 0 .713-.288T17 10t-.288-.712T16 9t-.712.288T15 10t.288.713T16 11"></path></svg>
                  <span>TEXTING: {process.env.NEXT_PUBLIC_TEXT_NUM_FORMATTED}</span>
                </a>

          

          <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`} className={styles.contactItem}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path></svg>
            <span>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</span>
          </a>

          <a href={`tel:4404660005`} className={styles.contactItem}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1792 1792"><path fill="currentColor" d="M288 384q66 0 113 47t47 113v1088q0 66-47 113t-113 47H160q-66 0-113-47T0 1632V544q0-66 47-113t113-47zm1376 163q58 34 93 93t35 128v768q0 106-75 181t-181 75H672q-66 0-113-47t-47-113V96q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88zm-736 989v-128q0-14-9-23t-23-9H768q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23m0-256v-128q0-14-9-23t-23-9H768q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23m0-256V896q0-14-9-23t-23-9H768q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23m256 512v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23m0-256v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23m0-256V896q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23m256 512v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23m0-256v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23m0-256V896q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23m96-384V384h-160q-40 0-68-28t-28-68V128H640v512z"></path></svg>
            <span>FAX: (440) 466-0005</span>
          </a>

          <a href={`https://g.co/kgs/bj9aMXS`} target="_blank" className={styles.contactItem}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></path></svg>
            <span>{process.env.NEXT_PUBLIC_BUSINESS_CITY_STATE}</span>
          </a>

          <a href={`https://g.co/kgs/bj9aMXS`} target="_blank" className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"></path></svg>
                  <span><strong>Office Hours:</strong><br />
                  Mon - Sat (9am - 10pm)<br />
                  Sun (12pm - 5pm)
                  </span>
                </a>

          <a href={`https://g.co/kgs/bj9aMXS`} target="_blank" className={styles.contactItem}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32Zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30ZM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56"></path></svg>
            <span>We accept all major credit cards, Chime and Cash App.
<br /><br />
*Booking requires a non-refundable deposit. The remaining balance is payable upon completion of service.</span>
          </a>

        </div>
        <div className={styles.formContent}>
            <FreeEstimateForm />
        </div>
        </div>

        <div className="shader-gradient-dark"></div>
        <div className="bg-img-repeat"></div>
    </section>
  )
}
