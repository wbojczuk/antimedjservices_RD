"use client"

import "./hamburgers.min.css"
import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import NavMultiOption from "./NavMultiOption"
import NavOption from "./NavOption"


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isOnTouch, setIsOnTouch] = useState(false)
  const [isOnMobile, setIsOnMobile] = useState(false) 
  const [isTopBarOpen, setIsTopBarOpen] = useState(true)


  // ****************** Add NAV OPTION REFS HERE ******************

  const homeRef: any = useRef()
  const aboutRef: any = useRef()
  const contactRef: any = useRef()
  const galleryRef: any = useRef()
  const servicesRef: any = useRef()
  const pricesRef: any = useRef()
  const contractRef: any = useRef()

  const hamburgerRef: any = useRef()
  const contentRef: any = useRef()
  const content2Ref: any = useRef()
  const topBarRef: any = useRef()
  const navRef: any = useRef()


  // ****************** Add Current Page Triggers HERE ******************

  const currentPageTriggers = [
    {
      triggers: ["/about"],
      ref: aboutRef
    },
    {
      triggers: ["/contact"],
      ref: contactRef
    },
    {
      triggers: ["/gallery"],
      ref: galleryRef
    },
    {
      triggers: ["/services"],
      ref: servicesRef
    },
    {
      triggers: ["/", "/home"],
      ref: homeRef
    },
    // {
    //   triggers: ["/prices"],
    //   ref: pricesRef
    // },
    {
      triggers: ["/contract"],
      ref: contractRef
    }
    
  ]

  const pathname = usePathname()

  useEffect(()=>{
    currentPageTriggers.forEach((data)=>{
      if(data.triggers.includes(pathname)){
        data.ref.current.classList.add(styles.active)
      }else{
        data.ref.current.classList.remove(styles.active)
      }
    })
  }, [pathname])


  useEffect(()=>{
    const isOnTouch = window.matchMedia("(max-width: 990px)").matches
    setIsOnTouch(isOnTouch)
    setIsOnMobile(window.matchMedia("(max-width: 649px)").matches)
    
    if(window.scrollY > 10){
      navbarAnimIn()
    }else{
      navbarAnimOut()
    }

    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 10){
        navbarAnimIn()
      }else{
        navbarAnimOut()
      }
    })

    if(isOnTouch){
      window.addEventListener("click", (evt)=>{
        //@ts-ignore
        if(!(evt.target.classList.contains("nav-noclose"))){
          closeMenu()
        }
      })
    }
  }, [])

  function navbarAnimIn(){
    // const topbarStyles = window.getComputedStyle(topBarRef.current)
    // const topAmt = parseFloat(topbarStyles.height) + parseFloat(topbarStyles.paddingTop) + parseFloat(topbarStyles.paddingBottom)
    // navRef.current.style.transform = `translateY(-${topAmt}px)`
  }

  function navbarAnimOut(){
    // navRef.current.style.transform = "translateY(0)"
  }


  function toggleMenu(){
    if(menuOpen){
     closeMenu()
    }else{
     openMenu()
    }
  }

  function closeMenu(){
    setMenuOpen(false)
    hamburgerRef.current.classList.remove("is-active")
    contentRef.current.style.transform =  "scaleY(0)"
  }

  function openMenu(){
    setMenuOpen(true)
    hamburgerRef.current.classList.add("is-active")
    contentRef.current.style.transform =  "scaleY(1)"
  }
  
  const hamburgerClass = "hamburger--collapse"
  /* Here’s the list of hamburger-type classes you can choose from:

        hamburger--3dx
        hamburger--3dx-r
        hamburger--3dy
        hamburger--3dy-r
        hamburger--3dxy
        hamburger--3dxy-r
        hamburger--arrow
        hamburger--arrow-r
        hamburger--arrowalt
        hamburger--arrowalt-r
        hamburger--arrowturn
        hamburger--arrowturn-r
        hamburger--boring
        hamburger--collapse
        hamburger--collapse-r
        hamburger--elastic
        hamburger--elastic-r
        hamburger--emphatic
        hamburger--emphatic-r
        hamburger--minus
        hamburger--slider
        hamburger--slider-r
        hamburger--spin
        hamburger--spin-r
        hamburger--spring
        hamburger--spring-r
        hamburger--stand
        hamburger--stand-r
        hamburger--squeeze
        hamburger--vortex
        hamburger--vortex-r */


  return (
    <nav ref={navRef} className={styles.mainNav}>

      

      <div className={styles.navContent}>
      <Link href="/" className={styles.logo}>
        <img src="/img/logo1.webp" className={styles.logoImg} width={500} height={250} alt="Logo" />
        {/* <span>logo text</span> */}
      </Link>

        

     
        
      <div className={styles.contentWrapper}>
      <button id="hamburgerMenu" onClick={toggleMenu} ref={hamburgerRef} className={`hamburger ${hamburgerClass} mobile tablet nav-noclose`} type="button">
        <span className="hamburger-box" style={{pointerEvents: "none"}}>
          <span className="hamburger-inner" style={{pointerEvents: "none"}}></span>
        </span>
      </button>
        <div ref={content2Ref} className={styles.content}>
          <ul ref={contentRef} className={styles.links}>

{/******************  PUT NAV OPTIONS HERE  ************************/}

          <NavOption
          title="Home"
          url="/"
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"></path></svg>}
          ref={homeRef}
          />

          <NavOption
          title="About"
          url="/about"
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path></svg>}
          ref={aboutRef}
          />

<NavOption
          title="Services"
          url="/services"
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9"></path></svg>}
          ref={servicesRef}
          />

<NavOption
          title="Gallery"
          url="/gallery"
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M3 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 11l3.5-4.5l2.5 3l3.5-4.5l4.5 6zM16 2a2 2 0 0 1 2 2H2a2 2 0 0 1 2-2z"></path></svg>}
          ref={galleryRef}
          />

<NavOption
          title="Sample Contract"
          url="/contract"
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path></svg>}
          ref={contractRef}
          />

{/* <NavOption
          title="Prices"
          url="/prices"
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M19.388.405a.605.605 0 0 0-1.141.399c.929 2.67-.915 4.664-2.321 5.732l-.568-.814c-.191-.273-.618-.5-.95-.504l-3.188.014a2.162 2.162 0 0 0-1.097.338L.729 12.157a1.01 1.01 0 0 0-.247 1.404l4.269 6.108c.32.455.831.4 1.287.082l9.394-6.588c.27-.191.582-.603.692-.918l.998-3.145c.11-.314.043-.793-.148-1.066l-.346-.496c1.888-1.447 3.848-4.004 2.76-7.133m-4.371 9.358a1.608 1.608 0 0 1-2.24-.396a1.614 1.614 0 0 1 .395-2.246a1.607 1.607 0 0 1 1.868.017c-.272.164-.459.26-.494.275a.606.606 0 0 0 .259 1.153c.086 0 .174-.02.257-.059c.194-.092.402-.201.619-.33a1.615 1.615 0 0 1-.664 1.586"></path></svg>}
          ref={pricesRef}
          /> */}

          <NavOption
          title="Contact"
          url="/contact"
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path></svg>}
          ref={contactRef}
          />

          
          <a href={"tel:"+process.env.NEXT_PUBLIC_PHONE_NUM} className={styles.cta}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>
            <span>CALL US {process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</span>
          </a>
          

          </ul>

          {/* ******* PUT SHOPIFY CART HERE ******** */}

        </div>
        
        </div>
      </div>

      
    </nav>
  )
}
