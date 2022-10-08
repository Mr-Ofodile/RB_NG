import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../img/core-img/logo.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
<>
  {/* ##### Header Area Start ##### */}
  <header className="header-area">
    <div className="classy-nav-container dark breakpoint-off">
      <div className="container">
        {/* Classy Menu */}
        <nav className="classy-navbar justify-content-between" id="dreamNav">
          {/* Logo */}
          <a className="nav-brand" href="index-2.html">
            <img src={Logo} alt="logo" /> NG CV.
          </a>
          {/* Navbar Toggler */}
          <div className="classy-navbar-toggler">
            <span className="navbarToggler">
              <span />
              <span />
              <span />
            </span>
          </div>
          {/* Menu */}
          <div className="classy-menu">
            {/* close btn */}
            <div className="classycloseIcon">
              <div className="cross-wrap">
                <span className="top" />
                <span className="bottom" />
              </div>
            </div>
            {/* Nav Start */}
            <div className="classynav">
              <ul id="nav">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="templates.html">Templates</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact</a>
                </li>
              </ul>
              {/* Button */}
              <a
                href="#test-popup"
                className="open-popup-link btn login-btn mr-im"
              >
                Log in
              </a>
              <a
                href="#signup-popup"
                className="open-signup-link btn login-btn"
              >
                Signup{" "}
              </a>
            </div>
            {/* Nav End */}
          </div>
        </nav>
      </div>
    </div>
  </header>
  {/* ##### Header Area End ##### */}
  {/* Login popup form  */}
  <div id="test-popup" className="white-popup mfp-hide">
    <div className="top-form-header">
      <h4>Login Form</h4>
    </div>
    <form action="#" method="post" id="main_login_form" noValidate="">
      <div className="row">
        <div className="col-12 col-md-12">
          <div className="group">
            <input type="text" name="name" id="name0" required="" />
            <span className="highlight" />
            <span className="bar" />
            <label>Email</label>
          </div>
        </div>
        <div className="col-12 col-md-12">
          <div className="group">
            <input type="password" name="name" id="name1" required="" />
            <span className="highlight" />
            <span className="bar" />
            <label>Password</label>
          </div>
        </div>
        <div className="col-12 col-sm-5 text-left ">
          <button type="submit" className="btn dream-btn">
            Login
          </button>
        </div>
        <div className="col-12 col-sm-7 text-left">
          <p className="mb-0 mt-10">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </form>
    <div className="other-accounts text-center">
      <p className="w-text">Login with other account</p>
      <div className="footer-social-info">
        <a href="#">
          <i className="fa fa-facebook" aria-hidden="true" />
        </a>
        <a href="#">
          {" "}
          <i className="fa fa-twitter" aria-hidden="true" />
        </a>
        <a href="#">
          <i className="fa fa-google-plus" aria-hidden="true" />
        </a>
        <a href="#">
          <i className="fa fa-instagram" aria-hidden="true" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
  {/* signup popup form so: */}
  <div id="signup-popup" className="white-popup mfp-hide">
    <div className="top-form-header">
      <h4>Signup Form</h4>
    </div>
    <form action="#" method="post" id="main_Signup_form" noValidate="">
      <div className="row">
        <div className="col-12 col-md-12">
          <div className="group">
            <input type="text" name="name" id="name3" required="" />
            <span className="highlight" />
            <span className="bar" />
            <label>Name</label>
          </div>
        </div>
        <div className="col-12 col-md-12">
          <div className="group">
            <input type="text" name="name" id="name4" required="" />
            <span className="highlight" />
            <span className="bar" />
            <label>Email</label>
          </div>
        </div>
        <div className="col-12 col-md-12">
          <div className="group">
            <input type="password" name="name" id="name5" required="" />
            <span className="highlight" />
            <span className="bar" />
            <label>Password</label>
          </div>
        </div>
        <div className="col-12 col-md-12">
          <div className="group">
            <input type="password" name="name" id="name6" required="" />
            <span className="highlight" />
            <span className="bar" />
            <label>Confirm Password</label>
          </div>
        </div>
        <div className="col-12 col-sm-5 text-left ">
          <button type="submit" className="btn dream-btn">
            Login
          </button>
        </div>
        <div className="col-12 col-sm-7 text-left">
          <p className="mb-0 mt-10">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </form>
    <div className="other-accounts text-center">
      <p className="w-text">Login with other account</p>
      <div className="footer-social-info">
        <a href="#">
          <i className="fa fa-facebook" aria-hidden="true" />
        </a>
        <a href="#">
          {" "}
          <i className="fa fa-twitter" aria-hidden="true" />
        </a>
        <a href="#">
          <i className="fa fa-google-plus" aria-hidden="true" />
        </a>
        <a href="#">
          <i className="fa fa-instagram" aria-hidden="true" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
</>

            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
