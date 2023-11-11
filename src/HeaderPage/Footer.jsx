import { NavLink } from "react-router-dom";
import webLogo from "/src/assets/websiteLogo-removebg-preview.png";
const Footer = () => {
  return (
    <footer className=" p-10 bg-black/50 text-base-content py-20">
      <div className="footer max-w-6xl mx-auto text-white">
        <aside>
          <NavLink to="/">
            <img className="w-32" src={webLogo} alt="" />
          </NavLink>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Customar Review</a>
          <a className="link link-hover">Order</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Contact Us</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
