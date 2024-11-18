"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import images from "../../Image";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [atTop, setAtTop] = useState(true);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
  };

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.pageYOffset <= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed z-50 w-full px-8 transition-all duration-1000 mt-4 inset-x-0 mx-auto ease-in-out transform ${
          atTop
            ? "max-w-6xl"
            : "bg-gray-500/20 bg-opacity-70 backdrop-blur-xl container rounded-full shadow-lg shadow-black/50"
        }`}
      >
        <div className="flex w-full p-2 mx-auto items-center justify-between md:flex-row relative">
          <Link href="/">
            <Image
              width={100}
              height={50}
              className="w-12 sm:w-16"
              src={images.Logo2}
              alt="logo"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/"
              className="text-base font-semibold group uppercase text-white px-2 py-1.5 rounded-md hover:text-[#c7cbcc] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-base font-semibold group uppercase text-white px-2 py-1.5 rounded-md hover:text-[#c7cbcc] transition-colors duration-300"
            >
              Shop
            </Link>
            <Link
              href="/"
              className="text-base font-semibold group uppercase text-white px-2 py-1.5 rounded-md hover:text-[#c7cbcc] transition-colors duration-300"
            >
              Blog
            </Link>
            <DropDown />
            <Link
              href="#"
              onClick={handleLogin}
              className="text-base font-semibold group uppercase text-white px-2 py-1.5 rounded-md hover:text-[#c7cbcc] transition-colors duration-300"
            >
              Login
            </Link>
          </div>
          <div className="space-x-3 hidden lg:flex items-center">
            <Link href="/">
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
            </Link>
            <div className="relative">
              <div
                className="cursor-pointer"
                onClick={() => setSearch(!search)}
              >
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              {search && (
                <div className="absolute top-1/2 -translate-y-1/2 w-64 right-8 bg-transparent">
                  <input
                    type="text"
                    className="w-full p-1.5 border-gray-400/50 border bg-[#1a272b] outline-none shadow-md rounded-3xl shadow-black/50 z-50 px-3 text-gray-200 placeholder:text-gray-300 text-base font-medium"
                    placeholder="Search..."
                  />
                </div>
              )}
            </div>

            <div className="relative">
              <div className="cursor-pointer" onClick={() => setModal(!modal)}>
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                  />
                </svg>
              </div>
              {modal && <Modal />}
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-white text-xl sm:text-3xl border border-gray-400/50 p-1 rounded-md"
            >
              {open ? <IoCloseSharp /> : <RiMenu3Fill />}
            </button>
            {open && <MobileMenu open={open} />}
          </div>
        </div>
      </div>
      {login && <LoginModal handleLogin={handleLogin} />}
    </>
  );
};

const DropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative antialiased">
        <ul className="flex items-center">
          <li
            className="py-2 relative flex items-center space-x-1"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Link
              href="#"
              className="text-base font-semibold group uppercase text-white hover:text-[#c7cbcc] px-2 py-1.5 rounded-md"
              aria-expanded={open}
            >
              Pages
            </Link>

            <button
              className="shrink-0 p-1"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Show submenu for "Flyout Menu"</span>
              <svg
                className="w-3 h-3 fill-[#c7cbcc]"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
              >
                <path d="M10 2.586L11.414 4 6 9.414.586 4 2 2.586l4 4z" />
              </svg>
            </button>
            {open && (
              <div className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-40 bg-[#111e22] border border-gray-400/50 p-2 rounded-md shadow-xl flex flex-col gap-1 shadow-neutral-800/40 transition-transform duration-700">
                <Link
                  href="/"
                  className="text-base font-semibold group uppercase p-1.5 rounded-md transition-colors duration-300 hover:bg-[#1a272b] w-full text-white hover:text-gray-200"
                >
                  About US
                </Link>
                <Link
                  href="/"
                  className="text-base font-semibold group uppercase p-1.5 rounded-md transition-colors duration-300 hover:bg-[#1a272b] w-full text-white hover:text-gray-200"
                >
                  Service
                </Link>
                <Link
                  href="/"
                  className="text-base font-semibold group uppercase p-1.5 rounded-md transition-colors duration-300 hover:bg-[#1a272b] w-full text-white hover:text-gray-200"
                >
                  FAQ's
                </Link>
                <Link
                  href="/"
                  className="text-base font-semibold group uppercase p-1.5 rounded-md transition-colors duration-300 hover:bg-[#1a272b] w-full text-white hover:text-gray-200"
                >
                  Contact
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

const Modal = () => {
  return (
    <div className="absolute z-40 w-48 h-max right-0 top-[30px] shadow-lg shadow-black/50 border border-gray-400/50 p-3 rounded-md text-white flex flex-col gap-1 transition-transform duration-700 bg-[#111e22]">
      <div className="space-y-2">
        <h2 className="text-center text-lg font-semibold">Cart</h2>
        <p className="text-sm text-gray-200">Your cart is currently empty.</p>

        <button className="w-full border-none outline-none bg-[#1a272b] transition-colors duration-300 text-white p-1.5 rounded-md">
          Check Our Courses
        </button>
      </div>
    </div>
  );
};

const MobileMenu = ({ open }) => {
  return (
    <div
      className={`absolute left-0 w-full h-[300px] z-50 bg-[#111e22] border border-gray-400/50 rounded-md shadow-xl flex flex-col gap-1 shadow-neutral-800/50 transition-transform duration-500 ease-in-out p-5
      ${
        open ? "translate-y-0 opacity-100 mt-4" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="p-3 grid grid-cols-2 ">
        <div className="flex flex-col gap-1">
          <Link href="/" className="text-white text-lg font-semibold">
            Home
          </Link>
          <Link href="/" className="text-white text-lg font-semibold">
            Shop
          </Link>
          <Link href="/" className="text-white text-lg font-semibold">
            Blog
          </Link>

          <Link href="/" className="text-white text-lg font-semibold">
            Login
          </Link>
        </div>
        <div className="">
          <DropDown />
        </div>
      </div>
    </div>
  );
};

