import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bgPrimary p-4 ">
      <div className="container mx-auto my-10  ">
        <div className="md:flex justify-between mt-4 mb-10 items-center">
          <div>
            <h1 className="text-4xl font-semibold mb-4">Salehub</h1>
            <p>
              We're available by phone{" "}
              <span className="text-2xl">+123-456-789</span>
            </p>
            <p>info@example.com</p>
            <h3 className="text-2xl font-semibold">
              Monday till Friday 10 to 6 EST
            </h3>
          </div>

          <div className="my-2 xl:-mt-16">
            <h1 className="text-lg font-semibold mb-4">GET MORE RESERVED ON:</h1>
            <div className="flex gap-4 ">
              <a href="/" className="text-lg font-semibold">
                <GrFacebookOption />
              </a>
              <a href="/" className="text-lg font-semibold">
                <BsTwitter />
              </a>
              <a href="/" className="text-lg font-semibold">
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-4 mt-10">
          <div>
            <span className="font-bold mb-3 text-black text-xl">About Us</span>
            <br />
            <a className="link link-hover block mt-2 hover:pl-3 duration-300  ">
              Branding
            </a>

            <a className="link link-hover block mt-2 hover:pl-3 duration-300 ">
              Design
            </a>
            <a className="link link-hover block mt-2 hover:pl-3 duration-300 ">
              Marketing
            </a>
            <a className="link link-hover block mt-2 hover:pl-3 duration-300 ">
              Advertisement
            </a>
          </div>
          <div>
            <span className="font-bold mb-3 text-black text-xl">ORDERS AND RETURNS </span>
            <a className="link link-hover block mt-2 hover:pl-3 duration-300 ">
              About us
            </a>
            <a className="link link-hover block mt-2 hover:pl-3 duration-300 ">
              Contact
            </a>
            <a className="link link-hover block mt-2 hover:pl-3 duration-300 ">
              Jobs
            </a>
            <a className="link link-hover block mt-2 hover:pl-3 duration-300 ">
              Press kit
            </a>
          </div>
          <div>
            <span className="font-bold mb-3 text-black text-xl">MY ACCOUNT</span>
            <a className="link link-hover block mt-2 hover:pl-3 duration-300 ">
              Terms of use
            </a>
            <a className="link link-hover block mt-2 hover:pl-3 duration-300 ">
              Privacy policy
            </a>
            <a className="link link-hover block mt-2 hover:pl-3 duration-300 ">
              Cookie policy
            </a>
          </div>
          <div>
            <span className="font-bold mb-3 text-black text-xl">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="flex">
              <input
                type="text"
                name=""
                placeholder="Email address"
                className="border rounded focus:outline-0 p-2 xl:p-3"
                id=""
              />
              <input
                type="submit"
                value="Sign Me Up"
                className="bg-black text-white px-4 cursor-pointer rounded"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
