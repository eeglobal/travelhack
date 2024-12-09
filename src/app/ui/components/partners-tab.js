"use client";
import Image from "next/image"
import React from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { rubik } from "../fonts";
import { inter } from "../fonts";
import { HiOutlineUser, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

export default function PartnersTab() {
    
    return(
        <>
            <div className="th-partners-section-wrapper">
                <div className="th-partners-section-container pt-12 pb-12 bg-white  page-width">
                    <div className="th-partners-section-header pl-12 pr-12">
                        <h2 className={`${inter.className} section-title`}>Our Travel Partners</h2>
                        <div className="divider"></div>
                    </div>
                    
                    <div className="partner-tab-slider-top partner-tab-slider-wrapper">
                        <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={2.5}
                        speed={5000}
                        loop={true}
                        freeMode={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: true,
                        }}
                        breakpoints={{
                            639: {
                              slidesPerView: 5,
                            }
                          }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div className="partner-logo-image">
                                    <Image className="" src="/partner-logo-1.png" alt="" width={120} height={20} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner-logo-image">
                                    <Image className="" src="/partner-logo-2.png" alt="" width={120} height={20} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner-logo-image">
                                    <Image className="" src="/partner-logo-3.png" alt="" width={120} height={20} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner-logo-image">
                                    <Image className="" src="/partner-logo-4.png" alt="" width={120} height={20} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner-logo-image">
                                    <Image className="" src="/partner-logo-5.png" alt="" width={120} height={20} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner-logo-image">
                                    <Image className="" src="/partner-logo-6.png" alt="" width={120} height={20} />
                                </div>
                            </SwiperSlide>
                            
                            
                        </Swiper>
                    </div>
                
                    <div className="partner-tab-slider-bottom partner-tab-slider-wrapper">
                        <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={2.5}
                        speed={5000}
                        loop={true}
                        freeMode={true}
                        
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            reverseDirection: true,
                        }}
                        breakpoints={{
                            639: {
                              slidesPerView: 5,
                            }
                          }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div className="partner-logo-image">
                                    <Image className="" src="/partner-logo-1.png" alt="" width={120} height={20} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner-logo-image">
                                    <Image className="" src="/partner-logo-2.png" alt="" width={120} height={20} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner-logo-image">
                                    <Image className="" src="/partner-logo-3.png" alt="" width={120} height={20} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner-logo-image">
                                    <Image className="" src="/partner-logo-4.png" alt="" width={120} height={20} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner-logo-image">
                                    <Image className="" src="/partner-logo-5.png" alt="" width={120} height={20} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner-logo-image">
                                    <Image className="" src="/partner-logo-6.png" alt="" width={120} height={20} />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}