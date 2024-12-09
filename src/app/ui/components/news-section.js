import Image from "next/image"
import { redrose } from "../fonts"

export default function NewsSection() {
    return(
        <>
        <section className="feature-list-wrapper page-width">
            <h2 className="section-title text-center text-black">Latest News</h2>
            <div className="feature-list-container blog-section py-5 flex flex-col gap-6 sm:flex-row">
                            <div className="th-travel-destination-section-item">
                                <div className="th-travel-destination-image">
                                    <Image src="/blog-1.png" width={800} height={400} alt=""/>
                                </div>
                                <div className="th-travel-destination-content">
                                    <div>
                                        <h3 className="h3 text-left">News Title Here</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur. Aliquam.</p>
                                    </div>
                                    
                                    <div className="th-hero-banner-button-container">
                                        <Image src="/icon-arrow.svg" width={24} height={24}  alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="th-travel-destination-section-item">
                                <div className="th-travel-destination-image">
                                    <Image src="/blog-2.png" width={800} height={400} alt=""/>
                                </div>
                                <div className="th-travel-destination-content">
                                    <div>
                                        <h3 className="h3">News Title Here</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur. Aliquam.</p>
                                    </div>
                                    
                                    <div className="th-hero-banner-button-container">
                                        <Image src="/icon-arrow.svg" width={24} height={24}  alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="th-travel-destination-section-item">
                                <div className="th-travel-destination-image">
                                    <Image src="/blog-3.png" width={800} height={400} alt=""/>
                                </div>
                                <div className="th-travel-destination-content">
                                    <div>
                                        <h3 className="h3">News Title Here</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur. Aliquam.</p>
                                    </div>
                                    
                                    <div className="th-hero-banner-button-container">
                                        <Image src="/icon-arrow.svg" width={24} height={24}  alt=""/>
                                    </div>
                                </div>
                            </div>
                            
                            
                
            </div>
            <div className="text-center">
                <button className="btn accent-color text-center">Read More</button>
            </div>
            
        </section>
        </>
    )
}