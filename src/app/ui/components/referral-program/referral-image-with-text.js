import Image from "next/image";
import { montserrat, rubik, inter, redrose } from "../../fonts";
import { poppins } from "../../fonts";

export default function ReferralImageText() {
    return(
        <>
            <section className="referral-section-image-text-wrapper py-10">
                <div className="referral-section-image-text-container page-width">
                    <div className="referral-section-row flex flex-col items-center gap-8 sm:flex-row">
                        <div className="referral-section-column text-white basis-1/2">
                            <Image src="/hack-coins-image.png" width={600} height={500} alt=""/>
                        </div>
                        <div className="referral-section-column basis-1/2">
                            <h2 className={`${rubik.className} section-title text-xl font-bold`} >Hack Coins: Your Golden Ticket to Even More Travel!</h2>
                            <p className={` ${inter.className} py-4 text-lg`}>
                            Hack Coins are our exclusive currency — earned easily, spent freely. Invite friends, stack your Hack Coins, and turn them into unforgettable experiences with TravelHack!
                            </p>
                            <div className="referral-text-section_icon-block">
                                <div className="referral-text-section_icon-block-items flex gap-3 items-start">
                                    <Image src="/icon-plane.svg" width={24} height={24} alt=""/>
                                    <div>
                                        <h4 className={`${redrose.className} section-title text-xl font-bold`}>Spend Like Cash</h4>
                                        <p className={`${poppins.className}`}>Hack Coins can be used toward hotels, flights, car rentals, and more—just like cash!</p>
                                    </div>
                                </div>
                                <div className="referral-text-section_icon-block-items flex gap-3 items-start">
                                    <Image src="/icon-bolt.svg" width={24} height={24} alt=""/>
                                    <div>
                                        <h4>Instant Earnings</h4>
                                        <p>Hack Coins are added to your account as soon as your friend subscribes—instant gratification!</p>
                                    </div>
                                </div>
                                <div className="referral-text-section_icon-block-items flex gap-3 items-start">
                                    <Image src="/icon-infinity.svg" width={24} height={24} alt=""/>
                                    <div>
                                        <h4>No Limits, No Caps</h4>
                                        <p>Refer as many friends as you want—the more you refer, the more you earn!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}