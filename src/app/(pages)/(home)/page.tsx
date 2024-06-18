import Ensure from "@/app/(mainsite)/components/homepage/Ensure/Ensure";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import InfiniteRibbon from "@/app/(mainsite)/components/homepage/InfiniteRibbon/InfiniteRibbon";
import Party from "@/app/(mainsite)/components/homepage/Party/Party";
import WhatWeDo from "@/app/(mainsite)/components/homepage/WhatWeDo/WhatWeDo";


export default function Home() {
  return (
    <>
      <InfiniteRibbon content={<><span>In need of a DJ? Whatever the occasion we offer professional service at affordable prices!</span><span>In need of a DJ? Whatever the occasion we offer professional service at affordable prices!</span><span>In need of a DJ? Whatever the occasion we offer professional service at affordable prices!</span></>} />
      <Header />
      <Ensure />
      <WhatWeDo />
      <Party />
    </>
  )
}
