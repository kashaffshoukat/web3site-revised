'use client'

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

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

export default function Pagetitle1() {
  return (
    <>
      <style jsx>{`
        @keyframes floatSideways {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(16px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes floatDownUp {
          0% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeInText {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .page-title {
          position: relative;
          overflow: hidden;
          background-color: #0b0f2c;
          background-image: linear-gradient(to bottom right, rgba(11, 15, 44, 0.85), rgba(0, 0, 0, 0.85)), url('/assets/images/common/space2.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 100px 0, // ✅ Control vertical spacing here
         overflow: hidden, // ✅ Prevent overlay/content from pushing outside
        }

        .page-title::before {
          display: none;
        }

        .slider-st1,
        .container {
          position: relative;
          z-index: 2;
        }

        .float-animation {
          animation: floatSideways 3s ease-in-out infinite;
        }

        .main-character {
          transform: rotate(-8deg);
          position: relative;
          z-index: 2;
        }

        .title {
          font-family: 'Poppins', sans-serif;
          font-size: 3rem;
          font-weight: 900;
          line-height: 1;
          margin: 0;
          padding: 0;
          max-width: 900px;
          word-break: break-word;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          background: linear-gradient(90deg, #00ff91, #00c3ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: fadeInText 1s ease-in-out forwards;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .sub-title {
          font-size: 1.125rem;
          font-weight: 500;
          color: #ffffff;
          margin-top: 1.2rem;
          letter-spacing: 0.8px;
          font-style: italic;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
          animation: fadeInText 1.5s ease-in-out forwards;
        }

        .tf-button.style2 {
          background: linear-gradient(45deg, #00ff91, #00c3ff);
          color: #ffffff;
          font-weight: 700;
          padding: 12px 32px;
          border-radius: 12px;
          text-transform: uppercase;
          box-shadow: 0 6px 20px rgba(0, 255, 145, 0.4);
          transition: all 0.3s ease-in-out;
          animation: fadeInText 2s ease-in-out forwards;
          letter-spacing: 1px;
        }

        .tf-button.style2:hover {
          background: linear-gradient(45deg, #00c3ff, #00ff91);
          color: white;
        }

        .floating-icon {
          position: absolute;
          width: 80px;
          animation: floatDownUp 3s ease-in-out infinite;
          z-index: 1;
        }

        .icon-1 {
          top: 10%;
          left: 5%;
        }

        .icon-2 {
          top: 55%;
          left: 5%;
        }

        .icon-3 {
          bottom: 15%;
          right: 1%;
          transform: translateX(-100%);
        }

        .btn-next-main,
        .btn-prev-main {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 3;
          transition: background 0.3s;
        }

        .btn-next-main:hover,
        .btn-prev-main:hover {
          background: #00ff91);
        }

        .btn-next-main {
          right: 10px;
        }

        .btn-prev-main {
          left: 10px;
        }

        @media (max-width: 768px) {
          .floating-icon {
            display: none;
          }

          .title {
            font-size: 2.5rem;
            text-align: center;
          }

          .sub-title {
            font-size: 1rem;
            text-align: center;
          }
        }
      `}</style>

      <section className="page-title">
        <div className="swiper-container slider-main">
          <Swiper {...swiperOptions} className="swiper-wrapper">
            <SwiperSlide>
              <div className="slider-st1">
                <div className="container">
                  <div className="row align-items-center">
                    {/* Left Side */}
                    <div
                      className="col-md-6"
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <div className="content-box" style={{ padding: "5rem", marginTop: "-5rem" }}>
                        <h1 className="title">
                          Enter the gateway of <br /> Blockchain Gaming
                        </h1>
                        <p className="sub-title">
                          Visually and spatially connecting games in a seamless metaverse experience.
                        </p>
                        <div className="wrap-btn mt-4">
                          <Link href="/project-list" className="tf-button style2">
                            Explore IGO
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Right Side */}
                    <div
                      className="col-md-6 d-flex justify-content-center position-relative"
                      data-aos="fade-left"
                      data-aos-delay="300"
                      data-aos-duration="1000"
                    >
                      <div className="image float-animation main-character">
                        <img
                          src="/assets/images/common/db-tech-character.png"
                          alt="Character"
                          style={{ maxWidth: "100%", height: "auto", objectFit: "contain", marginTop: "-5rem" }}
                        />
                      </div>

                      {/* Floating Icons */}
                      <img
                        src="/assets/images/common/icon_b.png"
                        alt="Icon 1"
                        className="floating-icon icon-1"
                      />
                      <img
                        src="/assets/images/common/icon_t.png"
                        alt="Icon 2"
                        className="floating-icon icon-2"
                      />
                      <img
                        src="/assets/images/common/icon_t2.png"
                        alt="Icon 3"
                        className="floating-icon icon-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="btn-next-main">
            <i className="far fa-angle-right" />
          </div>
          <div className="btn-prev-main">
            <i className="far fa-angle-left" />
          </div>
          <div className="swiper-pagination" />
        </div>
      </section>
    </>
  )
}
