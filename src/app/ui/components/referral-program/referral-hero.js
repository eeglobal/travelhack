import Image from "next/image";
import { montserrat, rubik, inter } from "../../fonts";
import { poppins } from "../../fonts";

export default function ReferralHero() {
    return(
        <>
            <div className="referral-section-hero-wrapper">
                <div className="referral-section-hero-container page-width">
                    <div className="referral-section-row flex flex-col items-center gap-4 sm:flex-row">
                        <div className="referral-section-column text-white basis-1/2">
                            <h1 className={`${rubik.className} section-title text-xl font-bold`} >Spend Less, Travel More
                            — Earn Big with TravelHack!</h1>
                            <p className={` ${inter.className} py-4 text-lg`}>
                            Invite your friends to join TravelHack, earn Hack Coins, and make traveling the adventure it’s meant to be. The more friends you refer, the more you save!
                            </p>
                            <button className="btn accent-color">Start Referring & Earning Now!</button> 
                        </div>
                        <div className="referral-section-column basis-1/2">
                             <Image src="/referral-globe.png" width={600} height={500} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}