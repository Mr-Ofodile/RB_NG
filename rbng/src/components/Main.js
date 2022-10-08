import React from 'react';
import PropTypes from 'prop-types';
import Dollar from '../img/svg/img-dollar.svg'
import Banner2 from '../img/core-img/banner2.png'
import D1 from '../img/icons/d1.png'
import D2 from '../img/icons/d2.png'
import D3 from '../img/icons/d3.png'
import Check from '../img/icons/check.png'
import Cvcore from '../img/core-img/cv.png'
import Demo1 from '../img/demos/demo-1.png';
import Demo2 from '../img/demos/demo-2.png';
import Demo3 from '../img/demos/demo-3.png';
import Corecustom from '../img/core-img/custom.png';
import F1 from '../img/icons/f1.png';
import F2 from '../img/icons/f2.png';
import F3 from '../img/icons/f3.png';
import F4 from '../img/icons/f4.png';
import F5 from '../img/icons/f5.png';
import F6 from '../img/icons/f6.png';
import Test1 from '../img/test-img/1.jpg';
import Test2 from '../img/test-img/2.jpg';
import Test3 from '../img/test-img/3.jpg';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
<>
  {/* ##### Welcome Area Start ##### */}
  <section className="welcome_area demo2 flex align-items-center">
    <div className="container">
      <div className="row align-items-center">
        {/* Welcome Content */}
        <div className="col-12 col-lg-6 col-md-12">
          <div className="welcome-content v2">
            <div className="promo-section">
              <div className="integration-link light">
                <span className="integration-icon">
                  <img
                    src={Dollar}
                    width={24}
                    height={24}
                    alt=""
                  />
                </span>
                <span className="integration-text">
                  Discover The Easiest ways to Build Your CV!
                </span>
              </div>
            </div>
            <h1 className="wow fadeInUp" data-wow-delay="0.2s">
              Online CV Builder With Creative Templates.
            </h1>
            <p className="wow fadeInUp" data-wow-delay="0.3s">
              Our Perfect resume builder takes the hassle out of resume writing.
              Choose from several templates and follow easy prompts to create
              the perfect job-ready resume.
            </p>
            <div className="dream-btn-group wow fadeInUp" data-wow-delay="0.4s">
              <a href="#" className="btn dream-btn green-btn mr-3">
                Choose Template
              </a>
              <a href="#" className="btn dream-btn green-btn">
                {" "}
                contact us
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-12">
          <div className="banner-box">
            <img src={Banner2} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ##### Welcome Area End ##### */}
  <div className="clearfix" />
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
  {/* ##### About Us Area Start ##### */}
  <section className="about-us-area section-padding-100 clearfix">
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
  <div className="clearfix" />
  {/* ##### Area start ##### */}
  <section className="container section-padding-0-100">
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
  {/* <section className="pricing section-padding-0-70">
    <div className="container">
      <div className="row">
        {/* Single Table 
        <div className="col-lg-4 col-md-6">
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
            <h4>Our Pricing</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
              sit amet convallis nunc scelerisque in.
            </p>
            <div className="free-7">
              <span>Lets Build CV</span>
              <p> with 7days of Free Trial</p>
            </div>
            <div className="terms mt-30">
              <a href="#">Terms &amp; Conditions </a>
              <p>subject to change with perior notice</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div
            className="single_price_table_content wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="price_table_text">
              <h1>$9.99</h1>
              <h5 className="gradient-text cyan">/ month</h5>
            </div>
            <div className="table_text_details">
              <h3>Monthly Pack</h3>
              <p>
                You will be billed per month, and get unlimited access to all
                resume Templates and new added ones
              </p>
              <a href="contact-us.html" className="button mt-s">
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div
            className="single_price_table_content wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="price_table_text">
              <h1>$7.99</h1>
              <h5 className="gradient-text cyan">/ month</h5>
            </div>
            <div className="table_text_details">
              <h3>
                Yearly Pack <span> save 20%</span>
              </h3>
              <p>
                You will be billed per Year, and get unlimited access to all
                resume Templates and new added ones
              </p>
              <a href="contact-us.html" className="button mt-s">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  <section className="demo section-padding-100 ring-bg">
    <div className="container">
      <div className="section-heading text-center">
        <div className="dream-dots justify-content-center">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <h2 className="bold">Our Creative Templates</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="demo-item">
            <a href="template-preview.html">
              <img
                src={Demo1}
                alt="demo"
                className="img-responsive"
              />
            </a>
            <div className="preview-btn-wrapper text-center">
              <a href="template-preview.html" className="preview-demo">
                See template <i className="fa fa-long-arrow-right" />
              </a>
              <a href="template-edit.html" className="preview-demo v2">
                Use template <i className="fa fa-long-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="demo-item">
            <a href="template-preview.html">
              <img
                src={Demo2}
                alt="demo"
                className="img-responsive"
              />
            </a>
            <div className="preview-btn-wrapper text-center">
              <a href="template-preview.html" className="preview-demo">
                See template <i className="fa fa-long-arrow-right" />
              </a>
              <a href="template-edit.html" className="preview-demo v2">
                Use template <i className="fa fa-long-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="demo-item">
            <a href="template-preview.html">
              <img
                src={Demo3}
                alt="demo"
                className="img-responsive"
              />
            </a>
            <div className="preview-btn-wrapper text-center">
              <a href="template-preview.html" className="preview-demo">
                See template <i className="fa fa-long-arrow-right" />
              </a>
              <a href="template-edit.html" className="preview-demo v2">
                Use template <i className="fa fa-long-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ##### Our features Area Start ##### */}
  <section className="our_services_area section-padding-100-70" id="services">
    <div className="container">
      <div className="section-heading text-center">
        {/* Dream Dots */}
        <div
          className="dream-dots justify-content-center wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <h2 className="wow fadeInUp" data-wow-delay="0.3s">
          Our Main Features
        </h2>
        <p className="wow fadeInUp" data-wow-delay="0.4s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-4">
          {/* Content */}
          <div
            className="service_single_content text-center mb-100 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            {/* Icon */}
            <div className="service_icon">
              <img src={F1} alt="" />
            </div>
            <h6>Proven CV Templates to increase Hiring Chance</h6>
            <p>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
              quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
              elit.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          {/* Content */}
          <div
            className="service_single_content text-center mb-100 wow wow fadeInUp"
            data-wow-delay="0.3s"
          >
            {/* Icon */}
            <div className="service_icon">
              <img src={F2} alt="" />
            </div>
            <h6>Creative, Modern and Clean Templates Design</h6>
            <p>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
              quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
              elit.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          {/* Content */}
          <div
            className="service_single_content text-center mb-100 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            {/* Icon */}
            <div className="service_icon">
              <img src={F3} alt="" />
            </div>
            <h6>Easy and Intuitive Online CV and Resume Builder </h6>
            <p>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
              quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
              elit.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          {/* Content */}
          <div
            className="service_single_content text-center mb-100 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            {/* Icon */}
            <div className="service_icon">
              <img src={F4} alt="" />
            </div>
            <h6>Free to use. Developed by hiring professionals.</h6>
            <p>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
              quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
              elit.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          {/* Content */}
          <div
            className="service_single_content text-center mb-100 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            {/* Icon */}
            <div className="service_icon">
              <img src={F5} alt="" />
            </div>
            <h6>Recruiter Approved Phrases with Module Notification</h6>
            <p>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
              quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
              elit.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          {/* Content */}
          <div
            className="service_single_content text-center mb-100 wow fadeInUp"
            data-wow-delay="0.7s"
          >
            {/* Icon */}
            <div className="service_icon">
              <img src={F6} alt="" />
            </div>
            <h6>Fast Easy CV and Resume Formatting</h6>
            <p>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
              quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
              elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ##### Our features Area End ##### */}
  {/* ##### Testimonial Area Start ##### */}
  <section className="clients_testimonials_area section-padding-0-0">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-heading text-center">
            <div className="dream-dots justify-content-center">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <h2>Your Success, Our Inspiration</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="cotainer-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-xs-10 offset-xs-1">
          <div className="client_slides owl-carousel">
            {/* Single Testimonial */}
            <div className="single-testimonial text-center">
              <div className="icon_wrapper">
                <i className="fa fa-quote-right" />
              </div>
              {/* Testimonial Image */}
              <div className="testimonial_image">
                <img src={Test1} alt="" />
              </div>
              {/* Testimonial Feedback Text */}
              <div className="testimonial-description">
                <div className="testimonial_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error nostrum adipisci porro quisquam. Rem, earum, tenetur?
                    Architecto et, earum repudiandae.
                  </p>
                </div>
                {/* Admin Text */}
                <div className="admin_text">
                  <h5>Sunny Khan</h5>
                  <p>One of our Clients</p>
                </div>
              </div>
            </div>
            {/* Single Testimonial */}
            <div className="single-testimonial text-center">
              <div className="icon_wrapper">
                <i className="fa fa-quote-right" />
              </div>
              {/* Testimonial Image */}
              <div className="testimonial_image">
                <img src={Test2} alt="" />
              </div>
              {/* Testimonial Feedback Text  */}
              <div className="testimonial-description">
                <div className="testimonial_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error nostrum adipisci porro quisquam. Rem, earum, tenetur?
                    Architecto et, earum repudiandae.
                  </p>
                </div>
                {/* Admin Text */}
                <div className="admin_text">
                  <h5>Ajoy Das</h5>
                  <p>One of our Clients</p>
                </div>
              </div>
            </div>
            {/* Single Testimonial */}
            <div className="single-testimonial text-center">
              <div className="icon_wrapper">
                <i className="fa fa-quote-right" />
              </div>
              {/* Testimonial Image */}
              <div className="testimonial_image">
                <img src={Test3} alt="" />
              </div>
              {/* Testimonial Feedback Text  */}
              <div className="testimonial-description">
                <div className="testimonial_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error nostrum adipisci porro quisquam. Rem, earum, tenetur?
                    Architecto et, earum repudiandae.
                  </p>
                </div>
                {/* Admin Text */}
                <div className="admin_text">
                  <h5>Jebin Khan</h5>
                  <p>One of our Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ##### Testimonial Area End ##### */}
</>

            </div>
        );
    }
}

Main.propTypes = {};

export default Main;
