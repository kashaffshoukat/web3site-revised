import Link from "next/link"

export default function Cta21() {
  return (
    <section
      className="tf-section partner_CTA"
      style={{
        backgroundImage: "url('/assets/images/common/space2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* ✅ Dark overlay */}
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(11, 1, 1, 0.6)",
          zIndex: 1,
        }}
      ></div>

      {/* ✅ Actual content */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className="tf-title mb0 left" data-aos="fade-up" data-aos-duration={800}>
              <h2 className="title mb8 text-white">
                The Easiest way of Investing in Blockchain Games, NFTs and Metaverses
              </h2>
              <p className="sub text-white">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <div className="wrap-btn">
                <Link href="/submit-IGO-on-chain" className="tf-button style2">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="image position-relative">
              <img className="img_main" src="/assets/images/common/img_partner.png" alt="" />
              <img className="icon icon_1" src="/assets/images/common/icon_partner_1.png" alt="" />
              <img className="icon icon_2" src="/assets/images/common/icon_partner_2.png" alt="" />
              <img className="icon icon_3" src="/assets/images/common/icon_partner_3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
