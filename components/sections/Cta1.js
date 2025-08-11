"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cta1() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section
            className="tf-section tf_CTA relative"
            style={{
                backgroundImage: "url('/assets/images/common/space2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* ✅ Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.6)",
                    zIndex: 1,
                }}
            />

            {/* ✅ Main Content */}
            <div className="container relative" style={{ zIndex: 2 }}>
                <div className="row items-center">
                    {/* LEFT SIDE */}
                    <div className="col-md-6">
                        <div className="tf-title left mt58" data-aos="fade-right">
                            <h2 className="title text-white" style={{ marginTop: "150px" }}>
                                Explore the Metaverse Frontier
                            </h2>
                            <p className="text-white">
                                Launch your decentralized vision into orbit with Risebot.
                            </p>
                            <Link href="/submit-project" className="tf-button style2">
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE - ANIMATED IMAGE */}
                    <div className="col-md-6 flex justify-center" data-aos="fade-left">
                        <img
                            src="/assets/images/common/char.png"
                            alt="Metaverse Character"
                            className="animated-image"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </div>
                </div>
            </div>

            {/* ✅ Animation Styles */}
            <style jsx>{`
                @keyframes moveLeftToRight {
                    0% {
                        transform: translateX(-10px);
                    }
                    50% {
                        transform: translateX(10px);
                    }
                    100% {
                        transform: translateX(-10px);
                    }
                }

                .animated-image {
                    animation: moveLeftToRight 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
