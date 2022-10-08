import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillApple
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
    const styleFooter ={
        position:"absolute",
   bottom:"0",
   width:"100%",
   height:"60px",   /* Height of the footer */
   backgroundColor:"#6cf"
    }
  return (
    <div className="footer" >
      <div>
        <div className="footer-content">
          <h3
            style={{
              fontFamily: "Aldine",
              fontSize: "2em"
            }}
          >
            Student Management System
          </h3>
          <p>For all Schools, Colleges.</p>
          <div className="sub">
            <div>
              <b>School</b>
              <p>About</p>
              <p>Blog</p>
            </div>
            <div>
              <b>For Student</b>
              <p>Code of conduct</p>
              <p>Community</p>
            </div>
            <div>
              <b>For Teachers</b>
              <p>Restaurant</p>
              <p>Business</p>
            </div>
            <div>
              <b>For Administration</b>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
            </div>
            <div>
              <b>Social links</b>
              <div>
                <AiFillFacebook />
                <AiFillTwitterCircle />
                <AiFillInstagram />
              </div>
              <div>
                <AiFillApple />
                <FaGooglePlay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;