import { useEffect, useState } from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import { Search } from "./Search";

import { useCart } from "../context";
import { DropdownLoggedOut, DropdownLoggedIn } from "./index";
export function Header() {
  const { cartList } = useCart();
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [searchShow, setSearchShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header>
      <nav className="bg-gray-100 border-gray-500 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="book-haven" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Book Haven
            </span>
          </Link>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div>
              {dropdown &&
                (token ? (
                  <DropdownLoggedIn setDropdown={setDropdown} />
                ) : (
                  <DropdownLoggedOut setDropdown={setDropdown} />
                ))}
            </div>
            <span
              className="bi bi-gear-wide-connected cursor-pointer text-xl text-gray-700 dark:text-white mr-5 "
              onClick={() => setDarkMode(!darkMode)}
            ></span>
            <span
              className="bi bi-search cursor-pointer text-xl text-gray-700 dark:text-white mr-5"
              onClick={() => {
                setSearchShow(!searchShow);
              }}
            ></span>

            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-bag-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length > 0 && cartList.length !== undefined
                    ? cartList.length
                    : 0}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropdown(!dropdown)}
              className="bi bi-person-circle cursor-pointer text-xl text-gray-700 dark:text-white mr-2"
            ></span>
            {/* <span className="bi bi-bag-fill cursor-pointer text-xl text-gray-700 dark:text-white mr-5"></span> */}
          </div>
        </div>
      </nav>
      {searchShow && <Search setSearchShow={setSearchShow} />}
    </header>
  );
}
