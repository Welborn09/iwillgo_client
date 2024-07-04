/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React from 'react';
import './../styles/carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules";
import { BannerInfo, BannerContainer, BannerInfoBg, BannerH5, Banner1Button } from './../styles/Carousel.styles';


const CarouselComponent = () => {
        return (
        <Swiper 
            modules={[Autoplay]}
            autoplay={{delay:4500}}>
            <SwiperSlide className='cover slide1'>     
                <BannerInfo>
                    <BannerContainer>
                        <BannerInfoBg>
                            <BannerH5>
                                Become a Volunteer in Your Community
                            </BannerH5>
                            <Banner1Button className='btn btn-secondary mt-5'> View More</Banner1Button>
                        </BannerInfoBg>    
                    </BannerContainer>    
                </BannerInfo>   
            </SwiperSlide>
            <SwiperSlide className='cover slide2'>
                <BannerInfo>
                    <BannerContainer>
                        <BannerInfoBg>
                            <BannerH5>
                                All Hands on Deck! We Need You Now 
                            </BannerH5>
                            <Banner1Button className='btn btn-secondary mt-5'> View More</Banner1Button>
                        </BannerInfoBg>    
                    </BannerContainer>    
                </BannerInfo> 
            </SwiperSlide>
            <SwiperSlide className='cover slide3'>
                <BannerInfo>
                    <BannerContainer>
                        <BannerInfoBg>
                            <BannerH5>
                                Give Your Contribution and Have Fun! 
                            </BannerH5>
                            <Banner1Button className='btn btn-secondary mt-5'> View More</Banner1Button>
                        </BannerInfoBg>    
                    </BannerContainer>    
                </BannerInfo> 
           </SwiperSlide>
        </Swiper>
      );
};

export default CarouselComponent;
