import React from 'react';
import F1 from '../img/icons/f1.png';
import F2 from '../img/icons/f2.png';
import F3 from '../img/icons/f3.png';
import F4 from '../img/icons/f4.png';
import F5 from '../img/icons/f5.png';
import F6 from '../img/icons/f6.png';
import Demo1 from '../img/demos/demo-1.png';
import Demo2 from '../img/demos/demo-2.png';
import Demo3 from '../img/demos/demo-3.png';

const Templates = () => {
    return (
        <div>
<>
  {/* ##### Welcome Area Start ##### */}
  <div className="breadcumb-area clearfix">
    {/* breadcumb content */}
    <div className="breadcumb-content">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <nav aria-label="breadcrumb" className="breadcumb--con text-center">
              <h2 className="w-text title wow fadeInUp" data-wow-delay="0.2s">
                Our Templates
              </h2>
              <ol
                className="breadcrumb justify-content-center wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Our Templates
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ##### Welcome Area End ##### */}
  <section className="demo section-padding-100-0">
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
</>

        </div>
    );
};


export default Templates;