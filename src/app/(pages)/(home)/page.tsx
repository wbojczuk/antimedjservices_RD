import BounceHouse from "@/app/(mainsite)/components/homepage/BounceHouse/BounceHouse";
import Ensure from "@/app/(mainsite)/components/homepage/Ensure/Ensure";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import InfiniteRibbon from "@/app/(mainsite)/components/homepage/InfiniteRibbon/InfiniteRibbon";
import InlineReviews from "@/app/(mainsite)/components/homepage/InlineReviews/InlineReviews";
import Party from "@/app/(mainsite)/components/homepage/Party/Party";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import WhatWeDo from "@/app/(mainsite)/components/homepage/WhatWeDo/WhatWeDo";


export default function Home() {
  return (
    <>
      <InfiniteRibbon content={<><span>Let the party come to you</span><span>Let the party come to you</span><span>Let the party come to you</span><span>Let the party come to you</span><span>Let the party come to you</span><span>Let the party come to you</span><span>Let the party come to you</span><span>Let the party come to you</span><span>Let the party come to you</span><span>Let the party come to you</span></>} />
      <Header />
      <Ensure />
      <BounceHouse />
      <WhatWeDo />
      <Party />
      <InlineReviews />
      <ServiceArea />
    </>
  )
}
