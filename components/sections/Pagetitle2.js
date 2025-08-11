'use client'

import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  loop: false,
  spaceBetween: 0,
  navigation: {
    nextEl: ".btn-next-main",
    prevEl: ".btn-prev-main",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1280: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
}

export default function Pagetitle2() {
  return (
    <>
      <section className="page-title">
        <div className="swiper-container slider-main">
          <Swiper {...swiperOptions} className="swiper-wrapper">
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="slider-st2">
                {/* ✅ Floating Mars Images */}
                <img className="icon icon_1" src="/assets/images/common/tiny.png" alt="planet" />
                <img className="icon icon_2" src="/assets/images/common/tiny.png" alt="planet" />
                <img className="icon icon_3" src="/assets/images/common/tiny.png" alt="planet" />

                {/* ✅ Background Overlay */}
                <div className="overlay">
                  <img src="/assets/images/common/space2.jpg" alt="background" />
                </div>

                {/* ✅ Slider Content */}
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-slider">
                        <div className="content-box">
                          <h1 className="title">
                            Become an early investor in the top Blockchain Games, NFTs and Metaverses
                          </h1>
                          <p className="sub-title">
                            Risebot is the leading blockchain gaming launchpad with over 50 projects launched and the <br className="show-destop" />
                            highest average ROI in the industry
                          </p>
                          <div className="wrap-btn">
                            <Link href="/faq" className="tf-button style2">
                              HOW TO START
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="slider-st2">
                <div className="overlay">
                  <img src="/assets/images/backgroup/bg-slider2.png" alt="background" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-slider">
                        <div className="content-box">
                          <h1 className="title">
                            Become an early investor in the top Blockchain Games, NFTs and Metaverses
                          </h1>
                          <p className="sub-title">
                            Risebot is the leading blockchain gaming launchpad with over 50 projects launched and the highest average ROI in the industry
                          </p>
                          <div className="wrap-btn">
                            <Link href="#" className="tf-button style2">
                              HOW TO START
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Navigation Arrows */}
          <div className="btn-next-main"><i className="far fa-angle-right" /></div>
          <div className="btn-prev-main"><i className="far fa-angle-left" /></div>
          <div className="swiper-pagination" />
        </div>

        {/* ✅ Floating Planet Styles */}
        <style jsx>{`
          .slider-st2 {
            position: relative;
            overflow: hidden;
          }

          .slider-st2 .icon {
            position: absolute;
            width: 80px;
            animation: float 6s ease-in-out infinite;
            z-index: 3;
          }

          .slider-st2 .icon_1 {
            top: 30%;
            left: 10%;
            animation-delay: 0s;
          }

          .slider-st2 .icon_2 {
            top: 20%;
            left: 45%;
            animation-delay: 1s;
            width: 140px;
          }

          .slider-st2 .icon_3 {
            top: 35%;
            right: 8%;
            animation-delay: 2s;
          }

          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .slider-st2 .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 1;
          }

          .slider-st2 .overlay img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.5;
          }

          .slider-st2 .container,
          .box-slider,
          .content-box {
            position: relative;
            z-index: 4;
          }

          .tf-button.style2 {
            background-color: #6EFF00;
            border: none;
            padding: 12px 30px;
            color: black;
            font-weight: bold;
            border-radius: 8px;
            text-transform: uppercase;
            transition: all 0.3s ease;
          }

          .tf-button.style2:hover {
            background-color: #56cc00;
          }
        `}</style>
      </section>
    </>
  )
}
