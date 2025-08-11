import Link from "next/link"

export default function Partner1() {
    return (
        <section
            className="tf-section tf_partner"
            style={{
                backgroundImage: "url('/assets/images/db-labz-01.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                            <h2 className="title">Our Partners</h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="partner-wrapper" data-aos="fade-up" data-aos-duration={800}>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/01.png" alt="Partner 01" />
                            </Link>
                            <Link href="/home-02" className="image">
                                <img className="active" src="/assets/images/partner/02.png" alt="Partner 02" />
                            </Link>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/03.png" alt="Partner 03" />
                            </Link>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/04.png" alt="Partner 04" />
                            </Link>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/05.png" alt="Partner 05" />
                            </Link>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/06.png" alt="Partner 06" />
                            </Link>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/07.png" alt="Partner 07" />
                            </Link>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/08.png" alt="Partner 08" />
                            </Link>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/09.png" alt="Partner 09" />
                            </Link>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/10.png" alt="Partner 10" />
                            </Link>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/11.png" alt="Partner 11" />
                            </Link>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/12.png" alt="Partner 12" />
                            </Link>
                            <Link href="/home-02" className="image style">
                                {/* Empty styled box */}
                            </Link>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/13.png" alt="Partner 13" />
                            </Link>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/14.png" alt="Partner 14" />
                            </Link>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/15.png" alt="Partner 15" />
                            </Link>
                            <Link href="/home-02" className="image">
                                <img src="/assets/images/partner/16.png" alt="Partner 16" />
                            </Link>
                            <Link href="/home-02" className="image style">
                                {/* Empty styled box */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
