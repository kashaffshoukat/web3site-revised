'use client';
import Link from "next/link";

export default function Project4() {
    return (
        <section
            className="tf-section project_4"
            style={{
                backgroundImage: "url('/assets/images/db-labz-01.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-9">
                        <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                            <h2 className="title">
                                Discover the Next-Gen Projects
                            </h2>
                            <p className="sub">
                                Empowering decentralized innovation through blockchain technology.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 d-flex align-items-center justify-content-end">
                        <Link
  href="/project-list"
  className="tf-button style2"
>
  View All
</Link>

                    </div>
                </div>

                <div className="row mt-40">
                    {/* Project 1 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="project-box" data-aos="fade-up" data-aos-duration={800}>
                            <div className="image">
                                <img src="/assets/images/common/project_15.png" alt="Project 1" />
                            </div>
                            <div className="content">
                                <h5 className="title">Codyfight</h5>
                                <p className="text">
                                    Strategic battle game utilizing AI bots and blockchain for asset ownership.
                                </p>
                                <ul className="meta">
                                    <li><span>Price:</span> $0.4</li>
                                    <li><span>Total sales:</span> $4720</li>
                                </ul>
                               <Link
  href="/project-list"
  className="tf-button style2" style={{marginBottom:'35px'}}
>
  View All
</Link>

                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="project-box" data-aos="fade-up" data-aos-duration={900}>
                            <div className="image">
                                <img src="/assets/images/common/project_15.png" alt="Project 2" />
                            </div>
                            <div className="content">
                                <h5 className="title">MetaWars</h5>
                                <p className="text">
                                    An immersive interstellar conquest game with NFT-based fleet upgrades.
                                </p>
                                <ul className="meta">
                                    <li><span>Price:</span> $0.7</li>
                                    <li><span>Total sales:</span> $8,900</li>
                                </ul>
                                <Link
  href="/project-list"
  className="tf-button style2 mb-6" style={{marginBottom:'35px'}}
>
  View All
</Link>

                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="project-box" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="image">
                                <img src="/assets/images/common/project_15.png" alt="Project 3" />
                            </div>
                            <div className="content">
                                <h5 className="title">ChainArena</h5>
                                <p className="text">
                                    Arena-style combat game featuring token rewards and staking mechanics.
                                </p>
                                <ul className="meta">
                                    <li><span>Price:</span> $0.55</li>
                                    <li><span>Total sales:</span> $6,250</li>
                                </ul>
                                <Link
  href="/project-list"
className="tf-button style2" style={{marginBottom:'35px'}}>
  View All
</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
