import Image from "next/image"
import { redrose } from "../../fonts"

export default function ReferralEarnCoins() {
    return(
        <>
        <section className="feature-list-wrapper page-width">
            <h2 className="section-title text-center text-black">How to Start Earning Hack Coins Today!</h2>
            <div className="feature-list-container py-5 flex flex-col gap-6 sm:flex-row">
                <div className="feature-list-item card card-compact basis-full text-center sm:basis-1/3">
                    <div className="circle-icon">
                        <Image src="/icon-link.svg" width={36} height={36} alt=""/>
                    </div>
                    <span className="feature-list-subheading text-primary ">STEP 1</span>
                    <h3 className={`${redrose.className} h3`}>Share Your Unique Link</h3>
                    <p className="text-sm text-light">Grab your referral link and send it to friends. It’s easy to find in your TravelHack account!
                    </p>
                </div>
                <div className="feature-list-item card card-compact basis-full text-center sm:basis-1/3">
                    <div className="circle-icon">
                        <Image src="/icon-deals.svg" width={36} height={36} alt=""/>
                    </div>
                    <span className="feature-list-subheading text-primary ">STEP 2</span>
                    <h3 className={`${redrose.className} h3`}>Friends Sign Up & Unlock Deals</h3>
                    <p className="text-sm text-light">Your friends join TravelHack and unlock exclusive discounts—up to 86% off hotels, flights, and more!</p>
                </div>
                <div className="feature-list-item card card-compact basis-full text-center sm:basis-1/3">
                    <div className="circle-icon">
                        <Image src="/icon-coins.svg" width={36} height={36} alt=""/>
                    </div>
                    <span className="feature-list-subheading text-primary ">STEP 3</span>
                    <h3 className={`${redrose.className} h3`}>You Earn Hack Coins</h3>
                    <p className="text-sm text-light">The moment they subscribe, you earn $25 in Hack Coins. Use them to save on your next adventure!.</p>
                </div>
                
            </div>
            <div className="text-center">
                <button className="btn accent-color text-center">Start Referring & Earn Hack Coins Today!</button>
            </div>
            
        </section>
        </>
    )
}