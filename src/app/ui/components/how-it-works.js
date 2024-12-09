import Image from "next/image"
import { redrose } from "../fonts"

export default function HowItWorks() {
    return(
        <>
        <section className="feature-list-wrapper page-width">
            <h2 className="section-title text-center text-black">How It Works</h2>
            <div className="feature-list-container py-5 flex flex-col gap-6 sm:flex-row">
                <div className="feature-list-item card card-compact basis-full text-center sm:basis-1/4">
                    <div className="circle-icon">
                        <Image src="/icon-people.svg" width={36} height={36} alt=""/>
                    </div>
                    <span className="feature-list-subheading text-primary ">STEP 1</span>
                    <h3 className={`${redrose.className} h3`}>Sign Up for Free</h3>
                    <p className="text-sm text-light">Create your free TravelHack account in seconds. No credit card required to explore!</p>
                </div>
                <div className="feature-list-item card card-compact basis-full text-center sm:basis-1/4">
                    <div className="circle-icon">
                        <Image src="/icon-globe-search.svg" width={36} height={36} alt=""/>
                    </div>
                    <span className="feature-list-subheading text-primary ">STEP 2</span>
                    <h3 className={`${redrose.className} h3`}>Browse Exclusive Deals</h3>
                    <p className="text-sm text-light">Access up to 86% off on hotels, flights, cruises, and car rentals worldwide.</p>
                </div>
                <div className="feature-list-item card card-compact basis-full text-center sm:basis-1/4">
                    <div className="circle-icon">
                        <Image src="/icon-piggy-bank.svg" width={36} height={36} alt=""/>
                    </div>
                    <span className="feature-list-subheading text-primary ">STEP 3</span>
                    <h3 className={`${redrose.className} h3`}>Book and Save</h3>
                    <p className="text-sm text-light">Book your travel seamlessly through our platform and enjoy incredible savings.</p>
                </div>
                <div className="feature-list-item card card-compact basis-full text-center sm:basis-1/4">
                    <div className="circle-icon">
                        <Image src="/icon-coins-th.svg" width={36} height={36} alt=""/>
                    </div>
                    <span className="feature-list-subheading text-primary ">STEP 4</span>
                    <h3 className={`${redrose.className} h3`}>Earn Hack Coins</h3>
                    <p className="text-sm text-light">Refer friends and earn Hack Coins to save even more on future travels.</p>
                </div>
                
                
            </div>
            <div className="text-center">
                <button className="btn accent-color text-center">Start Your Free Trial Now!</button>
            </div>
            
        </section>
        </>
    )
}