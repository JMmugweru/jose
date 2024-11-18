import Image from "next/image";
import images from "../../Image";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="my-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-t border-gray-500/50 p-5 px-4">
        <div className="space-y-4">
          <Image
            width={150}
            height={50}
            className="w-20"
            src={images.Logo2}
            alt="logo"
          />
          <p className="text-gray-400 text-base">
            &copy; 2024 All rights reserved.
          </p>
        </div>
        <div className="">
          <h2 className="text-xl font-semibold text-gray-200 uppercase">
            Company
          </h2>
          <div className="flex flex-col gap-2 mt-2">
            <Link
              href="/"
              className="text-gray-400 hover:text-gray-50 font-medium transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-gray-400 hover:text-gray-50 font-medium transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-gray-400 hover:text-gray-50 font-medium transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="text-gray-400 hover:text-gray-50 font-medium transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              href="/"
              className="text-gray-400 hover:text-gray-50 font-medium transition-colors duration-300"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="">
          <h2 className="text-xl font-semibold text-gray-200 uppercase">
            Follow Us
          </h2>
          <div className="flex flex-col gap-2 mt-2">
            <Link
              href="/"
              className="text-gray-400 flex items-center gap-2 hover:text-gray-50 font-medium transition-colors duration-300"
            >
              <span className="text-gray-400">
                <FaSquareFacebook />
              </span>
              Facebook
            </Link>
            <Link
              href="/"
              className="text-gray-400 flex items-center gap-2 hover:text-gray-50 font-med transition-colors duration-300"
            >
              <span className="text-gray-400">
                <FaXTwitter />
              </span>
              Twitter/X
            </Link>
            <Link
              href="/"
              className="text-gray-400 flex items-center gap-2 hover:text-gray-50 font-med transition-colors duration-300"
            >
              <span className="text-gray-400">
                <FaInstagram />
              </span>
              Instagram
            </Link>
            <Link
              href="/"
              className="text-gray-400 flex items-center gap-2 hover:text-gray-50 font-med transition-colors duration-300"
            >
              <span className="text-gray-400">
                <FaLinkedin />
              </span>
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="">
          <h2 className="text-xl font-semibold text-gray-200 uppercase">
            Legal
          </h2>
          <div className="flex flex-col gap-2 mt-2">
            <Link
              href="/"
              className="text-gray-400 hover:text-gray-50 font-medium transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-gray-400 hover:text-gray-50 font-medium transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="text-gray-400 hover:text-gray-50 font-medium transition-colors duration-300"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
