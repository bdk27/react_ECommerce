import { useState } from "react";
import logo from "@/assets/img/logo.png";

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
      name: "精選服飾",
    },
    {
      name: "流行女鞋",
    },
    {
      name: "經典香水",
    },
    {
      name: "品牌包款",
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
    if (name === "精選服飾") {
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
      <div className="lg:hidden">
        <div className="relative z-50">
          <div className="flex items-center justify-between p-3 bg-white shadow">
            {/* logo */}
            <div className="flex items-center justify-center">
              <img src={logo} alt="logo" className="w-[70px]" />
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
        <div
          className={`z-10 fixed inset-0 bg-white w-full left-0 top-0 overflow-hidden transition-all duration-500 ease-in-out ${
            isListOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="pt-16">
            <div className="relative">
              <input
                type="text"
                className="w-full p-2 pr-12 border outline-none"
                placeholder="搜尋"
              />
              <button className="absolute px-2 py-1 transform -translate-y-1/2 rounded right-2 top-1/2 text-mainBrown bg-mainBeige hover:bg-softGold">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              </button>
            </div>
            <ul>
              {list.map((item, index) => (
                <li key={index}>
                  <div
                    className="flex items-center justify-between p-3 border-b hover:text-mainOrange"
                    onClick={() => toggleSubList(item.name)}
                  >
                    <p>{item.name}</p>
                    <FontAwesomeIcon
                      icon={isSubListOpen ? faAngleUp : faAngleDown}
                      className={`${
                        item.name === "精選服飾" ? "block" : "hidden"
                      }`}
                    />
                  </div>

                  <ul
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      item.name === "精選服飾" ? "block" : "hidden"
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
        </div>
      </div>

      {/* 電腦版 */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between px-5 py-2 shadow">
          {/* list */}
          <ul className="flex items-center justify-center w-1/3 gap-5">
            {list.map((item, index) => (
              <li
                key={index}
                className="relative cursor-pointer"
                onClick={() => toggleSubList(item.name)}
              >
                {item.name}
                <FontAwesomeIcon
                  icon={isSubListOpen ? faAngleUp : faAngleDown}
                  className={`${
                    item.name === "精選服飾" ? "inline-block ml-1" : "hidden"
                  }`}
                />
                {/* subList */}
                <ul
                  className={`${
                    isSubListOpen && item.name === "精選服飾"
                      ? "block absolute left-0 w-full z-50"
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
          {/* logo */}
          <div className="flex items-center justify-center w-1/3 ">
            <img src={logo} alt="logo" className="w-[100px] cursor-pointer" />
          </div>
          {/* icons */}
          <ul className="flex items-center justify-center w-1/3 ">
            <div className="relative">
              <input
                type="text"
                className="w-[250px] p-2 pr-12 border rounded outline-none focus:border-mainBrown"
                placeholder="搜尋"
              />
              <button className="absolute px-2 py-1 transform -translate-y-1/2 rounded right-2 top-1/2 text-mainBrown bg-mainBeige hover:bg-softGold">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              </button>
            </div>
            <li>
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                className="p-2 ml-3 rounded-full cursor-pointer hover:bg-gray-200"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faBagShopping}
                size="lg"
                className="p-2 ml-3 rounded-full cursor-pointer hover:bg-gray-200"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
