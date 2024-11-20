import React from "react";
function Footer() {
  return (
    <div>
      <div className="ml-20 mt-20 md:ml-56 md:flex">
        <div className="mb-10 md:ml-32 md:mr-28  text-black md:text-slate-400">
          Product
          <ul className="hidden md:block md:text-black md:mt-10">
            <li>Websites</li>
            <li>Online Stores</li>
            <li>Photo Studio</li>
            <li>Features</li>
            <li>Themes</li>
            <li>Pricing</li>
            <li>App Center</li>
            <li>Mobile Apps</li>
          </ul>
        </div>

        <div className="mb-10 md:mr-28 text-black md:text-slate-400">
          Resources
          <ul className="hidden md:block md:text-black md:mt-10">
            <li>Blog</li>
            <li>Success Stories</li>
            <li>Developer Docs</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div className="mb-10 md:mr-28 text-black md:text-slate-400">
          Support
          <ul className="hidden md:block md:text-black md:mt-10">
            <li>Support Center</li>
            <li>Community</li>
          </ul>
        </div>
        <div className="mb-10 md:mr-28  text-black md:text-slate-400">
          Company
          <ul className="hidden md:block md:text-black md:mt-10">
            <li></li>About
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Additional California </li>
            <li>Privacy Disclosure</li>
          </ul>
        </div>
      </div>
      <div className="text-slate-300 text-center mb-5">@ 2024 Square.Inc</div>
    </div>
  );
}
export default Footer;
