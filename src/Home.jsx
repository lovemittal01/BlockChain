import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <>
      {/* Background */}

      <div className="bg">
        {/* Landing */}

        <div className="landing">
          <div className="fran">
            <div className="pk">
              <p className="pk-top">PK194-ABI</p>
              <p className="pk-top">San Francisco</p>
              <div className="pk-bottom">
                <img
                  src="/images/uintyimg.png"
                  alt="PK194-ABI San Francisco"
                  srcset=""
                />
              </div>
            </div>
          </div>

          <div className="slide">
            <div className="bitcoin">
              <div className="box">
                <div className="merlab">
                  MERKLABS BLOCKCHAIN DEVELOPMENT AND SECURITY SOLUTIONS
                </div>
                <div className="explore">
                  <img
                    src="/images/exporebtn.svg"
                    className="st"
                    alt="explore"
                    srcset=""
                  />
                </div>
              </div>
              <div className="bit">
                <img
                  src="/images/btcimg.png"
                  className="st"
                  alt="Bitcoin"
                  srcset=""
                />
                <img
                  src="/images/headbg.png"
                  className="nd"
                  alt="Bitcoin BG"
                  srcset=""
                />
              </div>
            </div>
            <div className="social">
              <img src="/images/fb.svg" alt="Facebook" className="im" />
              <img src="/images/ig.svg" alt="Instagram" className="im" />
              <img src="/images/twittter.svg" alt="Twitter" className="im" />
              <img src="/images/line.svg" alt="Line" className="" />
            </div>
          </div>

          <div className="imgs">
            <img
              src="/images/headbottomimg.png"
              className="imgs-top"
              alt="headbottom"
              srcset=""
            />
            <img
              src="/images/partner.svg"
              className="imgs-mid"
              alt="partners"
              srcset=""
            />
            <img
              src="/images/dots.png"
              className="imgs-bot"
              alt="dots"
              srcset=""
            />
          </div>
        </div>

        {/* Provide */}

        <div className="provide">
          <div className="invest">
            <div className="top">
              We provide The Best To Protect Your Users And Their Investments
            </div>
            <div className="bottom">
              Merklabs is a reputed name in the field of blockchain technology
              encompassing all the segments of this revolutionary field.
              Pioneering the essence of blockchain security and audits,
              <br /> we secure your present and future through the parameters of
              technology.
            </div>
          </div>
          <div className="discover">
            <img src="/images/introimg.png" alt="intro img" srcset="" />
            <div className="intro">
              <div className="days">
                <div className="num">100+</div>
                <div className="sub">blockchain companies protected</div>
              </div>
              <div className="days">
                <div className="num">200+</div>
                <div className="sub">issues discovered</div>
              </div>
              <div className="days">
                <div className="num">1000+</div>
                <div className="sub">analysis available per month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Defi */}

        <div className="defi">
          <div className="defi-left">
            <div className="defi-left-top">
              <img src="/images/c1.png" alt="C1" srcset="" />
            </div>
            <div className="defi-left-mid">
              <img src="/images/neon1.png" alt="neon1" srcset="" />
            </div>
            <div className="defi-left-bot">
              <div className="defi-left-btop">DAPPS</div>
              <div className="defi-left-bmid">Technology made easier</div>
              <div className="defi-left-bbot">
                Decentralized applications have found a<br /> huge user base
                right in the initial stage , and
                <br /> therefore we as a team have gained
                <br />
                extensive expertise into the creation of
                <br /> dapps.
              </div>
            </div>
          </div>
          <div className="defi-right">
            <div className="defi-right-top">
              <div className="defi-right-btop">DEFI</div>
              <div className="defi-right-bmid">Scale the world of DeFi</div>
              <div className="defi-right-bbot">
                Being the veterans in the blockchain industry, we understand the
                hype of decentralized finance and the contemporary optimizations
                in the financial sector and hence taking the grasp of the moment
                , we have developed exceptional projects in the world of DeFi.
              </div>
            </div>
            <div className="defi-right-mid">
              <img src="/images/c2.png" alt="C2" srcset="" />
            </div>
          </div>
        </div>

        {/* Audit */}

        <div className="audit">
          <div className="audit-left">
            <img src="/images/c3.png" alt="neon 2" srcset="" />
          </div>
          <div className="audit-right">
            <div className="audit-top">AUDIT</div>
            <div className="audit-mid">Stay secure and safe</div>
            <div className="audit-bot">
              Above all that matters is a secure and safe smart contract that is
              free from any vulnerability and does not hamper the investment of
              the various people who have trusted you. We also provide auditing
              services , so that you can stay assured of the security as we are
              quick in auditing and exposing the bugs of your smart contract.
            </div>
          </div>
        </div>

        {/* Bottom Image */}

        <div className="bottom-img">
          <img src="/images/neon2.png" alt="neon 2" srcset="" />
        </div>
      </div>
    </>
  );
};

export default Home;
