import { useState } from "react";
import logo from "@/assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBagShopping,
  faBars,
  faXmark,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const list = [
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
  const subList = [
    {
      name: "服飾",
    },
    {
      name: "鞋子",
    },
    {
      name: "耳機",
    },
    {
      name: "手錶",
    },
  ];

  const [isListOpen, setisListOpen] = useState(false);
  const [isSubListOpen, setIsSubListOpen] = useState(false);

  function toggleSubList(name) {
    if (name === "所有商品") {
      setIsSubListOpen((prev) => !prev);
    } else {
      setisListOpen((prev) => !prev);
    }
  }
  function closeList() {
    setisListOpen((prev) => !prev);
    setIsSubListOpen((prev) => !prev);
  }

  return (
    <>
      {/* 手機版 */}
      <div className="md:hidden">
        <div className="container relative p-3 mx-auto shadow-sm shadow-mainYellow">
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
              <li onClick={() => setisListOpen((prev) => !prev)}>
                {isListOpen ? (
                  <FontAwesomeIcon icon={faXmark} size="xl" />
                ) : (
                  <FontAwesomeIcon icon={faBars} size="lg" />
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* list */}
        <ul
          className={`absoilate w-full left-0 top-0 overflow-hidden transition-all duration-500 ease-in-out ${
            isListOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          {list.map((item, index) => (
            <li key={index}>
              <div
                className="flex items-center justify-between p-3 border-b hover:text-mainOrange"
                onClick={() => toggleSubList(item.name)}
              >
                <p>{item.name}</p>
                <FontAwesomeIcon
                  icon={isSubListOpen ? faAngleUp : faAngleDown}
                  className={`${item.name === "所有商品" ? "block" : "hidden"}`}
                />
              </div>

              <ul
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  item.name === "所有商品" ? "block" : "hidden"
                } ${isSubListOpen ? "max-h-[300px]" : "max-h-0"}`}
              >
                {subList.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="bg-gray-100 border-b border-gray-300"
                    onClick={closeList}
                  >
                    <p className="px-6 py-3">{subItem.name}</p>
                  </li>
                ))}
              </ul>
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

export default Header;
