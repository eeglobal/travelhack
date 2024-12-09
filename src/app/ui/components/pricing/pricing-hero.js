import Image from "next/image";
import { montserrat } from "../../fonts";
import { poppins } from "../../fonts";

export default function PricingHero() {
    return(
        <>
            <section className="pricing-hero-wrapper">
                <div className="pricing-hero-container page-width">
                    <div className="pricing-title-section text-white max-w-[710px]">
                        <h1>Epic Travel Savings Are One Click Away!</h1>
                        <p>Pick a plan, unlock exclusive deals, and start planning your next adventure with TravelHack. Ready to save up to 86% on your next trip?</p>
                    </div>
                </div>
            </section>
        </>
    )
}