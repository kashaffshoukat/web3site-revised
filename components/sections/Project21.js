'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next_slider-2",
    prevEl: ".prev_slider-2",
  },
  breakpoints: {
    0: { slidesPerView: 1, spaceBetween: 30 },
    750: { slidesPerView: 2, spaceBetween: 30 },
    991: { slidesPerView: 3, spaceBetween: 30 },
    1280: { slidesPerView: 3, spaceBetween: 30 },
  },
}

export default function Project21() {
  return (
    <section
      className="tf-section project_2 position-relative"
      style={{
        backgroundImage: "url('/assets/images/common/space2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        padding: "100px 0", // ✅ Control vertical spacing here
        overflow: "hidden", // ✅ Prevent overlay/content from pushing outside
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          zIndex: 1,
        }}
      ></div>

      <div className="container w_1690 position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
              <h2 className="title" style={{ color: "#fff", textShadow: "0 2px 10px rgba(255,255,255,0.2)" }}>
                Projects that promise a lot
                <br className="show-destop" />
                of potential
              </h2>
            </div>
          </div>

          <div className="col-md-12">
            <div className="container_inner">
              <div className="swiper-container slider-2" data-aos="fade-in" data-aos-duration={1000}>
                <Swiper {...swiperOptions} className="swiper-wrapper">
                  {/* Slide 1 */}
                  <SwiperSlide>
                    <div className="project-box">
                      <div className="image">
                        <img className="mask" src="/assets/images/common/project_15.png" alt="" />
                      </div>
                      <div className="content">
                        <span className="boder" />
                        <div className="content-inner">
                          <h5 className="heading" style={{ color: "#fff" }}>
                            <Link href="/project-list">Zombie Plant 2</Link>
                          </h5>
                          <p className="desc" style={{ color: "#ddd" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius risus sed pellentesque
                          </p>
                          <ul>
                            <li><p className="text">Total raise:</p><p className="price">100K</p></li>
                            <li><p className="text">Valuation:</p><p className="price">23M</p></li>
                            <li><p className="text">Base allo:</p><p className="price">$0</p></li>
                          </ul>
                        </div>
                      </div>
                      <Link href="/project-list" className="tf-button style2">EXPLORE</Link>
                    </div>
                  </SwiperSlide>

                  {/* Slide 2 */}
                  <SwiperSlide>
                    <div className="project-box">
                      <div className="image">
                        <img className="mask" src="/assets/images/common/project_2.png" alt="" />
                        
                      </div>
                      <div className="content">
                        <span className="boder" />
                        <div className="content-inner">
                          <h5 className="heading" style={{ color: "#fff" }}>
                            <Link href="/project-list">Meta Warriors</Link>
                          </h5>
                          <p className="desc" style={{ color: "#ddd" }}>
                            Enter a futuristic world of warriors and conquer territories in the metaverse battlefield.
                          </p>
                          <ul>
                            <li><p className="text">Total raise:</p><p className="price">150K</p></li>
                            <li><p className="text">Valuation:</p><p className="price">30M</p></li>
                            <li><p className="text">Base allo:</p><p className="price">$500</p></li>
                          </ul>
                        </div>
                      </div>
                      <Link href="/project-list" className="tf-button style2">EXPLORE</Link>
                    </div>
                  </SwiperSlide>

                  {/* Slide 3 */}
                  <SwiperSlide>
                    <div className="project-box">
                      <div className="image">
                        <img className="mask" src="/assets/images/common/project_3.png" alt="" />
                       
                      </div>
                      <div className="content">
                        <span className="boder" />
                        <div className="content-inner">
                          <h5 className="heading" style={{ color: "#fff" }}>
                            <Link href="/project-list">Galactic Race</Link>
                          </h5>
                          <p className="desc" style={{ color: "#ddd" }}>
                            Join high-speed NFT-powered races across galaxies and earn rewards while competing.
                          </p>
                          <ul>
                            <li><p className="text">Total raise:</p><p className="price">80K</p></li>
                            <li><p className="text">Valuation:</p><p className="price">18M</p></li>
                            <li><p className="text">Base allo:</p><p className="price">$300</p></li>
                          </ul>
                        </div>
                      </div>
                      <Link href="/project-list" className="tf-button style2">EXPLORE</Link>
                    </div>
                  </SwiperSlide>
                </Swiper>

                {/* Arrows */}
                <div className="slider-arrow prev_slider-2">
                  <span>&#10094;</span>
                </div>
                <div className="slider-arrow next_slider-2">
                  <span>&#10095;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-arrow {
          width: 40px;
          height: 40px;
          background-color: #6EFF00;
          border-radius: 50%;
          color: black;
          font-size: 20px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }

        .slider-arrow:hover {
          transform: translateY(-50%) scale(1.1);
        }

        .prev_slider-2 {
          left: -40px;
        }

        .next_slider-2 {
          right: -40px;
        }

        @media (max-width: 991px) {
          .slider-arrow {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
