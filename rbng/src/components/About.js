import React from 'react';
import Check from '../img/icons/check.png';
import Cvcore from '../img/core-img/cv.png';
import Corecustom from '../img/core-img/custom.png';
import D1 from '../img/icons/d1.png';
import D2 from '../img/icons/d2.png';
import D3 from '../img/icons/d3.png';

const About = () => {
    return (
        <div>
<>
  {/* ##### Welcome Area Start ##### */}
  <div
    className="breadcumb-area clearfix dzsparallaxer auto-init"
    data-options='{direction: "normal"}'
  >
    <div
      className="divimage dzsparallaxer--target"
      style={{
        width: "101%",
        height: "130%",
        backgroundImage: "url:(img/bg-img/bg-2.html)"
      }}
    />
    {/* breadcumb content */}
    <div className="breadcumb-content">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <nav aria-label="breadcrumb" className="breadcumb--con text-center">
              <h2 className="w-text title wow fadeInUp" data-wow-delay="0.2s">
                About us
              </h2>
              <ol
                className="breadcrumb justify-content-center wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ##### Welcome Area End ##### */}
  {/* ##### About Us Area Start ##### */}
  <section className="about-us-area section-padding-100-0 clearfix">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6">
          <div className="who-we-contant">
            <div className="dream-dots">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <h4 className="bold">We Deliver The Best</h4>
            <div className="list-wrap align-items-center">
              <div className="row">
                <div className="col-md-12">
                  <div className="side-feature-list-item">
                    <img
                      src={Check}
                      className="check-mark-icon"
                      alt=""
                    />
                    <div className="foot-c-info">
                      Proven CV Templates to increase Hiring Chance
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="side-feature-list-item">
                    <img
                      src={Check}
                      className="check-mark-icon"
                      alt=""
                    />
                    <div className="foot-c-info">
                      Creative and Clean Templates Design
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="side-feature-list-item">
                    <img
                      src={Check}
                      className="check-mark-icon"
                      alt=""
                    />
                    <div className="foot-c-info">
                      Easy and Intuitive Online CV Builder
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="side-feature-list-item">
                    <img
                      src={Check}
                      className="check-mark-icon"
                      alt=""
                    />
                    <div className="foot-c-info">
                      Free to use. Developed by hiring professionals.
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="side-feature-list-item">
                    <img
                      src={Check}
                      className="check-mark-icon"
                      alt=""
                    />
                    <div className="foot-c-info">
                      Fast Easy CV and Resume Formatting
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="side-feature-list-item">
                    <img
                      src={Check}
                      className="check-mark-icon"
                      alt=""
                    />
                    <div className="foot-c-info">
                      Recruiter Approved Phrases.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div
            className="welcome-meter wow fadeInUp mt-s"
            data-wow-delay="0.3s"
          >
            <img src={Cvcore} className="center-block" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ##### About Us Area End ##### */}
  <section className="demo-video feat section-padding-100 bub-left">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="services-block-four">
            <div className="inner-box">
              <div className="icon-img-box">
                <img src={D1} alt="" />
              </div>
              <h3>
                <a href="#">Easy Online Resume Builder</a>
              </h3>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium modi assumenda.
              </div>
            </div>
          </div>
          <div className="services-block-four">
            <div className="inner-box">
              <div className="icon-img-box">
                <img src={D2} alt="" />
              </div>
              <h3>
                <a href="#">Step by Step Expert Tips</a>
              </h3>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit skaj
                gjska consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div className="services-block-four" style={{ marginBottom: 0 }}>
            <div className="inner-box">
              <div className="icon-img-box">
                <img src={D3} alt="" />
              </div>
              <h3>
                <a href="#">Recruiter Approved Phrases</a>
              </h3>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium modi.
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="who-we-contant mt-s">
            <div className="dream-dots">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <h4>Why Choose Our Platform?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
              sit amet convallis nunc scelerisque in.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              eius molestiae facere, natus reprehenderit eaque eum, autem ipsam.
              Magni, error. Tempora odit laborum iure inventore possimus
              laboriosam qui nam. Fugit!
            </p>
            <a className="btn dream-btn mt-30" href="templates.html">
              lets build your cv
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ##### Area start ##### */}
  <section className="container section-padding-100-0">
    <div className="subscribe">
      <div className="row align-items-center relative">
        <img src={Corecustom} alt="" className="custom" />
        <div className="col-lg-5 col-lg-offset-3 col-md-9 col-xs-12">
          <h2 className="bold mb-0">
            Do you Need a Complete Custom CV Template?
          </h2>
        </div>
        <div className="col-lg-3 col-lg-offset-1 col-md-3 col-sm-12 text-center">
          <a href="contact-us.html" className="button mt-s">
            Send a Request
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* ##### Area End ##### */}
</>
        </div>
    );
};


export default About;