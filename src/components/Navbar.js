import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
// ---------Responsive-navbar-active-animation-----------
function test() {
  var tabsNewAnim = $("#navbarSupportedContent");
  // var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    top: itemPosNewAnimTop.top + "px",
    left: itemPosNewAnimLeft.left + "px",
    height: activeWidthNewAnimHeight + "px",
    width: activeWidthNewAnimWidth + "px",
  });
  $("#navbarSupportedContent").on("click", "li", function (e) {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
  });
}
$(function () {
  setTimeout(function () {
    test();
  });
});
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  }, 500);
});

$(function () {
  $(".navbar-toggler").on("click", function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () {
      test();
    });
  });
});

// --------------add active class-on another-page move----------
$(function ($) {
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();

  // Account for home page with empty path
  if (path === "") {
    path = "index.html";
  }

  var target = $('#navbarSupportedContent ul li a[to="' + path + '"]');
  // Add active class to target link
  target.parent().addClass("active");
});

// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('to').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <Link className="navbar-brand navbar-logo" to="#">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item active">
              <Link className="nav-link " to="/">
                <i className="fas fa-calculator"></i>Calculator
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/formsdownload">
                <i className="far fa-copy"></i>Forms/Downloads
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/taxrules">
                <i className="far fa-clone"></i>Tax laws and rules
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <i className="fas fa-phone-alt"></i>Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                <i className="fas fa-info"></i>About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
