"use client";
import Image from "next/image"
import { redrose } from "../fonts"

import React from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




export default function FeaturedTravel() {
    
    return(
        <>
            
            <section className="featured-travel-wrapper bg-blue-500 py-14">
            <h2 className="section-title text-center text-white">Featured Travel Destinations</h2>
                <div className="featured-travel-container">
                    <div className="featured-slider">
                    <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1.5}
                    centeredSlides={true}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        639: {
                          slidesPerView: 3.5,
                        }
                      }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="th-travel-destination-section-item">
                                <div className="th-travel-destination-image">
                                    <Image src="/destination-image-1.webp" width={800} height={400} alt=""/>
                                </div>
                                <div className="th-travel-destination-content">
                                    <div>
                                        <h3 className="h3">Destination Name</h3>
                                        <Image src="/icon-star-rating.svg" width={110} height={30}  alt=""/>
                                    </div>
                                    
                                    <div className="th-hero-banner-button-container">
                                        <Image src="/icon-arrow.svg" width={24} height={24}  alt=""/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="th-travel-destination-section-item">
                                <div className="th-travel-destination-image">
                                    <Image src="/destination-image-2.webp" width={800} height={400} alt=""/>
                                </div>
                                <div className="th-travel-destination-content">
                                    <div>
                                        <h3 className="h3">Destination Name</h3>
                                        <Image src="/icon-star-rating.svg" width={110} height={30}  alt=""/>
                                    </div>
                                    
                                    <div className="th-hero-banner-button-container">
                                        <Image src="/icon-arrow.svg" width={24} height={24}  alt=""/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="th-travel-destination-section-item">
                                <div className="th-travel-destination-image">
                                    <Image src="/destination-image-3.webp" width={800} height={400} alt=""/>
                                </div>
                                <div className="th-travel-destination-content">
                                    <div>
                                        <h3 className="h3">Destination Name</h3>
                                        <Image src="/icon-star-rating.svg" width={110} height={30}  alt=""/>
                                    </div>
                                    
                                    <div className="th-hero-banner-button-container">
                                        <Image src="/icon-arrow.svg" width={24} height={24}  alt=""/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="th-travel-destination-section-item">
                                <div className="th-travel-destination-image">
                                    <Image src="/destination-image-4.webp" width={800} height={400} alt=""/>
                                </div>
                                <div className="th-travel-destination-content">
                                    <div>
                                        <h3 className="h3">Destination Name</h3>
                                        <Image src="/icon-star-rating.svg" width={110} height={30}  alt=""/>
                                    </div>
                                    
                                    <div className="th-hero-banner-button-container">
                                        <Image src="/icon-arrow.svg" width={24} height={24}  alt=""/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="th-travel-destination-section-item">
                                <div className="th-travel-destination-image">
                                    <Image src="/destination-image-5.webp" width={800} height={400} alt=""/>
                                </div>
                                <div className="th-travel-destination-content">
                                    <div>
                                        <h3 className="h3">Destination Name</h3>
                                        <Image src="/icon-star-rating.svg" width={110} height={30}  alt=""/>
                                    </div>
                                    
                                    <div className="th-hero-banner-button-container">
                                        <Image src="/icon-arrow.svg" width={24} height={24}  alt=""/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                        {/* <div className="th-travel-destination-section-item">
                            <div className="th-travel-destination-image">
                                <Image src="/destination-image-1.webp" width={800} height={400} alt=""/>
                            </div>
                            <div className="th-travel-destination-content">
                                <div>
                                    <h3 className="h3">Destination Name</h3>
                                    <Image src="/icon-star-rating.svg" width={110} height={30}  alt=""/>
                                </div>
                                
                                <div className="th-hero-banner-button-container">
                                    <Image src="/icon-arrow.svg" width={24} height={24}  alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="th-travel-destination-section-item">
                            <div className="th-travel-destination-image">
                                <Image src="/destination-image-1.webp" width={800} height={400} alt=""/>
                            </div>
                            <div className="th-travel-destination-content">
                                <div>
                                    <h3 className="h3">Destination Name</h3>
                                    <Image src="/icon-star-rating.svg" width={110} height={30}  alt=""/>
                                </div>
                                
                                <div className="th-hero-banner-button-container">
                                    <Image src="/icon-arrow.svg" width={24} height={24}  alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="th-travel-destination-section-item">
                            <div className="th-travel-destination-image">
                                <Image src="/destination-image-1.webp" width={800} height={400} alt=""/>
                            </div>
                            <div className="th-travel-destination-content">
                                <div>
                                    <h3 className="h3">Destination Name</h3>
                                    <Image src="/icon-star-rating.svg" width={110} height={30}  alt=""/>
                                </div>
                                
                                <div className="th-hero-banner-button-container">
                                    <Image src="/icon-arrow.svg" width={24} height={24}  alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="th-travel-destination-section-item">
                            <div className="th-travel-destination-image">
                                <Image src="/destination-image-1.webp" width={800} height={400} alt=""/>
                            </div>
                            <div className="th-travel-destination-content">
                                <div>
                                    <h3 className="h3">Destination Name</h3>
                                    <Image src="/icon-star-rating.svg" width={110} height={30}  alt=""/>
                                </div>
                                
                                <div className="th-hero-banner-button-container">
                                    <Image src="/icon-arrow.svg" width={24} height={24}  alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="th-travel-destination-section-item">
                            <div className="th-travel-destination-image">
                                <Image src="/destination-image-1.webp" width={800} height={400} alt=""/>
                            </div>
                            <div className="th-travel-destination-content">
                                <div>
                                    <h3 className="h3">Destination Name</h3>
                                    <Image src="/icon-star-rating.svg" width={110} height={30}  alt=""/>
                                </div>
                                
                                <div className="th-hero-banner-button-container">
                                    <Image src="/icon-arrow.svg" width={24} height={24}  alt=""/>
                                </div>
                            </div>
                        </div> */}

                        
                    </div>
                    
                </div>
            </section>
        </>
    )
}