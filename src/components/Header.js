import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Hr from "./Hr";

import { SITE, LOGO_IMAGE } from "../../config";

const Header = ({ activeNav }) => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // ドロップダウンメニューが表示される領域（グループ）に対してのイベントハンドラ
  const handleDropdownGroupMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownGroupMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  // メニュー以外の領域に対してのイベントハンドラ
  const handleOutsideMouseLeave = (e) => {
    if (!dropdownRef.current?.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const menuBtn = document.querySelector(".hamburger-menu");
    const menuIcon = document.querySelector(".menu-icon");
    const menuItems = document.querySelector("#menu-items");

    const toggleMenu = () => {
      const menuExpanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuIcon?.classList.toggle("is-active");
      menuBtn.setAttribute("aria-expanded", menuExpanded ? "false" : "true");
      menuBtn.setAttribute(
        "aria-label",
        menuExpanded ? "Open Menu" : "Close Menu"
      );
      menuItems?.classList.toggle("hidden");
    };

    menuBtn.addEventListener("click", toggleMenu);
    document.addEventListener("mouseleave", handleOutsideMouseLeave);

    return () => {
      menuBtn.removeEventListener("click", toggleMenu);
      document.removeEventListener("mouseleave", handleOutsideMouseLeave);
    };
  }, []);
  return (
    <header>
      <a
        id="skip-to-content"
        href="#main-content"
        className="absolute -top-full left-16 z-50 bg-indigo-500 py-2 px-3 text-slate-300 transition-all focus:top-4"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between sm:flex-row;">
        <div className="top-nav-wrap relative flex w-full items-start justify-between p-4 sm:items-center sm:py-8">
          <Link
            href="/"
            className="logo absolute py-1 text-xl font-semibold sm:static sm:text-2xl"
          >
            {LOGO_IMAGE.enable ? (
              <Image
                src={LOGO_IMAGE.svg ? logoSVG : logoPNG}
                alt="AstroPaper Logo"
                width={LOGO_IMAGE.width}
                height={LOGO_IMAGE.height}
              />
            ) : (
              SITE.title
            )}
          </Link>
          <nav id="nav-menu">
            <button
              className="hamburger-menu focus-outline"
              aria-label="Open Menu"
              aria-expanded="false"
              aria-controls="menu-items"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="menu-icon"
              >
                <line x1="7" y1="12" x2="21" y2="12" className="line"></line>
                <line x1="3" y1="6" x2="21" y2="6" className="line"></line>
                <line x1="12" y1="18" x2="21" y2="18" className="line"></line>
                <line x1="18" y1="6" x2="6" y2="18" className="close"></line>
                <line x1="6" y1="6" x2="18" y2="18" className="close"></line>
              </svg>
            </button>
            <ul id="menu-items" className="hidden sm:flex">
              <li
                className="flex items-center justify-center"
                onMouseEnter={handleDropdownGroupMouseEnter}
                onMouseLeave={handleDropdownGroupMouseLeave}
              >
                <div className="relative group">
                  <button
                    className={
                      activeNav === "blog"
                        ? "underline decoration-wavy decoration-2 underline-offset-4 w-full px-4 py-3 text-center font-medium hover:text-skin-accent sm:my-0 sm:px-2 sm:py-1"
                        : "w-full px-4 py-3 text-center font-medium hover:text-skin-accent sm:my-0 sm:px-2 sm:py-1"
                    }
                    // onClick={() => setIsDropdownOpen((prevState) => !prevState)}
                    onMouseOver={() => setIsDropdownOpen(true)}
                  >
                    Blog <span className="text-sm">▾</span>
                  </button>
                  <ul
                    className={
                      isDropdownOpen
                        ? "absolute left-0 z-10 w-40 bg-[#231F20] mt-0 py-2 rounded-lg shadow-lg group-hover:block"
                        : "hidden"
                    }
                  >
                    <li>
                      <Link href="/blog">
                        <span className="block px-4 py-2 text-sm text-[#F38BA3] hover:bg-[#2D2929]">
                          All Blogs
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/posts">
                        <span className="block px-4 py-2 text-sm text-[#F38BA3] hover:bg-[#2D2929]">
                          Posts
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/tags">
                        <span className="block px-4 py-2 text-sm text-[#F38BA3] hover:bg-[#2D2929]">
                          Tags
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <Link
                  href="/blog"
                  className={
                    activeNav === "blog"
                      ? "underline decoration-wavy decoration-2 underline-offset-4 w-full px-4 py-3 text-center font-medium hover:text-skin-accent sm:my-0 sm:px-2 sm:py-1"
                      : "w-full px-4 py-3 text-center font-medium hover:text-skin-accent sm:my-0 sm:px-2 sm:py-1"
                  }
                >
                  Blog
                </Link> */}
              </li>
              <li className="flex items-center justify-center">
                <Link
                  href="/pricing"
                  className={
                    activeNav === "price"
                      ? "underline decoration-wavy decoration-2 underline-offset-4 w-full px-4 py-3 text-center font-medium hover:text-skin-accent sm:my-0 sm:px-2 sm:py-1"
                      : "w-full px-4 py-3 text-center font-medium hover:text-skin-accent sm:my-0 sm:px-2 sm:py-1"
                  }
                >
                  レッスン料金
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link
                  href="/about"
                  className={
                    activeNav === "about"
                      ? "underline decoration-wavy decoration-2 underline-offset-4 w-full px-4 py-3 text-center font-medium hover:text-skin-accent sm:my-0 sm:px-2 sm:py-1"
                      : "w-full px-4 py-3 text-center font-medium hover:text-skin-accent sm:my-0 sm:px-2 sm:py-1"
                  }
                >
                  About
                </Link>
              </li>

              <li>
                {/* <LinkButton
                  href="/search"
                  classNameName={`focus-outline p-3 sm:p-1 ${
                    activeNav === "search" ? "active" : ""
                  }`}
                  ariaLabel="search"
                  title="Search"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="scale-125 sm:scale-100"
                  >
                    <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
                  </svg>
                </LinkButton> */}
              </li>
              {/* <li>
                {SITE.lightAndDarkMode && (
                  <button
                    id="theme-btn"
                    className="focus-outline"
                    title="Toggles light & dark"
                    aria-label="auto"
                    aria-live="polite"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" id="moon-svg">
                      <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" id="sun-svg">
                      <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
                    </svg>
                  </button>
                )}
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
      <Hr />
    </header>
  );
};

export default Header;
