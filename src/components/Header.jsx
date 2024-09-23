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
  faMagnifyingGlass,
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
  const icons = [
    {
      name: faMagnifyingGlass,
    },
    {
      name: faUser,
    },
    {
      name: faBagShopping,
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
        <div className="relative z-10 p-3">
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
        <div className="flex items-center justify-between px-5 py-3">
          {/* logo */}
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" className="w-[40px]" />
            <h1 className="ml-1 text-2xl font-bold">
              <span className="text-mainOrange">T</span>SHOP
            </h1>
          </div>
          {/* list */}
          <ul className="flex items-center justify-center gap-5">
            {list.map((item, index) => (
              <li
                key={index}
                className="relative cursor-pointer hover:underline decoration-2 decoration-mainOrange underline-offset-8"
                onClick={() => toggleSubList(item.name)}
              >
                {item.name}
                <FontAwesomeIcon
                  icon={isSubListOpen ? faAngleUp : faAngleDown}
                  className={`${
                    item.name === "所有商品" ? "inline-block ml-2" : "hidden"
                  }`}
                />
                {/* subList */}
                <ul
                  className={`${
                    isSubListOpen && item.name === "所有商品"
                      ? "block absolute left-0 w-full"
                      : "hidden"
                  }`}
                >
                  {subList.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="bg-white border-b border-gray-300 shadow-sm hover:text-mainOrange"
                    >
                      <p className="px-6 py-3">{subItem.name}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          {/* icons */}
          <ul className="flex items-center justify-center">
            <li>
              {icons.map((item, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={item.name}
                  size="lg"
                  className="p-2 ml-3 rounded-full cursor-pointer hover:bg-gray-200"
                />
              ))}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