const LoginModal = ({ handleLogin }) => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const user_auth = async (e) => {
    e.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  };
  return (
    <div className="fixed inset-0 z-50 bg-[#111e22] bg-opacity-50 backdrop-blur-sm flex items-center justify-center px-4 lg:px-8">
      <div className="w-full sm:max-w-md lg:max-w-lg h-[40vh] bg-[#1a272b] border border-gray-400/50 p-5 rounded-md shadow-xl shadow-black/50">
        <button
          onClick={handleLogin}
          className="text-white text-xl sm:text-3xl border border-gray-400/50 p-1 rounded-md"
        >
          <IoCloseSharp />
        </button>
        <h1 className="text-center text-lg font-semibold">{signState}</h1>
        <div className="my-2">
          {signState === "Sign In" ? (
            <p className="text-center my-2 text-gray-300 flex items-center justify-center gap-2">
              Not registered yet?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
                className="text-gray-400 cursor-pointer hover:text-[#fcc26d]"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p className="text-center my-2 text-gray-300 flex items-center justify-center gap-2">
              Already have account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
                className="text-gray-400 cursor-pointer hover:text-[#fcc26d]"
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
        <form className="flex flex-col gap-2">
          {signState === "Sign In" ? (
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border-gray-400/50 border bg-[#1a272b] outline-none shadow rounded-md shadow-black/50 z-50 px-3 text-gray-200 placeholder:text-gray-300 text-base font-medium"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border-gray-400/50 border bg-[#1a272b] outline-none shadow rounded-md shadow-black/50 z-50 px-3 text-gray-200 placeholder:text-gray-300 text-base font-medium"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border-gray-400/50 border bg-[#1a272b] outline-none shadow rounded-md shadow-black/50 z-50 px-3 text-gray-200 placeholder:text-gray-300 text-base font-medium"
              />
              <button
                onClick={user_auth}
                type="submit"
                className="text-black bg-[#fcc26d] hover:bg-[#fcc26d]/80 font-medium rounded text-sm lg:text-base px-5 py-2.5 text-center"
              >
                {signState}
              </button>
            </div>
          ) : (
            <div className="grid gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border-gray-400/50 border bg-[#1a272b] outline-none shadow rounded shadow-black/50 z-50 px-3 text-gray-200 placeholder:text-gray-300 text-base font-medium"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border-gray-400/50 border bg-[#1a272b] outline-none shadow rounded-md shadow-black/50 z-50 px-3 text-gray-200 placeholder:text-gray-300 text-base font-medium"
              />
              <button
                onClick={user_auth}
                type="submit"
                className="text-black bg-[#fcc26d] hover:bg-[#fcc26d]/80 font-medium rounded text-sm lg:text-base px-5 py-2.5 text-center"
              >
                {signState}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Header;
