import Chart1 from "../elements/Chart1"
import CounterUp from "../elements/CounterUp"

export default function Token1() {
  return (
    <>
      <section
        className="tf-section tf-token"
        style={{
          backgroundImage: "url('/assets/images/common/space2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {/* Overlay with solid #131A27 color */}
        <div
          className="overlay"
          style={{
            backgroundColor: "#020915ff",
            opacity: 0.65,
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                <h2 className="title mt-6 mb-6" style={{marginTop:'100px'}}>Statistics token</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="counter_wrapper">
                  {/* Counter 1 */}
                  <div className="box">
                    <div className="image">
                      <img src="/assets/images/common/counter_1.png" alt="" />
                    </div>
                    <div className="content">
                      <p className="desc">Funded Projects</p>
                      <div className="box-couter counter">
                        <div className="number-content">
                          <span className="count-number">
                            <CounterUp count={359} time={1} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Counter 2 */}
                  <div className="box">
                    <div className="image">
                      <img src="/assets/images/common/counter_2.png" alt="" />
                    </div>
                    <div className="content">
                      <p className="desc">Unique Participants</p>
                      <div className="box-couter counter">
                        <div className="number-content">
                          <span className="count-number">
                            <CounterUp count={742} time={1} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Counter 3 */}
                  <div className="box">
                    <div className="image">
                      <img src="/assets/images/common/counter_3.png" alt="" />
                    </div>
                    <div className="content">
                      <p className="desc">Raised Capital</p>
                      <div className="box-couter counter">
                        <div className="number-content">
                          <span>$</span>
                          <span className="count-number">
                            <CounterUp count={17} time={1} />
                          </span>
                          <span>M</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Counter 4 */}
                  <div className="box">
                    <div className="image">
                      <img src="/assets/images/common/counter_4.png" alt="" />
                    </div>
                    <div className="content">
                      <p className="desc">Initial Market Cap</p>
                      <div className="box-couter counter">
                        <div className="number-content">
                          <span>$</span>
                          <span className="count-number">
                            <CounterUp count={32} time={1} />
                          </span>
                          <span>M</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart Section */}
                <div className="char_wrapper">
                  <ul className="describe_chart">
                    {[
                      ["Team", "7.5%", "color_1"],
                      ["Staking", "9.5%", "color_2"],
                      ["Advisors", "10.0%", "color_3"],
                      ["Liquidity", "12.0%", "color_4"],
                      ["Ecosystem", "16.33%", "color_5"],
                      ["Marketing", "16.33%", "color_6"],
                      ["Private Sale", "30.0%", "color_7"],
                    ].map(([name, percent, color], index) => (
                      <li key={index}>
                        <img src={`/assets/images/chart/${color}.png`} alt="" />
                        <div className="desc">
                          <p className="name">{name}</p>
                          <p className="number">{percent}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="chart_inner" data-aos="fade-up" data-aos-duration={800}>
                    <div className="content_inner">
                      <img src="/assets/images/chart/subtract.png" alt="" />
                      <p>Statistics token</p>
                    </div>
                    <Chart1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
