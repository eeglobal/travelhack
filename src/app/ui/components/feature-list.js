import Image from "next/image"
import { redrose } from "../fonts"

export default function FeatureList() {
    return(
        <>
        <section className="feature-list-wrapper page-width">
            <h2 className="section-title text-center text-black">Why TravelHack?</h2>
            <div className="feature-list-container py-5 flex flex-col gap-6 sm:flex-row">
                <div className="feature-list-item basis-full text-center sm:basis-1/4">
                    <div className="circle-icon">
                        <Image src="/icon-globe.svg" width={36} height={36} alt=""/>
                    </div>
                    <h3 className={`${redrose.className} h3`}>Exclusive Membership Discounts</h3>
                    <p className="text-sm text-light">Save up to 86% on hotels, flights, cruises, and car rentals with exclusive, member-only rates.</p>
                </div>
                <div className="feature-list-item basis-full text-center sm:basis-1/4">
                    <div className="circle-icon">
                        <Image src="/icon-tag.svg" width={36} height={36} alt=""/>
                    </div>
                    <h3 className={`${redrose.className} h3`}>AI-Powered Price Comparison</h3>
                    <p className="text-sm text-light">Our advanced AI compares prices across platforms in real-time, ensuring you get the best deal every time.</p>
                </div>
                <div className="feature-list-item basis-full text-center sm:basis-1/4">
                    <div className="circle-icon">
                        <Image src="/icon-shield.svg" width={36} height={36} alt=""/>
                    </div>
                    <h3 className={`${redrose.className} h3`}>Best Price Guarantee</h3>
                    <p className="text-sm text-light">We guarantee the lowest price on your booking or your money back. Book with confidence every time.</p>
                </div>
                <div className="feature-list-item basis-full text-center sm:basis-1/4">
                    <div className="circle-icon">
                        <Image src="/icon-cal-tick.svg" width={36} height={36} alt=""/>
                    </div>
                    <h3 className={`${redrose.className} h3`}>Hassle-Free Booking</h3>
                    <p className="text-sm text-light">Enjoy a smooth, effortless booking process that lets you focus on planning your adventure.</p>
                </div>
            </div>
        </section>
        </>
    )
}