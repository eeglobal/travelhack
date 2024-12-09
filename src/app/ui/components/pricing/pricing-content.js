import Image from "next/image";
import { montserrat } from "../../fonts";
import { poppins } from "../../fonts";

export default function PricingContent() {
    return(
        <>
            <section className="pricing-content-section">
                <div className="pricing-content-wrapper page-width">
                    <div className="pricing-content-list">
                        <div className="pricing-content-list-item">
                            <div className="pricing-title-price-container text-center">
                                <div className="pricing-title-block">
                                    <h3 className="h3 text-xl">Explorer Plan</h3>
                                    <p>Ideal For: Budget-conscious solo travelers or couples looking for great travel deals across multiple categories.</p>
                                </div>
                                <div className="pricing-fees-block py-2 flex flex-col">
                                    <h2 className="price"><sup>$</sup>149<span className="price-per-year">/Year</span></h2>
                                    <button className="btn btn-outline">Get Started</button>
                                </div>
                            </div>
                            <div className="pricing-features-container">
                                <p className="pricing-feature-list-title">Key features</p>
                                <div className="pricing-features-list">
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Travel Discounts</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Real-Time Price Comparisons</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Exclusive Inventory Access</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>7-Day Free Trial</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="pricing-content-list-item">
                            <div className="pricing-title-price-container text-center">
                                <div className="pricing-title-block">
                                    <h3 className="h3 text-xl">Adventurer Plan</h3>
                                    <p>Ideal For: Families, couples, or frequent leisure travelers looking for multi-category travel savings with added perks.</p>
                                </div>
                                <div className="pricing-fees-block py-2 flex flex-col">
                                    <h2 className="price"><sup>$</sup>229<span className="price-per-year">/Year</span></h2>
                                    <button className="btn btn-outline">Get Started</button>
                                </div>
                            </div>
                            <div className="pricing-features-container">
                                <p className="pricing-feature-list-title">Everything in the Explorer Plan, plus:</p>
                                <div className="pricing-features-list">
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Travel Discounts</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Family-Friendly Travel Deals</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Covers Families</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Seasonal Offers & Special Promotions</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>No Blackout Dates</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Priority 24/7 Support</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>14-Day Free Trial</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-content-list-item">
                            <div className="pricing-title-price-container text-center">
                                <div className="pricing-title-block">
                                    <h3 className="h3 text-xl">Voyager Plan</h3>
                                    <p>Ideal For: Budget-conscious solo travelers or couples looking for great travel deals across multiple categories.</p>
                                </div>
                                <div className="pricing-fees-block py-2 flex flex-col">
                                    <h2 className="price"><sup>$</sup>499<span className="price-per-year">/Year</span></h2>
                                    <button className="btn btn-outline accent-color">Get Started</button>
                                </div>
                            </div>
                            <div className="pricing-features-container">
                                <p className="pricing-feature-list-title">Everything in the Adventurer Plan, plus:</p>
                                <div className="pricing-features-list">
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Comprehensive Travel Discounts</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Concierge Service</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Priority Access to Exclusive Deals</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Corporate Travel Management</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Lounge Access</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Global Coverage</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Frequent Flyer Optimization</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>14-Day Free Trial:</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="pricing-content-list-item">
                            <div className="pricing-title-price-container text-center">
                                <div className="pricing-title-block">
                                    <h3 className="h3 text-xl">Infinite Plan</h3>
                                    <p>Ideal For: Families, couples, or frequent leisure travelers looking for multi-category travel savings with added perks.</p>
                                </div>
                                <div className="pricing-fees-block py-2 flex flex-col">
                                    <h2 className="price"><sup>$</sup>999<span className="price-per-year">/One Time</span></h2>
                                    <button className="btn btn-outline">Get Started</button>
                                </div>
                            </div>
                            <div className="pricing-features-container">
                                <p className="pricing-feature-list-title">Everything in the Voyager Plan, plus:</p>
                                <div className="pricing-features-list">
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Lifetime Access</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>VIP Concierge Service</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>No Blackout Dates or Restrictions</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Priority Access to Exclusive Deals</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>Unlimited Travel Support</p>
                                    </div>
                                    <div className="pricing-feature-list-item">
                                        <Image src="/icon-circle-tick.svg" width={20} height={20} alt=""/>
                                        <p>14-Day Free Trial:</p>
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