import Image from "next/image"
import { redrose } from "../fonts"

export default function Testimonials() {
    return(
        <>        
        <section>   
        <div className="th-testimonial-section-wrapper">
                <h2 className="section-title text-center text-white">Latest News</h2>
                <div className="th-testimonial-section-container page-width">
                    <div className="th-testimonial-review-item">
                        <div className="th-testimonial-image-container">
                            <div className="th-testimonial-image">
                                <Image src="/testi-image.png" width={56} height={56} alt=""/>
                                <h3 className="review-author-name">John Doe</h3>
                            </div>
                            <div>
                                <Image src="/icon-star-rating.svg" width={100} height={20} alt=""/>
                            </div>
                        </div>
                        <div className="th-testimonial-review-content">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum nunc nullam rutrum sed sollicitudin euismod nisl phasellus sit. Odio felis, pellentesque viverra amet habitasse. Imperdiet dis placerat mauris justo. Pellentesque netus viverra enim congue suscipit quam amet.”</p>
                        </div>
                    </div>
                    <div className="th-testimonial-review-item">
                        <div className="th-testimonial-image-container">
                            <div className="th-testimonial-image">
                                <Image src="/testi-image.png" width={56} height={56} alt=""/>
                                <h3 className="review-author-name">John Doe</h3>
                            </div>
                            <div>
                                <Image src="/icon-star-rating.svg" width={100} height={20} alt=""/>
                            </div>
                        </div>
                        <div className="th-testimonial-review-content">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum nunc nullam rutrum sed sollicitudin euismod nisl phasellus sit. Odio felis, pellentesque viverra amet habitasse. Imperdiet dis placerat mauris justo. Pellentesque netus viverra enim congue suscipit quam amet.”</p>
                        </div>
                    </div>
                    <div className="th-testimonial-review-item">
                        <div className="th-testimonial-image-container">
                            <div className="th-testimonial-image">
                                <Image src="/testi-image.png" width={56} height={56} alt=""/>
                                <h3 className="review-author-name">John Doe</h3>
                            </div>
                            <div>
                                <Image src="/icon-star-rating.svg" width={100} height={20} alt=""/>
                            </div>
                        </div>
                        <div className="th-testimonial-review-content">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum nunc nullam rutrum sed sollicitudin euismod nisl phasellus sit. Odio felis, pellentesque viverra amet habitasse. Imperdiet dis placerat mauris justo. Pellentesque netus viverra enim congue suscipit quam amet.”</p>
                        </div>
                    </div>
                    <div className="th-testimonial-review-item">
                        <div className="th-testimonial-image-container">
                            <div className="th-testimonial-image">
                                <Image src="/testi-image.png" width={56} height={56} alt=""/>
                                <h3 className="review-author-name">John Doe</h3>
                            </div>
                            <div>
                                <Image src="/icon-star-rating.svg" width={100} height={20} alt=""/>
                            </div>
                        </div>
                        <div className="th-testimonial-review-content">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum nunc nullam rutrum sed sollicitudin euismod nisl phasellus sit. Odio felis, pellentesque viverra amet habitasse. Imperdiet dis placerat mauris justo. Pellentesque netus viverra enim congue suscipit quam amet.”</p>
                        </div>
                    </div>
                    <div className="th-testimonial-review-item">
                        <div className="th-testimonial-image-container">
                            <div className="th-testimonial-image">
                                <Image src="/testi-image.png" width={56} height={56} alt=""/>
                                <h3 className="review-author-name">John Doe</h3>
                            </div>
                            <div>
                                <Image src="/icon-star-rating.svg" width={100} height={20} alt=""/>
                            </div>
                        </div>
                        <div className="th-testimonial-review-content">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum nunc nullam rutrum sed sollicitudin euismod nisl phasellus sit. Odio felis, pellentesque viverra amet habitasse. Imperdiet dis placerat mauris justo. Pellentesque netus viverra enim congue suscipit quam amet.”</p>
                        </div>
                    </div>
                    <div className="th-testimonial-review-item">
                        <div className="th-testimonial-image-container">
                            <div className="th-testimonial-image">
                                <Image src="/testi-image.png" width={56} height={56} alt=""/>
                                <h3 className="review-author-name">John Doe</h3>
                            </div>
                            <div>
                                <Image src="/icon-star-rating.svg" width={100} height={20} alt=""/>
                            </div>
                        </div>
                        <div className="th-testimonial-review-content">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum nunc nullam rutrum sed sollicitudin euismod nisl phasellus sit. Odio felis, pellentesque viverra amet habitasse. Imperdiet dis placerat mauris justo. Pellentesque netus viverra enim congue suscipit quam amet.”</p>
                        </div>
                    </div>
                    
                </div>
                <div className="text-center">
                    <button className="btn accent-color text-center">See All</button>
                </div>
            </div>
        </section>
        </>
    )
}