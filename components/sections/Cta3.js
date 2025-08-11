
import Link from "next/link"

export default function Cta3() {
    return (
        <>

            <section style={{backgroundImage: "url('/assets/images/common/space2.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}} className="tf-section tf_CTA">
                <div className="container relative">
                    <div className="overlay" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tf-title left mt58" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                    Launch on Risebot
                                </h2>
                                <p className="sub">Full support in project incubation</p>
                                <div className="wrap-btn">
                                    <Link href="/submit-IGO-on-chain" className="tf-button style3">
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image_cta" data-aos="fade-left" data-aos-duration={1200}>
                                <img className="move4" src="/assets/images/common/db-datblock-character.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
