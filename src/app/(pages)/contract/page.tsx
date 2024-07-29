import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Contract | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Contract | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function ContractPage(){
	 return(
	 	 <>

			<div className="center"><h1 style={{color: "white", margin: "4vw 0"}}>Sample contract, address where the contract wil be signed will be given to you when needed.</h1></div>

			<div className="center">
			<img src="/img/contract.jpg" aria-hidden style={{width: "60%"}} />
			</div>
			<div className="center">
			<img src="/img/contract1.jpg" aria-hidden style={{width: "60%"}} />
			</div>

	 	 </>
	 )
}