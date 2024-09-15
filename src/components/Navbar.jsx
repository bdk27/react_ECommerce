import { useState } from "react";
import logo from "@/assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBagShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const icons = [
    {
      name: faUser,
    },
    {
      name: faBagShopping,
    },
    {
      name: faBars,
    },
  ];
  const subList = [
    {
      name: "首頁",
    },
    {
      name: "所有商品",
    },
    {
      name: "關於",
    },
    {
      name: "聯絡我們",
    },
  ];

  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {/* 手機版 */}
      <div className="md:hidden">
        <div className="container relative p-3 mx-auto shadow-sm">
          <div className="flex items-center justify-between">
            {/* logo */}
            <div className="flex items-center justify-center">
              <img src={logo} alt="logo" className="w-[30px]" />
              <h1 className="ml-1 text-xl font-bold">
                <span className="text-mainOrange">T</span>SHOP
              </h1>
            </div>
            {/* icons */}
            <ul className="flex items-center justify-center gap-5">
              <li>
                <FontAwesomeIcon icon={faUser} size="lg" />
              </li>
              <li>
                <FontAwesomeIcon icon={faBagShopping} size="lg" />
              </li>
              <li onClick={() => setIsClicked((prev) => !prev)}>
                {isClicked ? (
                  <FontAwesomeIcon icon={faXmark} size="xl" />
                ) : (
                  <FontAwesomeIcon icon={faBars} size="lg" />
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* subItem */}
        <ul
          className={`absoilate w-full left-0 top-0 z-10 divide-y ${
            isClicked ? "block" : "hidden"
          }`}
        >
          {subList.map((item, index) => (
            <li key={index} className="p-3">
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* 電腦版 */}
      <div className="hidden md:block">
        <ul>
          <li>Home</li>
          <li>Collection</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
